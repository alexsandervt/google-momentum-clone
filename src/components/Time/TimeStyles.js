import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  text-align: center;
  padding: 1rem;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, 50%);
  transform: translate(-50%, -50%);
`;

export const TimeStamp = styled.p`
  font-size: 8rem;
  font-weight: 500;
  margin: 0;
  padding: 0;

  @media screen and(max-width: 600px) {
    font-size: 6rem;
  }
`;

export const Greeting = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin: 0;
  padding: 0;

  @media screen and(max-width: 600px) {
    font-size: 4rem;
  }
`;
