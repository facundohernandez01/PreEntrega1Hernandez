import { Menu } from "@chakra-ui/react";

  import { Button, ButtonGroup } from '@chakra-ui/react'
  import { BsFillCartFill } from "react-icons/bs"

const CartWidget = () => {

    return (
          <Menu>
          <Button leftIcon={<BsFillCartFill />} colorScheme='teal' size='lg'>
          0
            </Button>

        </Menu>
    );
  };



export default CartWidget