import React, { useState, useRef, useEffect } from "react";
import { Content, TitleButton, Wrapper, ContentWrapper } from "./styled";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  // состояние, которое будет хранить
  // выбранный индекс открытого элемента аккордеона:

  // Но для этого для всех закрытых элементов
  // аккордеона высота ContentWrapper
  //  должна быть выставлена на 0,
  //  а для открытого — равняться высоте его
  //  Content, чтобы отображалось
  //  всё его содержимое.
  //  Поэтому нам понадобится ещё одна переменная
  //  состояния, в которой мы будем хранить высоту
  //  контента активного элемента:
  const [height, setHeight] = useState(0);
  const openContent = useRef(null);
  // Создадим через useRef ссылку, которую в дальнейшем
  //  свяжем с элементом Content открытого элемента:
  useEffect(() => {
    setHeight(openContent.current.offsetHeight);
  }, [height, activeIndex, items]);
  // useEffect, в котором будем сеттить состояние
  // высоты высотой открытого элемента.
  // В качестве зависимостей для useEffect передадим
  // height и activeIndex,
  // поскольку именно от них зависит высота:
  // items. В ней содержится массив элементов аккордеона.
  //  Теперь каждый раз, когда массив элементов меняется,
  //  высота пересчитывается и аккордеон работает корректно:
  return (
    <div>
      {/* {items &&
        items.length &&
        items.map((item, index) => (
          <Wrapper>
            <TitleButton>{item.title}</TitleButton>
            <ContentWrapper>
              <Content>{item.content}</Content>
            </ContentWrapper>
          </Wrapper>
        ))} */}
      {items &&
        items.length &&
        items.map((item, index) =>
          index === activeIndex ? (
            <Wrapper key={item.title}>
              <TitleButton as="span" isActive>
                {item.title}
              </TitleButton>
              <ContentWrapper style={{ height }}>
                <Content ref={openContent}>{item.content}</Content>
                {/* навесим обработчики и привяжем ref к выбранному элементу 
              в DOM-дереве. Через style укажем для ContentWrapper 
              нужную высоту и подставим стили: */}
              </ContentWrapper>
            </Wrapper>
          ) : (
            <Wrapper key={item.title}>
              <TitleButton onClick={() => setActiveIndex(index)}>
                {item.title}
              </TitleButton>
              <ContentWrapper>
                <Content>{item.content}</Content>
              </ContentWrapper>
            </Wrapper>
          )
        )}
      {/* index === activeIndex ? (
              //открытый элемент
          ) : (
              //закрытый элемент
          ) */}
      {/* // Внутрь map поместим ветвление, 
    // ведь в зависимости от того, открыт или закрыт элемент
    //  аккордеона, его нужно отрисовывать по-разному: */}
    </div>
  );
}

export default Accordion;
