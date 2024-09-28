import React from "react";
import styled from "styled-components";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    id: 0,
    img: "https://static.vecteezy.com/system/resources/previews/020/336/451/original/infosys-logo-infosys-icon-free-free-vector.jpg",
    role: "System Engineer Trainee",
    company: "Infosys Limited",
    date: "Aug 2022 - Feb 2023",
    desc: "During my Six-month Tenure as an System Engineer Trainee at Infosys Limited in Mysore, I gained proficiency in Front end web development.",
    skills: ["JavaScript", "MySQL", "React"],
    doc: " ",
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

function Experience() {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc style={{ marginBottom: "40px" }}></Desc>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
      <br />
    </Container>
  );
}

export default Experience;
