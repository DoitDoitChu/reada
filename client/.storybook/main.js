module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        toDocgenLoaderOptions: {},
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-docs/react/preset',
      options: { configureJSX: true },
    },
  ],
};
