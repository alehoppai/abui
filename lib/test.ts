import { Page, Box, Text } from "./ui"

// FYI: for tests only
import { writeFileSync } from "node:fs"

const page = Page(
  "Sample Page",
  Box(
    Box(
      Text("Hello,")
        .style({
          "font-style": "italic",
          "font-weight": "bold",
          "font-size": "30px",
        })
        .onClick((event) => {
          alert((event.target as HTMLSpanElement)?.innerText)
        }),
      Text(" World!").style({ color: "red", "font-size": "20px" })
    ).style({ padding: "10px" })
  ),
  Box(
    Text("Another,").style({
      "font-style": "italic",
      "font-weight": "semibold",
      "font-size": "34px",
    }),
    Text(" Text!")
      .style({
        color: "green",
        "font-size": "24px",
      })
      .hover({ "font-weight": "bolder" })
  ).style({ "padding-block": "10px" }),
  Box(
    Text("Hover Test")
      .style({
        "font-size": "16px",
        color: "purple",
      })
      .hover({
        "font-size": "24px",
        color: "blue",
      })
  )
)

console.log(page.template)
writeFileSync("test.html", page.template)
