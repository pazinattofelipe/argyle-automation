## Overview
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
Run npm install
```

## How to run it locally?
```
npx cypress run
```

## How to create the Docker image and run it?
```
docker build -t cypress-image .
docker run cypress-image
```
