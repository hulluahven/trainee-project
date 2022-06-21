import React from "react";
import { Image } from "/src/elements";
import Title from "/src/title/title";
import ActualPrice from "/src/actual-price/actual-price";
import { List, ListItem, StyledLink } from "./styles";

// получает пропс списка товаров и выводит ввиде карточек
// отправляем его в апп
export default function Catalog({ products }) {
  return (
    <>
      <Title>Каталог</Title>
      <List>
        {products &&
          products.length &&
          products.map((product) => (
            <ListItem key={product.article}>
              <StyledLink to={`/product/${product.article}`}>
                <Image src={product.images[0]} />
                <h2>{product.name}</h2>
                <span>
                  <ActualPrice
                    oldPrice={product.oldPrice}
                    price={product.price}
                  />
                </span>
              </StyledLink>
            </ListItem>
          ))}
      </List>
    </>
  );
}
