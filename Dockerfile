FROM node:16 as ui
WORKDIR /usr/src/group5
COPY client/ .
COPY secrets/ .
RUN npm install
RUN npm run build

FROM node:18 as server

# Create app directory
WORKDIR /root


# Install app dependencies
COPY package*.json ./

RUN npm install


RUN npm ci --only=production

# Bundle app source
COPY . .
COPY --from=ui /usr/src/group5/dist ./client/dist

EXPOSE 5173

RUN npm run build
CMD ["npm", "run", "start"]
