import Header from './Header'
import stylesheet from 'styles/index.scss'

const Layout = (props) => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Header />
    {props.children}
  </div>
)

export default Layout
