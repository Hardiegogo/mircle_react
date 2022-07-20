const composeReducer = (acc, curr) => curr(acc);

export const compose =
  (...fns) =>
  (x) =>
    fns.reduce(composeReducer, x);

export const filterByFollowing = ({
  posts,
  sortBy,
  feedType,
  currentUser,
  selectedUser,
}) => {
  if (!feedType) {
    const following = currentUser?.following?.map((user) => user.username);
    const filteredPosts = posts.filter((post) => {
      if (following) {
        if (post.username === currentUser.username) return true;
        else return following.includes(post.username);
      }
    });
    return { filteredPosts, sortBy, feedType, currentUser, selectedUser };
  } else if (feedType === "explore") {
    const filteredPosts = posts.filter(
      (post) => post.username !== currentUser.username
    );
    return { filteredPosts, sortBy, feedType, currentUser, selectedUser };
  } else
    return {
      filteredPosts: posts,
      sortBy,
      feedType,
      currentUser,
      selectedUser,
    };
};
