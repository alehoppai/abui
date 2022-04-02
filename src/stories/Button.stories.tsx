import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Button,
  Size,
  Variant,
  Appearance,
} from '../../src/components/Button';

export default {
  size: Size.Medium,
  variant: Variant.Text,
  appearance: Appearance.Primary,
  label: 'submit',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonWithOptions = Template.bind({});

