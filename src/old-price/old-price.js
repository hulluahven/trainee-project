// import React from "react";
// import { StyledOldPrice } from "./styled";
// function OldPrice({ value }) {
//   return <StyledOldPrice>{value} ₽</StyledOldPrice>;
// }
// export default OldPrice;

// меняем с пом attrs в самом файле

import styled from "styled-components";

export const OldPrice = styled.del.attrs((props) => ({
  children: `${props.value} ₽`
}))`
  font-size: 18px;
  color: ${(props) => props.theme.textColorMuted};
  line-height: 1;
`;

export default OldPrice;

// так же можно поступить для компонентов
// Price и OldPrice. Разница лишь в том, что значение
//  для дочернего элемента в них будет приходить
// через props value и
// children: `Артикул: ${props.children}
// нужно заменить на children: `${props.value} ₽.
