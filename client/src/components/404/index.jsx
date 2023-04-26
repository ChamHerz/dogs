import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #3498db;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`;

const H1 = styled.h1`
  font-size: 30vh;
`;

const H2 = styled.h2`
  > span {
    font-size: 4rem;
    font-weight: 600;
  }
`;

const A = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    color: #fff;
  }
`;

const H3 = styled.h3`
  > a:hover {
    text-decoration: none;
    background: #fff;
    color: #3498db;
    cursor: pointer;
  }
`;

const notFound = props => {
  return (
    <Container class="container">
      <H1>:(</H1>
      <br />
      <h2>
        A <span>404</span> error occured, Page not found, check the URL and try again.
      </h2>
      <br />
      <br />
      <h3>
        <A href="#">Return to home</A>&nbsp;|&nbsp;<A href="javascript:history.back()">Go Back</A>
      </h3>
    </Container>
  );
};

export default notFound;
