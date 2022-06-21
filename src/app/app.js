import React from "react";
import { products } from "/src/mock";
import ProductCard from "/src/product-card/product-card";
import Catalog from "/src/catalog/catalog";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "/src/layout/layout";

// на случай несущ страницы 404 (объявим до постановки на верх уров)

function ProductOrNone({ products }) {
  const { article } = useParams();
  const product = products.find(
    (product) => product.article.toString() === article
  );
  return product ? (
    <ProductCard product={product} />
  ) : (
    <h1>404 страница не найдена</h1>
  );
}

// создаем компонент и пропис роутинг, закинем комп вместо product-card
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* добавляем ссылку на каталог передавая в пропс element */}
          <Route index element={<Catalog products={products} />} />
          {/* элемент со страницей каталога */}
          <Route path="product">
            {/* артикул будет вместо id иднтиф-ом */}
            {/* По значению артикула, полученному через react-router,  */}
            {/* будем находить в массиве нужный продукт и отображать его данные на страницу */}
            <Route
              path=":article"
              element={<ProductOrNone products={products} />}
              // элемент со страницей товара или ошибкой
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
