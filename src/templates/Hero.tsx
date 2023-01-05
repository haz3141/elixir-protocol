import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/Elixir-Protocol">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://docs.google.com/presentation/d/12xCojFkMwdFDV7codIo3lDs-YsfWZf3LGU1HnzWyDRY/edit?usp=sharing">
            <a>Slides</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {
              'Transforming Waste into an Infinite Source of Energy & Progress\n'
            }
            <span className="text-primary-500">Elixir Protocol</span>
          </>
        }
        description="Waste-to-Energy Protocol for Feeding & Empowering Developing Communities."
        button={
          <Link href="../../assets/elixir-protocol-whitepaper.pdf">
            <a>
              <Button xl>Read White Paper</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
