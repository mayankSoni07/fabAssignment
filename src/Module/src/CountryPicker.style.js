import { Platform, StyleSheet, PixelRatio, Dimensions } from 'react-native'
import { getHeightPercent } from './ratio'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 30,
    height: height - 80,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  selectCountryView: {
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 10
  },
  selectCountry: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginLeft: 20
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerUnderline: {
    width: '95%',
    height: 1,
    backgroundColor: '#2E8B57'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop: 10
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 16 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  input: {
    height: 48,
    width: '90%'
  },
  inputOnly: {
    // marginLeft: '15%'
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 19,
    backgroundColor: '#fff'
  },
  text: {
    color: "gray",
    marginLeft: 10
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eee',
    opacity: 0.8
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  itemCountry: {
    flexDirection: 'row',
    height: getHeightPercent(7),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    width: '15%'
  },
  itemCountryName: {
    justifyContent: 'center',
    width: '80%',
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: '#ccc',
    height: 20
  },
  countryName: {
    fontSize: getHeightPercent(2.2)
  },
  scrollView: {
    flex: 1
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    height: 25,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2)
  },
  closeButton: {
    height: 48,
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  }
})
