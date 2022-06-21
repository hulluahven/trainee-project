// import React from "react";
// import { StyledArticle } from "./styled";
import styled from "styled-components";

// function Article({ children }) {
//   return <StyledArticle>Артикул: {children}</StyledArticle>;
// }
// export default Article;

// простой React-компонент, содержащий логику добавления
//  литерала, и стилизуем его.
//  В таких случаях благодаря attrs можно
//  заменить два компонента на один styled-components.
//  Например, для артикула сейчас созданы компоненты:

export const Article = styled.span.attrs((props) => ({
  children: `Артикул: ${props.children}`
}))`
  color: ${(props) => props.theme.textColorMuted};
  font-size: 12px;
`;

// Теперь к тексту, переданному как дочерний элемент
// для Article, автоматически добавляется строка «Артикул:
// «. Полученный результат прокидывается в теге <span>.

export default Article;
