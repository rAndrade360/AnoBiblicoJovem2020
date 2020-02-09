import React, {useState, useEffect} from 'react';
import {CheckBox} from 'react-native';
import {Container, Texts, Captions} from './styles';

export default function Content({data, saveDay, verify}) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function load() {
      verify(setValue, data);
    }
    load();
  }, [data]);

  return (
    <Container>
      <CheckBox
        style={{padding: 10}}
        value={value}
        onChange={() => {
          setValue(!value);
        }}
        onValueChange={value => {
          saveDay(value, data, setValue);
        }}
      />
      <Texts>
        <Captions>{data.dia}</Captions>
        <Captions>{data.texto}</Captions>
      </Texts>
    </Container>
  );
}
