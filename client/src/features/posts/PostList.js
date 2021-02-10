import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, fetchPosts } from './postsSlice'

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector(state => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])


  return (
    <List
      itemLayout="horizontal"
      dataSource={posts}
      renderItem={item => (
        <List.Item
          key={item.id}
          actions={}
        >
          <List.Item.Meta
            title={item.title}
            
          />
        </List.Item>
      )}
    />)
}