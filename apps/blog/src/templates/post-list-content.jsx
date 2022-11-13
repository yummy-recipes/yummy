import React from 'react'
import Page from '../components/page'
import PostCard from '../components/post-card'
import PostCardCover from '../components/post-card-cover'
import PostCardHeader from '../components/post-card-header'
import Paginator from '../components/paginator'
import * as styles from './page.module.css'

export default function PostListContent({
  allRecipesData,
  pageInfo,
  location,
}) {
  const Posts = allRecipesData.edges.map((edge, index) => {
    const post = edge.node
    return (
      <PostCard
        key={edge.node.id}
        href={`/${post.category.slug}/${post.slug}`}
        className={styles.singlePost}
      >
        {post.cover && (
          <PostCardCover
            fluid={post.cover.image.childImageSharp.fluid}
            criticalImage={index < 3}
          />
        )}
        <PostCardHeader
          title={post.title}
          html={post.parsedHeadline.childMarkdownRemark.html}
        />
      </PostCard>
    )
  })

  return (
    <Page>
      <div className={styles.posts}>{Posts}</div>

      <Paginator
        currentPage={pageInfo.currentPage}
        totalPages={pageInfo.totalPages}
        currentPath={location.pathname}
      />
    </Page>
  )
}
