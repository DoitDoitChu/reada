import React from 'react';
import MyComponent from './MyComponent';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  component: MyComponent,
  title: 'MyComponent',
  decorators: [withKnobs],
};

export const myComponent = () => (
  <MyComponent name="Storybook">{text('Label', 'Hello Storybook')}</MyComponent>
);

export const withAButton = () => (
  <button disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello button!')}
  </button>
);

myComponent.story = {
  name: 'Default',
};
