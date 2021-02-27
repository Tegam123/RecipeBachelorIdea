FROM node:lts


WORKDIR /app

RUN npm uninstall bcrypt
RUN npm install bcrypt

COPY package.json /app/package.json

RUN npm uninstall bcrypt
RUN npm install bcrypt

RUN npm install

COPY . /app
EXPOSE 8080

USER node

CMD ["npm", "start"]