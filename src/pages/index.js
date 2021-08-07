import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled(Link)`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Arturo's Thoughts</h1>
    </div>
    <h4>{data.allMarkdownRemark.totalCount}</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <BlogLink to={node.fields.slug}>
          <BlogTitle>
            {node.frontmatter.title} - {node.frontmatter.data}
          </BlogTitle>
        </BlogLink>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
