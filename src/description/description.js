// import React from "react";
// import Button from "/src/button/button";

// function Description({ text }) {
//   return (
//     <div>
//       <h2>Описание</h2>
//       {text}
//       <Button type="button">Подробнее</Button>
//     </div>
//   );
// }

// export default Description;
import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text, onShowMore, isShowAllDescription }) {
  return (
    <>
      {text}
      {/* <DescriptionButton>Подробнее</DescriptionButton> */}
      <DescriptionButton onClick={onShowMore}>
        {isShowAllDescription ? "Cкрыть" : "Подробнее"}
      </DescriptionButton>
    </>
  );
}

export default Description;
