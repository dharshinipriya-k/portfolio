import React from "react";
import styled from "styled-components";

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
const SocialMediaContainer = styled.div`
  display: flex;
  gap: 30px;
`;

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Wrapper>
            <SocialMediaContainer>
              <a
                href="https://linkedin.com/in/priyadharshini-kumaresan-20782a296"
                target="blank"
              >
                <i
                  className="fa-brands fa-linkedin fa-xl"
                  style={{ color: "rgba(123, 159, 224, 0.83)" }}
                  id="social_icons"
                ></i>
              </a>
              <a href="https://github.com/dharshinipriya-k" target="blank">
                <i
                  className="fa-brands fa-github fa-xl"
                  style={{ color: "rgba(123, 159, 224, 0.83)" }}
                  id="social_icons"
                ></i>
              </a>
            </SocialMediaContainer>
            &copy;{new Date().getFullYear()} Powered by Priya
          </Wrapper>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
