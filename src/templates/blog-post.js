import React from "react"
import { graphql } from "gatsby"

import Article from "../components/Article"
import ArticleNav from "../components/ArticleNav"
import Comments from "../components/Comments"
import Divider from "../components/Divider"
import LayoutArticle from "../components/LayoutArticle"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const social = data.site.siteMetadata.social
  const title = post.frontmatter.title
  const url = `${data.site.siteMetadata.siteUrl}${post.fields.slug}`
  console.log(url)
  const { previous, next } = data

  return (
    <LayoutArticle social={social}>
      <SEO
        title={title}
        description={post.frontmatter.description || post.excerpt}
        meta={[
          {
            property: `keywords`,
            content: post.frontmatter.tags.join(", "),
          },
        ]}
      />
      <Article post={post} />
      <ArticleNav previous={previous} next={next} />
      <Divider />
      <Comments url={url} title={title} />
    </LayoutArticle>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
          github
          linkedin
          speakerdeck
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        description
        tags
        rating
        image_url
        image_author
      }
      fields {
        slug
      }
      timeToRead
    }
    previous: markdownRemark(
      id: { eq: $previousPostId }
      fileAbsolutePath: { regex: "/content/blog/" }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(
      id: { eq: $nextPostId }
      fileAbsolutePath: { regex: "/content/blog/" }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
