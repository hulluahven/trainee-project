// import React from "react";
// import Button from "/src/button/button";

// function Comments({ comments }) {
//   return (
//     <div>
//       <h2>Ваши комментарии:</h2>
//       <ul>
//         {comments.map((comment) => (
//           <li key={comment.id}>
//             <b>{comment.author}</b>
//             <p>{comment.text}</p>
//           </li>
//         ))}
//         <Button>Показать ещё</Button>
//       </ul>
//     </div>
//   );
// }
// export default Comments;
import React from "react";

import { Ul } from "/src/elements";
import { CommentsLi, CommentsButton, Name, Text } from "./styled";

function Comments({ comments }) {
  return (
    <>
      <Ul>
        {comments.map((comment) => (
          <CommentsLi key={comment.id}>
            <Name>{comment.author}</Name>
            <Text>{comment.text}</Text>
          </CommentsLi>
        ))}
      </Ul>
      <CommentsButton>Показать ещё</CommentsButton>
    </>
  );
}

export default Comments;
