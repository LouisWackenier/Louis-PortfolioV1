import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';
import styled from 'styled-components';

const Navbar = () => {

  return (
    <Animator>
      <NavbarContainer>
      
      </NavbarContainer>
    </Animator>
  )
}

export default Navbar

const NavbarContainer = styled.div`
     text-align: right;
     margin-right: 30px;
     cursor: pointer;
`;

const TextContainer = styled.div`
    width: 75px;
    font-size: 1rem;
    padding: 10px 20px 5px 10px;
    display: inline-block;
    transition: all 0.5s ease-in;
     
    &:hover {
      border-bottom: 2px solid white;
      border-right: 2px solid white;
    }
`;