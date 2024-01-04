import { Button } from '@components/button';
import { Header } from '@components/header';
import { Hightlight } from '@components/highlight';
import { Input } from '@components/input';
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
        <Input placeholder="Nome da turma" />
        <Button text="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
