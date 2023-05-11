import Head from "next/head";
import { Divider, Stack, Text, VStack } from "@chakra-ui/react";
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
      <Stack direction={{ base: "column", md: "row" }} background={"black"} height={"100vh"} align={"center"} justify={"center"} spacing={30}>
        <Image src={"/logo-white.png"} width={300} height={300} alt={"Adrien Agency Simplified Logo"} />
        <Divider display={{ base: "none", md: "block" }} orientation="vertical" height={40} />
        <VStack width={{ base: "90%", md: "30%" }}>
          <Text fontStyle={"italic"} textAlign={{ base: "center", md: "left" }} fontSize={"2xl"} width={"100%"}>
            We&apos;re in building process right now, to bring you the best experience posible.
          </Text>
          <Text fontStyle={"italic"} textAlign={{ base: "center", md: "left" }} fontSize={"2xl"} width={"100%"}>
            But don&apos;t be sad, we&apos;ll be here soon...
          </Text>
        </VStack>
      </Stack>
    </>
  );
}
