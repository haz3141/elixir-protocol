import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Crafting Full Circle Economies for Humanity"
    description="Elixir Protocol establishes a standard for a cooperative blockchain network that addresses some of the most vital human needs revolving around food security, waste management, energy production, & peer-to-peer trade in a cohesive circular economy."
  >
    <VerticalFeatureRow
      title="Creating Impact"
      description="Elixir Protocol improves access to food, financial services, energy, & education through the conversion of waste energy to blockchain tokens usable within the network to purchase watts, calories, and Internet access."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="E-LIX Network Token"
      description="Polygon based ERC-1155 Multi-Token for facilitating p2p exchange of waste into tokens used for food, electricity, & financial services."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Collaborating with Proven Social Leaders"
      description="Elixir Protocol is partnering with Bancalimentos, which is breaking the cycle of poverty in rural Colombia by exchanging recyclable waste for essential household goods such as food, medicine and agricultural inputs."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
