exports.onCreateWebpackConfig = (
  { actions, stage },
  { plugins, ...elmOptions }
) => {
  const { setWebpackConfig } = actions;
  const isDev = stage === `develop`;

  const elmLoader = {
    loader: require.resolve('elm-webpack-loader'),
    options: {
      debug: isDev,
      forceWatch: !isDev,
      optimize: !isDev,
      ...elmOptions,
    },
  };

  const elmHotLoader = {
    loader: require.resolve('elm-hot-webpack-loader'),
  };

  const elmRule = isDev => ({
    test: /\.elm$/,
    exclude: [/[/\\\\]elm-stuff[/\\\\]/, /[/\\\\]node_modules[/\\\\]/],
    use: [...(isDev ? [elmHotLoader] : []), elmLoader],
  });

  setWebpackConfig({
    module: {
      rules: [elmRule(isDev)],
    },
  });
};
