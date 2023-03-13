import { Container } from "../components/container";
import { Hero, HeroTitle, HeroSubtitle } from "../components/hero";

export default function Homepage() {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Linear is a better way
          <br /> to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new started for modern software developement. <br />{" "}
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <img src="/img/hero.png" />
      </Hero>
    </Container>
  );
}
