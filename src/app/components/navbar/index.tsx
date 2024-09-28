import { Container, Stack } from "@mantine/core";
import Item from "./item";

const IMAGE =
  "/image.png";

export default function Navbar() {
  const items = [{}, {}, {}];

  return (
    <Container py="md" h="100%">
      <Stack>
        <Stack gap="lg" align="center">
          {items.map((_, i) => (
            <Item key={i} imageUrl={IMAGE} placeholder="placeholder1" />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
