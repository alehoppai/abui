import randomstring from "randomstring"
import { View, BoxTag } from "./types"

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
  modifiers: Partial<BoxModifiers> = {}
  children: View[] = []
  tag: BoxTag = "div"
  className: string

  constructor(...children: View[]) {
    this.children = Array.from(children)
    this.className = randomstring.generate(7)
  }

  /** FIXME: little trick to not copy BOX and renaming to BODY */
  asBody() {
    this.tag = "body"
    return this
  }

  padding(dir = "all", value = 0, measures = "px") {
    switch (dir) {
      case "all":
      default:
        this.modifiers["padding"] = `${value}${measures}`
        break
      case "inline":
        this.modifiers["padding-inline"] = `${value}${measures}`
        break
      case "block":
        this.modifiers["padding-block"] = `${value}${measures}`
        break
      case "top":
        this.modifiers["padding-top"] = `${value}${measures}`
        break
      case "right":
        this.modifiers["padding-right"] = `${value}${measures}`
        break
      case "bottom":
        this.modifiers["padding-bottom"] = `${value}${measures}`
        break
      case "left":
        this.modifiers["padding-left"] = `${value}${measures}`
        break
    }

    return this
  }
}

export const Box = (...children: View[]) => new _Box(...children)
