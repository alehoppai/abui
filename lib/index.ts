import { Box, Text } from "./views"

const box = Box(
  Box(
    Text("Hello,").fontStyle("italic").fontWeight("bold").fontSize("30px"),
    Text(" World!").color("red").fontSize("20px")
  ).padding("all", 10, "px")
)

console.log("box", box)
