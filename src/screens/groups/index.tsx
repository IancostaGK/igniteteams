import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/button';
import { Groupcard } from '@components/groupcard';
import { Header } from '@components/header';
import { Hightlight } from '@components/highlight';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const navigation = useNavigation();
  const [groups, setGroups] = useState<string[]>([
    'Galera do Ignite',
    'Galera da Rocket',
  ]);

  function handleNewGroup() {
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        style={{ width: '90%' }}
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={!groups.length && { flex: 1 }}
        renderItem={({ item }) => <Groupcard title={item} />}
        ListEmptyComponent={<ListEmpty message="Cadestre sua primeira turma" />}
      />
      <Button text="Criar Turma" onPress={handleNewGroup} />
    </Container>
  );
}
