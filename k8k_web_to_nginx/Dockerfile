FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm install

CMD ["npm", "start"]

# docker build . -t k8s-web-to-nginx