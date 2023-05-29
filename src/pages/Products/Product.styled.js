import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: block;
  /* width: 200px;
  height: 200px; */

  > a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 16px;
`;
