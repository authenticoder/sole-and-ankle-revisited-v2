import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import { set } from "date-fns";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <UnstyledButton>
            <Icon id="shopping-bag">
              <VisuallyHidden>Open Cart</VisuallyHidden>
            </Icon>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search">
              <VisuallyHidden>Search</VisuallyHidden>
            </Icon>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu">
              <VisuallyHidden>Open Menu</VisuallyHidden>
            </Icon>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    background: yellow;
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }

  @media ${(props) => props.theme.queries.phoneAndBelow} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: flex;
    gap: 32px;
  }

  @media ${(props) => props.theme.queries.phoneAndBelow} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
