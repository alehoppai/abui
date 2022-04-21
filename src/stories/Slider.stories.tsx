
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Slider } from '../../src/components/Slider'
import { Size, Appearance } from '../enums'

export default {
  title: 'Slider',
  component: Slider,
  args: {
    label: 'Slider',
    size: Size.Large,
    appearance: Appearance.Primary,
    min: 0,
    max: 100,
    step: 10,
    value: 50,
  }
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Default = Template.bind({})

export const SliderLargePrimaryWithLabel = Template.bind({})
SliderLargePrimaryWithLabel.args = {
  label: 'Slider',
  size: Size.Large,
  appearance: Appearance.Primary,
}
export const SliderMediumPrimaryWithLabel = Template.bind({})
SliderMediumPrimaryWithLabel.args = {
  label: 'Slider',
  size: Size.Medium,
  appearance: Appearance.Primary,
}
export const SliderSmallPrimaryWithLabel = Template.bind({})
SliderSmallPrimaryWithLabel.args = {
  label: 'Slider',
  size: Size.Small,
  appearance: Appearance.Primary,
}
export const SliderLargeSecondaryWithLabel = Template.bind({})
SliderLargeSecondaryWithLabel.args = {
  label: 'Slider',
  size: Size.Large,
  appearance: Appearance.Secondary,
}
export const SliderMediumSecondaryWithLabel = Template.bind({})
SliderMediumSecondaryWithLabel.args = {
  label: 'Slider',
  size: Size.Medium,
  appearance: Appearance.Secondary,
}
export const SliderSmallSecondaryWithLabel = Template.bind({})
SliderSmallSecondaryWithLabel.args = {
  label: 'Slider',
  size: Size.Small,
  appearance: Appearance.Secondary,
}


export const SliderLargePrimaryWithoutLabel = Template.bind({})
SliderLargePrimaryWithoutLabel.args = {
  label: undefined,
  size: Size.Large,
  appearance: Appearance.Primary,
}
export const SliderMediumPrimaryWithoutLabel = Template.bind({})
SliderMediumPrimaryWithoutLabel.args = {
  label: undefined,
  size: Size.Medium,
  appearance: Appearance.Primary,
}
export const SliderSmallPrimaryWithoutLabel = Template.bind({})
SliderSmallPrimaryWithoutLabel.args = {
  label: undefined,
  size: Size.Small,
  appearance: Appearance.Primary,
}
export const SliderLargeSecondaryWithoutLabel = Template.bind({})
SliderLargeSecondaryWithoutLabel.args = {
  label: undefined,
  size: Size.Large,
  appearance: Appearance.Secondary,
}
export const SliderMediumSecondaryWithoutLabel = Template.bind({})
SliderMediumSecondaryWithoutLabel.args = {
  label: undefined,
  size: Size.Medium,
  appearance: Appearance.Secondary,
}
export const SliderSmallSecondaryWithoutLabel = Template.bind({})
SliderSmallSecondaryWithoutLabel.args = {
  label: undefined,
  size: Size.Small,
  appearance: Appearance.Secondary,
}
