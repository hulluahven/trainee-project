import styled from "styled-components";
import { Li, P } from "/src/elements";
import Title from "/src/title/title";
import Button from "/src/button/button";

export const CommentsTitle = styled(Title)`
  /* margin-bottom: 20px; */
  margin-bottom: ${(props) => props.theme.indent};
`;

export const CommentsLi = styled(Li)`
  /* margin-bottom: 10px; */
  margin-top: ${(props) => props.theme.indent};
`;

export const CommentsButton = styled(Button)`
  margin-top: 20px;
`;

export const Name = styled.span`
  display: block;
  font-weight: bold;
  font-size: 18px;
  /* color: #888; */
  color: ${(props) => props.theme.textColorMuted};
  margin-bottom: 5px;
`;

export const Text = styled(P)`
  font-size: 16px;
  line-height: 1.5;
  /* color: #333; */
  color: ${(props) => props.theme.textColor};
`;
