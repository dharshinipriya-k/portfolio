import React from "react";
import styled from "styled-components";

const skills = [
  {
    title: "HTML5",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    title: "CSS3",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    title: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "React JS",
    image:
      "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
  },
  {
    title: "Redux",
    image:
      "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
  {
    title: "Bootstrap",
    image:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/bootstrap-9305875-7694074.png",
  },
  {
    title: "MongoDB",
    image: "https://img.icons8.com/?size=512&id=74402&format=png",
  },
  {
    title: "MySQL",
    image:
      "https://i.pinimg.com/736x/ba/b6/2e/bab62ebf3ffaa165790b56d702c649e8.jpg",
  },
  {
    title: "Node JS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s",
  },
  {
    title: "Express JS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2Cl7TKrJZnqIcySObGhSToz0G8jAHbfryA&s",
  },
  {
    title: "Git",
    image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    title: "Github",
    image:
      "https://2024.allthingsopen.org/wp-content/uploads/2024/05/Gold_GitHub.jpg",
  },
  {
    title: "Postman",
    image: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    title: "Vercel",
    image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
  },
  {
    title: "VSCode",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png",
  },
];

const Container = styled.div`
  margin: 5rem;
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

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
  border: 1px solid;
  border-radius: 25px;
  padding: 8px 10px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 80px;
  max-height: 120px;
  background-color: rgba(17, 25, 35, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding-top: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 75px;
  height: 50px;
`;

const Skills = () => {
  return (
    <>
      <Container id="skills">
        <Title>Skills</Title>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillList>
                <SkillItem>
                  <SkillImage src={skill.image} />
                  <SkillTitle>{skill.title}</SkillTitle>
                </SkillItem>
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Container>
    </>
  );
};

export default Skills;
