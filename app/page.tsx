import { Button, IconWrapper } from "../components/button";
import { Container } from "../components/container";
import { Hero, HeroTitle, HeroSubtitle } from "../components/hero";
import { HeroImage } from "../components/hero-image";

import { ChevronIcon } from "../components/icons/chevron";

export default function Homepage() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button
          // className="animate-fade-in opacity-0, translate-y-[-1rem]"
          href="/"
          variant="secondary"
          size="small"
        >
          Last Year You Said Next Year <IconWrapper> →</IconWrapper>
        </Button>
        <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0, translate-y-[-1rem]">
          Linear is a better way
          <br className="hidden md:block" /> to build products
        </HeroTitle>
        <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0, translate-y-[-1rem]">
          Meet the new started for modern software developement.
          <br className="hidden md:block" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Button
          // className="animate-fade-in [--animation-delay:600ms] opacity-0, translate-y-[-1rem]"
          href="/"
          variant="primary"
          size="large"
        >
          Get Started
          <IconWrapper>
            <ChevronIcon />
          </IconWrapper>
        </Button>
        <HeroImage />
      </Hero>
    </Container>
  );
}
