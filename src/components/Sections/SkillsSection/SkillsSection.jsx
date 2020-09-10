import React from 'react';
import { ResumeSection, SectionHeading, SectionSubHeading } from '../../common';
import SkillsListItem from './SkillsListItem';
import TechnologiesList from '../../TechnologiesList';

const SkillsSection = () => (
    <ResumeSection name="skills">
        <div className="w-100 text-dark">
            <SectionHeading heading="Skills & Languages" />
            <SectionSubHeading subHeading="Programming Languages &amp; Tools" />
            <TechnologiesList />
            <SectionSubHeading subHeading="Workflow" />
            <ul className="fa-ul text-dark mb-0">
                <SkillsListItem item="Responsive Design" />
                <SkillsListItem item="Debugging" />
                <SkillsListItem item="Agile Development &amp; Scrum" />
                <SkillsListItem item="Git &amp; Github " />
            </ul>{' '}
            <br />
            <SectionSubHeading subHeading="Languages" />
            <ul className="fa-ul text-dark mb-0">
                <SkillsListItem item="Greek:   &nbsp;&nbsp;&nbsp;&nbsp;   Advanced level (Mother tongue)" />
                <SkillsListItem item="English:  &nbsp;  Advanced level (C1)" />
                <SkillsListItem item="German:&nbsp; Intermediate level (B2)" />
            </ul>
        </div>
    </ResumeSection>
);

export default SkillsSection;
