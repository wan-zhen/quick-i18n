import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function i18n(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    let [enText, cnText, viText] = [
      JSON.parse((tree.read('./src/assets/i18n/en-US.json')?.toString('utf-8') as string)),
      JSON.parse((tree.read('./src/assets/i18n/zh-CN.json')?.toString('utf-8') as string)),
      JSON.parse((tree.read('./src/assets/i18n/vi-VN.json')?.toString('utf-8') as string))
    ];
    let [type, key] = _options.key.split('.');
    let { cn, en, vi } = _options;
    if (!enText[type]) {
      enText[type] = {};
    }
    if (!cnText[type]) {
      cnText[type] = {};
    }
    if (!viText[type]) {
      viText[type] = {};
    }
    enText[type][key] = en;
    cnText[type][key] = cn;
    viText[type][key] = vi;
    tree.overwrite('./src/assets/i18n/en-US.json', JSON.stringify(enText, null, "\t"));
    tree.overwrite('./src/assets/i18n/zh-CN.json', JSON.stringify(cnText, null, "\t"));
    tree.overwrite('./src/assets/i18n/vi-VN.json', JSON.stringify(viText, null, "\t"));

    return tree;
  };
}
