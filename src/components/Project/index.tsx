import React from "react";
import {
  Container,
  Content,
  ProjectImage,
  ProjectDescription,
  Buttons,
} from "./styles";

import { VscGithub } from "react-icons/vsc";
import { BiLinkExternal } from "react-icons/bi";

type ProjectProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  descPosition: string;
  imgPositionLeft: number | string;
  imgPositionRight: number | string;
  githubLink: string;
  websiteLink: string;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  technologies,
  descPosition,
  imgPositionLeft,
  imgPositionRight,
  websiteLink,
  githubLink,
}) => {
  return (
    <Container>
      <Content descriptionPosition={descPosition}>
        <ProjectImage>
          <a href={websiteLink} target="_blank">
            <img src={imageSrc} alt={imageAlt} />
          </a>
        </ProjectImage>
        <ProjectDescription
          imagePositionLeft={imgPositionLeft}
          imagePositionRight={imgPositionRight}
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <Buttons>
            <a target="_blank" href={githubLink}>
              <VscGithub size={24} />
            </a>
            <a target="_blank" href={websiteLink}>
              <BiLinkExternal size={24} />
            </a>
          </Buttons>
        </ProjectDescription>
      </Content>
    </Container>
  );
};

export default Project;
