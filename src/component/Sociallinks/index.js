import React , {Component}from 'react';
import {SocialSection, SocialItem, SocialIcon, SocialITemInfo, Info1, Info2} from'./style.js';
import axios  from 'axios';
class  Social extends React.Component{

  state = {
    socialItems : []
  }

  componentDidMount = () =>  {
    axios.get('js/data.json').then(res => {this.setState({
      socialItems : res.data.social
    })});
  }

  render() {
    const {socialItems} = this.state;
    const socialList = socialItems.map((social) => {
      return(
        <SocialItem item ={social.id} key={social.id}>
            <SocialIcon className={social.icon}></SocialIcon>
            <SocialITemInfo>
                <Info1>{social.title}</Info1>
                <Info2>{social.body}</Info2>
            </SocialITemInfo>
        </SocialItem>
      )
    })
    return (
      <SocialSection>
        {socialList}
      </SocialSection>
    );
  }
}
export default Social;