import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  accordionSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 8,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  answerTitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#666666',
    marginRight: 20,
  },
  seprationStyle: {
    marginBottom: 25,
  },
  seprationLine: {
    borderWidth: 0.5,
    borderColor: '#888',
    marginTop: 18,
  },
  container: {
    marginHorizontal: 20,
    marginBottom: 18,
  },
  popularQueriesStyle: {
    color: '#333333',
    fontSize: 17,

    marginBottom: 28,
  },

  rightArrow: {
    width: 10,
    height: 10,
  },
  questionTitleActive: {
    color: 'blue',
  },
});

export default styles;
