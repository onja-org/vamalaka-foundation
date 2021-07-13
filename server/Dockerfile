FROM node:14-alpine
WORKDIR /app
RUN mkdir images
COPY . .
RUN npm install
EXPOSE 4000
CMD [ "npm", "run", "start.dev" ]