class _Box {
  modifiers = {}
  children = []

  constructor(...children) {
    this.children = Array.from(children)
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

const Box = (...children) => new _Box(...children)

module.exports = Box
