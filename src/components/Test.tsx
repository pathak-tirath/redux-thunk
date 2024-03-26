import React from 'react'
import { userPrint, counterFn, fetchPosts } from '../reducers/store/slice/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../reducers/store/userStore'

const Test = () => {
    const dispatch = useDispatch<AppDispatch>()
    const selector = useSelector((state:RootState) => state.user.name)
    const counter = useSelector((state:RootState) => state.user.counter)
    const posts = useSelector((state:RootState) => state.user.posts)
    const handleFunctionCall = () => {
        dispatch(userPrint('testValue'))
    }
    const handleCounter = () => {
      dispatch(counterFn(1))
    }
    const handleFetchPosts = () => {
        dispatch(fetchPosts())
    }
  return (
    <div>
        <button onClick={handleFunctionCall}>Click</button>
        <button onClick={handleCounter}>Counter</button>
        <button onClick={handleFetchPosts}>Posts</button>
        {selector}
        {counter}
        {posts.map(post => <div>{post?.title}</div>)}

    </div>
  )
}

export default Test