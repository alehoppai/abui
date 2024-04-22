import { Properties } from "csstype"

export type TextTag = "span" | "p"
export type BoxTag =
  | "body"
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
  // TODO: Preserve(cache) random className for each view
  className: string
  value?: string
  children?: View[]
}
