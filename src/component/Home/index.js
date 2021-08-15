import React from 'react';
import {HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDescription, HomeDesSpan,
  HomeBtn} from'./style.js';
const Home = () => {
  return (
    <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Ghada Habib</HomeTitle>
                    <HomeInfo >Creative Director</HomeInfo>
                    <HomeDescription>
                        Iam a professional <HomeDesSpan>UX Designer</HomeDesSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDescription>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
  );
}
export default Home;