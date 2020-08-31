import React from "react";
import { ResumeSection, SectionHeading } from "../../common";
import AwardsListItem from "./AwardsListItem";

const AwardsSection = () => (
  <ResumeSection name="awards">
    <div className="w-100 text-dark">
      <SectionHeading heading="Awards &amp; Certifications" />
      <ul className="fa-ul mb-0">
        <AwardsListItem item="Computer Science Principles: Programming - LinkedIn Certification" />
        <AwardsListItem item="Web Development Foundations - LinkedIn Certification" />
        <AwardsListItem item="Self and Time Management - Robinson Club" />
        <AwardsListItem item="Executing coaching - Robinson Club" />
        <AwardsListItem item="How to build a Start-up - Udacity" />
        <AwardsListItem item="Developing innovative ideas for new companies - University of Maryland" />
        <AwardsListItem item="Entrepreneurial and Business iniatives -Coursera " />
      </ul>
    </div>
  </ResumeSection>
);

export default AwardsSection;
