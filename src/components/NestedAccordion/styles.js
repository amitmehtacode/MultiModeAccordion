import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    justifyContent: 'center',
  },
  boxContainer: {
    marginBottom: 8,
    padding: 12,
    borderRadius: 6,
    borderBottomWidth: 1,
    borderColor: '#888',
    marginHorizontal: 10,
  },
  boxContainerExpanded: {
    marginBottom: 16,
  },
  boxSection: {},
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    width: '90%',
  },
  answer: {
    marginTop: 8,
    fontSize: 16,
    color: '#666666',
    marginRight: 20,
  },
  contentContainer: {
    paddingBottom: 16,
  },
  wrapper: {
    // marginRight: 20,
  },
  rightArrow: {
    width: 10,
    height: 10,
  },
  arrowIconContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 10,
    right: 12,
  },
});

export default styles;
