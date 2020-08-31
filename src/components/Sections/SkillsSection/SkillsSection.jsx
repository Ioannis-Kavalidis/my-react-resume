import React from "react";
import { ResumeSection, SectionHeading, SectionSubHeading } from "../../common";
import SkillsListItem from "./SkillsListItem";
import TechnologiesList from "../../TechnologiesList";

const SkillsSection = () => (
  <ResumeSection name="skills">
    <div className="w-100">
      <SectionHeading heading="Skills" />
      <SectionSubHeading subHeading="Programming Languages &amp; Tools" />
      <TechnologiesList />
      <SectionSubHeading subHeading="Workflow" />
      <ul className="fa-ul mb-0">
        <SkillsListItem item="Responsive Design" />
        <SkillsListItem item="Debugging" />
        <SkillsListItem item="Agile Development &amp; Scrum" />
        <SkillsListItem item="Git &amp; Github " />
      </ul>
    </div>
  </ResumeSection>
);

export default SkillsSection;
