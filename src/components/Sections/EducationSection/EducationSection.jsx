import React from "react";
import { ResumeItem, ResumeSection, SectionHeading } from "../../common";

const EducationSection = () => (
  <ResumeSection name="education">
    <div className="w-100">
      <SectionHeading heading="Education" />
      <ResumeItem //mb-5
        heading="Digital Career Institute (Berlin) "
        subHeading="Full-Stack Web Development Certificate"
        date="December 2019 - January 2021"
      >
        <div>
          <div>MERN Stack curriculum</div>
        </div>
      </ResumeItem>
      <ResumeItem //mb-5
        heading="Higher Technological Institute of Thessaloniki (Greece) "
        subHeading="Bachelor of Business Administration"
        date="September 2000 - June 2006"
      >
        <div>
          <div>Major - Tourism and Hospitality</div>
        </div>
      </ResumeItem>
    </div>
  </ResumeSection>
);

export default EducationSection;
