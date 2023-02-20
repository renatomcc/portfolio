import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 900px)",
};

type TextProps = {
  color: string;
};

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  gap: 15px;
  min-height: 100vh;
  text-align: center;

  ${media.mobile} {
    padding: 20px;
  }
`;

export const Text = styled.span<TextProps>`
  color: ${(TextProps) => TextProps.color || "#eee"};
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 550;

  ${media.mobile} {
    font-size: 18px;
  }
`;

export const BigText = styled.span`
  font-size: 60px;
  ${media.mobile} {
    font-size: 35px;
  }
  margin-bottom: -15px;
`;

export const SmallText = styled.span`
  font-size: 20px;
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

  ${media.mobile} {
    width: 100%;
    max-width: 200px;
  }
`;
