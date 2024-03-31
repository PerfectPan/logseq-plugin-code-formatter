import parserBabel from 'prettier/parser-babel';
import parserTypeScript from 'prettier/parser-typescript';
import parserHTML from 'prettier/parser-html';
import parserMarkdown from 'prettier/parser-markdown';

export type SupportedLanguage = 'js' | 'json' | 'javascript' | 'ts' | 'typescript' | 'html' | 'css' | 'less' | 'scss' | 'markdown';

interface IPrettierOption {
  parser: string;
  plugins: any[];
}

export const languageMap: Record<SupportedLanguage, IPrettierOption> = {
  js: {
    parser: 'babel',
    plugins: [parserBabel]
  },
  json: {
    parser: 'json',
    plugins: [parserBabel]
  },
  javascript: {
    parser: 'babel',
    plugins: [parserBabel]
  },
  typescript: {
    parser: 'typescript',
    plugins: [parserTypeScript]
  },
  ts: {
    parser: 'typescript',
    plugins: [parserTypeScript]
  },
  html: {
    parser: 'html',
    plugins: [parserHTML]
  },
  css: {
    parser: 'css',
    plugins: [parserCSS]
  },
  less: {
    parser: 'css',
    plugins: [parserCSS]
  },
  scss: {
    parser: 'css',
    plugins: [parserCSS]
  },
  ,
  markdown: {
    parser: 'markdown',
    plugins: [parserMarkdown]
  },
}
