# Use Node.js as the base image
FROM  --platform=linux/amd64 node:18

# Set working directory
WORKDIR /my-workspace

# Copy package files
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port the backend runs on
EXPOSE 4000

# Start the server
CMD ["npm", "start"]
