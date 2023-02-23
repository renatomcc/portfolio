import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 900px)",
};

type TextProps = {
  color: string;
};

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  gap: 15px;
  text-align: center;

  ${media.mobile} {
    height: 110vh;
    padding: 20px;
  }
`;

export const Text = styled.span<TextProps>`
  font-size: 25px;
  color: ${(TextProps) => TextProps.color || "#eee"};
  font-family: "Roboto", sans-serif;
  font-weight: 550;

  ${media.mobile} {
    font-size: 18px;
  }
`;

export const BigText = styled.span`
  color: ${(TextProps) => TextProps.color || "#eee"};
  font-family: "Roboto", sans-serif;
  font-weight: 550;
  font-size: 60px;
  ${media.mobile} {
    font-size: 35px;
  }
  margin-bottom: -15px;
`;

export const SmallText = styled.span`
  color: ${(TextProps) => TextProps.color || "#eee"};
  font-family: "Roboto", sans-serif;
  font-weight: 550;
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
  border: 2px solid #734bd1;
  border-radius: 8px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #734bd1;
    font-family: "Roboto", sans-serif;
    font-size: 17px;
  }
  :hover {
    background-color: rgba(115, 75, 209, 0.2);
  }

  ${media.mobile} {
    width: 100%;
    max-width: 200px;
  }
`;
