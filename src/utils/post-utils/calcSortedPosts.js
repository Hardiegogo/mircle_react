export const calcSortedPosts=({filteredPosts,sortBy,feedType,currentUser,selectedUser})=>{
  const {username}=selectedUser
    if(feedType==='profile-feed'){
      return [...filteredPosts].filter((post)=>post.username===username).sort((a,b)=>{
        const aDate=new Date(a.createdAt)
        const bDate=new Date(b.createdAt)
        return bDate-aDate
      })
    }else{
      switch(sortBy){
        case "Recent posts":
        default:
          return [...filteredPosts].sort((a,b)=>{
            const aDate=new Date(a.createdAt)
            const bDate=new Date(b.createdAt)
            return bDate-aDate
          })
        case "Older posts":
          return [...filteredPosts].sort((a,b)=>{
            const aDate=new Date(a.createdAt)
            const bDate=new Date(b.createdAt)
            return aDate-bDate
          })
        case "Trending posts":
          return [...filteredPosts].sort((a,b)=>{
            let aLikes=a.likes.likeCount
            let bLikes=b.likes.likeCount
            return bLikes-aLikes
          })
      }
    }
    
  }