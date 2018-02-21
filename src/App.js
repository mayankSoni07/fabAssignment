import React, { Component } from 'react';
import {
  Text, View, Button, TextInput, Image, ImageBackground
} from 'react-native';

/**
 * Import Styles here.
 */
import styles from './App.styles';

/**
 * Import Images here.
 */
import truecaller from './assests/truecaller.png';
import background from './assests/background.png';

/**
 * Used to fetch Device Information.
 */
import DeviceInfo from 'react-native-device-info';
/**
 * Third party module for Country picker.
 */
import CountryPicker, { getAllCountries } from './Module/src/CountryPicker';


export default class App extends Component {
  constructor(props) {
    super(props);
    let userLocaleCountryCode = DeviceInfo.getDeviceCountry();
    let allCountries = [];
    let currentName = "";
    let callingCode = null;

    const userCountryData = getAllCountries().filter((country) => {
      allCountries.push(country.cca2)
      if (country.cca2 === userLocaleCountryCode) {
        currentName = country.name.common;
        callingCode = country.callingCode;
      }
    });

    this.state = {
      cca2: userLocaleCountryCode,
      callingCode,
      countries: allCountries,
      name: currentName
    }
  }

  render() {
    return (
      <ImageBackground source={background} style={styles.container}>

        <View style={styles.trueView}>
          <View style={styles.subTrueOne}>
            <Image source={truecaller} style={styles.truecallerImage} />
          </View>
          <View style={styles.subTrueTwo}>
            <Text style={styles.trueText}>Verify via Truecaller</Text>
          </View>
        </View>

        <View style={styles.trueDescView}>
          <Text style={styles.buttonDescText}>One touch superfast phone number verication</Text>
        </View>

        <Text style={styles.orText}>OR</Text>

        <View style={styles.inputView}>
          <Text style={styles.verifyText}>Verify via SMS</Text>
          <View style={styles.countryNameView}>
            <CountryPicker
              countryList={this.state.countries}
              onChange={value => {
                this.setState({ cca2: value.cca2, name: value.name, callingCode: value.callingCode })
              }}
              cca2={this.state.cca2}
              styles={{ touchFlag: styles.touchFlag }}
              translation="eng"
              closeable
              filterable
              filterPlaceholder=" Search..."
              currentCountryName={this.state.name}
            />
          </View>
          <View style={styles.underline} />

          <View style={styles.numberView}>
            <Text style={styles.text}>+{this.state.callingCode} </Text>
            <TextInput underlineColorAndroid="transparent" style={styles.textInput}></TextInput>
          </View>
          <View style={styles.underline} />
        </View>

        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Get Verification Code</Text>
        </View>

        <View style={styles.buttonDescView}>
          <Text style={styles.buttonDescText}>We will send a One Time Password(OTP)</Text>
          <Text style={styles.buttonDescText}>to your mobile phone via SMS.</Text>
        </View>

        <Text style={styles.skipText}>SKIP</Text>

      </ImageBackground>
    );
  }
}
