import React from "react";
import { ResumeSection } from "../../common";
import SocialIcons from "../../SocialIcons";

const AboutSection = () => (
  <ResumeSection name="about">
    <div className="w-100">
      <h1 className="mb-0">
        Ioannis
        <span className="text-primary">Kavalidis</span>
      </h1>
      <div className="subHeading mb-5">
        Hallandstrasse 46, Berlin, Germany &nbsp;·&nbsp; +49-(176)-42008433
        &nbsp;·&nbsp;{" "}
        <a href="mailto:name@email.com">kavalidisioannis@yahoo.gr</a>
      </div>
      <p className="lead text-dark mb-5">
        Aspiring Front-End Web Developer with previous 10+ years of experience
        in Tourism Industry and now acquiring a new career in Tech with a strong
        will, positive attitude, learning mentality and hands-on personality.
        Combining forward-thinking and enthusiasm with well-developed business
        acumen to promote new product launches and events into successful
        performance outcomes.
      </p>
      <SocialIcons />
    </div>
  </ResumeSection>
);

export default AboutSection;
