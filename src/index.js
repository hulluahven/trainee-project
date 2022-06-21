import ReactDOM from "react-dom";
// import { products } from "./mock";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import App from "./app/app";
// при роутинге вкл нов комп
// import ProductCard from "/src/product-card/product-card";
// здесь подключим саму страницу с компонентами
// до подкл темы
// const rootElement = document.getElementById("root");
// ReactDOM.render(<ProductCard product={product} />, rootElement);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <ProductCard product={product} /> */}
    {/* меняем моки на массив продуктов и прописывае пропс массива */}
    {/* <ProductCard product={products[0]} showInfoInAccordion /> */}
    <App />
  </ThemeProvider>,
  rootElement
);
