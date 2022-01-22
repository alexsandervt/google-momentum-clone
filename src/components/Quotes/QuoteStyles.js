import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 50%;
  margin-left: -300px;

  @media (min-width: 600px) {
    width: 350px;
    margin-left: -175px;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
`;
