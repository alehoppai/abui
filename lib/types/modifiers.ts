import { Property } from "csstype"

export type TextModifiers = {
  "font-weight": Property.FontWeight
  "font-size": Property.FontSize
  "text-decoration": Property.TextDecoration
  "font-style": Property.FontStyle
  "line-height": Property.LineHeight
  color: Property.Color
}

export type BoxModifiers = {
  padding: Property.Padding
  "padding-inline": Property.PaddingInline
  "padding-block": Property.PaddingBlock
  "padding-top": Property.PaddingTop
  "padding-right": Property.PaddingRight
  "padding-bottom": Property.PaddingBottom
  "padding-left": Property.PaddingLeft
}
