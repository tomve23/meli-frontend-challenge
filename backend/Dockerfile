FROM node:20-alpine

ARG MELI_ACCESS_TOKEN
ARG PORT

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 9080
ENV HOST=0.0.0.0
ENV PORT=9080

CMD ["npm", "run","dev"]