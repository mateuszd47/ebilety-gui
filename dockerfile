FROM node:18.6

WORKDIR /ebilety-gui

COPY . ./

RUN npm install

ENV NODE_ENV=development

ENV PORT=5173

ENV FORCE_COLOR=1

EXPOSE 5173

CMD ["npm", "run", "dev"]