FROM node:latest
WORKDIR /app
ENV PORT=3000
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3000 
RUN chown -R node /app
USER node
CMD ["npm", "start"]