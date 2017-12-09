const PostAPI = {
  posts: [
    { id: 1, title: 'Post 1', author: "Team", file: "Post1", preview: "Post about ..." },
    { id: 2, title: 'Post 2', author: "Team", file: "Post2", preview: "Post about ..." }
  ],
  all: function() { return this.posts},
  get: function(id) {
    const isPost = p => p.id === id
    return this.posts.find(isPost)
  }
}

export default PostAPI
