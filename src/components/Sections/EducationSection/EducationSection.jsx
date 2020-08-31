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
          <div>
            • Acquire, improve and master the skills of being a full-stack web
            developer <br />• Created many small and medium scale size projects
            throughout out this year <br />• Enjoy working with JavaScript,
            vanilla or with frameworks like ReactJS
          </div>
        </div>
      </ResumeItem>
      <br />
      <ResumeItem //mb-5
        heading="Higher Technological Institute of Thessaloniki (Greece) "
        subHeading="Bachelor of Business Administration"
        date="September 2000 - June 2006"
      >
        <div>
          <div>
            • Majored in Tourism and Hospitality <br />• Sharpened my business
            and entrepreneurial spirit while building my overall knowledge{" "}
            <br />• Learned how to become proficient and promote the benefits of
            hospitality to its full extend
          </div>
        </div>
      </ResumeItem>
    </div>
  </ResumeSection>
);

export default EducationSection;
