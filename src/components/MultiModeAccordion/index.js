import React from 'react';
import SoloAccordion from '../SoloAccordion';
import PersistentAccordion from '../PersistentAccordion';
import NestedAccordion from '../NestedAccordion';

const MultiModeAccordion = ({
  soloAccordion = false,
  persistentAccordion = false,
  nestedAccordion = false,
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
    parentWrapperStyle = () => {},
    downArrowIcon = '',
    downArrowUrl = '',
    questionTextStyle = () => {},
    rightArrowStyle = () => {},
    childWrapperStyle = () => {},
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
  } else if (nestedAccordion) {
    return (
      <NestedAccordion
        {...props}
        data={data}
        answerTextStyle={answerTextStyle}
        childWrapperStyle={childWrapperStyle}
        containerStyle={containerStyle}
        key={key}
        onPress={onPress}
        parentWrapperStyle={parentWrapperStyle}
        questionTextStyle={questionTextStyle}
        withAnimation={withAnimation}
        upArrowLocalImage={upArrowLocalImage}
        downArrowLocalImage={downArrowLocalImage}
        upArrowUrl={upArrowUrl}
        downArrowUrl={downArrowUrl}
        actionBoxContainerStyle={actionBoxContainerStyle}
        arrowIconContainerStyle={arrowIconContainerStyle}
        boxContainerExpandedStyle={boxContainerExpandedStyle}
        contentContainerStyle={contentContainerStyle}
        ref={ref}
        rightArrowStyle={rightArrowStyle}
        style={style}
        wrapperStyle={wrapperStyle}
      />
    );
  } else {
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
  }
};

export default MultiModeAccordion;
