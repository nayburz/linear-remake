import { Button, IconWrapper } from "../components/button";
import { Container } from "../components/container";
import { Hero, HeroTitle, HeroSubtitle } from "../components/hero";

export default function Homepage() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button href="/" variant="secondary" size="small">
          Last Year You Said Next Year <IconWrapper> →</IconWrapper>
        </Button>
        <HeroTitle>
          Linear is a better way
          <br className="hidden md:block" /> to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new started for modern software developement.
          <br className="hidden md:block" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <img src="/img/hero.png" />
      </Hero>
    </Container>
  );
}
