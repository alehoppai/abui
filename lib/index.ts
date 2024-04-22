import { Page, Box, Text } from "./views"

Page(
  "Sample Page",
  Box(
    Box(
      Text("Hello,").fontStyle("italic").fontWeight("bold").fontSize("30px"),
      Text(" World!").color("red").fontSize("20px")
    ).padding("all", 10, "px")
  ),
  Box(
    Text("Another,")
      .fontStyle("italic")
      .fontWeight("semibold")
      .fontSize("34px"),
    Text(" Text!").color("green").fontSize("24px")
  ).padding("block", 24, "px"),
  Box()
)
