FROM node:18.20.5-alpine3.21

WORKDIR /app/

COPY package* /app/

RUN npm install --save-prod
RUN npm rebuild @tensorflow/tfjs-node --build-addon-from-source

COPY src/ /app/src/

EXPOSE 8000

ENV APP_PORT=8000
ENV MODEL_URL=

CMD [ "node", "/app/src/index.js" ]