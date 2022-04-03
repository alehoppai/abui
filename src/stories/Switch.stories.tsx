import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Switch } from '../../src/components/Switch'
import {
  Size,
  Appearance,
} from '../enums'

export default {
  size: Size.Medium,
  appearance: Appearance.Primary,
  active: false,
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const SwitchWithOptions = Template.bind({})

