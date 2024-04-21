import { Properties } from "csstype"

export type TextTag = "span" | "p"
export type BoxTag =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "nav"
  | "main"

export interface View {
  modifiers: Properties
  tag: TextTag | BoxTag
}
