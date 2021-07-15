import styled from 'styled-components/native';

export const Canvas = styled.View`
  width: 50%;
  height: 100px;
  background-color: #bd93f9;
  border-top-left-radius: ${(props: any) =>
    props.topLeftRadius ? props.topLeftRadius : '0'};
  border-top-right-radius: ${(props: any) =>
    props.topRightRadius ? props.topRightRadius : '0'};
  border-bottom-right-radius: ${(props: any) =>
    props.bottomRightRadius ? props.bottomRightRadius : '0'};
  border-bottom-left-radius: ${(props: any) =>
    props.bottomLeftRadius ? props.bottomLeftRadius : '0'};
`;
