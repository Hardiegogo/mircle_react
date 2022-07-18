const composeReducer=(acc,curr)=>curr(acc)

export const compose=(...fns)=>(x)=>fns.reduce(composeReducer,x)

export const filterByFollowing=({posts,sortBy,feedType,currentUser,selectedUser})=>{
  const following=currentUser.following?.map(user=>user.username)
  const filteredPosts=posts.filter((post)=>{
    if(post.username===currentUser.username) return true
    else return following.includes(post.username)
  })
  if(!feedType) return {filteredPosts,sortBy,feedType,currentUser,selectedUser}
  else return {filteredPosts:posts,sortBy,feedType,currentUser,selectedUser}
}