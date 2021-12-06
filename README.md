

# Description

This repo is an example of setting up nx monorepo with Nestjs as backend, reactjs as web app and react-native app as mobile app.

Code sharing is demonstrated as;

1. ITodo interface is shared between all three apps (backend, reactjs and react-native) and is placed in libs folder as **shared-types**
2. useTodos custom hook is shared between reactjs and react-native and is placed in libs folder under **data-access**

As one the benifits of monorepo, all projects have single node_modules and piece of code or component is being shared among projects.

## How to install?
clone the repo and move to project folder and run below command.

```bash
npm i
```

## How to run apps?

Run below command in project root folder to spin the project you want to run.
### NestJs backend (api)

```bash
nest serve api
```

### React (webapp)
```bash
nest serve webapp
```

### React-Native (rnapp)
```bash
# spin metro bundler
nx start rnapp  

# spin ios simulator  
nx run-ios rnapp
```

**Let me know if this was helpful for you or you have any question. Happy coding** 🚀 
