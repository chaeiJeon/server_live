import { createGlobalStyle } from "styled-components";
import NotoSansKRBold from "./static/fonts/NotoSansKR-Bold.otf";
import NotoSansKRRegular from "./static/fonts/NotoSansKR-Regular.otf";
import NotoSansKRLight from "./static/fonts/NotoSansKR-Light.otf";
import NotoSansKRMedium from "./static/fonts/NotoSansKR-Medium.otf";
import NotoSansKRThin from "./static/fonts/NotoSansKR-Thin.otf";

const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: NotoSansKRBold;
  src: url(${NotoSansKRBold});
}
@font-face {
  font-family: NotoSansKRRegular;
  src: url(${NotoSansKRRegular});
}
@font-face {
  font-family: NotoSansKRLight;
  src: url(${NotoSansKRLight});
}
@font-face {
  font-family: NotoSansKRMedium;
  src: url(${NotoSansKRMedium});
}
@font-face {
  font-family: NotoSansKRThin;
  src: url(${NotoSansKRThin});
}
`;
export default GlobalFonts;
