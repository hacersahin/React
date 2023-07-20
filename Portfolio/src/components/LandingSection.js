import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Hacer!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// LandingSection bileşeni için kullanıcı arayüzünü talimatlara göre uygulayın.
// Avatar, Heading ve VStack bileşenlerinin bir kombinasyonunu kullanın.

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src="https://avatars.githubusercontent.com/u/120566057?v=4"
         size="2xl" 
         name="Hacer" 
         
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 

  </FullScreenSection>
);

export default LandingSection;

