import { Button } from '@components/button';
import { Header } from '@components/header';
import { Hightlight } from '@components/highlight';
import { Input } from '@components/input';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  function handleNew() {
    navigation.navigate('players', { group });
    setGroup('');
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Hightlight
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />
        <Button text="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
