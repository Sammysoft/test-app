
import styled from "styled-components";

export const GradientButton = styled.button`
  background: ${({ color1, color2 }) =>
    `linear-gradient(45deg, ${color1}, ${color2})`};
  border: none;
  border-radius: 8px;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  width: ${(props)=> props.width ? props.width : "100%"};
  

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

