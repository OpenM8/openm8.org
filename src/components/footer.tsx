import {
  Box,
  chakra,
  Container,
  Flex,
  Image,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaTwitter, FaGithub, FaDiscord, FaHeart } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const Logo = (props: any) => {
  return (
    <Image
      src={useColorModeValue(
        "https://static.openm8.org/img/openm8_blue.svg",
        "https://static.openm8.org/img/openm8_light.svg"
      )}
      h="40px"
      alt={"Logo"}
    />
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
      maxW={"container.xl"}
      display={"flex"}
      justifyContent={{base:"center", md:"space-between"}}
      py={10}
      gap={10}
      flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Flex
          gap={6}
          justifyContent={"center"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex
            alignItems={{ base: "center", md: "start" }}
            flexDirection={"column"}
            gap={6}
          >
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              Made with <FaHeart className="icon-inline" color="darkred"/> internationally.
            </Text>
            <Flex flexDirection={"row"} gap={6}>
              <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter/>
              </SocialButton>
              <SocialButton label={"Discord"} href={"#"}>
              <FaDiscord/>
              </SocialButton>
              <SocialButton label={"Github"} href={"#"}>
              <FaGithub/>
              </SocialButton>
            </Flex>
          </Flex>
        </Flex>
          <Flex alignItems={"center"} flexDirection={"column"}>
            <ListHeader>Stay up to date</ListHeader>
            <Flex flexDirection={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("purple.500", "purple.400")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "purple.600",
                }}
                aria-label="Subscribe"
                icon={<MdSend/>}
              />
            </Flex>
          </Flex>
      </Container>
    </Box>
  );
}
