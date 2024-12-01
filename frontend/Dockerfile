# Use the official Node.js image to build the React app
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose the frontend port (default is 3000)
EXPOSE 3000

# Serve the React app using a simple HTTP server
CMD ["npx", "serve", "build"]
