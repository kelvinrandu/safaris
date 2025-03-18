'use client'
import React, { useState, useEffect } from 'react';
// import { Card } from '@randukelvin/card'
import App from '@/components/App'
import {
  SimpleGrid,
  Box, Text, Flex
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'

// import axios from "axios";

// import { ItemProps } from '../page';
// import {
//   Skeleton,
// } from "@/components/ui/skeleton"


export default function Home() {
  const items={

  }

  const [loading, setLoading] = useState(false);
  // const itemsApiURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/items`;

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      console.log("Delayed for 3 second.");
      setLoading(false)
    }, 3000)
 

  },[loading])
  return (
    <App>
      <Flex
        bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}


      >
        <Text ml={2} mb={2} fontSize="sm">
          {"Lamu"}{' '}
          <b>{"Gallery"}</b>
        </Text>
      </Flex>

   

      <Box bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}>
        <SimpleGrid
          bg={useColorModeValue('white', '#0a0a0a')}
          color={useColorModeValue('gray.600', 'white')}
          paddingTop={20} paddingX={['10px', '20%']} columns={[2, null, 4]} gap={["20px", "40px"]}>   
       
        </SimpleGrid>

      </Box>

    </App>
  );
}
