FROM node:12

ENV PORT=80 NODE_ENV=production
WORKDIR /usr/src/app
COPY ./yarn.lock ./yarnrc ./packages/cms/package.json ./

RUN yarn install

COPY ./packages/cms/ ./

EXPOSE 80
CMD [ "yarn", "start:prod" ]
