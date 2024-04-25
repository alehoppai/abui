import { View } from "./types"
import { _Box, BoxModifiers } from "./box"

type BodyModifiers = BoxModifiers & {}

class _Body extends _Box implements View {
  modifiers = { base: {}, hover: {} }
  // children: View[] = []

  constructor(...children: View[]) {
    console.log('IN_BODY', children)
    super(...children)
    super.as("body")
  }

  style(modifiers: Partial<BodyModifiers>) {
    this.modifiers.base = { ...this.modifiers.base, ...modifiers }
    return this
  }
  hover(modifiers: Partial<BodyModifiers>) {
    this.modifiers.hover = { ...this.modifiers.hover, ...modifiers }
    return this
  }
}

export const Body = (...children: View[]) => new _Body(...children)
