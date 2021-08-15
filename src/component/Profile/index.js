import React from 'react';
import {ProfileSection, ProfileSkills, ProfileTitle, TitleSpan, ProfileList, ProfileItem, ItemSpan,
  Skills, SkillsDesc, SkillItem, SkillTitle, SkillPerc, Parent, ParentSpan} from './style.js';

const  Profile = () => {
  return (
    <ProfileSection>
    <div className="container">
        <ProfileSkills>
            <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
            <ProfileList>
                <ProfileItem>
                    <ItemSpan>Name</ItemSpan>
                    Ghada Habib
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Birthday</ItemSpan>
                   12/6/1994
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Address</ItemSpan>
                    Ain shams
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Phone</ItemSpan>
                    4444 5555 6666
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Email</ItemSpan>
                    ghada.habib94@gmail.com
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Website</ItemSpan>
                    <ItemSpan web>www.google.com</ItemSpan>
                </ProfileItem>
            </ProfileList>
        </ProfileSkills>
        
        <Skills>
            <ProfileTitle>Some <TitleSpan>skills</TitleSpan></ProfileTitle>
            <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            <SkillItem>
                <SkillTitle>Bootstrap</SkillTitle>
                <SkillPerc>100%</SkillPerc>
                <Parent>
                    <ParentSpan sp1></ParentSpan>
                </Parent>
            </SkillItem>
            
            <SkillItem>
                <SkillTitle>CSS3</SkillTitle>
                <SkillPerc>90%</SkillPerc>
                <Parent>
                    <ParentSpan sp2></ParentSpan>
                </Parent>
            </SkillItem>
            
            <SkillItem>
                <SkillTitle>Photoshop</SkillTitle>
                <SkillPerc>80%</SkillPerc>
                <Parent>
                    <ParentSpan sp3></ParentSpan>
                </Parent>
            </SkillItem>
        </Skills>
        
    </div>
</ProfileSection>
  );
}
export default Profile;