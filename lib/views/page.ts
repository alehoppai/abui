import { View } from "./types"
import { Box } from "./box"

class _Page {
  pageConfig: Record<string, string> = {
    title: "",
  }
  body: View

  constructor(title: string, ...body: View[]) {
    this.body = Box(...body).asBody()
    this.pageConfig.title = title
  }

  get template() {
    const bodyTemplate = this.getTemplate(this.body)
    const styles = this.getStyles(this.body)

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
</html>
    `
  }

  private getCss(
    node: View,
    css: Record<string, View["modifiers"]> = {}
  ): Record<string, View["modifiers"]> {
    css["." + node.className] = node.modifiers

    if (node.children && node.children.length) {
      node.children.forEach((child) => {
        this.getCss(child, css)
      })
    }

    return css
  }

  private getStyles(node: View): string {
    const css = this.getCss(node)
    let styles = ""

    for (const [className, modifiers] of Object.entries(css)) {
      if (!Object.keys(modifiers).length) continue
      styles += `${className} {${Object.entries(modifiers)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")};} `
    }

    return styles
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

export const Page = (title: string, ...body: View[]) =>
  new _Page(title, ...body)
