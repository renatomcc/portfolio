import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 1000px)",
};

interface DescriptionProps {
  descriptionPosition: string;
}

interface ImageProps {
  imagePositionRight: number | string;
  imagePositionLeft: number | string;
}

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

export const Content = styled.div<DescriptionProps>`
  width: 100%;
  position: relative;
  display: flex;
  padding: 10px;
  justify-content: ${(DescriptionProps) =>
    DescriptionProps.descriptionPosition};
  ${media.mobile} {
    flex-direction: column;
    align-items: center;
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
    margin-left: 8px;
    width: 350px;
    height: 1px;
    border-color: rgba(115, 75, 209, 0.4);
    ${media.mobile} {
      width: 100%;
    }
  }
`;

export const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  a {
    width: 500px;
    ${media.mobile} {
      width: 80%;
    }
  }
  img {
    width: 500px;
    filter: opacity(50%);
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    ${media.mobile} {
      width: 100%;
      filter: opacity(100%);
    }
    &:hover {
      filter: opacity(100%);
    }
  }
`;

export const ProjectDescription = styled.div<ImageProps>`
  position: absolute;
  padding: 20px;
  width: 500px;
  right: ${(ImageProps) => ImageProps.imagePositionRight};
  left: ${(ImageProps) => ImageProps.imagePositionLeft};
  top: 50px;
  background-color: #011228;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 10px rgb(1, 18, 40);
  ${media.mobile} {
    top: 0px;
    padding: 5px;
    width: 79%;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(1, 18, 40, 0.95);
  }
  h3 {
    font-size: 28px;
    padding: 10px;
    ${media.mobile} {
      font-size: 22px;
      padding: 2px;
    }
  }
  p {
    text-align: center;
    padding: 10px;
    ${media.mobile} {
      font-size: 15px;
      padding: 2px;
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    color: #734bd1;
    line-height: 10px;
    ${media.mobile} {
      font-size: 15px;
      width: 100%;
      justify-content: center;
      li {
        padding: 4px;
      }
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  margin-top: 7px;
  display: flex;
  justify-content: center;
  gap: 10px;
  transition: all ease-in-out 0.2s;
  svg {
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    color: #734bd1;
    :hover {
      color: #c0a5ff;
      transform: translateY(-3px);
    }
  }
`;
