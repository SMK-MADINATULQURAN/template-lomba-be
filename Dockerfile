FROM node:latest As development

LABEL maintainer="Ihsan <ihsanabuhanifah@smkmadinatulquran.sch.id>"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && rm -rf node_modules

FROM node:latest as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN groupadd -g 1001 nodejs && useradd -r nestjs -u 1001

WORKDIR /usr/src/app

COPY --chown=nestjs:nodejs package.json ./

RUN npm install --only=production

COPY --chown=nestjs:nodejs . .

COPY --from=development --chown=nestjs:nodejs /usr/src/app/dist ./dist

USER nestjs

EXPOSE 3007 4007

CMD ["node", "dist/main"]