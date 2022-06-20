import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React from "react";
import {MdQrCodeScanner} from "react-icons/md"


const Search = ({searchquery}) => {
  return (
    <Box width={"100%"}>
      <InputGroup background={"gray.100"}>
        <InputLeftElement children={<SearchIcon color="gray.500" />} />
        <Input
        // searchquery={searchquery}
        onChange={searchquery}
          focusBorderColor="none"
          borderRadius="5px"
          type="text"
          placeholder='Search photos'
          _placeholder={{ opacity: 1, color: 'gray.400', fontSize:"13px"}}
        />
        <InputRightElement children={<MdQrCodeScanner color="gray.500" />} />
      </InputGroup>
    </Box>
  );
};

export default Search;
