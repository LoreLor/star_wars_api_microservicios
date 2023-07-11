FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 8004

CMD ["npm", "start"]