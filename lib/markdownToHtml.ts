import MarkdownIt from 'markdown-it';

export function markdownToHTML(markdown: string) {
  const md = new MarkdownIt();
  return md.render(markdown);
}
