import { useCallback, useState } from "react";
import Head from "next/head";
import { useSinglePrismicDocument } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import {Heading} from "../../components/Heading";

export async function getServerSideProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation", {lang: locale});
  const settings = await client.getSingle("settings", {lang: locale});
  const labels = await client.getSingle("labels", {lang: locale})

  return {
    props: {
      navigation,
      settings,
      locale,
      labels,
      previewData: previewData || null,
    },
  };
}

const Labels = ({ navigation, settings, locale: localeInit, labels: labelsServerSide, previewData = null}) => {
  const [locale, setLocale] = useState(localeInit);
  const [clientLoad, setClientLoad] = useState(false);

  const client = createClient({ previewData });

  console.log('Server side labels', labelsServerSide);

  const onChangeHandler = useCallback((event) => {
    console.log('onChangeHandler', event.target.value);
    setLocale(event.target.value);
    setClientLoad(true);
  }, [setLocale, setClientLoad]);

  return (
    <Layout navigation={navigation} settings={settings} onChangeHandler={onChangeHandler}>
      <Head>
        <title>
          {"Labels"}
          {prismicH.asText(settings.data.siteTitle)}
        </title>
        <script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=3ap-slice"
        />
      </Head>

      <Content client={client} locale={locale} defaultLabels={labelsServerSide} clientLoad={clientLoad} />

    </Layout>
  );
};

const Content = ({ client, locale, defaultLabels, clientLoad }) => {
  const [labels] = useSinglePrismicDocument('labels', {
    client,
    lang: locale,
  });

  console.log('Client side labels', labels?.data);

  let greeting = null;
  let whatIsGoodForYou = null
  let whatIsGoodForYouSubtitle = null;

  if (clientLoad && labels?.data?.home[0]) {
    greeting = labels.data.home[0].greeting;
    whatIsGoodForYou = labels.data.home[0].whatIsGoodForYou;
    whatIsGoodForYouSubtitle = labels.data.home[0].whatIsGoodForYouSubtitle;
  } else if (labels?.data?.home[0]) {
    greeting = defaultLabels.data.home[0].greeting;
    whatIsGoodForYou = defaultLabels.data.home[0].whatIsGoodForYou;
    whatIsGoodForYouSubtitle = defaultLabels.data.home[0].whatIsGoodForYouSubtitle;
  }

  return (
    <>
      <p>{`Reading labels ${clientLoad ? 'client side' : 'server side'}`}</p>
      <Heading as="h2" size="md">{greeting}</Heading>
      <Heading as="h3" size="sm">{whatIsGoodForYou}</Heading>
      <Heading as="h4" size="xs">{whatIsGoodForYouSubtitle}</Heading>
    </>
  )
}

export default Labels;



