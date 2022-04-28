import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;

export const A = styled.a`
  cursor: pointer;
  padding: 0;
  text-decoration: none;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  &.active {
    color: #2196f3;
  }
`;
