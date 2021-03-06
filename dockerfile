FROM cypress/browsers:node14.17.0-chrome91-ff89

RUN mkdir /test-automation-project
WORKDIR /test-automation-project

COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT [ "npx", "cypress", "run" ]
CMD [""]