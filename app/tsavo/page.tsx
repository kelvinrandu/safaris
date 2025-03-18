'use client'
import React, { useState, useEffect } from 'react';
// import { Card } from '@randukelvin/card'
import App from '@/components/App'
import {
  SimpleGrid,
  Box, Text, Flex, Image
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import SearchBar from '@/components/SearchBar';
// import axios from "axios";
import { Card } from "@/components/Card";
import { ItemProps } from '../page';
// import {
//   Skeleton,
// } from "@/components/ui/skeleton"

interface Props {
  items: ItemProps[];
  key: number;
}
export default function Home() {
  const items={

  }
  const [search, setSearch] = React.useState("");
  // const [items, SetItems] = useState<Props | null>(null)
  const [loading, setLoading] = useState(false);
  // const itemsApiURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/items`;
  const color = useColorModeValue('gray.600', 'white')
  // useEffect(() => {
  //   setLoading(true)
  //   // eslint-disable-next-line
  //   axios.get(itemsApiURL).then((response: any) => {
  //     SetItems(response?.data);
  //   });
  //   setLoading(false)
  // }, [items, itemsApiURL, loading]);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      console.log("Delayed for 3 second.");
      setLoading(false)
    }, 3000)
 

  },[loading])
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const searchValue = e.target.value;
    const valueWithoutSlash = searchValue.replace("/", "");
    setSearch(valueWithoutSlash);
    return valueWithoutSlash;
  };
  // // eslint-disable-next-line
  // const matchesSearch = (item: any) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // const filteredItems = items?.items
  //   .filter(matchesSearch)
console.log(setLoading)
  return (
    <App>
      <Flex
        bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}


      >
        <Text ml={2} mb={2} fontSize="sm">
          {"Tsavo"}{' '}
          <b>{"Gallery"}</b>
        </Text>
      </Flex>

   

      <Box bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}>
        <SimpleGrid
          bg={useColorModeValue('white', '#0a0a0a')}
          color={useColorModeValue('gray.600', 'white')}
          paddingTop={20} paddingX={['10px', '20%']} columns={[2, null, 4]} gap={["20px", "40px"]}>
               <Box >
               <Image
                borderRadius="lg"
                src={
                  '3.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '7.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '21.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '22.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '40.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '41.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '42.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '43.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  'widlife2.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  'wildlife.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  'widlife3.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '28.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '33.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
        </SimpleGrid>
      </Box>

    </App>
  );
}
