import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AddButton } from './AddButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Buttons',
  component: AddButton,
} as ComponentMeta<typeof AddButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddButton> = () => <AddButton />;

export const _AddButton = Template.bind({});
