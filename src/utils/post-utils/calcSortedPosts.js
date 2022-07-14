export const calcSortedPosts=(posts,sortBy)=>{
    switch(sortBy){
      case "Recent posts":
      default:
        return [...posts].sort((a,b)=>{
          const aDate=new Date(a.createdAt)
          const bDate=new Date(b.createdAt)
          return bDate-aDate
        })
      case "Older posts":
        return [...posts].sort((a,b)=>{
          const aDate=new Date(a.createdAt)
          const bDate=new Date(b.createdAt)
          return aDate-bDate
        })
      case "Trending posts":
        return [...posts].sort((a,b)=>{
          let aLikes=a.likes.likeCount
          let bLikes=b.likes.likeCount
          return bLikes-aLikes
        })
    }
  }