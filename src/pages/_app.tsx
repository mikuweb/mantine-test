import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import ApplicationContainer from "@/components/ApplicationContainer";
import { RecoilRoot } from "recoil";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine test</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <RecoilRoot>
          <ApplicationContainer>
            <Component {...pageProps} />
          </ApplicationContainer>
        </RecoilRoot>
      </MantineProvider>
    </>
  );
}
