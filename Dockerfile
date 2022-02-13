FROM node:16-alpine3.11

ENV NODE_ENV=production
COPY . /app
WORKDIR /app
RUN yarn install --immutable-cache --immutable

ENTRYPOINT ["yarn"]
CMD ["workspace", "cms", "start:prod"]
