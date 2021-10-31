# Overview
This project uses Cucumber (BDD) and Page Object Design Pattern as structured below:
- **/integration**
    - Contains all feature files in the BDD format
- **/support/pages**
	- Classes that map the page locators and their actions
- **/support/steps**
	- Classes that maps the steps from the integration to their respective pages


## Project Setup
```
Clone this repository locally
npm install
```

## How to run it locally?
- Command line run
```
npx cypress run
```

- Interface/UI run
```
npx cypress open
```

## Percy Integration
- Add the PERCY_TOKEN to your environment
```
set PERCY_TOKEN=<YOUR_PROJECT_TOKEN_HERE>
```

- Run Cypress
```
npx percy exec -- cypress run
```

## How to create the Docker image and run it?
```
docker build -t cypress-image .
docker run cypress-image
```
