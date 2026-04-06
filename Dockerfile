FROM node:18-slim
WORKDIR /app
COPY package*.json ./FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (no lockfile needed)
RUN npm install

# Copy all files
COPY . .

# Expose port (if needed)
EXPOSE 3000

# Start bot
CMD ["node", "index.js"]
RUN npm install --no-package-lock
COPY . .
CMD ["node", "index.js"]
