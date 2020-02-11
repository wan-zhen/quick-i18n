import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function i18n(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log(_options.key)
    return tree;
  };
}
