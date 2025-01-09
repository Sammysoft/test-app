import React from "react";
import AuthLayout from "../components/elements/auth.layout";
import OnboardForm from "../components/forms/onboard.form";

import OnboardImage from "../res/assets/images/onboard.svg";
import { ImageWrapper } from "../res/styles/Index";

const OnboardPage = () => {
  return (
    <>
      <AuthLayout
        leftChild={<OnboardForm />}
        rightChild={
          <ImageWrapper
            src={OnboardImage}
            alt="auth"
            width={"50%"}
            height={"100%"}
          />
        }
      />
    </>
  );
};

export default OnboardPage;
