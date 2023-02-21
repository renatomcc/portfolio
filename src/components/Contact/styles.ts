import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 900px)",
};

export const Container = styled.div`
  width: 900px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  gap: 55px;
  text-align: left;
  margin-top: 100px; 
  ${media.mobile} {
    width: 100%;
    margin-bottom: 100px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: left;
  align-items: center;
  justify-content: center;
  white-space: normal;
  ${media.mobile} {
    width: 80%;
  }
  h1 {
    color: #734bd1;
    font-size: 30px;
    font-family: "Rokkitt", serif;
    font-weight: 550;
    white-space: nowrap;
    font-weight: bold;
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.6);
  }
  hr {
    margin-left: 12px;
    margin-right: 12px;
    width: 200px;
    height: 1px;
    border-color: rgba(115, 75, 209, 0.4);
    ${media.mobile} {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 10px;
  text-align: center;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  transition: all ease-in-out 0.2s;
  svg {
    color: #734bd1;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    :hover {
      color: #c0a5ff;
      transform: translateY(-6px);
    }
    path {
    }
  }
`;
