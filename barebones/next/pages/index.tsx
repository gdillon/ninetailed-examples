import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Personalize, Experience } from "@ninetailed/experience.js-next";
import { Hero, Product, Profile } from "../components";
import { experienceMapper } from "../utils/experienceMapper";

import productWithExperiment from "../../fixtures/contentful/product-with-experiment.json";
import productWithPersonalization from "../../fixtures/contentful/product-with-personalization.json";

const personalizationVariants = [
  {
    id: "1",
    headline: (
      <>
        The Power of Personalization with{" "}
        <a href="https://ninetailed.io/">Ninetailed</a> and{" "}
        <a href="https://nextjs.org">Next.js!</a>
      </>
    ),
    audience: {
      id: process.env.NEXT_PUBLIC_PERSONALIZED_AUDIENCE_1 || "",
      name: "Audience 1",
    },
  },
  {
    id: "2",
    headline: (
      <>
        Enhance your Customer Experience with{" "}
        <a href="https://ninetailed.io/">Ninetailed</a> and{" "}
        <a href="https://nextjs.org">Next.js!</a>
      </>
    ),
    audience: {
      id: process.env.NEXT_PUBLIC_PERSONALIZED_AUDIENCE_2 || "",
      name: "Audience 2",
    },
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2 className={styles.h2}>Ninetailed Profile</h2>
          <Profile />
        </div>

        <div className={styles.card}>
          <h2
            className={styles.h2}
          >{`Ninetailed <Personalize /> Component`}</h2>

          <h3 className={styles.h3}>Non Personalized Hero</h3>
          <Personalize
            id={"nonPersonalizedHero"}
            component={Hero}
            holdout={100}
            headline={
              <>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
              </>
            }
            variants={personalizationVariants}
          />
          <h3 className={styles.h3}>Personalized Hero</h3>
          <Personalize
            id={"personalizedHero"}
            component={Hero}
            holdout={0}
            headline={
              <>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
              </>
            }
            variants={personalizationVariants}
          />
        </div>
        <div className={styles.card}>
          <h2 className={styles.h2}>{`Ninetailed <Experience /> Component`}</h2>
          <h3 className={styles.h3}>with Experiment</h3>
          <Experience
            id={productWithExperiment.sys.id}
            component={Product}
            experiences={experienceMapper(productWithExperiment)}
            {...productWithExperiment.fields}
          />
          <h3 className={styles.h3}>with Personalization</h3>
          <Experience
            id={productWithPersonalization.sys.id}
            component={Product}
            experiences={experienceMapper(productWithPersonalization)}
            {...productWithPersonalization.fields}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
