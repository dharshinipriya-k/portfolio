import React from "react";
import styled from "styled-components";
import EducationCard from "./EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const education = [
  {
    id: 1,
    img: "https://sssacademy.allegiance-educare.in/storage/uploads/colleges/thumb/250_250_1454561136images.jpeg",
    school: "University College of Engineering, Villupuram [Anna University]",
    date: "Aug 2018 - June 2022",
    grade: "8.38 CGPA",
    //   desc: "I am Engineering Graduate Specialized in Computer Science and Engineering at University College of Engineering, Villupuram",
    degree: "Bachelor of Engineering - B.E, Computer Science and Engineering",
  },
  {
    id: 2,
    img: "https://static.wixstatic.com/media/3d6982_22b0e8d6115241a4a9a29f69124ff8ef~mv2.png/v1/crop/x_1369,y_1300,w_1530,h_1196/fill/w_266,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Adharsh%20Vidhyalaya%20.png",
    school: "Ideal Higher Secondary School, Erode",
    date: "June 2017 - Mar 2018",
    grade: "88.25%",
    //   desc: "I completed my class 12 high school education at Ideal Higer Secondary School, where I studied Biology with Mathematics group.",
    degree: "HSC(XII), Bio-Maths",
  },
  {
    id: 3,
    img: "https://lh4.googleusercontent.com/proxy/vE9rRvlLe6diOhkzYtKePcwe4lK-NxtJ6zbBC7sxEHHYTIAl-GKqUtnlTSckXS8zS7RCNa1zkA",
    school: "John Dewey Matric Hr Sec School, Villupuram",
    date: "Jun 2015 - Mar 2016",
    grade: "95.4%",
    //   desc: "I completed my class 10 education at John Dewey Matric Hr Sec School, Villupuram.",
    degree: "SSLC(X)",
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

function Education() {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
}

export default Education;
