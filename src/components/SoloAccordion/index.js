import React, {useState} from 'react';
import {Text, View, Pressable, FlatList, Image} from 'react-native';

import styles from './styles';
import {screenTransition} from '../../constants';

const SoloAccordion = ({
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
  boxContainerExpandedStyle = () => {},
  upArrowLocalImage = require('../../assets/arrowUp.png'),
  downArrowLocalImage = require('../../assets/arrowDown.png'),
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const onPressHandle = (item, index) => {
    onPress(item, index);
    withAnimation && screenTransition();
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const renderItem = ({item, index}) => {
    const {question, answer} = item;
    const isExpanded = index === expandedIndex;

    return (
      <Pressable
        key={index}
        style={[
          styles.boxContainer,
          isExpanded && [styles.boxContainerExpanded, actionBoxContainerStyle],
          boxContainerExpandedStyle,
        ]}
        onPress={() => onPressHandle(item, index)}>
        <View style={[styles.wrapper, wrapperStyle]}>
          <Text style={[styles.question, questionTextStyle]}>{question}</Text>
          {isExpanded && (
            <Text style={[styles.answer, answerTextStyle]}>{answer}</Text>
          )}

          {showArrow ? (
            <View style={[styles.arrowIconContainer, arrowIconContainerStyle]}>
              {isExpanded ? (
                <Image
                  source={upArrowUrl ? { uri: upArrowUrl } : upArrowLocalImage}
                  style={[styles.rightArrow, rightArrowStyle]}
                />
              ) : (
                <Image
                  source={downArrowUrl ? { uri: downArrowUrl } : downArrowLocalImage}
                  style={[styles.rightArrow, rightArrowStyle]}
                />
              )}
            </View>
          ) : null}
        </View>
      </Pressable>
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

export default SoloAccordion;
