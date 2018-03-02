FROM node:9

EXPOSE 5000

ENV HOME=/home/app

ADD package.json $HOME/src/

WORKDIR $HOME/src

RUN npm install && \
  npm cache clean --force

ADD . $HOME/src

CMD ["npm", "start"]
