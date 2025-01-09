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

const Authform = () => {
  const [isPassword, setIsPassword] = useState("password");
  const [loading, setLoading] = useState(Boolean);
  const handleClick = () => {
    setIsPassword(!isPassword);
  };
  return (
    <>
      <Wrapper>
        <Form>
          <HeadText>Welcome to Torsle, 👋🏼</HeadText>
          <CustomText size={"1rem"}>
            Log back in and continue to enjoy our service.
          </CustomText>
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
            {loading ? <div className={"ui active loader"}></div> : "Sign In"}
          </GradientButton>
        </Form>
      </Wrapper>
    </>
  );
};

export default Authform;
