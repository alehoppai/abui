import randomstring from "randomstring"
import { View, BoxTag } from "./types"
import { Property } from "csstype"

export type BoxModifiers = {
  padding: Property.Padding
  "padding-inline": Property.PaddingInline
  "padding-block": Property.PaddingBlock
  "padding-top": Property.PaddingTop
  "padding-right": Property.PaddingRight
  "padding-bottom": Property.PaddingBottom
  "padding-left": Property.PaddingLeft
}

export class _Box implements View {
  readonly className: string

  tag: BoxTag = "div"
  modifiers = { base: {}, hover: {} }
  children: View[] = []

  constructor(...children: View[]) {
    this.children = Array.from(children)
    this.className = randomstring.generate({
      length: 12,
      charset: "alphabetic",
    })
  }

  as(as: BoxTag) {
    this.tag = as
  }

  style(modifiers: Partial<BoxModifiers>) {
    this.modifiers.base = { ...this.modifiers.base, ...modifiers }
    return this
  }
  hover(modifiers: Partial<BoxModifiers>) {
    this.modifiers.hover = { ...this.modifiers.hover, ...modifiers }
    return this
  }
}

export const Box = (...children: View[]) => new _Box(...children)
