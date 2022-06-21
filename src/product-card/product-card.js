import React, { useState } from "react";
import Title from "/src/title/title";
import Article from "/src/article/article";
// import DeliveryDate from "/src/delivery-date/delivery-date";
import Description from "/src/description/description";
// import ActualPrice from "/src/actual-price/actual-price";
// import QuantityCounter from "/src/quantity-counter/quantity-counter";
// import Gallery from "/src/gallery/gallery";
import Comments from "/src/comments/comments";
import Popularity from "/src/popularity/popularity";
// import Button from "/src/button/button";
// import { Image } from "/src/elements";
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageCounter,
  BuyButton,
  PageActualPrice,
  DeliveryDate
} from "./styled";
import Tabs from "/src/tabs/tabs";
import PopUp from "/src/popup/popup";
import Order from "/src/order/order";
import Accordion from "/src/accordion/accordion";
import Slider from "/src/slider/slider";

const MAX_TEXT_SIZE = 200;
// макс размер в пикс
const COMMENTS_COUNT = 3;

// имп обновл компон со стилями

// function ProductCard({ product }) {
//   return (
//     <section>
//       <Title>{product.name}</Title>
//       <div>
//         <span>
//           <Article>{product.article}</Article>
//         </span>
//       </div>
//       <div style={{ display: "flex" }}>
//         <Gallery src={product.src} alt={product.name} />
//         <div>
//           <p>
//             Цена:{" "}
//             <ActualPrice oldPrice={product.oldPrice} price={product.price} />
//           </p>
//           <div>
//             <p>
//               Количество: <QuantityCounter />
//             </p>
//           </div>
//           <p>
//             <span>
//               Доставка: <DeliveryDate>{product.delivery}</DeliveryDate>
//             </span>
//           </p>
//           <Button size="large">Купить</Button>
//           <Popularity count={product.comments.length} />
//         </div>
//       </div>
//       <Description text={product.description} />
//       <Comments comments={product.comments} />
//     </section>
//   );
// }

function ProductCard({ product, showInfoInAccordion }) {
  const [productCount, setProductCount] = useState(1);
  // состояние, хранящее выбранное количество товаров
  const [isShowPopup, setIsShowPopup] = useState(false);
  // состояние, хранящее флаг, открыто окно или нет
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  // состояние, где будем хранить флаг показа описания товара целиком:
  const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);
  // состояние в кот хран кол-во комм-ев кот нуж показ
  const price = product.price * productCount;
  const oldPrice = product.oldPrice * productCount;
  const tabs = [
    {
      title: "Описание",
      // content: <Description text={product.description} />
      content: (
        <Description
          text={
            isShowAllDescription
              ? product.description
              : product.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
        // изменим логику генерации tabs +обработка пропс описания
      )
    },
    {
      title: "Комментарии",
      // content: <Comments comments={product.comments} />
      content: (
        <Comments
          comments={product.comments.slice(0, commentsShow)}
          onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    }
  ];
  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Article>{product.article}</Article>
      </Header>
      <ProductWrapper>
        <Slider images={product.images} />
        <ProductInfo>
          <ProductInfoLine>
            Цена: <PageActualPrice oldPrice={oldPrice} price={price} />
            {/* oldPrice={product.oldPrice}
              price={product.price} */}
            {/* здесь передаем уже вычисляемую перменную теперь */}
          </ProductInfoLine>
          <ProductInfoLine>
            Количество:{" "}
            <PageCounter
              value={productCount}
              minValue={1}
              onChange={setProductCount}
            />
            {/* и передать его в компонент счётчика через пропс вместе с сеттером состояния. */}
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryDate>{product.delivery}</DeliveryDate>
          </ProductInfoLine>
          <BuyButton size="large" onClick={() => setIsShowPopup(true)}>
            Купить
          </BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
      {/* <Tabs tabs={tabs} /> */}
      {/* Импортируем в ProductPage компонент PopUp
       и выведем его внутри StyledProductPage, 
       передав в props состояние и его сеттер: */}
      <PopUp
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        title="Оформление"
      >
        <Order />
      </PopUp>
    </StyledProductPage>
  );
}

export default ProductCard;

// ЗЫ
// Никогда не забывать проверять путь прохождения
// компонентов. Что откуда импортируется и меняется
// При отладке отслеживать внимательно цепочку
