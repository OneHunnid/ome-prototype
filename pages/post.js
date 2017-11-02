import Layout from '../components/MyLayout.js'

export default (props) => (
  <Layout>
   <h1>{props.url.query.title}</h1>
   <div>Text and stuff can go here...</div>
  </Layout>
)
