import React from 'react';
import SoloAccordion from '../SoloAccordion';
import PersistentAccordion from '../PersistentAccordion';
import { Text } from 'react-native';

const MultiModeAccordion = ({
  soloAccordion = false,
  persistentAccordion = false,
  ...props
}) => {
  const {
    withAnimation = true,
    onPress = () => {},
    data = [],
    actionBoxContainerStyle = () => {},
    answerTextStyle = () => {},
    arrowIconContainerStyle = () => {},
    boxContainerExpandedStyle = () => {},
    containerStyle = () => {},
    contentContainerStyle = () => {},
    downArrowIcon = '',
    downArrowUrl = '',
    questionTextStyle = () => {},
    rightArrowStyle = () => {},
    upArrowIcon = '',
    key = '',
    ref = () => {},
    style = () => {},
    upArrowUrl = '',
    wrapperStyle = () => {},
    questionTitleActiveStyle = () => {},
    upArrowLocalImage = require('../../assets/arrowUp.png'),
    downArrowLocalImage = require('../../assets/arrowDown.png'),
  } = props;

  if (soloAccordion) {
    return (
      <SoloAccordion
        {...props}
        showArrow
        data={data}
        withAnimation={withAnimation}
        upArrowLocalImage={upArrowLocalImage}
        downArrowLocalImage={downArrowLocalImage}
        onPress={() => {
          onPress();
        }}
        actionBoxContainerStyle={actionBoxContainerStyle}
        answerTextStyle={answerTextStyle}
        arrowIconContainerStyle={arrowIconContainerStyle}
        boxContainerExpandedStyle={boxContainerExpandedStyle}
        containerStyle={containerStyle}
        contentContainerStyle={contentContainerStyle}
        downArrowIcon={downArrowIcon}
        downArrowUrl={downArrowUrl}
        key={key}
        questionTextStyle={questionTextStyle}
        ref={ref}
        rightArrowStyle={rightArrowStyle}
        style={style}
        upArrowIcon={upArrowIcon}
        upArrowUrl={upArrowUrl}
        wrapperStyle={wrapperStyle}
      />
    );
  } else if (persistentAccordion) {
    return (
      <PersistentAccordion
        {...props}
        showArrow
        data={data}
        withAnimation={withAnimation}
        upArrowLocalImage={upArrowLocalImage}
        downArrowLocalImage={downArrowLocalImage}
        onPress={() => {
          onPress();
        }}
        actionBoxContainerStyle={actionBoxContainerStyle}
        answerTextStyle={answerTextStyle}
        arrowIconContainerStyle={arrowIconContainerStyle}
        boxContainerExpandedStyle={boxContainerExpandedStyle}
        containerStyle={containerStyle}
        contentContainerStyle={contentContainerStyle}
        downArrowIcon={downArrowIcon}
        downArrowUrl={downArrowUrl}
        key={key}
        questionTextStyle={questionTextStyle}
        questionTitleActiveStyle={questionTitleActiveStyle}
        ref={ref}
        rightArrowStyle={rightArrowStyle}
        style={style}
        upArrowIcon={upArrowIcon}
        upArrowUrl={upArrowUrl}
        wrapperStyle={wrapperStyle}
      />
    );
  } else {
    return <Text>lol</Text>;
  }
};

export default MultiModeAccordion;
