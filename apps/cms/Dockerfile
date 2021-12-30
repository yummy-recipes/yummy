FROM node:14

ENV PORT=80 NODE_ENV=production
WORKDIR /usr/src/app
COPY ../../ ./

RUN yarn --version
RUN cat package.json
RUN yarn install --immutable --immutable-cache

WORKDIR /usr/src/app/apps/cms

EXPOSE 80
CMD [ "yarn", "start:prod" ]
