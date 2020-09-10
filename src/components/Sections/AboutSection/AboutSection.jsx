import React from 'react';
import { ResumeSection } from '../../common';
import SocialIcons from '../../SocialIcons';

const AboutSection = () => (
    <ResumeSection name="about">
        <div className="w-100">
            <h1 className="mb-0">
                Ioannis
                <span className="text-primary">Kavalidis</span>
            </h1>
            <div className="subHeading mb-5">
                Hallandstrasse 46, Berlin, Germany &nbsp;·&nbsp; +49-(176)-42008433 &nbsp;·&nbsp;{' '}
                <a href="mailto:name@email.com">kavalidisioannis@yahoo.gr</a>
            </div>
            <p className="lead text-dark mb-5">
                Aspiring Front-End Web Developer with 10+ years previous experience in Tourism &
                Hospitality and now acquiring a new career in Tech industry. Combining my business
                acumen and leadership capabilities acquired by working as a manager for many years
                in high-stress environments, I am fully capable to promote new product launches and
                events into successful performance outcomes.
            </p>
            <SocialIcons />
        </div>
    </ResumeSection>
);

export default AboutSection;
