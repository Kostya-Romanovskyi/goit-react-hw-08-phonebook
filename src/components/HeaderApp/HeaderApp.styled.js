import styled from '@emotion/styled';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  padding-top: 20px;
`;

export const NavItems = styled.div`
  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
