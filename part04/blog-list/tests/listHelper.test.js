const listHelper = require('../utils/list_helper')
const blogsRouter = require("../controllers/blog-list")

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
    const blogs = blogsRouter.totalLike
    console.log(blogs)
    
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(5);
  });
});