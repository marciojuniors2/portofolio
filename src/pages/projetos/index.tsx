/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import Header from '../../components/Header';
import ProjetoItem from '../../components/ListProjects';
import { ProjetosContainer } from '../../styles/ProjetosStyle';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface Iprojeto {
  slug: string,
  title: string,
  description: string,
  type: string,
  link: string,
  thumbnail: string;
}

interface ProjetoProps {
  projetos: Iprojeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Head>
        <title>Meu portfólio | Projetos</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
      </Head>

      <Header />
      <main className="container">
        {projetos.map(projeto => (
          <ProjetoItem
          key={projeto.slug}
          title={projeto.title}
          type={projeto.type}
          slug={projeto.slug}
          imgUrl={projeto.thumbnail}
        />
        ))}
      </main>
    </ProjetosContainer>
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

