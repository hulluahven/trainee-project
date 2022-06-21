// import styled from "styled-components";
import styled, { css } from "styled-components";
import { P } from "/src/elements";
import Button from "/src/button/button";
import QuantityCounter from "/src/quantity-counter/quantity-counter";
import ActualPrice from "/src/actual-price/actual-price";
// имп компоненты со стилями из др модулей

// const valueStyle = `
//   display: inline-flex;
//   margin-left: 20px;
//   color: #333;
// `;
const valueStyle = css`
  display: inline-flex;
  margin-left: ${(props) => props.theme.indent};
  color: ${(props) => props.theme.textColor};
`;
// стили для значения в компонент для цены

export const StyledProductPage = styled.article`
  /* margin: 20px; */
  margin: ${(props) => props.theme.indent};
  /* padding: 20px; */
  padding: ${(props) => props.theme.indent};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  /* font-family: 'Arial, "Helvetica", sans-serif'; */
  font-family: ${(props) => props.theme.font};
  font-size: 16px;
  /* color: #333; */
  color: ${(props) => props.theme.textColor};
`;
// стили для компонента секции с карточкой

export const Header = styled.header`
  /* margin-bottom: 20px; */
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductWrapper = styled.section`
  display: flex;
  /* margin-bottom: 20px; */
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductInfo = styled.div`
  /* margin-left: 20px; */
  margin-left: ${(props) => props.theme.indent};
  border-left: 1px solid #888;
  box-sizing: border-box;
  /* padding-left: 20px; */
  /* margin-bottom: 20px; */
  padding-left: ${(props) => props.theme.indent};
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductInfoLine = styled(P)`
  color: #777;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const PageCounter = styled(QuantityCounter)`
  ${valueStyle}
`;

export const PageActualPrice = styled(ActualPrice)`
  ${valueStyle}
`;

export const DeliveryDate = styled.span`
  ${valueStyle}
  color: green;
`;

export const BuyButton = styled(Button)`
  margin-top: 40px;
`;
