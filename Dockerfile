FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --no-package-lock
COPY . .
CMD ["node", "index.js"]
