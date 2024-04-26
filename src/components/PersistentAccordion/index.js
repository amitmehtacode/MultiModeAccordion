import {Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {removeSpace, screenTransition} from '../../constants';

const PersistentAccordion = ({
  key = '',
  data = [],
  ref = () => {},
  upArrowUrl = '',
  upArrowIcon = '',
  showArrow = true,
  style = () => {},
  downArrowUrl = '',
  downArrowIcon = '',
  onPress = () => {},
  withAnimation = true,
  wrapperStyle = () => {},
  containerStyle = () => {},
  answerTextStyle = () => {},
  rightArrowStyle = () => {},
  questionTextStyle = () => {},
  contentContainerStyle = () => {},
  actionBoxContainerStyle = () => {},
  arrowIconContainerStyle = () => {},
  questionTitleActiveStyle = () => {},
  boxContainerExpandedStyle = () => {},
  upArrowLocalImage = require('../../assets/arrowUp.png'),
  downArrowLocalImage = require('../../assets/arrowDown.png'),
}) => {
  const renderItem = ({item, index}) => {
    const {question, answer} = item;
    return (
      <View key={index} style={styles.seprationStyle}>
        <Accordion
          question={question}
          answer={removeSpace(answer)}
          showArrow={showArrow}
          answerTextStyle={answerTextStyle}
          arrowIconContainerStyle={arrowIconContainerStyle}
          boxContainerExpandedStyle={boxContainerExpandedStyle}
          downArrowLocalImage={downArrowLocalImage}
          downArrowUrl={downArrowUrl}
          questionTextStyle={questionTextStyle}
          questionTitleActiveStyle={questionTitleActiveStyle}
          rightArrowStyle={rightArrowStyle}
          upArrowLocalImage={upArrowLocalImage}
          upArrowUrl={upArrowUrl}
          withAnimation={withAnimation}
          wrapperStyle={wrapperStyle}
          actionBoxContainerStyle={actionBoxContainerStyle}
          onPress={() => {
            onPress(item, index);
          }}
        />
        <View style={styles.seprationLine} />
      </View>
    );
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        ref={ref}
        key={key}
        data={data}
        style={style}
        bounces={false}
        extraData={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      />
    </View>
  );
};

export default PersistentAccordion;

export const Accordion = ({
  question = '',
  answer = '',
  upArrowUrl = '',
  showArrow = true,
  downArrowUrl = '',
  withAnimation = true,
  wrapperStyle = () => {},
  answerTextStyle = () => {},
  rightArrowStyle = () => {},
  questionTextStyle = () => {},
  arrowIconContainerStyle = () => {},
  boxContainerExpandedStyle = () => {},
  questionTitleActiveStyle = () => {},
  actionBoxContainerStyle = () => {},
  upArrowLocalImage = require('../../assets/arrowUp.png'),
  downArrowLocalImage = require('../../assets/arrowDown.png'),
  onPress = () => {},
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={boxContainerExpandedStyle}
        onPress={() => {
          onPress();
          withAnimation && screenTransition();
          setIsActive(!isActive);
        }}>
        <View style={[styles.accordionSubContainer, wrapperStyle]}>
          <Text
            style={[
              styles.questionTitle,
              questionTextStyle,
              questionTitleActiveStyle,
              isActive && [styles.questionTitleActive, actionBoxContainerStyle],
            ]}>
            {question}
          </Text>
          {showArrow ? (
            <View style={[styles.arrowIconContainer, arrowIconContainerStyle]}>
              {isActive ? (
                <Image
                  source={upArrowUrl ? {uri: upArrowUrl} : upArrowLocalImage}
                  style={[styles.rightArrow, rightArrowStyle]}
                />
              ) : (
                <Image
                  source={
                    downArrowUrl ? {uri: downArrowUrl} : downArrowLocalImage
                  }
                  style={[styles.rightArrow, rightArrowStyle]}
                />
              )}
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
      {isActive && (
        <Text style={[styles.answerTitle, answerTextStyle]}>{answer}</Text>
      )}
    </>
  );
};
