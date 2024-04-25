import { View } from "../types"
import { Body} from "./body"

class _Page {
  pageConfig: Record<string, string> = {
    title: "",
  }
  body: View

  constructor(title: string, ...children: View[]) {
    this.body = Body(...children)
    this.pageConfig.title = title
  }

  get template() {
    const bodyTemplate = this.getTemplate(this.body)
    const { styles, js } = this.mapExtra(this.body)

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${this.pageConfig.title}</title>
  <style>${styles}</style>
</head>
${bodyTemplate}
<script>${js}</script>
</html>
    `
  }

  private getExtra(
    node: View,
    css: Record<string, View["modifiers"]> = {},
    js: string[] = []
  ): { css: Record<string, View["modifiers"]>; js: string[] } {
    // @ts-expect-error -- dynamic access
    css["." + node.className] = node.modifiers.base
    // @ts-expect-error -- dynamic access
    css["." + node.className + ":hover"] = node.modifiers.hover
    node.events && js.push(...node.events)

    if (node.children && node.children.length) {
      node.children.forEach((child) => {
        this.getExtra(child, css, js)
      })
    }

    return { css, js }
  }

  private mapExtra(root: View): { styles: string; js: string } {
    const { css, js } = this.getExtra(root)
    let styles = ""

    for (const [className, modifiers] of Object.entries(css)) {
      if (!Object.keys(modifiers).length) continue
      styles += `${className} {${Object.entries(modifiers)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")};} `
    }

    return { styles, js: js.join("") }
  }

  private getTemplate(node: View): string {
    let html = ""

    if (node.children && node.children.length) {
      html += `<${node.tag} class="${node.className}">`
      node.children.forEach((child) => {
        html += this.getTemplate(child)
      })
      html += `</${node.tag}>`
    } else {
      html += `<${node.tag} class="${node.className}">${node.value ?? ""}</${node.tag}>`
    }

    return html
  }
}

export const Page = (title: string, ...children: View[]) =>
  new _Page(title, ...children)
