import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  RadioGroup,
  LabelPosition,
  ListDirection,
} from '../components/RadioGroup'

import {
  Size,
  Appearance,
} from '../enums'

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  args: {
    size: Size.Medium,
    appearance: Appearance.Primary,
    selectedOption: 1,
    options: [
      { value: 1, label: 'John', },
      { value: 2, label: 'Marry', },
      { value: 3, label: 'Union', },
      { value: 4, label: 'Divorce', },
      { value: 5, label: 'Marriage', },
      { value: 6, label: 'Forgot', },
    ],
  },
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) =>
  <RadioGroup {...args} />

export const Default = Template.bind({})

export const RadioGroupVerticalLabelLeft = Template.bind({})
RadioGroupVerticalLabelLeft.args = {
  title: 'RadioGroupVerticalLabelLeft',
  labelPosition: LabelPosition.Left,
  listDirection: ListDirection.Vertical,
}

export const RadioGroupVerticalLabelRight = Template.bind({})
RadioGroupVerticalLabelRight.args = {
  title: 'RadioGroupVerticalLabelRight',
  labelPosition: LabelPosition.Right,
  listDirection: ListDirection.Vertical,
}

export const RadioGroupHorizontalLabelLeft = Template.bind({})
RadioGroupHorizontalLabelLeft.args = {
  title: 'RadioGroupHorizontalLabelLeft',
  labelPosition: LabelPosition.Left,
  listDirection: ListDirection.Horizontal,
}

export const RadioGroupHorizontalLabelRight = Template.bind({})
RadioGroupHorizontalLabelRight.args = {
  title: 'RadioGroupHorizontalLabelRight',
  labelPosition: LabelPosition.Right,
  listDirection: ListDirection.Horizontal,
}
