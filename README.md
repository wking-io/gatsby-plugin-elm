# gatsby-plugin-elm

Provides compiler support for Elm in gatsby.

## Install

`npm install --save gatsby-plugin-elm`

## How to use

1.  Include the plugin in your `gatsby-config.js` file.
2.  Write your Elm files as normal and import the Main file as seen in this [example](https://github.com/elm-community/elm-webpack-loader/blob/master/example/src/index.js).

```javascript
// in gatsby-config.js
plugins: [`gatsby-plugin-elm`];
```

If you need to pass options to Elm use the plugins options, see [elm-webpack-loader](https://github.com/elm-community/elm-webpack-loader)
for all available options.

```javascript
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      forceWatch: true,
    },
  },
];
```

### Default Options For Develop and Build

Since Gatsby has clear development and production modes this plugin sets some default behaviors depending on which is running:

#### Default Develop Options

- `debug: true`
- `forceWatch: true`

#### Default Production Options

- `optimize: true`

**NOTE:** You can override either of these behaviors in the options object in your `gatsby-config.js`
