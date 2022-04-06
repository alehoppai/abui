import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../../src/components/Button'
import { Size, Appearance, Variant } from '../enums'

export default {
  title: 'Button',
  component: Button,
  args: {
    size: Size.Large,
    variant: Variant.Filled,
    appearance: Appearance.Primary,
    label: 'submit',
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

export const ButtonLargeFilledPrimary = Template.bind({})
ButtonLargeFilledPrimary.args = {
  size: Size.Large,
  variant: Variant.Filled,
  appearance: Appearance.Primary,
}

export const ButtonLargeOutlinedPrimary = Template.bind({})
ButtonLargeOutlinedPrimary.args = {
  size: Size.Large,
  variant: Variant.Outlined,
  appearance: Appearance.Primary,
}

export const ButtonLargeTextPrimary = Template.bind({})
ButtonLargeTextPrimary.args = {
  size: Size.Large,
  variant: Variant.Text,
  appearance: Appearance.Primary,
}


export const ButtonMediumFilledPrimary = Template.bind({})
ButtonMediumFilledPrimary.args = {
  size: Size.Medium,
  variant: Variant.Filled,
  appearance: Appearance.Primary,
}

export const ButtonMediumOutlinedPrimary = Template.bind({})
ButtonMediumOutlinedPrimary.args = {
  size: Size.Medium,
  variant: Variant.Outlined,
  appearance: Appearance.Primary,
}

export const ButtonMediumTextPrimary = Template.bind({})
ButtonMediumTextPrimary.args = {
  size: Size.Medium,
  variant: Variant.Text,
  appearance: Appearance.Primary,
}


export const ButtonSmallFilledPrimary = Template.bind({})
ButtonSmallFilledPrimary.args = {
  size: Size.Small,
  variant: Variant.Filled,
  appearance: Appearance.Primary,
}

export const ButtonSmallOutlinedPrimary = Template.bind({})
ButtonSmallOutlinedPrimary.args = {
  size: Size.Small,
  variant: Variant.Outlined,
  appearance: Appearance.Primary,
}

export const ButtonSmallTextPrimary = Template.bind({})
ButtonSmallTextPrimary.args = {
  size: Size.Small,
  variant: Variant.Text,
  appearance: Appearance.Primary,
}


export const ButtonLargeFilledSecondary = Template.bind({})
ButtonLargeFilledSecondary.args = {
  size: Size.Large,
  variant: Variant.Filled,
  appearance: Appearance.Secondary,
}

export const ButtonLargeOutlinedSecondary = Template.bind({})
ButtonLargeOutlinedSecondary.args = {
  size: Size.Large,
  variant: Variant.Outlined,
  appearance: Appearance.Secondary,
}

export const ButtonLargeTextSecondary = Template.bind({})
ButtonLargeTextSecondary.args = {
  size: Size.Large,
  variant: Variant.Text,
  appearance: Appearance.Secondary,
}


export const ButtonMediumFilledSecondary = Template.bind({})
ButtonMediumFilledSecondary.args = {
  size: Size.Medium,
  variant: Variant.Filled,
  appearance: Appearance.Secondary,
}

export const ButtonMediumOutlinedSecondary = Template.bind({})
ButtonMediumOutlinedSecondary.args = {
  size: Size.Medium,
  variant: Variant.Outlined,
  appearance: Appearance.Secondary,
}

export const ButtonMediumTextSecondary = Template.bind({})
ButtonMediumTextSecondary.args = {
  size: Size.Medium,
  variant: Variant.Text,
  appearance: Appearance.Secondary,
}


export const ButtonSmallFilledSecondary = Template.bind({})
ButtonSmallFilledSecondary.args = {
  size: Size.Small,
  variant: Variant.Filled,
  appearance: Appearance.Secondary,
}

export const ButtonSmallOutlinedSecondary = Template.bind({})
ButtonSmallOutlinedSecondary.args = {
  size: Size.Small,
  variant: Variant.Outlined,
  appearance: Appearance.Primary,
}

export const ButtonSmallTextSecondary = Template.bind({})
ButtonSmallTextSecondary.args = {
  size: Size.Small,
  variant: Variant.Text,
  appearance: Appearance.Secondary,
}