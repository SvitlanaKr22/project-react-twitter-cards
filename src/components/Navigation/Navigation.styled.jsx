import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #d2c8e7; //#2a363b;
  &.active {
    color: #e84a5f;
  }
`;

// .link {
//   display: inline-block;
//   text-decoration: none;
//   padding: 12px;
//   font-weight: 700;
//   color: #2a363b;
// }

// .link.active {
//   color: #e84a5f;
// }
