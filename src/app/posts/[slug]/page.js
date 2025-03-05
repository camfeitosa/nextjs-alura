import logger from "@/logger";
import { remark } from 'remark';
import html from 'remark-html';

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;

  const response = await fetch(url)
  if (!response.ok) {
    logger.error("Ops, alguma coisa deu errada")
    return {}
  }
  logger.info("Posts obtidos com sucesso")
  const data = await response.json()
  if (data.lenth === 0) {
    return {}
  }

  const post = data[0]

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml
  return post
}

// searchParams -> query string || params -> parametros dinamicos
const PagePosts = async ({ params }) => {
  const slug = params.slug
  const post = await getPostBySlug(slug)

  return (
    <>
      <h1>{post.title}</h1>
      <div style={{padding: 16, background: 'white'}} dangerouslySetInnerHTML={{ __html: post.markdown }} />
    </>
  )
}

export default PagePosts;