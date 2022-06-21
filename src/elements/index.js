export { default as Ul } from "./ul";
export { default as Li } from "./li";
export { default as Button } from "./button";
export { default as P } from "./p";
export { default as H1 } from "./h1";
export { default as Image } from "./image";

/*
Теперь index.js экспортирует 
все файлы из elements. 
Если нужно подключить в приложение 
компонент из директории elements, 
необязательно писать до него 
полный путь:
 достаточно импортировать index.js
  и уже в нём выбрать нужный элемент. 
  Это гораздо удобнее.
*/
