import React from "react";
import { FlexedWrapper } from "../../res/styles/Index";

const AuthLayout = ({ leftChild, rightChild }) => {
  return (
    <>
      <FlexedWrapper justify={"center"} align={"center"}>
        {leftChild}
        {rightChild}
      </FlexedWrapper>
    </>
  );
};

export default AuthLayout;
