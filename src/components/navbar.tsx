import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Container,
  Badge,
} from "@chakra-ui/react";
import { MdLightMode, MdDarkMode, MdChevronRight, MdArrowDropDown} from "react-icons/md";
import ReactRouterLink from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  // change box bg on scroll
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={2}
      borderStyle={"solid"}
      borderColor={'gray.200'}
      bg={useColorModeValue(scroll ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)", scroll ? "rgba(0,0,0,0.99)" : "rgba(0,0,0,0.3)")}
      transition="all 0.3s ease"
      color={useColorModeValue("gray.800", "white")}
      width={"100vw"}
      position="fixed"
      id="navbar"
      zIndex={100}
    >
      <Container maxW="container.xl">
        <Flex
          minH={"60px"}
          justifyContent={"space-between"}
          align={"center"}
          direction={"row"}
        >
          <Flex display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? "<Icon icon='material-symbols:close' />" as any : "<Icon icon='material-symbols:close' />" as any}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex justify={{ base: "center", md: "start" }}>
            <Link as={ReactRouterLink} href="/">
              <Image
                src={useColorModeValue(
                  "https://static.openm8.org/img/openm8_blue.svg",
                  "https://static.openm8.org/img/openm8_light.svg"
                )}
                h="40px"
                alt={"Logo"}
              />
            </Link>
          </Flex>

          <Flex display={{ base: "none", md: "flex" }} justify={"flex-center"}>
            <DesktopNav />
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"purple.600"}
              _hover={{
                bg: "purple.500",
              }}
            >
              Sign Up
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MdLightMode/> : <MdDarkMode/>}
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}

                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                display={"flex"}
                alignItems={"center"}
                gap={1}
              >
                {navItem.label}<Badge display={navItem.comingSoon ? "flex" : "none"} colorScheme='purple'  variant='solid'>Soon</Badge>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, comingSoon }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.400" }}
            fontWeight={500}
            display={"flex"}
            alignItems={"center"}
            gap={1}
          >
            {label}<Badge display={comingSoon ? "flex" : "none"} colorScheme='purple'  variant='solid'>Soon</Badge>
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <MdChevronRight/>
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, comingSoon }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && <MdArrowDropDown/>}<Badge display={comingSoon ? "flex" : "none"} colorScheme='purple'  variant='solid'>Soon</Badge>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
          gap={1}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href} 
              display={"flex"}
              alignItems={"center"}
              gap={1}>
                {child.label}<Badge display={child.comingSoon ? "flex" : "none"} colorScheme='purple'  variant='solid'>Soon</Badge>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  comingSoon?: boolean;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Projects",
    children: [
      {
        label: "Godot XR SDK",
        subLabel: "Create mind-blowing alternate realities",
        comingSoon: true,
        href: "#",
      },
      {
        label: "Realms by OpenM8",
        subLabel: "Join an online world of friends around the globe",
        comingSoon: true,
        href: "#",
      },
    ],
  },
  {
    label: "About",
    children: [
      {
        label: "The OpenM8 Manifesto",
        subLabel: "Our values and principles",
        comingSoon: true,
        href: "#",
      },
      {
        label: "Our Vision",
        subLabel: "Where we are headed",
        comingSoon: true,
        href: "#",
      },
    ],
  },
  {
    label: "Community & Support",
    children: [
      {
        label: "Help Center & FAQ",
        subLabel: "Get all of your questions answered",
        comingSoon: true,
        href: "#",
      },
      {
        label: "Discord",
        comingSoon: true,
        href: "#",
      },
    ],
  },
  {
    label: "Resources",
    comingSoon: true,
    href: "#",
  },
];
