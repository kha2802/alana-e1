# Sử dụng Node.js LTS
FROM node:18-alpine AS builder

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json để cài đặt dependencies trước
COPY package.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Chạy server ở chế độ production
CMD ["npm", "run", "start"]
