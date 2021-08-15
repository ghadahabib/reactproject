import React , {useState, useEffect} from 'react';
import axios from 'axios';
import  {PortifolioSection, PortfolioTitle, TitleSpan, PortfolioList, PortfolioItem,
    ImgWrapper, ImgItem, ImgOverlay, OverlaySpan} from './style.js';

const  Portifolio = () => {

    const [imges, setImges] = useState([]);

    useEffect( () => {
        axios.get('js/data.json').then(res => {setImges(res.data.portfolio)});
    }, [] );

    const imgItemes = imges.map( (imgitem) => {
        return(
            <ImgWrapper key={imgitem.id}>
            <ImgItem src={imgitem.image} alt=""/>
                <ImgOverlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </ImgOverlay>
            </ImgWrapper>
        )
    })

  return (
    <PortifolioSection>
            <PortfolioTitle><TitleSpan>My</TitleSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem  active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {imgItemes}
            </div>
            
        </PortifolioSection>
  );
}
export default Portifolio;