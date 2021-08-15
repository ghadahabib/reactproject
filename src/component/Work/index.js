import {React, Component} from 'react';
import axios from 'axios';

import {WorkSection, WorkTitle, WorkTitleSpan, Part, PartIcon, PartTitle, PartDesc, Line} from './style.js';
class Work extends Component{
  state = {
    works : []
  }
  componentDidMount = () =>  {
    axios.get('js/data.json').then(res => {this.setState({
      works : res.data.works
    })});
  }
  render(){
    const {works} = this.state;
    const workList = works.map((workItem) => {
      return(
        <Part first={workItem.id} key= {workItem.id}>
            <PartIcon className={workItem.icon_name}></PartIcon>
            <PartTitle>{workItem.title}</PartTitle>
            <Line/>
            <PartDesc>
            {workItem.body}
            </PartDesc>
        </Part>
      )
    })

    return(
          <WorkSection>
            <div className="container">
                <WorkTitle><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>
                {workList}
            </div>
        </WorkSection>
    )
  }
}
export default Work;