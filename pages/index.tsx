import Head from "next/head";
import { Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Adrien Agency</title>
        <meta name="description" content="Adrien Agency Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HStack background={"black"} height={"100vh"} justify={"center"} spacing={30}>
        <Image src={"/slogo-white.png"} width={100} height={100} alt={"Adrien Agency Simplified Logo"} />
        <Divider orientation="vertical" height={40} />
        <VStack width={"30%"}>
          <Text fontStyle={"italic"} fontSize={"2xl"} width={"100%"}>
            We&apos;re in building process right now, to bring you the best experience posible
          </Text>
          <Text fontStyle={"italic"} fontSize={"2xl"} width={"100%"}>
            But don&apos;t be sad, we&apos;ll be here soon...
          </Text>
        </VStack>
      </HStack>
    </>
  );
}
