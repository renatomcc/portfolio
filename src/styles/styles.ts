import { animated } from "react-spring";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #05172e;
`;

export const Content = styled(animated.div)`
  width: 100%;
  height: auto;
  background-color: #05172e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;
