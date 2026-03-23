/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['22780777990','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU246jOBD9F78mmnDJFamlIdwCJARyJ6t5MMEQAwFiGxIyyr+P6J6enpV2Z3vfTNmcOlXnVH0HeYEpslEDpO+gJLiGDLVH1pQISGBaRREioAtCyCCQwHDuUDaBiYxPU/RgtyUzJv50mVmBPx6jGTmvRarn/EXO0hfw7IKyCjJ8+gPgAh+dutKG6iOYHUR3UnON5SQsDHs0WZb6bNDZDIuA9LWt9gKeLSLEBOexVp7RBRGY2ahxISafo1/Is0DVdXHX4S1/dLNNMZ/xwT7p+5RaTtkh6mCBPFrFnPY5+nDhOygTC2+WhLI7T7zac6rNRD/VyaDKfH01xXSa7rUOn77RpzjOUWiGKGeYNZ/u+9JKXCNzo0h0VjtDmWbHw7YXrm2O6yXDBT74ziYLH9dblfU/R7zH5UGl2qV27ew0/qrZ6sFfhlngRD6LRX6xFm+ZfeqMe38n7pJ3r6T/p+9bdSnPer4eRPK9v9Ijruct4tGMM/MxlqluPHq2rcbOsDrQz9F3PLfYlaPjandw5qud73BG9hjM54fRzl/K+W3UHJPLhDMenP9BH7KK/IlldelbJkvUvZNqhagGIs5YZNRpWZhzzJowGPfTVa/vX/f82Z8OenC1OHpOZdM4O4WZwO8TNz+I6/tZN6o8PoswfMwT7+W1ohQ1Zggk/tkFBMWYMgIZLvI2NuS6AIb1Gp0IYq/dBUGPyek+3e1u2nhhHGd2OtU7Wj+0LC7Ci7q5Lr1q4Wd17RQvoAtKUpwQpSicYcoK0iwQpTBGFEh/feuCHN3Zm25tNpHvgggTyrZ5VWYFDN9Ffb+Ep1NR5Wzd5CelPSACJO4jjBjDeUzbNlY5JKczrpFyhowCKYIZRb8KRASFQGKkQr+GVinCtu/+Wt8PZ30VdMHlVQ8cAgkIwmjMjUajyYSThK/0y60FhWX5JUcMdEEO27fgAiPQBdnrH/x4IIx5YTgQRUEcTSThaxt//uLaQoeIQZxRIAHFTEhFTEVz1zSmfcOQtVhWYhl81PbukTcRPNd1b2xztY7rbLLAvctJ7usGvtRlBK/6uh9vkGowhVHDe/kHkHY71Jm850M9l+fIG/D2MJrmeze8+7e56UWd5Snu3BXa0QeBON92VoIiyoq2K0e8Y3qHsSUfedsTsos/57LgTsaJbzea2hqqC0JU4xP6PdldTIP+0krPMrcUFXM7GquWjdN0ugk4TpGbxIyCrXtmEe94V1vpHAp/vdDdZt1xhgPLE2xirYXOsPGXKtIMd3Nn800iv7n3dXqyn1sLvxqrVa39jDB6XQI/9fkPFd9ot1bjnt3fEH4ulX8ZzOlWfTzG8+0Q77dltDHrQS4vp6uiJMODcD1vK1MT4zvxSDBNwfP5rQvKDLKoIBcgAXoJIOgCUlStcc08Kv6QSZFjU/XidVt0BimTP4Zhgy+IMngpgcSPRn1BmPC8+PbKJUU5g/QMJCDG7tZKwfMHscnwlVkHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
