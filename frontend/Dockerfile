# Use Node.js as the base image
FROM  --platform=linux/amd64 node:18

# Set working directory
WORKDIR /my-workspace

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the frontend code
COPY . .

# Expose the port the React app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
