import { Properties, Property } from "csstype"
import randomstring from "randomstring"
import { v4 as uuid } from "uuid"
import { TextTag, View } from "./types"

type TextModifiers = {
  "font-weight": Property.FontWeight
  "font-size": Property.FontSize
  "text-decoration": Property.TextDecoration
  "font-style": Property.FontStyle
  "line-height": Property.LineHeight
  color: Property.Color
}

// TODO: rework from func calling for each modifier, to apply func with object as arg
class _Text implements View {
  readonly uuid = uuid()
  readonly tag: TextTag
  readonly className: string

  modifiers = {
    base: {},
    hover: {},
  }

  value = ""

  constructor(value = "", inline = true) {
    this.value = value
    this.tag = inline ? "span" : "p"
    this.className = randomstring.generate({
      length: 12,
      charset: "alphabetic",
    })
  }

  style(modifiers: Partial<TextModifiers>) {
    this.modifiers.base = { ...this.modifiers.base, ...modifiers }
    return this
  }
  hover(modifiers: Partial<TextModifiers>) {
    this.modifiers.hover = { ...this.modifiers.hover, ...modifiers }
    return this
  }
}

export const Text = (value = "", inline = true) => new _Text(value, inline)
