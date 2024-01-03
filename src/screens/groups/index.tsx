import { Groupcard } from '@components/groupcard';
import { Header } from '@components/header';
import { Hightlight } from '@components/highlight';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    'Galera do Ignite',
    'Galera da Rocket',
  ]);

  return (
    <Container>
      <Header />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        style={{ width: '90%' }}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Groupcard title={item} />}
      />
    </Container>
  );
}
