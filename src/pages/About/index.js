import React from 'react';
import {ScrollView} from 'react-native';
import logo2 from '../../assets/logo-ano.png';

import {
  Container,
  Circle,
  Img,
  Content,
  Title,
  Details,
  Description,
  GiftenText,
  Giften,
  DescriptionText,
} from './styles';

export default function About() {
  return (
    <ScrollView>
      <Container>
        <Circle>
          <Img source={logo2} />
        </Circle>
        <Content>
          <Title>Ano Bíblico Jovem 2020</Title>
        </Content>

        <Details>
          <Description>Versão 1.0.0</Description>
          <Description>Desenvolvedor: Renan de Andrade Correa</Description>
          <Description>Email: r.andrade@acad.ifma.edu.br</Description>
          <Description>GitHub: rAndrade360</Description>
        </Details>

        <Giften>
          <GiftenText>
            Gostou do app? Contribua com qualquer valor e ajude a promovê-lo!
          </GiftenText>
        </Giften>

        <Giften>
          <DescriptionText>
            Esse é um aplicativo não oficial da Igreja Adventista do Sétimo Dia.
            O material utilizado como tema de cores, logos e textos do ano
            bíblico é de total autoria da mesma.
          </DescriptionText>
        </Giften>
      </Container>
    </ScrollView>
  );
}
