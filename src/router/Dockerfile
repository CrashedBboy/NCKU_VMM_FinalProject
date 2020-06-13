FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available
COPY package*.json ./

# install all node dependent packages (e.g. express)
RUN npm install

# Bundle app source code
COPY . .

EXPOSE 8080

# run the server
CMD [ "node", "server.js" ]