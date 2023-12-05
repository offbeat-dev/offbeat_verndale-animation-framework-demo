import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/templates/home-page.hbs';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export type HomepageProps = unknown;

// This default export determines where your story goes in the story list
// and the UI controls for the arguments that are passed to the template
const meta: Meta<HomepageProps> = {
  title: 'Templates/Home Page',

  render: template,
  argTypes: {}
};

export default meta;
type Story = StoryObj<HomepageProps>;

export const HomePage: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
};
