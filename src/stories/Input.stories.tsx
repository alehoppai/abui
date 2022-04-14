import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '../../src/components/Input'
import { Size, Appearance, Variant } from '../enums'

export default {
  title: 'Input',
  component: Input,
  args: {
    size: Size.Large,
    variant: Variant.Filled,
    appearance: Appearance.Primary,
    value: '',
    placeholder: 'real name...',
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

export const LargeFilledInputWithLabel = Template.bind({})
LargeFilledInputWithLabel.args = {
  size: Size.Large,
  variant: Variant.Filled,
  label: 'Test Input',
}
export const MediumFilledInputWithLabel = Template.bind({})
MediumFilledInputWithLabel.args = {
  size: Size.Medium,
  variant: Variant.Filled,
  label: 'Test Input',
}
export const SmallFilledInputWithLabel = Template.bind({})
SmallFilledInputWithLabel.args = {
  size: Size.Small,
  variant: Variant.Filled,
  label: 'Test Input',
}
export const LargeFilledInputWithoutLabel = Template.bind({})
LargeFilledInputWithoutLabel.args = {
  size: Size.Large,
  variant: Variant.Filled,
}
export const MediumFilledInputWithoutLabel = Template.bind({})
MediumFilledInputWithoutLabel.args = {
  size: Size.Medium,
  variant: Variant.Filled,
}
export const SmallFilledInputWithoutLabel = Template.bind({})
SmallFilledInputWithoutLabel.args = {
  size: Size.Small,
  variant: Variant.Filled,
}

export const LargeOutlinedInputWithLabel = Template.bind({})
LargeOutlinedInputWithLabel.args = {
  size: Size.Large,
  variant: Variant.Outlined,
  label: 'Test Input',
}
export const MediumOutlinedInputWithLabel = Template.bind({})
MediumOutlinedInputWithLabel.args = {
  size: Size.Medium,
  variant: Variant.Outlined,
  label: 'Test Input',
}
export const SmallOutlinedInputWithLabel = Template.bind({})
SmallOutlinedInputWithLabel.args = {
  size: Size.Small,
  variant: Variant.Outlined,
  label: 'Test Input',
}
export const LargeOutlinedInputWithoutLabel = Template.bind({})
LargeOutlinedInputWithoutLabel.args = {
  size: Size.Large,
  variant: Variant.Outlined,
}
export const MediumOutlinedInputWithoutLabel = Template.bind({})
MediumOutlinedInputWithoutLabel.args = {
  size: Size.Medium,
  variant: Variant.Outlined,
}
export const SmallOutlinedInputWithoutLabel = Template.bind({})
SmallOutlinedInputWithoutLabel.args = {
  size: Size.Small,
  variant: Variant.Outlined,
}

export const LargeTextInputWithLabel = Template.bind({})
LargeTextInputWithLabel.args = {
  size: Size.Large,
  variant: Variant.Text,
  label: 'Test Input',
}
export const MediumTextInputWithLabel = Template.bind({})
MediumTextInputWithLabel.args = {
  size: Size.Medium,
  variant: Variant.Text,
  label: 'Test Input',
}
export const SmallTextInputWithLabel = Template.bind({})
SmallTextInputWithLabel.args = {
  size: Size.Small,
  variant: Variant.Text,
  label: 'Test Input',
}
export const LargeTextInputWithoutLabel = Template.bind({})
LargeTextInputWithoutLabel.args = {
  size: Size.Large,
  variant: Variant.Text,
}
export const MediumTextInputWithoutLabel = Template.bind({})
MediumTextInputWithoutLabel.args = {
  size: Size.Medium,
  variant: Variant.Text,
}
export const SmallTextInputWithoutLabel = Template.bind({})
SmallTextInputWithoutLabel.args = {
  size: Size.Small,
  variant: Variant.Text,
}
