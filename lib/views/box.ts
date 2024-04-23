import randomstring from "randomstring"
import { View, BoxTag } from "./types"
import { Properties } from "csstype"

type BoxModifiers = {
  padding: string
  "padding-inline": string
  "padding-block": string
  "padding-top": string
  "padding-right": string
  "padding-bottom": string
  "padding-left": string
}

class _Box implements View {
  readonly className: string

  tag: BoxTag
  modifiers = { base: {}, hover: {} }

  children: View[] = []

  constructor(...children: View[]) {
    this.tag = "div"
    this.children = Array.from(children)
    this.className = randomstring.generate({
      length: 12,
      charset: "alphabetic",
    })
  }

  /** FIXME: little trick to not copy BOX and renaming to BODY */
  asBody() {
    this.tag = "body"
    return this
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
