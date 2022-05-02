import { Image } from "@chakra-ui/react";

const Logo = ({ src }) => (
  <Image
    src={`/img/${src}`}
    height={{
      base: "3vh",
      sm: "4vh",
    }}
    alt={src}
  />
);

export default Logo;
