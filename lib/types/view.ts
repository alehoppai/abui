import { Properties } from "csstype"
import { Tag } from "./tags"

export type EventCb = (event: MouseEvent) => void

export interface View {
  readonly className: string
  readonly value?: string

  events?: string[]
  modifiers: Record<"base" | "hover", Properties>
  children?: View[]
  tag: Tag

  style(modifier: Properties): View
  hover(modifier: Properties): View

  onClick?(cb: EventCb): View
}
