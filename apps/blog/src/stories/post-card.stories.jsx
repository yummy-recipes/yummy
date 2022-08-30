import React from 'react'

import PostCard from '../components/post-card'
import PostCardCover from '../components/post-card-cover'
import PostCardHeader from '../components/post-card-header'
import PostCardSeparator from '../components/post-card-separator'
import PostCardAttributes from '../components/post-card-attributes'

export default {
  title: 'PostCard',
  component: PostCard,
}

const fluid = {
  aspectRatio: 0.75,
  src: 'https://raw.githubusercontent.com/yummy-recipes/yummy/master/apps/blog/cypress/fixtures/images/cover.jpg',
  sizes: '(max-width: 500px) 100vw, 500px',
}

export const Primary = () => (
  <PostCard href="/">
    <PostCardCover fluid={fluid} criticalImage />

    <PostCardHeader title="Test" html="Summary" />

    <PostCardSeparator />

    <PostCardAttributes preparationTime="120" tags={[]} />
  </PostCard>
)

export const Vege = () => (
  <PostCard href="/">
    <PostCardCover fluid={fluid} criticalImage />

    <PostCardHeader title="Test" html="Summary" />

    <PostCardSeparator />

    <PostCardAttributes preparationTime="120" tags={['wegetariańskie']} />
  </PostCard>
)
