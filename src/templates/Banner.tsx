import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Check out the full write-up."
      subtitle="Read the Elixir Protocol Executive Summary & White Paper."
      button={
        <Link href="../../assets/elixir-protocol-white-paper.pdf">
          <a>
            <Button>Read White Paper</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
