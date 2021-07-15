import React from 'react';
import {ViewProps, View} from 'react-native';
import {Canvas} from './styles';

interface Props {
  borderRadius: string;
}

interface SeparatedRadius {
  topLeftRadius: string;
  topRightRadius: string;
  bottomRightRadius: string;
  bottomLeftRadius: string;
}

const MyShape = ({borderRadius}: Props): JSX.Element => {
  const calculateBorderRadius = (
    borderRadiusParam: string,
  ): SeparatedRadius => {
    let topLeft = '0px';
    let topRight = '0px';
    let bottomRight = '0px';
    let bottomLeft = '0px';

    if (borderRadiusParam !== undefined) {
      const isolatedRadius = borderRadiusParam.split(' ');
      const radiusQuantity = isolatedRadius.length;

      switch (radiusQuantity) {
        case 1:
          topLeft = isolatedRadius[0];
          topRight = isolatedRadius[0];
          bottomRight = isolatedRadius[0];
          bottomLeft = isolatedRadius[0];
          break;
        case 2:
          topLeft = isolatedRadius[0];
          topRight = isolatedRadius[1];
          bottomRight = isolatedRadius[0];
          bottomLeft = isolatedRadius[1];
          break;

        case 3:
          topLeft = isolatedRadius[0];
          topRight = isolatedRadius[1];
          bottomRight = isolatedRadius[2];
          bottomLeft = isolatedRadius[1];
          break;

        default:
          [topLeft, topRight, bottomRight, bottomLeft] = isolatedRadius;
          break;
      }
    }

    return {
      topLeftRadius: topLeft,
      topRightRadius: topRight,
      bottomRightRadius: bottomRight,
      bottomLeftRadius: bottomLeft,
    };
  };

  const {topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius} =
    calculateBorderRadius(borderRadius);

  return (
    <Canvas
      topLeftRadius={topLeftRadius}
      topRightRadius={topRightRadius}
      bottomRightRadius={bottomRightRadius}
      bottomLeftRadius={bottomLeftRadius}
    />
  );
};

export default MyShape;
