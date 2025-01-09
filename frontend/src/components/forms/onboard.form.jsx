import React, { useState } from "react";
import styled from "styled-components";
import { CustomText, HeadText } from "../../res/styles/Index";
import { InputField } from "../inputs/Index";
import { GradientButton } from "../buttons/Index";
// import { toast } from "react-toastify";
// import { Loader } from "semantic-ui-react";

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.div`
  width: 75%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const OnboardForm = () => {
  const [isPassword, setIsPassword] = useState("password");
  const [loading, setLoading] = useState(Boolean);
  const handleClick = () => {
    setIsPassword(!isPassword);
  };
  return (
    <>
      <Wrapper>
        <Form>
          <HeadText>Hello, 👋🏼</HeadText>
          <CustomText size={"1rem"}>
            Create an account to start enjoying our service.
          </CustomText>
          <InputField
            type={"text"}
            isPassword={false}
            width={"70%"}
            placeholder="Enter your full name"
          />
          <InputField
            type={"text"}
            isPassword={false}
            width={"70%"}
            placeholder="Enter your email"
          />
          <InputField
            handleClick={handleClick}
            type={"password"}
            isPassword={isPassword}
            width={"70%"}
            placeholder="Enter your password"
          />
          <GradientButton
            color1={"#0000FF"}
            color2={"#0000FF80"}
            width={"70%"}
            // onClick={() => toast.success("this works, yea!")}
          >
            {/* {loading ? <Loader active inline="centered" /> : "Sign In"} */}
          </GradientButton>
        </Form>
      </Wrapper>
    </>
  );
};

export default OnboardForm;
