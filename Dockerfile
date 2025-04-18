FROM node:22.14.0-alpine3.20

WORKDIR /usr/src/app/to-be-strong
# Copy package.json package-lock.json
COPY ./to-be-strong/package*.json .

RUN ["npm", "install"]