FROM node:20-alpine

ARG VITE_API_URL

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 9081
ENV HOST=0.0.0.0
ENV PORT=9081

CMD ["npm", "run","dev"]