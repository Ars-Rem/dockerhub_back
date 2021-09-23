FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g npm@latest

COPY . .

EXPOSE 4735

CMD [ "node", "app.js" ]

