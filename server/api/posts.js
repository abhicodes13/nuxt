import { posts } from "../data";

// server/api/posts/index.ts

export default defineEventHandler(async (event) => {
  if (event.method === "GET") {
    return posts;
  }

  if (event.method === "POST") {
    const body = await readBody(event);
    const newPost = {
      id: posts.length + 1,
      title: body.title,
      content: body.content,
    };
    posts.push(newPost);
    return newPost;
  }
});
