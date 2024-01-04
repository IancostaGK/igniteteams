import { Button } from '@components/button';
import { Header } from '@components/header';
import { Hightlight } from '@components/highlight';
import React from 'react';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Hightlight
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />
        <Button text="Criar" />
      </Content>
    </Container>
  );
}
