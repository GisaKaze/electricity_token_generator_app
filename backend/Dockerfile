FROM node:16-alpine
WORKDIR /usr/app
COPY ./package.json .
RUN yarn install

COPY . .

RUN yarn run build
EXPOSE 8001

CMD [ "yarn", "dev" ]