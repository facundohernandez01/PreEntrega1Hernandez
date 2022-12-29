import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Button,
  ButtonGroup,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Spacer,
  MenuItem,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { HamburgerIcon } from "@chakra-ui/icons"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      bg="#e6e6e6"
    >
        <Heading as="h1" size="lg" px='1.5'>
          Logo
        </Heading>
      <Spacer/>
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setIsOpen(!isOpen)}
      >
      <Button leftIcon={<HamburgerIcon />}></Button>
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        <ButtonGroup spacing={4}>

<Button as={Button} colorScheme='blue' px={4}
>
    Home
  </Button>

<Menu closeOnSelect={false}>

  <MenuButton as={Button} colorScheme='blue' px={4}
>
    Productos
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Cat' type='radio'>
      <MenuItemOption value='cat1'>Subcat 1</MenuItemOption>
      <MenuItemOption value='cat2'>Subcat 2</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>

<Button as={Button} colorScheme='blue' px={4}
>
    Contacto
  </Button>
</ButtonGroup>

      </Box>
      <Spacer/>

      <Box p='4' bg='green.400'>
  <Menu >
  <MenuButton>
  <CartWidget/>
  </MenuButton>
</Menu>
</Box>
    </Flex>
  );
};

export default NavBar;