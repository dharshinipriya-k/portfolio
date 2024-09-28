import React from "react";
import profile_img from "../../assets/profile_img.jpg";
import "./Hero.css";

function Hero() {
  let handleResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1BB_4klbEVMhgGrNf5_FUsfHcmAoHvZ-r/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "PriyaResume.pdf";
    document.body.appendChild(link);
    link.setAttribute("target","blank");
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero" id="about">
      <img src={profile_img} alt="" />
      <h1>
        I'm
        <span>
          {" "}
          Priyadharshini, <br />{" "}
        </span>
        Full Stack Developer
      </h1>
      <p>
        Highly motivated and passionate individual who is skilled in developing,
        designing and implementing applications and solutions using a range of
        technologies and programming languages.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <a
            href="https://www.linkedin.com/in/priyadharshini-kumaresan-20782a296/"
            target="blank"
          >
            Connect with me
          </a>
        </div>
        <button className="hero-resume" onClick={() => handleResume()}>
          My resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
