import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/button';
import { ButtonIcon } from '@components/buttonIcon';
import { Filter } from '@components/filter';
import { Header } from '@components/header';
import { Hightlight } from '@components/highlight';
import { Input } from '@components/input';
import { PlayerCard } from '@components/playerCard';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Ian', 'Bruno', 'Marcio', 'Renan']);

  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da Turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do participante" />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              isActive={team === item}
              title={item}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={
          <ListEmpty message="Cadastre o primeiro participante" />
        }
        contentContainerStyle={[
          { paddingBottom: 100 },
          !players.length && { flex: 1 },
        ]}
      />

      <Button text="Remover turma" type="secondary" style={{ marginTop: 20 }} />
    </Container>
  );
}
