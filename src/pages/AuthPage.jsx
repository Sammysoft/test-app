import React from "react";
import AuthLayout from "../components/elements/auth.layout";
import Authform from "../components/forms/auth.form";

import AuthImage from "../res/assets/images/auth.svg";
import { ImageWrapper } from "../res/styles/Index";

const AuthPage = () => {
  return (
    <>
      <AuthLayout
        leftChild={<Authform />}
        rightChild={
          <ImageWrapper
            src={AuthImage}
            alt="auth"
            width={"50%"}
            height={"100%"}
          />
        }
      />
    </>
  );
};

export default AuthPage;
