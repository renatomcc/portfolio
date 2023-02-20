import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 1000px)",
};

export const Container = styled.div`
  width: 930px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  gap: 15px;
  text-align: center;
  ${media.mobile} {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  position: relative;
  display: flex;
  padding: 10px;
  transition: all ease-in-out 0.5s;
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
  text-align: center;
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
    margin-right: 8px;
    width: 350px;
    height: 1px;
    border-color: rgba(115, 75, 209, 0.4);
    ${media.mobile} {
      width: 100%;
    }
  }
`;

export const MoreProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;

export const StyledButton = styled.button`
  width: 160px;
  height: 40px;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  color: #734bd1;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  background-color: transparent;
  border: 1px solid rgba(115, 75, 209, 0.4);
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  :hover {
    background-color: rgba(115, 75, 209, 0.4);
  }
`;

export const SecondTitle = styled.h3`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 20px;
  ${media.mobile} {
    margin-top: 100px;
  }
`;
