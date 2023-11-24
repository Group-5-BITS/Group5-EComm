FROM node:16 as ui
WORKDIR /usr/src/ONDC
COPY client/ .
RUN npm install
RUN npm run dev build

FROM node:16 as server

# Create app directory
WORKDIR /root


# Install app dependencies
COPY package*.json ./

RUN npm install


RUN npm ci --only=production

# Bundle app source
COPY . .
COPY --from=ui /usr/src/ONDC/dist ./client/dist

EXPOSE 1123

RUN npm run build
CMD ["npm", "run", "start"]
