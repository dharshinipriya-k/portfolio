import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import certificate from "../../assets/guvi_certificate.png";

const certificationDetails = [
  {
    desc: "",
  },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const RightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 45px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const Img = styled.img`
  border-radius: 15%;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 450px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SectionTitle = styled.div`
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

function Certification() {
  return (
    <>
      <div id="certification">
        <SectionTitle>Certifications</SectionTitle>
        <Container>
          <InnerContainer>
            <LeftContainer>
              <Title>
                Full Stack Web Development [MERN]
                <br />
              </Title>
              Guvi Geeks Networks, IIT Madras Incubated Company <br />
              Oct 2023 - Dec 2023
              <Span>
                {/* <Typewriter
                      options={{
                       
                        autoStart: true,
                        loop: true,
                      }}
                    /> */}
              </Span>
            </LeftContainer>
            <RightContainer>
              <Img src={certificate} alt="certificate-img" />
            </RightContainer>
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}

export default Certification;
