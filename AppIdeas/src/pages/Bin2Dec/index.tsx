import React, {useState} from 'react';
import {Container} from '@/common.styles';
import {Input, SimpleText, ErrorText} from './styles';

const Bin2Dec = (): JSX.Element => {
  const [binaryText, setBinaryText] = useState<string>('');
  const [decimalText, setDecimalText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (input: string) => {
    setBinaryText(input);
    setErrorMessage('');
    setDecimalText('');

    if (!inputIsValid(input)) {
      return;
    }

    const decimal = bin2Dec(input);
    setDecimalText(decimal.toString());
  };

  const inputIsValid = (inputValue: string) => {
    if (inputValue.length === 0) {
      return false;
    }

    if (!textIsValid(inputValue)) {
      setErrorMessage('Only 0 or 1 allowed!');
      return false;
    }

    return true;
  };

  const bin2Dec = (bin: string) => {
    const reverseInput = bin.split('').map(Number).reverse();

    const decimal = reverseInput.reduce((total, number, index) => {
      return total + number * Math.pow(2, index);
    });

    return decimal;
  };

  const textIsValid = (text: string) => {
    const validateStr = new RegExp(/^[0-1]+$/);
    return validateStr.test(text);
  };

  const binaryIsEmpty = () => binaryText.length === 0;

  const showError = () => errorMessage.length > 0;

  return (
    <Container>
      <Input
        placeholder="Enter a binary number!"
        onChangeText={handleInputChange}
        defaultValue={binaryText}
        testID="input"
      />
      {showError() && <ErrorText testID="error">{errorMessage}</ErrorText>}
      {!binaryIsEmpty() && (
        <SimpleText testID="output">{decimalText}</SimpleText>
      )}
    </Container>
  );
};

export default Bin2Dec;
