import React from 'react';
import { Link } from 'react-router-dom';
import {NavbarSection, Logo, LogoText, UlList, ListItem, ListItemAnchor} from'./style.js';
const  Navbar = () => {
  return (
    <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>

                <UlList>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><ListItemAnchor href="#">Work</ListItemAnchor></ListItem>
                    <ListItem><ListItemAnchor href="#">Portfolio</ListItemAnchor></ListItem>
                    <ListItem><ListItemAnchor href="#">Resume</ListItemAnchor></ListItem>
                    <ListItem><ListItemAnchor href="#">About</ListItemAnchor></ListItem>
                    <ListItem><Link to="/contact">Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>   
  );
}
export default Navbar;