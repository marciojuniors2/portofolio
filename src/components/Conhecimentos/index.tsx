/* eslint-disable prettier/prettier */
import { DiDotnet, DiDatabase } from 'react-icons/di';
import { FaReact, FaRobot } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title=".NET" icon={<DiDotnet />} />
        <ConhecimentoItem title="Tailwind" icon={<SiTailwindcss />} />
        <ConhecimentoItem title="Next" icon={<TbBrandNextjs />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="RPA" icon={<FaRobot />} />
        <ConhecimentoItem title="BdSql" icon={<DiDatabase />} />

      </section>
    </Container>
  );
}

export default Conhecimentos;
