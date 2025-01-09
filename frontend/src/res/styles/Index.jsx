import styled from "styled-components";

export const FlexedWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flex ? props.flex : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export const WrapFlexedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.flex ? props.flex : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => (props.width ? props.width : "100%")};
  column-gap: ${(props) => (props.column ? props.column : "30px")};
  row-gap: ${(props) => (props.row ? props.row : "30px")};
`;

export const HeadText = styled.div`
font-size: 2rem;
font-weight: 600;
text-align: left;
width: 100%;
`;

export const CustomText = styled.div`
font-size: ${(props)=> props.size? props.size: "1.2rem"};
font-weight: 400;
text-align: left;
width: 100%;
`

export const ImageWrapper = styled.img`
width: ${(props)=> props.width ? props.width: "100%"};
height: ${(props)=> props.height ? props.height: "100%"};
object-fit: center;
`;