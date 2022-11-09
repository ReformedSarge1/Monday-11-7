import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import { Provider, Heading, Subhead } from "rebass";
import {
  Hero,
  Flex,
  CallToAction,
  ScrollDownIndicator
} from "react-landing-page";



const App = props => (
  <Provider>
    <Hero
      color="white"

      bg="black"
      bgOpacity={0.1}
    >
      <Heading fontSize={100}>God Of War</Heading>
      <Subhead fontSize={[2, 3]}>Change is Coming With Ragnarok</Subhead>
      <Flex mt={3}>
        <CallToAction bg="grey" mr={3}>
          Lore
        </CallToAction>
        <CallToAction>Shop Page</CallToAction>
      </Flex>
      <ScrollDownIndicator />
    </Hero>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
