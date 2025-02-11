import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <BreadcrumbsWrapper>
            <Breadcrumbs>
              <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
            </Breadcrumbs>
          </BreadcrumbsWrapper>
          <SortWrapper>
            <Title>Running</Title>
            <SelectWrapper>
              <Select
                label="Sort"
                value={sortId}
                onChange={(ev) => setSortId(ev.target.value)}
              >
                <option value="newest">Newest Releases</option>
                <option value="price">Price</option>
              </Select>
            </SelectWrapper>
          </SortWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: block;
  }
`;

const BreadcrumbsWrapper = styled.div`
  display: none;
  @media ${(props) => props.theme.queries.tabletAndBelow} {
    display: revert;
  }
`;

const SortWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const SelectWrapper = styled.div`
  @media ${(props) => props.theme.queries.phoneAndBelow} {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
