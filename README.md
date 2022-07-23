# Getting started with TypeScript and Webpack 5

Webpack 5 brings along a lot of improvments. One of them is quick integration with TypeScript.
This repository aims to provide a boilerplate code for developers looking to get started with
TypeScript for front end development.

This repository requires docker for compiling and executing the code.

### Getting started

#1 Clone the repository on your local machine - `git clone https://github.com/vishalraj82/typescript-webpack5`

#2 Move inside the repository - `cd typescript-webpack5`

#3 Compile the Typescript code using docker - `docker compose -f docker/docker-compose.yml up`

Since we need a server to serve the generated code, hence here we are utilizing the nginx docker image to server the compiled contents. By default the port 80 on host machine is mapped to port 80 of the nginx container. In order to change this, please edit the file `docker/docker-compose.yml`.

Lets try to understand the npm packages from the file `package.json`

- [@types/react](https://npmjs.com/package/@types/react) - TypeScript type definitions for React
- [@types/react-dom](https://npmjs.com/package/@types/react-dom) - TypeScript type defintions for React DOM
- [@types/webpack](https://npmjs.com/package/@types/webpack) - Typescript type defintions for Webpack
- [css-loader](https://npmjs.com/package/css-loader) - The css-loader interprets @import and url() like import/require() and will resolve them.
- ['html-webpack-plugin](https://npmjs.com/package/html-webpack-plugin) - Plugin that simplifies creation of HTML files to serve your bundles
- [mini-css-extract-plugin](https://npmjs.com/package/mini-css-extract-plugin) - This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps. It builds on top of a new webpack v5 feature and requires webpack 5 to work.
- [react](https://npmjs.com/package/react) - React is a JavaScript library for creating user interfaces.
The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.
- [react-dom](https://npmjs.com/package/react-dom) - This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.
- [sass](https://npmjs.com/package.sass) - A pure JavaScript implementation of Sass
- [sass-loader](https://npmjs.com/package/sass-loader) - Loads a Sass/SCSS file and compiles it to CSS.
- [ts-loader](https://npmjs.com/package/ts-loader) - This is the TypeScript loader for webpack.
- [ts-node](https://npmjs.com/package/ts-node) - TypeScript execution and REPL for node.js, with source map and native ESM support.
- [typescript](https://npmjs.com/package/typescript) - TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
- [webpack](https://npmjs.com/package/webpack) - Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
- [webpack-cli](https://npmjs.com/package/webpack-cli) - webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project. As of webpack v4, webpack is not expecting a configuration file, but often developers want to create a more custom webpack configuration based on their use-cases and needs. webpack CLI addresses these needs by providing a set of tools to improve the setup of custom webpack configuration.