import { Button } from '@components/button';
import { ButtonIcon } from '@components/buttonIcon';
import { Header } from '@components/header';
import { Hightlight } from '@components/highlight';
import { Input } from '@components/input';
import React from 'react';
import { Container, Content, Form } from './styles';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Hightlight
          title="Nome da Turma"
          subtitle="Adicione a galera e separe os times"
        />

        <Form>
          <Input placeholder="Nome do participante" />
          <ButtonIcon icon="add" />
        </Form>

        <Button
          text="Remover turma"
          type="secondary"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  );
}
