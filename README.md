## Accordion for React Native (Android and iOS)
A high performance, beautiful and fully customizable Accordion list for React Native by **Amit Kumar**.


<p align="left">
  <a href="https://www.npmjs.com/package/react-native-accordion-list-view"><img src="https://img.shields.io/badge/npm-v2.0.2-blue"></a>
  <a href="https://travis-ci.org/louay12/react-native-accordion-list-view"><img src="https://img.shields.io/badge/Build-Passing-pass"></a>
</p>

<p align="left">
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-ISC-blue.svg"></a>

</p>

## Getting started
```bash
npm install react-native-multi-flow-accordion --save
```
or
```bash
yarn add react-native-multi-flow-accordion
```

### Demo

**Persistence and Solo Mode Android** 
<div>
<p>
   <img width="800" src="https://github.com/amitmehtacode/MultiModeAccordion/raw/main/src/assets/gif/android.gif" />
</p>

<br>
<br>
<br>
<br>

**Persistence and Solo Mode iOS**
<p>
   <img width="800" src="https://github.com/amitmehtacode/MultiModeAccordion/raw/main/src/assets/gif/iOS.gif" />
</p>

**Nested mode** 
<div>
<p>
   <img width="700" src="https://github.com/amitmehtacode/MultiModeAccordion/raw/main/src/assets/gif/nested.gif" />
</p>
</div>


## Platforms Supported

- [x] iOS
- [x] Android

## Features

- **Solo Mode:** Only one item can be open at a time.
- **Persistent Mode:** Opened items stay open even if others are opened.
- **Nested Mode:** Allows nesting of accordion items within each other, creating a hierarchical structure where inner items can be expanded independently of outer items.
- **Customizable:** Easily customize styles and behavior using props.
- **Responsive:** Works well on different screen sizes.


### Usage

Import the `MultiAccordion` component from the package and use it in your React Native application.

```jsx
import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import MultiAccordion from 'react-native-multi-flow-accordion';

const DATA = [
  {
    question: 'What is JavaScript?',
    answer:
      'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is widely used for building interactive and dynamic websites.',
    children: [
      {
        question: 'What are the key features of React?',
        answer:
          'React is a JavaScript library for building user interfaces. Its key features include virtual DOM, component-based architecture, JSX syntax for defining components, and uni-directional data flow.',
      },
      {
        question: 'What is the purpose of CSS?',
        answer:
          'CSS (Cascading Style Sheets) is used to style the layout and appearance of HTML elements on web pages. It enables developers to control aspects such as colors, fonts, spacing, and positioning.',
      },
    ],
  },
  {
    question: 'What are the advantages of using Git for version control?',
    answer:
      'Git allows multiple developers to collaborate on projects efficiently by tracking changes to files, facilitating branching and merging, and providing a distributed architecture. It also offers features like version history and easy rollback.',
    children: [
      {
        question: 'Explain the concept of responsive web design.',
        answer:
          'Responsive web design is an approach to designing websites that ensures optimal viewing and interaction across various devices and screen sizes. It involves using flexible layouts, media queries, and fluid grids.',
        children: [
          {
            question: 'What is the difference between HTML and HTML5?',
            answer:
              'HTML5 is the latest version of HTML (Hypertext Markup Language), which introduces new elements, attributes, and APIs for building modern web applications. It also supports multimedia and offline capabilities.',
          },
        ],
      },
    ],
  },
];


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MultiAccordion data={DATA} onPress={(item, index) => {
        console.log('data-->>', item, index)
      }}/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```



## Props

The `Accordion` component accepts the following props:

- **mode**: Specifies the mode of operation (`soloAccordion`, `nestedAccordion` or `persistentAccordion`). Default is `persistentAccordion`.



| Props                  | Type                               | Required | Default Value       | Description                                                                                                                                                                                                                                  |
|------------------------|------------------------------------|----------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| withAnimation          | Boolean                            | No       | true                | Specifies whether to animate the accordion transitions.                                                                                                                                                                                      |
| onPress                | () => void                         | No       | () => {}            | Callback function triggered when an accordion item is pressed.                                                                                                                                                                                |
| data                   | Array                              | Yes      | []                  | Array of data objects containing information for each accordion item.                                                                                                                                                                        |
| actionBoxContainerStyle| (index: number) => ViewStyle       | No       | () => {}            | Function that returns styles for the container of action buttons (e.g., expand/collapse icons) for each accordion item.                                                                                                                     |
| answerTextStyle        | (index: number) => TextStyle       | No       | () => {}            | Function that returns styles for the answer text in each accordion item.                                                                                                                                                                      |
| arrowIconContainerStyle| (index: number) => ViewStyle       | No       | () => {}            | Function that returns styles for the container of arrow icons for each accordion item.                                                                                                                                                        |
| boxContainerExpandedStyle| (index: number) => ViewStyle     | No       | () => {}            | Function that returns styles for the expanded accordion item container.                                                                                                                                                                      |
| containerStyle         | ViewStyle                          | No       | () => {}            | Function that returns styles for the overall container of the accordion component.                                                                                                                                                           |
| contentContainerStyle  | ViewStyle                          | No       | () => {}            | Function that returns styles for the content container of the accordion component.                                                                                                                                                           |
| downArrowIcon          | string                             | No       | ''                  | Specifies the icon name or URL for the down arrow icon.                                                                                                                                                                                       |
| downArrowUrl           | string                             | No       | ''                  | Specifies the URL for the down arrow image if using a remote image.                                                                                                                                                                           |
| questionTextStyle      | (index: number) => TextStyle       | No       | () => {}            | Function that returns styles for the question text in each accordion item.                                                                                                                                                                    |
| rightArrowStyle        | ViewStyle                          | No       | () => {}            | Function that returns styles for the right arrow icon (expand/collapse) in each accordion item.                                                                                                                                               |
| upArrowIcon            | string                             | No       | ''                  | Specifies the icon name or URL for the up arrow icon.                                                                                                                                                                                         |
| key                    | string                             | No       | ''                  | Unique key for each accordion item.                                                                                                                                                                                                           |
| style                  | ViewStyle                          | No       | () => {}            | Function that returns additional styles for the accordion component.  
| parentWrapperStyle     | ViewStyle                          | No       | () => {}            | Function that returns additional styles for the accordion component.  
| childWrapperStyle      | ViewStyle                          | No       | () => {}            | Function that returns additional styles for the accordion component.                                                                                                                                                                          |
| upArrowUrl             | string                             | No       | ''                  | Specifies the URL for the up arrow image if using a remote image.                                                                                                                                                                             |
| wrapperStyle           | ViewStyle                          | No       | () => {}            | Function that returns styles for the wrapper container of the accordion component.                                                                                                                                                             |
| questionTitleActiveStyle| (index: number) => TextStyle      | No       | () => {}            | Function that returns styles for the active (expanded) question title in each accordion item.                                                                                                                                                 |
| upArrowLocalImage      | require('path/to/image')           | No       | require('../../assets/arrowUp.png') | Specifies the local image for the up arrow icon if using a local image.                                                                                                                                                                     |
| downArrowLocalImage    | require('path/to/image')           | No       | require('../../assets/arrowDown.png') | Specifies the local image for the down arrow icon if using a local image.                                                                                                                                                                   |






## Contributing

**Contributions are welcome!** Please check the contribution guidelines before submitting issues or pull requests.

## License

**ISC**




