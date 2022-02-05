import React from 'react'
import PostCard from '../components/post-card'
import PostCardCover from '../components/post-card-cover'
import PostCardHeader from '../components/post-card-header'
import PostCardSeparator from '../components/post-card-separator'
import PostCardAttributes from '../components/post-card-attributes'
import Paginator from '../components/paginator'
import * as styles from './page.module.sass'

export default function PostListContent({allRecipesData, pageInfo, location}) {
  const Posts = allRecipesData.edges
    .map((edge, index) => {
      const post = edge.node
      return (
        <PostCard
          key={edge.node.id}
          href={`/${post.category.slug}/${post.slug}`}
          className={styles.singlePost}
        >
          {post.cover &&
            <PostCardCover
              fluid={post.cover.childImageSharp.fluid}
              criticalImage={index < 3}
            />
          }
          <PostCardHeader
            title={post.title}
            categoryName={post.category.name}
            html={post.parsedHeadline.childMarkdownRemark.html}
          />
          <PostCardSeparator />
          <PostCardAttributes
            preparationTime={post.preparationTime}
            tags={post.tags}
          />
        </PostCard>
      )
    })

  return (
    <div className={styles.layout}>
    <section className={styles.main}>
      <div className={styles.posts}>
        {Posts}
      </div>
      <Paginator currentPage={pageInfo.currentPage} totalPages={pageInfo.totalPages} currentPath={location.pathname} />
    </section>
  </div>
  )
}
