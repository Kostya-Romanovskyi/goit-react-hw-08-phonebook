import styled from '@emotion/styled';

export const Styledtext = styled.p`
  font-size: 13px;
  color: #a0aec0;

  max-width: 80px;

  @media screen and (min-width: 400px) {
    flex-direction: column;

    max-width: 120px;

    font-weight: 700;
    font-size: 20px;
  }
`;
