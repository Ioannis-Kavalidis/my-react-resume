import React from 'react';
import { ResumeSection, SectionHeading } from '../../common';

const InterestsSection = () => (
    <ResumeSection name="interests">
        <div className="w-100 text-dark">
            <SectionHeading heading="Interests" />
            <p>
                Apart from being a web developer, I enjoy reading books and articles on self
                improvement, business development and entrepreneurship, traveling solo and with
                friends and love bike riding. Participate in various social, professional and
                cultural events such as: EXPO, TEDx, Meet Up, Startup Blink, Open Coffee etc.
            </p>
            <p className="mb-0">
                Favorite book: “The seven habits of highly effective people” by Stephen R. Covey{' '}
                <br />
                Currently reading: “Abundance: The future is better than you think” by Peter
                Diamandis
            </p>
        </div>
    </ResumeSection>
);

export default InterestsSection;
