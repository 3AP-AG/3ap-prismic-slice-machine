import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";
import Link from "next/link";
import React from "react";

const Index = ({ page, navigation, settings }) => {
  const onChangeHandler = null;

  return (
    <Layout navigation={navigation} settings={settings} onChangeHandler={onChangeHandler}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <div style={{margin: "auto", maxWidth: "1024px"}}>
        <Link href="/3ap-slice">
          <a>Visit /3ap-slice</a>
        </Link>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}
