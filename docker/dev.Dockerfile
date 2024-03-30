# build stage
FROM node:16.16.0-alpine as build-stage

WORKDIR /app

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com

RUN npm install

COPY ../server/docker .

RUN npm run db:generate

RUN npm run build


# production stage
FROM node:16.16.0-alpine as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json
COPY --from=build-stage /app/.env /app/.env

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com

RUN npm install --production

COPY --from=build-stage /app/node_modules/.prisma ./node_modules/.prisma

EXPOSE 3000

CMD [ "node", "/app/main.js" ]
