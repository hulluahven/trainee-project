import React from "react";
import { InnerPrice, PriceWrapper } from "./styled";
import OldPrice from "/src/old-price/old-price";

function ActualPrice({ price, oldPrice, className }) {
  const showCorrectPrice = oldPrice && price < oldPrice;
  return (
    <PriceWrapper className={className}>
      {showCorrectPrice && <OldPrice value={oldPrice} />}
      {showCorrectPrice && " "}
      <InnerPrice value={price} />
    </PriceWrapper>
  );
}

export default ActualPrice;
