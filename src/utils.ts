import { SupportedLanguage, languageMap } from './language-map';

interface IBlockInfo {
  isCodeBlock: boolean;
  meta?: {
    language: SupportedLanguage | 'unsupported';
    code: string;
  }
}

export function getBlockInfo(content: string): IBlockInfo {
  const lines = content.split('\n');
  if (lines.length > 2) {
    const match = lines[0].match(/^```([a-zA-Z]*)/);
    if (match && lines[lines.length - 1].startsWith('```')) {
      const language = match[1].toLocaleLowerCase() as SupportedLanguage;
      if (Object.keys(languageMap).includes(language)) {
        return {
          isCodeBlock: true,
          meta: {
            language,
            code: lines.slice(1, lines.length - 1).join('\n')
          }
        }
      }
      return {
        isCodeBlock: true,
        meta: {
          language: 'unsupported',
          code: lines.slice(1, lines.length - 1).join('\n')
        }
      }
    }
  }
  return {
    isCodeBlock: false
  }
}
