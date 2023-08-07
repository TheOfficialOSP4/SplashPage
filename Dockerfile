# Use a lightweight image that can serve static content
FROM node:18.16 as build
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18.16
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build ./build
EXPOSE 8080
RUN npm install -g serve
CMD ["serve", "-s", "build", "-p", "8080"]