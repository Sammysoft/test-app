import React, { useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: 2vh 0px 2vh 0px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px;
  font-size: 16px;
  border: 1px solid ${({ isActive }) => (isActive ? "blue" : "grey")};
  border-radius: 10px;
  background-color: transparent;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: deepblue;
  }
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: grey;

  &:hover {
    color: black;
  }
`;

export const InputField = ({
  type = "text",
  placeholder = "Enter text",
  handleClick,
  isPassword,
  width,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledInputContainer width={width}>
      <StyledInput
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        isActive={isActive}
      />
      {type === "password" && (
        <EyeIcon onClick={handleClick}>
          {isPassword ? <FaEyeSlash /> : <FaEye />}
        </EyeIcon>
      )}
    </StyledInputContainer>
  );
};
