import React from "react";
import { ResumeItem, ResumeSection, SectionHeading } from "../../common";

const ExperienceSection = () => (
  <ResumeSection name="experience">
    <div className="w-100">
      <SectionHeading heading="Experience" />
      <ResumeItem // mb-5
        heading="Food and Beverage Manager"
        subHeading="Montpelier Plantation and Beach (St Kitts &amp; Nevis)"
        date="November 2017 - October 2018"
      >
        <p>
          • Lead F&amp;B team by attracting, recruiting, training and appraising
          talented personnel <br />• Identify customers needs and respond
          proactively to all of their concerns <br />• Provide a two-way
          communication and nurture a cooperative environment
        </p>
      </ResumeItem>
      <ResumeItem
        heading="Food and Beverage Manager"
        subHeading="Robinson Club Kyllini (Greece)"
        date="November 2015 - November 2017"
      >
        <p>
          • take part in drawing the department's annual budget in line with
          hotel strategy <br />• Validate recruitment processes as also enhance
          team spirit and aspirations of growth <br />• Organise and supervise
          the preparation of points of sale according to activity forecasts
        </p>
      </ResumeItem>
      <ResumeItem
        heading="Assistant Food and Beverage Manager"
        subHeading="Robinson Club Kalimera Kriti (Greece)"
        date="November 2014 - November 2015"
      >
        <p>
          • Assist in budget preparation and expense management activities
          <br />• Responsible for ordering supplies, inventory control and
          establishing relationships <br />• Foster a work-ethic of trust,
          collaboration and synergy
        </p>
      </ResumeItem>
      <ResumeItem
        heading="Assistant Food and Beverage Manager"
        subHeading="Robinson Club Arosa (Switzerland)"
        date="November 2013 - April 2014"
      >
        <p>
          • Implement operational strategies to ensure overall productivity and
          profitability <br />• Responsible for ordering supplies, inventory
          control and establishing relationships <br />• Create clear patterns
          and reward systems to cultivate aspiration and personal growth
        </p>
      </ResumeItem>
      <ResumeItem
        heading="Food and Beverage Manager Trainee"
        subHeading="Robinson Club Kalimera Kriti (Greece)"
        date="April 2013 - November 2013"
      >
        <p>
          • Facilitate the F&amp;B Manager in managing daily operations <br />•
          Assist in inventory and cost control activities while maintain high
          quality levels <br />• Conduct team-meetings to discuss about ongoing
          issues, performance and recommendation
        </p>
      </ResumeItem>
    </div>
  </ResumeSection>
);

export default ExperienceSection;
