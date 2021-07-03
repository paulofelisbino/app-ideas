import React, {useState} from 'react';
import {Container} from '../common.styles';
import {Input, SimpleText} from './styles';

const Home = (): JSX.Element => {
  const [originalText, setOriginalText] = useState<string>('');
  const [parsedText, setParsedText] = useState<string>('');

  function handleInputChange(input: string) {
    setOriginalText(input);

    const pizzaText = input
      .split(' ')
      .map((word: Text) => word && '🍕')
      .join(' ');

    setParsedText(pizzaText);
  }

  return (
    <Container>
      <Input
        placeholder="Digite um número binário!"
        onChangeText={handleInputChange}
        defaultValue={originalText}
        testID="input"
      />
      <SimpleText testID="output">{parsedText}</SimpleText>
    </Container>
  );
};

export default Home;
