FROM node:13-alpine

ENV PATH="/var/www/admin/node_modules/.bin:${PATH}"
ENV NODE_ENV development
ENV CI=true

RUN mkdir -p /var/www/admin \
  && chown -R node:node /var/www/admin

WORKDIR /var/www/admin

USER node:node

COPY package*.json yarn.lock ./
RUN yarn

# Bundle app source
COPY . .

ENV PORT 3000

EXPOSE 3000 3001

CMD [ "yarn", "start" ]
