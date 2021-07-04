import React, {useState} from 'react';
import {Container} from '../common.styles';
import {Input, SimpleText, ErrorText} from './styles';

const Home = (): JSX.Element => {
  const [binaryText, setBinaryText] = useState<string>('');
  const [decimalText, setDecimalText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleInputChange(input: string) {
    setBinaryText(input);
    setErrorMessage('');
    setDecimalText('');

    if (input.length === 0) {
      return;
    }

    if (!textIsValid(input)) {
      setErrorMessage('Only 0 or 1 allowed!');
      return;
    }

    const decimal = bin2Dec(input);
    setDecimalText(decimal.toString());
  }

  function bin2Dec(binary: string) {
    const reverseInput = binary.split('').map(Number).reverse();

    let decimal = 0;
    for (let index = 0; index < reverseInput.length; index++) {
      const number = reverseInput[index];
      decimal += number * Math.pow(2, index);
    }
    return decimal;
  }

  function textIsValid(text: string) {
    const validateStr = new RegExp(/^[0-1]+$/);
    return validateStr.test(text);
  }

  function binaryIsEmpty() {
    return binaryText.length === 0;
  }

  function showError() {
    console.log(errorMessage);
    return errorMessage.length > 0;
  }

  return (
    <Container>
      <Input
        placeholder="Digite um número binário!"
        onChangeText={handleInputChange}
        defaultValue={binaryText}
        testID="input"
      />
      {showError() && <ErrorText>{errorMessage}</ErrorText>}
      {!binaryIsEmpty() && (
        <SimpleText testID="output">{decimalText}</SimpleText>
      )}
    </Container>
  );
};

export default Home;
