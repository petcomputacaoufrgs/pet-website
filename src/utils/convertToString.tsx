import ReactDOMServer from 'react-dom/server'

export const ConvertReactComponentToString = (component: any) => {
  return ReactDOMServer.renderToStaticMarkup(component)
}
