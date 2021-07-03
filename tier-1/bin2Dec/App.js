import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');

  function handleInputChange(inputText) {
    setInputText(inputText);
    const pizzaText = inputText
      .split(' ')
      .map(word => word && '🍕')
      .join(' ');

    setText(pizzaText);
  }

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Digite um número binário!"
        onChangeText={handleInputChange}
        defaultValue={inputText}
      />
      <Text style={{padding: 10, fontSize: 42}}>{text}</Text>
    </View>
  );
};

export default PizzaTranslator;
