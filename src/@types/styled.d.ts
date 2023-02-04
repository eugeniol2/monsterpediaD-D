import "styled-components";
import { theme } from "../constants/theme/theme";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
