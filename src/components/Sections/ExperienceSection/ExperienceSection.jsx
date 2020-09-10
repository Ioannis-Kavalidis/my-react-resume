import React from 'react';
import { ResumeItem, ResumeSection, SectionHeading } from '../../common';

const ExperienceSection = () => (
    <ResumeSection name="experience">
        <div className="w-100">
            <SectionHeading heading="Experience" />
            <ResumeItem // mb-5
                heading="Food and Beverage Manager"
                subHeading="Montpelier Plantation and Beach (St Kitts &amp; Nevis)"
                date="November 2017 - October 2018">
                <p>
                    • Lead F&amp;B team by attracting, recruiting, training and appraising talented
                    personnel <br />• Responsible od daily operations, satisfaction of guest overall
                    experience and promote the company in the local surroundings
                    <br />• Provide a two-way communication and nurture a cooperative environment
                    betweén management and employees
                </p>
            </ResumeItem>
            <ResumeItem
                heading="Food and Beverage Manager"
                subHeading="Robinson Club Kyllini (Greece)"
                date="November 2015 - November 2017">
                <p>
                    • Take part in drawing the department's annual budget in line with hotel
                    strategy <br />• Manage a team of 100+ employees and accommodate requests of
                    over 1000 guests per day <br />• Organise and supervise the preparation of
                    points of sale according to activity forecasts
                </p>
            </ResumeItem>
            <ResumeItem
                heading="Assistant Food and Beverage Manager"
                subHeading="Robinson Club Kalimera Kriti (Greece), Robinson Club Arosa (Switzerland)"
                date="November 2013 - November 2015">
                <p>
                    • Assist in budget preparation and expense management activities
                    <br />• Responsible for ordering supplies, inventory control and establishing
                    relationships <br />• Create clear patterns and reward systems to cultivate
                    aspiration and personal growth
                </p>
            </ResumeItem>
            {/* <ResumeItem
                heading="Assistant Food and Beverage Manager"
                subHeading="Robinson Club Arosa (Switzerland)"
                date="November 2013 - April 2014">
                <p>
                    • Implement operational strategies to ensure overall productivity and
                    profitability <br />• Responsible for ordering supplies, inventory control and
                    establishing relationships <br />• Create clear patterns and reward systems to
                    cultivate aspiration and personal growth
                </p>
            </ResumeItem>
            <ResumeItem
                heading="Food and Beverage Manager Trainee"
                subHeading="Robinson Club Kalimera Kriti (Greece)"
                date="April 2013 - November 2013">
                <p>
                    • Facilitate the F&amp;B Manager in managing daily operations <br />• Assist in
                    inventory and cost control activities while maintain high quality levels <br />•
                    Conduct team-meetings to discuss ongoing issues, performance and recommendation
                </p>
            </ResumeItem> */}
        </div>
    </ResumeSection>
);

export default ExperienceSection;
