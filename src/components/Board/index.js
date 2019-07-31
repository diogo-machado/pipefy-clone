import React, { useState } from 'react';
import { loadLists } from '../../services/api';

import List from '../List';

import { Container } from './styles';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(from, to) {}

  return (
    <Container>
      {lists.map(list => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}
