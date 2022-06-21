import React from "react";
import { StyledCounter, Value } from "./styled";
import Button from "/src/button/button";

function QuantityCounter({ className, value, onChange, minValue }) {
  const isDisabledMinus = value === minValue;
  // делать неактивной кнопку «-» у счётчика, когда количество товаров равно 1.
  // return (
  //   <React.Fragment>
  //     <button type="button">-</button>
  //     <span>1</span>
  //     <button type="button">+</button>
  //   </React.Fragment>
  // );
  // вот что изменилось
  // при этом незабываем про className
  return (
    <StyledCounter className={className}>
      <Button
        disabled={isDisabledMinus}
        size="small"
        onClick={() => onChange && onChange(value - 1)}
      >
        -
      </Button>
      <Value>{value}</Value>
      <Button size="small" onClick={() => onChange && onChange(value + 1)}>
        +
      </Button>
    </StyledCounter>
  );
}

export default QuantityCounter;
