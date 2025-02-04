'use client'
import React, { useState, useEffect } from 'react';
// import { Card } from '@randukelvin/card'
import App from '@/components/App'
import {
  SimpleGrid,
  Box, Text, Flex, 
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
          {"All"}{' '}
          <b>{"Safaris"}</b>
        </Text>
      </Flex>

      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}

      >


        <SearchBar search={search} onSearch={onSearch} />
      </Flex>

      <Box bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}>
        <SimpleGrid
          bg={useColorModeValue('white', '#0a0a0a')}
          color={useColorModeValue('gray.600', 'white')}
          paddingTop={20} paddingX={['10px', '20%']} columns={[2, null, 4]} gap={["20px", "40px"]}>
               <Box as={'a'}
            //@ts-expect-error:typefix
            href={`item/1`}>
            <Card />
          </Box>
          <Box as={'a'}
            //@ts-expect-error:typefix
            href={`item/2`}>
            <Card />
          </Box>
          <Box as={'a'}
            //@ts-expect-error:typefix
            href={`item/3`}>
            <Card />
          </Box>
          <Box as={'a'}
            //@ts-expect-error:typefix
            href={`item/4`}>
            <Card />
          </Box>
{/* 
          {loading ? (
            <Flex pt={24} align="center" justify="center">
              <VStack colorPalette="teal">
                <Spinner color={color} />
                <Text >Loading Spots...</Text>
              </VStack>
            </Flex>
          ) : (
            <>
              {filteredItems?.length ? (
                // eslint-disable-next-line
                filteredItems?.map((item: any, index: any) => <Box as={'a'}  
                //@ts-expect-error:typefix
                href={`item/${item?.id}`}><Card name={item?.name} src={`/restaurants/${item?.image}`}badge={item?.category?.name} /></Box>)
              ) :     (   <>  <Stack gap="6" maxW="xs">

              <Skeleton height="200px" />
            </Stack>
            <Stack gap="6" maxW="xs">

              <Skeleton height="200px" />
            </Stack>
            <Stack gap="6" maxW="xs">

              <Skeleton height="200px" />
            </Stack>
            <Stack gap="6" maxW="xs">

              <Skeleton height="200px" />
            </Stack></>)
              
             }
            </>
          )} */}
           {/* <EmptySearch /> */}
        </SimpleGrid>
        {/* <Flex align="center" mt={4} justify="center" as="i" color="gray.500">
          {filteredItems?.length ? (<>{`Showing ${filteredItems?.length} out of ${items?.items?.length} spots `}</>) : null}
        </Flex> */}
      </Box>

    </App>
  );
}
