FROM node:latest


WORKDIR /app

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 4242

CMD ["npm", "start" ]