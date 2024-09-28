import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import growit_img from "../../assets/growit.png";
import user_mngmnt from "../../assets/usr_mng.png";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Grow It",
    date: "Feb 2024",
    description:
      "Grow It is an e-commerce web application developed using MERN tech stack.",
    image: growit_img,
    tags: [
      "React JS",
      "Redux",
      "Bootstrap",
      "Express JS",
      "Node JS",
      "MongoDB",
      "JWT",
      "Axios",
      "Formik & Yup",
      "Toastify",
      "nodemailer",
      "cors",
      "Dotenv",
      "react-router",
    ],
    category: "web app",
    github: "https://github.com/dharshinipriya-k/growit_FE",
    webapp: "https://growit-fe.vercel.app/",
  },

  {
    id: 2,
    title: "User Management App",
    date: "Mar 2024",
    description:
      "This application is for user management like a new user can be created, edited and approve/reject. Based on the status of the candidate, their info will be displayed in the dashboard. The data are fetched from mockapi by implementing axios",
    image: user_mngmnt,
    tags: [
      "html5",
      "css3",
      "dom",
      "React JS",
      "Bootstrap",
      "Axios",
      "react-router",
      "mockapi",
      "hooks",
      "useState",
      "useEffect",
    ],
    category: "web app",
    github: "https://github.com/dharshinipriya-k/axiostask",
    webapp: "https://axiostask-rho.vercel.app/dashboard",
  },
];

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
display: flex;
border: 1.5px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
font-size: 16px;
border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Here is a list of some of my projects I have worked.
        </Desc>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
