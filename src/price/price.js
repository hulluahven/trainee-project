// import React from "react";
// import { StyledPrice } from "./styled";

// function Price({ value, className }) {
//   return <StyledPrice className={className}>{value} ₽</StyledPrice>;
// }
// export default Price;

import styled from "styled-components";

export const Price = styled.span.attrs((props) => ({
  children: `${props.value} ₽`
}))`
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
`;

export default Price;
