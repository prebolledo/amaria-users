FROM node:12

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install nodemon -g
RUN npm install

# Bundle app source
COPY . .

EXPOSE $PORT
CMD ["npm","start"]
