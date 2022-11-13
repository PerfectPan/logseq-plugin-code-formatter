import "@logseq/libs";

import prettier from 'prettier/standalone';

import { logseq as PL } from "../package.json";
import { getBlockInfo } from "./utils";
import { languageMap } from './language-map';

const pluginId = PL.id;

function main() {
  console.info(`#${pluginId}: MAIN`);

  logseq.Editor.registerBlockContextMenuItem('Format Code', async ({ uuid }) => {
    const block = await logseq.Editor.getBlock(uuid);
    if (!block) {
      // TODO friendly msg
      return;
    }
    const { isCodeBlock, meta } = getBlockInfo(block.content);

    if (!isCodeBlock) {
      return;
    }

    if (!meta) {
      return;
    }

    const { language, code } = meta;
    if (language === 'unsupported') {
      return;
    }
    const formatCode = prettier.format(code, languageMap[language]);

    // FIXME: updateBlock cannot update render UI, so use this way to force render code block
    await logseq.Editor.updateBlock(uuid, `\u200B\`\`\`${language}\n${formatCode}\n\`\`\``);
    await logseq.Editor.updateBlock(uuid, `\`\`\`${language}\n${formatCode}\n\`\`\``);
  });
}

logseq.ready(main).catch(console.error);
