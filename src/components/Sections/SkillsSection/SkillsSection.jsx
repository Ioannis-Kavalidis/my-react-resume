import React from "react";
import { ResumeSection, SectionHeading, SectionSubHeading } from "../../common";
import SkillsListItem from "./SkillsListItem";
import TechnologiesList from "../../TechnologiesList";

const SkillsSection = () => (
  <ResumeSection name="skills">
    <div className="w-100 text-danger">
      <SectionHeading heading="Skills & Languages" />
      <SectionSubHeading subHeading="Programming Languages &amp; Tools" />
      <TechnologiesList />
      <SectionSubHeading subHeading="Workflow" />
      <ul className="fa-ul text-danger mb-0">
        <SkillsListItem item="Responsive Design" />
        <SkillsListItem item="Debugging" />
        <SkillsListItem item="Agile Development &amp; Scrum" />
        <SkillsListItem item="Git &amp; Github " />
      </ul>{" "}
      <br />
      <SectionSubHeading subHeading="Languages" />
      <ul className="fa-ul text-danger mb-0">
        <SkillsListItem item="Greek:  &nbsp;&nbsp;&nbsp;  Mother tongue" />
        <SkillsListItem item="English: &nbsp;  Proficient level" />
        <SkillsListItem item="German:    Advanced level" />
      </ul>
    </div>
  </ResumeSection>
);

export default SkillsSection;
