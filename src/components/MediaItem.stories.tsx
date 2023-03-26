import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MediaItem } from './MediaItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kanban Board',
  component: MediaItem,
} as ComponentMeta<typeof MediaItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MediaItem> = (args) => (
  <MediaItem {...args} />
);

export const _MediaItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_MediaItem.args = {
  image:
    'https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg',
  title: 'Sponge Bob',
  backgroundColor: 'lightgray',
};
