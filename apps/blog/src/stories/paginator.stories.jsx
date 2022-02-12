import React from 'react'

import Paginator from '../components/paginator'

export default {
  title: 'Paginator',
  component: Paginator
}

export const FirstPage = () => <Paginator currentPage={1} totalPages={4} currentPath='/'/>
export const MiddlePage = () => <Paginator currentPage={2} totalPages={4} currentPath='/'/>
export const LastPage = () => <Paginator currentPage={4} totalPages={4} currentPath='/'/>
export const TheOnlyPage = () => <Paginator currentPage={1} totalPages={1} currentPath='/'/>
export const MainPage = () => <Paginator currentPage={2} totalPages={4} currentPath='/'/>
export const CategoryPage = () => <Paginator currentPage={2} totalPages={4} currentPath='/obiady'/>

