# Pull official base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install git and other dependencies
RUN apk update && \
    apk add git && \
    rm -rf /var/cache/apk/*

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --force

# Add app
COPY . ./

# Copy start script and grant execution permissions
COPY start.sh .
RUN chmod +x start.sh

# Start app
CMD ["./start.sh"]