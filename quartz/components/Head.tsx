import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? cfg.pageTitle ?? "Untitled"
    const description = fileData.description?.trim() ?? "No description provided"
    const { css, js } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}` )
    const path = url.pathname as FullSlug
    
    // استخدام المسار المطلق لتجنب مشكلة ضياع التنسيق في المجلدات الفرعية
    const baseDir = path === "/" ? "" : path

    const iconPath = joinSegments(baseDir, "static/icon.png")
    const ogImagePath = `https://${cfg.baseUrl}/static/og-image.png`

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {cfg.baseUrl && <meta property="og:image" content={ogImagePath} />}
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="675" />
        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        {css.map((resource ) => {
          if (resource.inline) {
            return <style key={resource.content}>{resource.content}</style>
          } else {
            return (
              <link
                key={resource.content}
                href={joinSegments(baseDir, resource.content)}
                rel="stylesheet"
                type="text/css"
                spa-preserve={resource.spaPreserve}
              />
            )
          }
        })}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
