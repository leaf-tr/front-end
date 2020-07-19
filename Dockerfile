FROM node:8-alpine

# RUN mkdir -p /app
WORKDIR /app 

COPY package.json /app

RUN npm install

COPY . /app

# start app
CMD ["npm", "start"]
