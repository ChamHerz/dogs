import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-flex; /* Para que funcione justify-content */
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #b17c54;
  color: white;
  height: 50px;
  width: 270px;

  &:hover {
    font-weight: 600;
    color: white;
    background-color: #ffe021;
    box-shadow: 0 0 10px #ffe021, 0 0 40px;
    /* border-bottom: 3px solid #00ff7f; */
  }
  &.active {
    color: #6a3605;
    background-color: #fff8e7;
    pointer-events: none;
    /* border-bottom: none; */
  }
`;
