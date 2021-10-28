import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello World</h1>
    <p>Maecenas aliquet, justo et malesuada aliquam, lacus lectus elementum lectus, in tristique est augue nec lectus. Etiam lorem leo, imperdiet in mi vitae, efficitur iaculis risus. Integer at lobortis neque. Quisque tincidunt blandit turpis at lacinia. Nam eleifend elit eget aliquam placerat. Praesent vitae mattis justo, eu semper orci.</p>
    
    <StaticImage
      src="../images/helloworld.png"
      width={768}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Hello World"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
