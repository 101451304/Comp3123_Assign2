FROM node:16

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENV MONGO_URI=mongodb://mongo:27017/employee_db
ENV JWT_SECRET=yourjwtsecret

CMD ["node", "server.js"]
