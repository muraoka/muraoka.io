import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const Services = styled.div``;
const Service = styled.p`
  margin-bottom: 0.4rem;
`;
const ServiceName = styled.strong`
  font-weight: bold;
`;

const Index = () => {
  return (
    <Layout>
      <Title>muraoka.io</Title>
      <Services>
        <Service>
          <ServiceName>GitHub : </ServiceName>
          <a href="https://github.com/muraoka">muraoka</a>
        </Service>
        <Service>
          <ServiceName>Twitter : </ServiceName>
          <a href="https://twitter.com/muraoka__">muraoka__</a>
        </Service>
        <Service>
          <ServiceName>Scrapbox : </ServiceName>
          <a href="https://scrapbox.io/taigamuraoka/">muraokaのScrapbox</a>
        </Service>
        <Service>
          <ServiceName>Mail : </ServiceName>taigamuraoka1998@gmail.com
        </Service>
      </Services>
    </Layout>
  );
};

export default Index;
