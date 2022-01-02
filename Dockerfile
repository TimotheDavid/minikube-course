FROM node:latest


WORKDIR /app

COPY package.json .
RUN npm install
RUN npm install -g typescript 

COPY . .

RUN npx prisma  generate 
RUN tsc 
EXPOSE 80

CMD ["npm", "run", "prod" ]