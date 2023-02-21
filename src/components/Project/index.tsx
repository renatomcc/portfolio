import React from "react";
import { Buttons, Container, Icon, Title } from "./styles";
import { VscGithub } from "react-icons/vsc";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillFolderAdd } from "react-icons/ai";

export type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  websiteLink: string | null;
};

const Project = (props: ProjectProps) => {
  const { title, description, technologies, githubLink, websiteLink } = props;
  return (
      <Container href={websiteLink ? websiteLink : githubLink} target="_blank">
        <div>
          <Icon>
            <AiFillFolderAdd size={60} />
          </Icon>
          <Buttons>
            <a
              target="_blank"
              href={githubLink}
              rel="noreferrer"
              aria-label="GitHub Link"
            >
              <VscGithub size={24} />
            </a>
            {websiteLink ? (
              <a
                target="_blank"
                href={websiteLink}
                rel="noreferrer"
                aria-label="Website Link"
              >
                <BiLinkExternal size={24} />
              </a>
            ) : null}
          </Buttons>
        </div>
        <Title>{title}</Title>
        <p>{description}</p>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </Container>
  );
};

export default Project;
