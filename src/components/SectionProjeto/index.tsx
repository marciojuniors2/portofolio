/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface Iprojeto {
  slug: string,
  title: string,
  description: string,
  type: string;
  link: string,
  thumbnail: string;
}

interface ProjetosProps {
  projetos: Iprojeto[];
}

export function Projetos({ projetos }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title='Ultimos Projetos'/>
       <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjetoItem
          key={projeto.slug}
          img={projeto.thumbnail}
          title={projeto.title}
          type={projeto.type}
          slug={projeto.slug}
         />
        ))}

       </section>
    </Container>
  );
}
export default Projetos;
