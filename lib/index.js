const Text = require("./views/text/text")
const Box = require("./views/box/box")

const box = Box(
  Box(
    Text("Hello,").fontStyle("italic").fontWeight("bold").fontSize("30px"),
    Text(" World!").color("red").fontSize("20px")
  ).padding("all", 10, "px")
)

console.log("box", box)
