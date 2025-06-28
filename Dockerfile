FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env .env

# Compile TypeScript into JS
# Compile and print the contents of dist folder clearly
RUN npm run build && echo "=== DIST CONTENTS ===" && ls -la dist && echo "=== END ==="



# Start compiled app
CMD ["node", "dist/index.js"]

