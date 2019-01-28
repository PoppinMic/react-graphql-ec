import React from 'react';
import { Box, Text } from 'gestalt';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Box height={70} color="green" padding={1} shape="roundedBottom">
    <NavLink to="/login">
      <Text>Login</Text>
    </NavLink>
  </Box>
);

export default Header;
