import {
  Box,
  Container,
  Flex,
  Heading,
  useColorModeValue,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Box
        minH={"100vh"}
        bg={"url('/GradientIndex.png')"}
        bgRepeat="no-repeat"
        bgSize={"cover"}
        bgPosition={"top center"}
      >
        <Navbar />
        <Container maxW="container.xl">
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            paddingTop={"10rem"}
            color={useColorModeValue("gray.100", "black")}
          >
            <Heading
              fontWeight={"bold"}
              size="3xl"
              textAlign={"center"}
              color={"gray.100"}
              background={useColorModeValue(
                "linear-gradient(90deg, rgba(63,94,251,1) 25%, rgba(155,70,252,1) 75%)",
                "linear-gradient(90deg, rgb(112 136 255) 45%, rgb(179 113 255) 55%)"
              )}
            >
              Advancing Open-Source XR
            </Heading>
            <Heading
              size="xl"
              fontWeight={"normal"}
              marginBottom={"3rem"}
              marginTop={"3rem"}
              textAlign={"center"}
            >
              Join our mission to build meaningful virtual experiences
            </Heading>
            <Flex flexDirection={"column"}>
              <Flex
                gap={{ base: "3rem", md: "5rem" }}
                color={"white"}
                boxShadow="inner"
                bg={"url('/GradientIndex2.png')"}
                flexDirection={{ base: "column-reverse", md: "row" }}
                p={{ base: "2rem", md: "3rem" }}
                marginTop={"3rem"}
                rounded={"xl"}
              >
                <Flex
                  justifyContent={"center"}
                  flexDirection={"column"}
                  gap="2rem"
                >
                  <Image
                    alignSelf={{ base: "center", md: "start" }}
                    height={"5rem"}
                    src={"/Realms2.svg"}
                  />
                  <Heading
                    textAlign={{ base: "center", md: "start" }}
                    fontWeight={"normal"}
                    size="lg"
                  >
                    Explore in our virtual social hub
                  </Heading>
                  <Text display={{ base: "none", md: "flex" }} fontSize={"lg"}>
                    Join a community of gamers and tech enthusiasts as you
                    immerse yourself in an exciting new form of social
                    interaction. Be a part of our journey to advance open-source
                    development in VR.
                  </Text>
                  <Button
                    colorScheme={"blue"}
                    width={{ base: "12rem", md: "20rem" }}
                    bg={useColorModeValue("white", "gray.900")}
                    variant="outline"
                    alignSelf={{ base: "center", md: "start" }}
                  >
                    Join the Realms
                  </Button>
                </Flex>
                <Image
                  src="/VRIndex.svg"
                  marginTop={{ base: "-5rem", md: "0" }}
                  height={{ base: "10rem", md: "xs" }}
                />
              </Flex>

              <Flex
                gap={"5rem"}
                color={"white"}
                boxShadow="inner"
                bg={"url('/GradientIndex3.png')"}
                flexDirection={"row"}
                p={{ base: "2rem", md: "3rem" }}
                marginTop={"3rem"}
                rounded={"xl"}
              >
                <Flex
                  justifyContent={"center"}
                  flexDirection={"column"}
                  gap="2rem"
                >
                  <Text fontSize={"2xl"} textAlign="center">
                    Godot XR SDK
                  </Text>
                  <Heading fontWeight={"semibold"} size="xl" textAlign="center">
                    Empower Your XR Game Development with our Godot-based SDK
                  </Heading>
                  <Text
                    display={{ base: "none", md: "flex" }}
                    fontSize={"lg"}
                    textAlign="center"
                  >
                    Are you looking to take your XR game development to the next
                    level? Try our Godot-based SDK. With features such as
                    networking and 3D avatars, our SDK allows you to create more
                    immersive and interactive experiences for your players.
                  </Text>
                  <Button
                    colorScheme={"blue"}
                    width={{ base: "12rem", md: "20rem" }}
                    bg={useColorModeValue("white", "gray.900")}
                    variant="outline"
                    alignSelf={{ base: "center" }}
                  >
                    Get Started
                  </Button>
                </Flex>
              </Flex>

              <Flex
                gap={"5rem"}
                color={useColorModeValue("gray.900", "gray.100")}
                flexDirection={"row"}
                shadow="xl"
                p={{ base: "2rem", md: "3rem" }}
                marginBottom={"3rem"}
                marginTop={"3rem"}
                borderWidth="3px"
                borderColor={useColorModeValue("gray.300", "gray.900")}
                bg={useColorModeValue(
                  "rgba(255,255,255,0.5)",
                  "rgba(0,0,0,0.85)"
                )}
                rounded={"xl"}
              >
                <Flex
                  justifyContent={"center"}
                  flexDirection={"column"}
                  gap="2rem"
                >
                  <Heading
                    fontWeight={"bold"}
                    background={useColorModeValue(
                      "linear-gradient(90deg, rgba(63,94,251,1) 45%, rgba(155,70,252,1) 55%)",
                      "linear-gradient(90deg, rgb(112 136 255) 45%, rgb(179 113 255) 55%)"
                    )}
                    backgroundClip="text"
                    size="xl"
                    textAlign="center"
                  >
                    About us
                  </Heading>
                  <Text display={"flex"} fontSize={"lg"} textAlign="center">
                    OpenM8 is a non-profit dedicated to XR gaming, using the
                    Godot. We make our creations open-source and strive for high
                    quality and comprehensive features in our SDK.
                  </Text>

                  <Button
                    colorScheme={"blue"}
                    width={{ base: "12rem", md: "20rem" }}
                    bg={useColorModeValue("white", "gray.900")}
                    variant="outline"
                    alignSelf={{ base: "center" }}
                  >
                    I wanna know more
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
