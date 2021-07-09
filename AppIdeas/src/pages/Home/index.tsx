import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Container} from '../../common.styles';
import {ListItem, Title, List, Description, Separator} from './styles';

type Navigation = {
  navigate: any;
};

interface Props {
  navigation: Navigation;
}

const Home = ({navigation}: Props): JSX.Element => {
  const data = [
    {
      id: '1',
      title: 'Bin2Dec',
      navigate: 'Bin2Dec',
      description: 'Binary-to-Decimal number converter',
    },
    {
      id: '2',
      title: 'BorderRadiusPreviewer',
      navigate: 'BorderRadiusPreviewer',
      description: 'Preview how CSS3 border-radius values affect an element',
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <TouchableWithoutFeedback
        onPress={(): void => navigation.navigate(item.navigate)}>
        <ListItem>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </ListItem>
      </TouchableWithoutFeedback>
    );
  };

  const renderSeparator = () => <Separator />;

  return (
    <Container>
      <List
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={renderSeparator}
      />
    </Container>
  );
};

export default Home;
