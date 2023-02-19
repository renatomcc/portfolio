import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 1000px)",
};

export const Container = styled.div`
  width: 900px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  gap: 15px;
  text-align: left;
  ${media.mobile} {
    width: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  position: relative;
  display: flex;
  padding: 10px;
  ${media.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: right;
  align-items: center;

  ${media.mobile} {
    width: 80%;
  }
  h1 {
    color: #734bd1;
    font-size: 30px;
    font-family: "Rokkitt", serif;
    font-weight: 550;
    white-space: nowrap;
  }
  hr {
    margin-right: 8px;
    width: 350px;
    height: 1px;
    border-color: rgba(115, 75, 209, 0.4);
    ${media.mobile} {
      width: 100%;
    }
  }
`;
