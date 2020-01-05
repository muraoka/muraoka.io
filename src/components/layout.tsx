import React from 'react';
import 'ress';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import Head from '../components/head';

const Container = styled.div`
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: 800px;
`;

const Layout = ({ children }: { children: any }) => {
  return (
    <Container>
      <Head />
      <Global
        styles={css`
          body {
            background: #f5f3f0;
            color: #080a11;
            font-family: 'Noto Sans JP', sans-serif;
          }
        `}
      />
      {children}
    </Container>
  );
};

export default Layout;
