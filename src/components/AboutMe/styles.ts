import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 1000px)",
};

export const Container = styled.div`
  width: 900px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto", sans-serif;
  gap: 15px;
  text-align: left;

  ${media.mobile} {
    width: auto;
    margin-bottom: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 10px;
  ${media.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: left;
  align-items: center;
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
  }
  hr {
    margin-left: 8px;
    width: 350px;
    height: 1px;
    border-color: rgba(115, 75, 209, 0.4);
    ${media.mobile} {
      width: 100%;
    }
  }
`;

export const ContentText = styled.div`
  max-width: 60%;
  font-weight: 300;
  p {
    margin-top: 10px;
  }
  ${media.mobile} {
    text-align: center;
    max-width: 90%;
    padding: 5px;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  font-weight: 300;
  img {
    max-width: 60%;
    ${media.mobile} {
      max-width: 250px;
    }
  }
  ${media.mobile} {
    max-width: 100%;
    padding: 50px;
  }
`;

export const SkillsContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: justify;
  li {
    list-style: none;
    font-size: 15px;
    color: #734bd1;
    font-weight: 400;
  }
  li::before {
    content: "▹";
  }
`;
