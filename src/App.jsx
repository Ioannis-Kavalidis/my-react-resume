import React from "react";

const App = () => (
  <div className="app">
    <Navigation />
    <Container fluid className="p-0">
      {/* About Section */}
      <AboutSection />
      <SectionDivider />

      {/* Experience Section */}
      <ExperienceSection />
      <SectionDivider />

      {/* Education Section */}
      <EducationSection />
      <SectionDivider />

      {/* Skills Section */}
      <SkillsSection />
      <SectionDivider />

      {/* Interests Section */}
      <InterestsSection />
      <SectionDivider />

      {/* Awards Section */}
      <AwardsSection />
    </Container>
  </div>
);
export default App;
