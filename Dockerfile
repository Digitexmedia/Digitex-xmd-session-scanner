# Use an official Node.js runtime
FROM node:18

# Create and set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Copy app source
COPY . .

# Expose your server port (change 3000 if you're using another)
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
