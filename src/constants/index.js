import {LayoutAnimation} from 'react-native';

// export const DownArrow = require('../assets/arrow-down@3x.png');
// export const UpArrow = require('../assets/arrow-up@3x.png');

export const screenTransition = () => {
  LayoutAnimation.configureNext(
    LayoutAnimation.create(
      500,
      LayoutAnimation.Types.easeInEaseOut,
      LayoutAnimation.Properties.opacity,
    ),
  );
};

export const removeSpace = s => s?.trim()?.split(/ +/)?.join(' ');