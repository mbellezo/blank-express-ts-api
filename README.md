# Blank Express Typescript API Project Configuration

Although it seems easy to bootstrap a project in typescript for Node, there are many steps to get ready starting code. So, I had the idea to create a repository to maintain a boilerplate project configured with the major libraries and types to jump-start an API project in Typescript with Express for Node.js.

> Project created by following section **Bootstrap a Node.js, Express, and TypeScript Project** of the tutorial from Auth0,
[Use TypeScript to Create a Secure API with Node.js and Express:](https://auth0.com/blog/use-typescript-to-create-a-secure-api-with-nodejs-and-express-getting-started/#Bootstrap-a-Node-js--Express--and-TypeScript-Project)
 ![Auth0](../media/assets/logos/auth0-logo-fordarkbg.svg)

## Motivation

During my journey of knowledge development, and while expanding my skills in writing APIs in Typescript, I had to overcome many online guides gaps. So I felt it was necessary to bring live a repository which beginners, or not so, could save some time and get a fast track to create their projects.

## Steps to recreate from scratch

```bash
# Creation of the project directory
mkdir blank-express-ts-api
cd blank-express-ts-api

# Node project initialization and dependencies installation
yarn init -y
yarn add express dotenv cors helmet morgan
yarn add -D typescript
yarn add -D @types/node @types/express @types/dotenv @types/cors @types/helmet
#
# Typescript initialization
yarn tsc --init
#
# Project environment file and global parameters configuration
touch .env
echo 'PORT=7000' > .env

#
# Webpack dependencies installation
#
yarn add -D ts-loader webpack webpack-cli webpack-node-externals
touch webpack.config.ts

mkdir src
touch ./src/index.ts
```

Update the file **webpack.config.ts** to append the source code below.

```javascript
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: ["webpack/hot/poll?100", "./src/index.ts"],
  watch: true,
  target: "node",
  externals: [
    nodeExternals({
      allowlist: ["webpack/hot/poll?100"]
    })
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  }
};
```

Update the file **package.json** to append the code below, right over the *"dependencies"* attribute.

```javascript
  "scripts": {
    "start": "node dist/index",
    "webpack": "webpack --config webpack.config.ts"
  },
```

## Starting the project

```bash
#
# In one console terminal invoke the webpack by running the command:

yarn run webpack

#
# In another console terminal, invoke start to run the bundle
 
yarn start
```

In the terminal, when you see the *"Listening on port 7000"* message, the server correctly configured to listen for requests on port 7000.

## Appending the project to GitHub

```bash
git init
touch .gitignore
echo 'node_modules' >> .gitignore
echo '.env' >> .gitignore
git add .
git commit -m "Blank Express Typescript Project Configuration"
git remote add origin <YOUR_REPOSITORY_GIT_URL>
git push -u origin master

```

## License

![License](https://img.shields.io/github/license/mbellezo/blank-express-ts-api?style=flat-square)
