/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias'
import Projetos from '../components/SectionProjeto';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

interface Iprojeto {
  slug: string,
  title: string,
  description: string,
  type: string,
  link: string,
  thumbnail: string;
}

interface HomeProps {
  projetos: Iprojeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu Portfólio</title>
        <link rel="icon" href="/start.png" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
      </Head>

          <Header/>
          <main className='container'>
          <HomeHero/>
          <Experiencias/>
          <Projetos projetos={projetos}/>
          <Conhecimentos/>
          <FormContato/>
          </main>

          <Footer/>

    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
      [Prismic.Predicates.at('document.type', 'portfolio')],
      { orderings: '[document.first_publication_date desc]'}
    );

     const projetos = projectResponse.results.map(projeto => ({
      slug: projeto.uid,
      title: projeto.data.title,
      type: projeto.data.type,
      description: projeto.data.description,
      link: projeto.data.link.url,
      thumbnail: projeto.data.thumbnail.url
     }));

    return {
      props: {
        projetos
      },
      revalidate: 345600
     };
}



