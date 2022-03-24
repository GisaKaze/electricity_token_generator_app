FROM node:16-alpine
WORKDIR /usr/app
COPY ./package.json .
RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY /usr/app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD [ "npm", "start" ]