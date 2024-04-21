class _Text {
  modifiers = {};
  value = "";
  inline = "span";

  constructor(value = "", inline = true) {
    this.value = value;
    this.tag = inline ? "span" : "p";

    return this;
  }

  fontWeight(weight) {
    this.modifiers["font-weight"] = weight;
    return this;
  }
  fontSize(size) {
    this.modifiers["font-size"] = size;
    return this;
  }
  textDecoration(decoration) {
    this.modifiers["text-decoration"] = decoration;
    return this;
  }
  fontStyle(style) {
    this.modifiers["font-style"] = style;
    return this;
  }
  lineHeight(lineHeight) {
    this.modifiers["line-height"] = lineHeight;
    return this;
  }
  color(color) {
    this.modifiers["color"] = color;
    return this;
  }
}

const Text = (value = "", inline = true) => new _Text(value, inline);

module.exports = Text;
