FROM node:14
RUN mkdir -p /usr/share/nginx/html/back
WORKDIR /usr/share/nginx/html/back
COPY ./  /usr/share/nginx/html/back
RUN npm install
RUN npm install pm2@latest -g


EXPOSE 4735

#RUN node app.js
CMD ["pm2", "app.js"]
#CMD ["node"]

#RUN pm2 -f start app.js

