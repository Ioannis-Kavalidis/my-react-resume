import React from "react";
import { ResumeSection, SectionHeading } from "../../common";

const InterestsSection = () => (
  <ResumeSection name="interests">
    <div className="w-100 text-dark">
      <SectionHeading heading="Interests" />
      <p>
        Apart from being a web developer, I enjoy reading books and articles on
        self improvement, business development and entrepreneurship, traveling
        solo and with friends. Participate in various social, professional and
        cultural events such as: “EXPO Athens”, TEDx Athens, Meet Up, Startup
        Blink, Open Coffee etc.
      </p>
      <p className="mb-0">
        Favourite book: “The seven habits of highly effective people” by Stephen
        R. Covey Current reading: “Abundance: The future is better than you
        think” by Peter Diamandis
      </p>
    </div>
  </ResumeSection>
);

export default InterestsSection;
