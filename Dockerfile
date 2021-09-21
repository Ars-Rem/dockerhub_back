FROM node:14
RUN mkdir -p /usr/share/nginx/html/back
WORKDIR /usr/share/nginx/html/back
COPY ./  /usr/share/nginx/html/back
EXPOSE 81
#RUN cat /etc/hosts

#RUN node app.js
#CMD ["node", "app.js"]
#RUN npm install
#RUN npm install pm2@latest -g
#RUN pm2 -f start app.js
CMD ["node", "app.js"]
