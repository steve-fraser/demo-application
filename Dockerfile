# The image is built on top of one that has node preinstalled
FROM node:12-alpine
# Create app directory

# Create app directory
WORKDIR /usr/src/app

COPY . .


RUN npm install


EXPOSE 3000
CMD [ "npm", "start" ]
