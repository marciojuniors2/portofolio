import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="01 Ano" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2022"
          empresa="Koode Ltda"
          title="Dev Full-Stack"
          description=".Net, React e RPA, CLoud: Azure, Excel, Teams"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
