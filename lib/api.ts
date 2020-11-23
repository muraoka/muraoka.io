import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Article, Articles } from '../interfaces/article';
import { markdownToHTML } from '../lib/markdownToHtml';

const articlesDirectory = join(process.cwd(), 'articles');

export function getArticleBySlug(slug: string): Article {
  const fullPath = join(articlesDirectory, `${slug}.md`);
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

export function getAllArticles(): Articles {
  const slugs = fs
    .readdirSync(articlesDirectory)
    .map((file) => file.replace(/\.md$/, ''));
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return articles;
}
