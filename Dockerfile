# Use an official Node.js runtime as the base image
FROM hub.hamdocker.ir/node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory (excluding the src directory)
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port your Next.js app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
