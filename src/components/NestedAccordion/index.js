import React, {useState} from 'react';
import {Text, View, Pressable, FlatList, Image} from 'react-native';

import styles from './styles';
import {screenTransition} from '../../constants';

const NestedAccordion = ({
  key = '',
  data = [],
  style = {},
  ref = () => {},
  upArrowUrl = '',
  wrapperStyle = {},
  downArrowUrl = '',
  onPress = () => {},
  containerStyle = {},
  answerTextStyle = {},
  rightArrowStyle = {},
  withAnimation = true,
  questionTextStyle = {},
  upArrowLocalImage = '',
  downArrowLocalImage = '',
  contentContainerStyle = {},
  arrowIconContainerStyle = {},
  actionBoxContainerStyle = {},
  boxContainerExpandedStyle = {},
}) => {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const onPressHandle = (item, index) => {
    onPress(item, index);
    withAnimation && screenTransition();
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter(i => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const renderArrowIcon = isExpanded => {
    const arrowUrlIcon = isExpanded ? upArrowUrl : downArrowUrl;
    const arrowIcon = isExpanded ? upArrowLocalImage : downArrowLocalImage;
    return (
      <View style={[styles.arrowIconContainer, arrowIconContainerStyle]}>
        <Image
          source={arrowUrlIcon ? {uri: arrowUrlIcon} : arrowIcon}
          style={[styles.rightArrow, rightArrowStyle]}
        />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    const {question, answer, children} = item;
    const isExpanded = expandedIndices.includes(index);

    return (
      <Pressable
        style={[
          styles.boxContainer,
          isExpanded && [styles.boxContainerExpanded, actionBoxContainerStyle],
          boxContainerExpandedStyle,
        ]}
        onPress={() => onPressHandle(item, index)}>
        <View style={[styles.wrapper, wrapperStyle]}>
          <Text style={[styles.question, questionTextStyle]}>{question}</Text>
          {isExpanded && answer && (
            <Text style={[styles.answer, answerTextStyle]}>{answer}</Text>
          )}
          {isExpanded && children && children.length > 0 && (
            <NestedAccordion
              data={children}
              upArrowUrl={upArrowUrl}
              wrapperStyle={wrapperStyle}
              downArrowUrl={downArrowUrl}
              withAnimation={withAnimation}
              containerStyle={containerStyle}
              answerTextStyle={answerTextStyle}
              questionTextStyle={questionTextStyle}
              upArrowLocalImage={upArrowLocalImage}
              downArrowLocalImage={downArrowLocalImage}
              onPress={childIndex => onPress(childIndex)}
              arrowIconContainerStyle={arrowIconContainerStyle}
            />
          )}
        </View>
        <View style={styles.arrowIconContainer}>
          {renderArrowIcon(isExpanded)}
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      key={key}
      ref={ref}
      data={data}
      bounces={false}
      extraData={data}
      style={style}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
    />
  );
};

export default NestedAccordion;
