import { Property } from "csstype"
import randomstring from "randomstring"
import { TextTag, View } from "./types"

type TextModifiers = {
  "font-weight": Property.FontWeight
  "font-size": Property.FontSize
  "text-decoration": Property.TextDecoration
  "font-style": Property.FontStyle
  "line-height": Property.LineHeight
  color: Property.Color
}

class _Text implements View {
  modifiers: Partial<TextModifiers> = {}
  value = ""
  tag: TextTag = "span"
  className: string

  constructor(value = "", inline = true) {
    this.value = value
    this.tag = inline ? "span" : "p"
    this.className = randomstring.generate(7)

    return this
  }

  fontWeight(weight: TextModifiers["font-weight"]) {
    this.modifiers["font-weight"] = weight
    return this
  }
  fontSize(size: TextModifiers["font-size"]) {
    this.modifiers["font-size"] = size
    return this
  }
  textDecoration(decoration: TextModifiers["text-decoration"]) {
    this.modifiers["text-decoration"] = decoration
    return this
  }
  fontStyle(style: TextModifiers["font-style"]) {
    this.modifiers["font-style"] = style
    return this
  }
  lineHeight(lineHeight: TextModifiers["line-height"]) {
    this.modifiers["line-height"] = lineHeight
    return this
  }
  color(color: TextModifiers["color"]) {
    this.modifiers["color"] = color
    return this
  }
}

export const Text = (value = "", inline = true) => new _Text(value, inline)
