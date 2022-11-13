import parserBabel from 'prettier/parser-babel';
import parserTypeScript from 'prettier/parser-typescript';
import parserHTML from 'prettier/parser-html';

export type SupportedLanguage = 'js' | 'javascript' | 'ts' | 'typescript' | 'html';

interface IPrettierOption {
  parser: string;
  plugins: any[];
}

export const languageMap: Record<SupportedLanguage, IPrettierOption> = {
  js: {
    parser: 'babel',
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
}
