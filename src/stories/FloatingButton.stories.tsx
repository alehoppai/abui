import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  FloatingButton,
  FloatingButtonVariant,
} from '../../src/components/FloatingButton'
import { Size, Appearance } from '../enums'

export default {
  title: 'FloatingButton',
  component: FloatingButton,
  args: {
    size: Size.Large,
    variant: FloatingButtonVariant.Filled,
    appearance: Appearance.Primary,
    label: 'submit',
  }
} as ComponentMeta<typeof FloatingButton>

const Template: ComponentStory<typeof FloatingButton> = (args) =>
  <FloatingButton {...args} />

export const Default = Template.bind({})

export const FloatingButtonLargeFilledPrimary = Template.bind({})
FloatingButtonLargeFilledPrimary.args = {
  size: Size.Large,
  variant: FloatingButtonVariant.Filled,
  appearance: Appearance.Primary,
}

export const FloatingButtonLargeOutlinedPrimary = Template.bind({})
FloatingButtonLargeOutlinedPrimary.args = {
  size: Size.Large,
  variant: FloatingButtonVariant.Outlined,
  appearance: Appearance.Primary,
}


export const FloatingButtonMediumFilledPrimary = Template.bind({})
FloatingButtonMediumFilledPrimary.args = {
  size: Size.Medium,
  variant: FloatingButtonVariant.Filled,
  appearance: Appearance.Primary,
}

export const FloatingButtonMediumOutlinedPrimary = Template.bind({})
FloatingButtonMediumOutlinedPrimary.args = {
  size: Size.Medium,
  variant: FloatingButtonVariant.Outlined,
  appearance: Appearance.Primary,
}


export const FloatingButtonSmallFilledPrimary = Template.bind({})
FloatingButtonSmallFilledPrimary.args = {
  size: Size.Small,
  variant: FloatingButtonVariant.Filled,
  appearance: Appearance.Primary,
}

export const FloatingButtonSmallOutlinedPrimary = Template.bind({})
FloatingButtonSmallOutlinedPrimary.args = {
  size: Size.Small,
  variant: FloatingButtonVariant.Outlined,
  appearance: Appearance.Primary,
}


export const FloatingButtonLargeFilledSecondary = Template.bind({})
FloatingButtonLargeFilledSecondary.args = {
  size: Size.Large,
  variant: FloatingButtonVariant.Filled,
  appearance: Appearance.Secondary,
}

export const FloatingButtonLargeOutlinedSecondary = Template.bind({})
FloatingButtonLargeOutlinedSecondary.args = {
  size: Size.Large,
  variant: FloatingButtonVariant.Outlined,
  appearance: Appearance.Secondary,
}


export const FloatingButtonMediumFilledSecondary = Template.bind({})
FloatingButtonMediumFilledSecondary.args = {
  size: Size.Medium,
  variant: FloatingButtonVariant.Filled,
  appearance: Appearance.Secondary,
}

export const FloatingButtonMediumOutlinedSecondary = Template.bind({})
FloatingButtonMediumOutlinedSecondary.args = {
  size: Size.Medium,
  variant: FloatingButtonVariant.Outlined,
  appearance: Appearance.Secondary,
}


export const FloatingButtonSmallFilledSecondary = Template.bind({})
FloatingButtonSmallFilledSecondary.args = {
  size: Size.Small,
  variant: FloatingButtonVariant.Filled,
  appearance: Appearance.Secondary,
}

export const FloatingButtonSmallOutlinedSecondary = Template.bind({})
FloatingButtonSmallOutlinedSecondary.args = {
  size: Size.Small,
  variant: FloatingButtonVariant.Outlined,
  appearance: Appearance.Secondary,
}
