FROM node:22.14-alpine AS build

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm ci --omit=dev

###

FROM node:22.14-alpine

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/static ./static

EXPOSE 3000
CMD ["node", "build/index.js"]
