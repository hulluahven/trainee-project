import styled from "styled-components";
import Price from "/src/price/price";

export const InnerPrice = styled(Price)`
  /* margin-left: 20px; */
  margin-left: ${(props) => props.theme.indent};
`;
// доб доп стили для уже стилиз цены

export const PriceWrapper = styled.span`
  vertical-align: bottom;
  display: inline-block !important;
`;
