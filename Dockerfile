FROM node:23.6.0-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

#RUN npx prisma generate
#
#
#
#COPY . .
#
#RUN npx prisma db push


EXPOSE 3000
CMD ["yarn", "dev"]