# Use an official Node.js runtime
FROM node:18

# Create and set working directory
WORKDIR /app

# Copy package.json and package-lock.json (generate package-lock.json locally if not already present)
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy app source
COPY . .

# Expose your server port (change 3000 if you're using another)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
