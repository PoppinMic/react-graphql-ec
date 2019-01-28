import React from 'react';
import { Box, Text, Heading, Image } from "gestalt";
import { NavLink } from "react-router-dom";


const Header = () => (
<Box
   display="flex"
   alignItems="center"
   justifyContent="around"
   height={70}
   color="midnight"
   padding={1}
   shape="roundedBottom"
 >
   {/* Login Link */}
   <NavLink to="/login">
     <Text size="xl" color="white">
       Login
     </Text>
   </NavLink>

   {/* Title and Logo */}
   <NavLink to="/">
     <Box display="flex" alignItems="center">
       <Box margin={2} height={50} width={50}>
         <Image
           alt="BrewBro Logo"
           naturalHeight={1}
           naturalWidth={1}
           src="./icons/logo.svg"
         />
       </Box>
       <Heading size="xs" color="orange">
         BrewBro
       </Heading>
     </Box>
   </NavLink>

   {/* Sign Up Link */}
   <NavLink to="/signup">
     <Text size="xl" color="white">
       Sign Up
     </Text>
   </NavLink>
 </Box>
);

export default Header;
