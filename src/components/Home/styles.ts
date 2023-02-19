import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 900px)",
};

export const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 15px;
  height: 100vh;
  text-align: center;

  ${media.mobile} {
    width: auto;
    padding: 20px;
  }
`;

export const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 550;
  ${media.mobile} {
    font-size: 18px;
  }
`;

export const BigText = styled.span`
  color: ${(props) => props.color};
  font-size: 60px;
  font-family: "Roboto", sans-serif;
  font-weight: 550;
  ${media.mobile} {
    font-size: 35px;
  }
  margin-bottom: -15px;
`;

export const SmallText = styled.span`
  color: ${(props) => props.color};
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  margin-top: 15px;
  ${media.mobile} {
    font-size: 15px;
  }
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: transparent;
  color: #734bd1;
  border: 1px solid #734bd1;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  transition: all ease-in-out 0.2;
  cursor: pointer;
  :hover {
    background-color: rgba(115, 75, 209, 0.2);
  }
`;
