import Test from '@/customComponents/Test'
import ReactDOMServer from 'react-dom/server'

export const Convert = () => {
  return ReactDOMServer.renderToStaticMarkup(<Test />)
}
