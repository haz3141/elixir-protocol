import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Check out the full write-up."
      subtitle="Read the Elixir Protocol Litepaper."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Read Litepaper</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
