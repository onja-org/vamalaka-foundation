FROM node:14-alpine
WORKDIR  /app
COPY package.json /app/package.json
RUN mkdir images
RUN npm install

# install application
COPY . /app
EXPOSE 4000
CMD [ "npm", "run", "start.dev" ]