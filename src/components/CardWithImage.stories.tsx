import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardWithImage } from './CardWithImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kanban Board',
  component: CardWithImage,
} as ComponentMeta<typeof CardWithImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardWithImage> = (args) => (
  <CardWithImage {...args} />
);

export const _CardWithImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_CardWithImage.args = {
  image:
    'https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg',
  title: 'Sponge Bob',
  backgroundColor: 'lightgray',
};
