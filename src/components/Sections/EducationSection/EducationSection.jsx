import React from 'react';
import { ResumeItem, ResumeSection, SectionHeading } from '../../common';

const EducationSection = () => (
    <ResumeSection name="education">
        <div className="w-100">
            <SectionHeading heading="Education" />
            <ResumeItem //mb-5
                heading="Digital Career Institute (Berlin) "
                subHeading="Full-Stack Web Development Certificate"
                date="December 2019 - January 2021">
                <div>
                    <div>
                        • Acquire, improve and sharpen the skills of being a full-stack web
                        developer <br />• Learned and worked with HTML, CSS, JavaScript, ReactJS,
                        NodeJS among others
                        <br />• Created many small and medium scale size projects throughout out
                        this year, some of them are:
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- My React Resume site,
                        built with HTML, CSS, ReactJS and Bootstrap
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Blackjack, a game built
                        with HTML, CSS and vanilla JavaScript
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- To Do List, a small app
                        built with HTML, CSS and ReactJS
                    </div>
                </div>
            </ResumeItem>
            <br />
            <ResumeItem //mb-5
                heading="Higher Technological Institute of Thessaloniki (Greece) "
                subHeading="Bachelor of Business Administration"
                date="September 2000 - June 2006">
                <div>
                    <div>
                        • Majored in Tourism & Hospitality has provided me with a deep understanding
                        on both sectors <br />• Sharpened my business and entrepreneurial spirit
                        while building my overall knowledge <br />• Learned how to become proficient
                        and promote my personal brand in the industry
                    </div>
                </div>
            </ResumeItem>
        </div>
    </ResumeSection>
);

export default EducationSection;
