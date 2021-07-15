import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import CheckBox from '@react-native-community/checkbox';
import MyShape from './components/MyShape';

import {
  Container,
  FormView,
  Input,
  ErrorText,
  SimpleText,
  CheckBoxWrapper,
  ShapeWrapper,
} from './styles';

const BorderRadiusPreviewer = (): JSX.Element => {
  const [borderRadius, setBorderRadius] = useState<string>('0px');

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    setError,
  } = useForm({mode: 'onChange'});

  const watchIndividualValues = watch('individualValues', false);

  const borderRadiusUnitValid = (radius: string) => {
    const allowedUnits = ['px'];
    let unitValid = false;
    allowedUnits.forEach(unit => {
      if (radius.includes(unit)) {
        unitValid = true;
        return;
      }
    });
    return unitValid;
  };

  const borderRadiusValid = (radius: string[]) => {
    let valid = true;
    radius.forEach((singleRadius: string) => {
      const unitValid = borderRadiusUnitValid(singleRadius);
      if (!unitValid) {
        valid = false;
        return;
      }
    });
    return valid;
  };

  const validateBorderRadius = (completeBorderRadius: string) => {
    let validation = {
      valid: true,
      errorMessage: '',
    };

    const isolatedRadius = completeBorderRadius.split(' ');
    if (isolatedRadius.length > 4) {
      validation = {
        valid: false,
        errorMessage: 'Provide up to 4 border values.',
      };
    } else {
      const radiusValuesValid = borderRadiusValid(isolatedRadius);
      if (!radiusValuesValid) {
        validation = {
          valid: false,
          errorMessage: 'Invalid unit: only px allowed.',
        };
      }
    }

    return validation;
  };

  const onSubmit = (data: any) => {
    const radius = data.borderRadius;
    const radiusValid = validateBorderRadius(radius);

    if (!radiusValid.valid) {
      setError('borderRadius', {
        type: 'manual',
        message: radiusValid.errorMessage,
      });
      setBorderRadius('0px');
      return;
    }

    setBorderRadius(radius);
  };

  return (
    <Container>
      <FormView>
        <Controller
          control={control}
          rules={{}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="borderRadius"
          defaultValue=""
        />
        {errors.borderRadius ? (
          <ErrorText>{errors.borderRadius.message}</ErrorText>
        ) : null}

        <Controller
          control={control}
          rules={{required: false}}
          render={({field: {onChange, value}}) => (
            <CheckBoxWrapper>
              <CheckBox
                disabled={false}
                value={value}
                onValueChange={onChange}
              />
              <SimpleText>Set individual values</SimpleText>
            </CheckBoxWrapper>
          )}
          name="individualValues"
          defaultValue=""
        />

        {watchIndividualValues ? (
          <View>
            <Controller
              control={control}
              rules={{
                pattern: {
                  value: new RegExp('^[0-9]+$'),
                  message: 'Only numbers allowed!',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input onBlur={onBlur} onChangeText={onChange} value={value} />
              )}
              name="lastName"
              defaultValue=""
            />
            {errors.lastName ? (
              <ErrorText>{errors.lastName.message}</ErrorText>
            ) : null}
          </View>
        ) : null}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </FormView>

      <ShapeWrapper>
        <MyShape borderRadius={borderRadius} />
      </ShapeWrapper>
    </Container>
  );
};

export default BorderRadiusPreviewer;
