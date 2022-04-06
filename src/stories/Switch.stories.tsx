import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Switch } from '../../src/components/Switch'
import {
  Size,
  Appearance,
} from '../enums'

export default {
  title: 'Switch',
  component: Switch,
  args: {
    size: Size.Medium,
    appearance: Appearance.Primary,
    active: false,
  },
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Default = Template.bind({})

export const SwitchLargePrimaryActive = Template.bind({})
SwitchLargePrimaryActive.args = {
  size: Size.Large,
  appearance: Appearance.Primary,
  active: true,
}

export const SwitchLargePrimaryDisabled = Template.bind({})
SwitchLargePrimaryDisabled.args = {
  size: Size.Large,
  appearance: Appearance.Primary,
  active: false,
}

export const SwitchMediumPrimaryActive = Template.bind({})
SwitchMediumPrimaryActive.args = {
  size: Size.Medium,
  appearance: Appearance.Primary,
  active: true,
}

export const SwitchMediumPrimaryDisabled = Template.bind({})
SwitchMediumPrimaryDisabled.args = {
  size: Size.Medium,
  appearance: Appearance.Primary,
  active: false,
}

export const SwitchSmallPrimaryActive = Template.bind({})
SwitchSmallPrimaryActive.args = {
  size: Size.Small,
  appearance: Appearance.Primary,
  active: true,
}

export const SwitchSmallPrimaryDisabled = Template.bind({})
SwitchSmallPrimaryDisabled.args = {
  size: Size.Small,
  appearance: Appearance.Primary,
  active: false,
}


export const SwitchLargeSecondaryActive = Template.bind({})
SwitchLargeSecondaryActive.args = {
  size: Size.Large,
  appearance: Appearance.Secondary,
  active: true,
}

export const SwitchLargeSecondaryDisabled = Template.bind({})
SwitchLargeSecondaryDisabled.args = {
  size: Size.Large,
  appearance: Appearance.Secondary,
  active: false,
}

export const SwitchMediumSecondaryActive = Template.bind({})
SwitchMediumSecondaryActive.args = {
  size: Size.Medium,
  appearance: Appearance.Secondary,
  active: true,
}

export const SwitchMediumSecondaryDisabled = Template.bind({})
SwitchMediumSecondaryDisabled.args = {
  size: Size.Medium,
  appearance: Appearance.Secondary,
  active: false,
}

export const SwitchSmallSecondaryActive = Template.bind({})
SwitchSmallSecondaryActive.args = {
  size: Size.Small,
  appearance: Appearance.Secondary,
  active: true,
}

export const SwitchSmallSecondaryDisabled = Template.bind({})
SwitchSmallSecondaryDisabled.args = {
  size: Size.Small,
  appearance: Appearance.Secondary,
  active: false,
}