import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #a0aec0;
  margin-bottom: 7px;
`;

export const Number = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #a0aec0;
  margin-bottom: 7px;

  @media screen and (min-width: 480px) {
    margin-left: 20px;
  }
`;
