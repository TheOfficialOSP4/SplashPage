# Use a lightweight image that can serve static content
# FROM node:18.16 as build
# WORKDIR /usr/src/app
# COPY package*.json .
# RUN npm install
# COPY . .
# RUN npm run build

# FROM node:18.16
# WORKDIR /usr/src/app
# COPY --from=build /usr/src/app/build ./build
# EXPOSE 8080
# RUN npm install -g serve
# CMD ["serve", "-s", "build", "-p", "8080"]

# FROM node:18.16
# WORKDIR /usr/src/app
# COPY . . 
# RUN npm install && npm run build 
# CMD ["npm", "run", "start"]
# EXPOSE 8080

# Use a lightweight image that can serve static content
# COPY package*.json ./
# RUN npm run build
# Install a lightweight HTTP server to serve the frontend
# RUN npm install -g serve
# Serve the production build on port 8080

# On node 18.16, create a working directory with all of the repo's files, run npm install, build, and serve
FROM node:18.16
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build && npm install -g serve
EXPOSE 8080
CMD ["npm", "run", "serve"]
# CMD ["serve", "-s", "build", "-p", "8080"]