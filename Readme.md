# React + Sanity Portfolio Website


## Prerequisites
- NodeJS

## Getting Started
Install sanity CLI globally
```
yarn global add @sanity/cli
```

Create the following .env files with the specified properties from sanity dashboard in the root directory of frontend_react:
```
REACT_APP_PROJECTID=
REACT_APP_DATASET=production  
REACT_APP_APIVERSION=2022-02-01
REACT_APP_USECDN=true
REACT_APP_TOKEN=
```

Go to the root directory of this project with a command prompt and run
```
yarn install
```

Repeat the process for both frontend_react and backend_sanity directory to install the dependencies.

Go to the root of this project again and run
```
yarn start
```

The React frontend app will open in a browser on [http://localhost:3000](http://localhost:3000) and Sanity backend will be available at [http://localhost:3333](http://localhost:3333).


## Deployment
You can deploy to netlify by going into the frontend folder and doing a 
```
yarn build
```
and dragging and dropping the build folder generated over to netlify. 

You can also alternatively link the github repository on netlify and publishing from there. 

Remember to set 
```
CI='' yarn build
```
in the build commands so as not to get a build error.

## Contact
For any issues and feedbacks, please contact me via my github email. You may also create a pull request.