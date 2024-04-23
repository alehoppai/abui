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

export type EventCb = (event: MouseEvent) => void

export interface View {
  readonly className: string
  readonly value?: string

  events?: string[]
  modifiers: Record<"base" | "hover", Properties>
  children?: View[]
  tag: TextTag | BoxTag

  style(modifier: Properties): View
  hover(modifier: Properties): View

  onClick?(cb: EventCb): View
}
