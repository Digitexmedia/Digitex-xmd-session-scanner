# Use an official Node.js runtime
FROM node:18

# Create and set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy app source
COPY . .

# Expose your server port (change 3000 if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
