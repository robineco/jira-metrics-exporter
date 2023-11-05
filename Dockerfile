FROM node:lts-alpine

WORKDIR /app


COPY package*.json ./
RUN npm install

COPY dist/ /app/dist/

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
