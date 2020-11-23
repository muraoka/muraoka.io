import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post, Posts } from '../interfaces/post';
import { markdownToHTML } from '../lib/markdownToHtml';

const postsDirectory = join(process.cwd(), 'posts');

export function getPostBySlug(slug: string): Post {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = markdownToHTML(content);

  return {
    slug: slug,
    date: slug,
    title: data.title,
    content: htmlContent,
  };
}

export function getAllPosts(): Posts {
  const slugs = fs
    .readdirSync(postsDirectory)
    .map((file) => file.replace(/\.md$/, ''));
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}
