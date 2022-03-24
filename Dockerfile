# Setup and build the frontend

FROM node:16

WORKDIR /usr/app/frontend/

COPY frontend/package*.json ./

RUN npm install 

COPY frontend/ ./

RUN npm run build


# Setup the frontend

FROM node:16

WORKDIR /usr/app/backend/

COPY backend/package*.json ./

RUN npm install 

COPY backend/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]