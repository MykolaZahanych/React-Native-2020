import React from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/success.png')}
          // source={{ uri: 'https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg' }}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resulText}>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resulText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default GameOverScreen;
