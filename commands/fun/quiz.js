const fs = require('fs');
const { prepareWAMessageMedia } = require('@whiskeysockets/baileys');

async function sendQuiz(sock, jid) {
  try {
    // --- Quiz question ---
    const question = 'What is the capital of India?\n\nA) Delhi\nB) Mumbai\nC) Kolkata\nD) Chennai';
    
    // Agar aap media bhejna chahte hain
    const imagePath = './path/to/image.jpg'; // Sahi file path daalein
    if (!fs.existsSync(imagePath)) {
      await sock.sendMessage(jid, { text: question }); // Sirf text bheje agar image nahi hai
      return;
    }
    
    // Media file read karo aur MIME type sahi define karo
    const mediaBuffer = fs.readFileSync(imagePath);
    const mediaType = 'image/jpeg'; // image/png bhi ho sakta hai

    // prepareWAMessageMedia se media bana lo
    const mediaMsg = await prepareWAMessageMedia(
      { image: mediaBuffer, mimetype: mediaType },
      { upload: sock.waUploadToServer }
    );

    // Media ke saath quiz bheje
    await sock.sendMessage(jid, {
      image: mediaBuffer,
      mimetype: mediaType,
      caption: question
    });

    console.log('Quiz sent successfully!');
  } catch (err) {
    console.error('Quiz send error:', err);
    await sock.sendMessage(jid, { text: 'Quiz bhejne mein error aa gaya: ' + err.message });
  }
}

// Sample Baileys event: message handler
module.exports = {
  name: 'quiz',
  description: 'Send a quiz with image and proper MIME type',
  async execute(sock, msg) {
    const jid = msg.key.remoteJid;
    await sendQuiz(sock, jid);
  }
};
