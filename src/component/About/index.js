import React from 'react';
import {AboutSection, AboutInfo, AboutTitle, TitleSpan, SmTitle, InfoDesc, InfoAnchor} from'./style.js';
const About = () => {
  return (
    <AboutSection>
            <div className="container">
                <AboutInfo>
                    <AboutTitle><TitleSpan>This is</TitleSpan> Me</AboutTitle>
                    <SmTitle>Creative Director</SmTitle>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoAnchor href="#">explicabo</InfoAnchor> 
                        maxime quibusdam quaerat nihil aliquid aperiam deleniti, 
                        repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
                         explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum.
                          Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
  );
}
export default About;