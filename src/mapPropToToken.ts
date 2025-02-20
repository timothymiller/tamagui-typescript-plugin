import { tokenCategories } from '@tamagui/helpers';

import { ParsedConfig } from './readConfig';

/**
 * Maps a property or shorthand to a token category
 */
export const mapPropToToken = (prop: string, config: ParsedConfig) => {
  const realProp =
    (config.shorthands[prop as keyof typeof config.shorthands] as
      | string
      | undefined) ?? prop;

  for (const [category, properties] of Object.entries(tokenCategories)) {
    if (realProp in properties) {
      return category as Exclude<
        keyof ParsedConfig,
        'shorthands' | 'themeColors'
      >;
    }
  }

  return 'space';
};
