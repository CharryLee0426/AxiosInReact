# Axios In React

This project is used to show axios's HTTP request capacity and how to intergrate axios, semanticui into react project. Axios is also one of my favorite news websites.

## How to Deploy

If you're interested in my demo project and want to learn some experience, you have two ways to build your own project.

### From Git

1. git clone;
2. enter to the folder and install all the dependencies

    ```bash
    npm install
    ```
3. start your app

    ```bash
    npm start
    ```

### From Scratch

1. install `create-react-app`;
2. create your react app

    ```bash
    npx create-react-app <yourappname>
    ```
3. enter your app, enter dependencies

    ```bash
    npm install axios
    ```

    ```bash
    npm install semantic-ui-react semantic-ui-css
    ```
4. import semantic-ui-css into your project

    ```js
    // index.js
    import 'semantic-ui-css/semantic.min.css'
    ```

5. change the demo page to semantic basic page

    1. remove all content in return of function app();
    2. remove App.css and logo.svg;
    3. remove their imports in app.js;
    4. build a very basic page using semantic ui components;