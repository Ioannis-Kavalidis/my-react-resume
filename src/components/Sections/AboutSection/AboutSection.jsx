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
        Hallandstrasse 46 · Berlin, Berlin · +49-(176)- 42008433 ·
        <a href="mailto:name@email.com">kavalidisioannis@yahoo.gr</a>
      </div>
      <p className="lead mb-5">
        Aspiring Web-Developer with a strong will, positive attitude, learning
        mentality and hands-on personality. Iterate different approaches into
        business strategy in order to foster collaborative thinking to further
        the overall value proposition of any task at hand.
      </p>
      <SocialIcons />
    </div>
  </ResumeSection>
);

export default AboutSection;
