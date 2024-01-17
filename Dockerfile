# Use an official Node.js runtime as a parent image
FROM node:14.16.0

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Define environment variables
ENV MONGO_DB_URI=mongodb://mongodb:27017/mydatabase
ENV NODE_ENV=production

# Start the application
CMD ["npm","run", "dev"]
