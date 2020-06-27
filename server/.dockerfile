FROM node

WORKDIR /usr/src
COPY . .
RUN npm install

EXPOSE 8080

CMD npm start