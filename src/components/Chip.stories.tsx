import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chip } from './Chip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    color: {
      options: ['gray', 'blue', 'red', 'green'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const _Chip = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Chip.args = {
  label: 'in progress',
  color: 'blue',
};
