import {
  background,
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Search from "./Search";
import Button from "./Button";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const text = [
    {
      text: "Explore",
    },
    {
      text: "Advertise",
    },
    {
      text: "Blog",
    },
    {
      text: "Log in  /",
    },
    {
      text: "Sign up",
    },
  ];
  const barText = [
    {
      text: "About",
    },
    {
      text: "History",
    },
    {
      text: "Join the team",
    },
    {
      text: "Press",
    },
    {
      text: "Contact us",
    },
    {
      text: "Help Center",
    },
  ];

  return (
    <Box >
      <HStack
      padding="0 15px"
        background="white.100"
        justifyContent={"space-between"}
      >
        <Image
          width="50px"
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"
        />
        <Flex minWidth={"70%"}>
          <Search />
        </Flex>
        {text.map((item) => (
          <Button text={item.text} />
        ))}
        <Box
          border={"1px solid gray"}
          padding="5px"
          borderRadius={"4px"}
          fontSize={"12px"}
          color="gray.500"
        >
          Submit a photo
        </Box>
        <Box>
          <Menu>
            <MenuButton>
              <HamburgerIcon />
            </MenuButton>
            <MenuList display="flex">
              <MenuItem
                flex={1}
                width="120px"
                _hover={{
                  background: "white",
                  color: "teal.500",
                }}
              >
                <Box flex={1}>
                  {barText.map((item) => (
                    <Link to="/" style={{ margin: "5px" }}>
                      <Button text={item.text} />
                    </Link>
                  ))}
                </Box>
              </MenuItem>
              <MenuItem
                flex={1}
                width="120px"
                _hover={{
                  background: "white",
                  color: "teal.500",
                }}
              >
                <Box flex={1}>
                  {barText.map((item) => (
                    <Link to="/" style={{ margin: "5px" }}>
                      <Button text={item.text} />
                    </Link>
                  ))}
                </Box>
              </MenuItem>
              <MenuItem
                flex={1}
                width="120px"
                _hover={{
                  background: "white",
                  color: "teal.500",
                }}
              >
                <Box flex={1}>
                  {barText.map((item) => (
                    <Link to="/" style={{ margin: "5px" }}>
                      <Button text={item.text} />
                    </Link>
                  ))}
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;
