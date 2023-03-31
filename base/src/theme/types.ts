export interface Theme {
  colors: Record<string, string>;
  fonts: string[];
  fontSizes: Record<FontSize, string>;
}

export type FontSize = 'small' | 'medium' | 'large';
