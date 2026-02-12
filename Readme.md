# React + Sanity Portfolio Website

[Live link to my portfolio](https://putera-nik.netlify.app/)

### Dependencies
- yarn
- node 18.15+

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

Fill up the details accordingly. 

Go to the root directory of this project with a command prompt and run
```
yarn install
```
to install all the project dependencies.


### Running the project
From the root folder, run:
```
yarn start
```

The React frontend app will open in a browser on [http://localhost:3000](http://localhost:3000)
Sanity backend will be available at [http://localhost:3333](http://localhost:3333).

To edit items in sanity, go to [http://localhost:3333/sanity](http://localhost:3333/sanity) that is connected via .env file.

## Deployment to Netlify
You can deploy to netlify by going into the frontend folder and doing a 
```
yarn build
```
and dragging and dropping the build folder generated over to netlify. 

You can also alternatively link the github repository on netlify and publish from there. 

Remember to set 
```
CI='' yarn build
```
in the build commands so as not to get a build error.

## Contact
For any issues and feedbacks, please contact me via my github email. You may also create a pull request.