export const BASE_URL = 'https://cse.noticebard.com/wp-json/wp/v2';

export async function getPosts(number,order) {
  const posturl=BASE_URL+'/posts?_embed&per_page='+number+'&order='+order
  const postsRes = await fetch(posturl);
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
    const posturl=BASE_URL+'/posts?_embed&slug='+slug
    const postsRes = await fetch(posturl);
    const post = await postsRes.json();
    return post;
  }