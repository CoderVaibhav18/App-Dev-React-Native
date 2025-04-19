import React, {JSX} from 'react';
import {View, Text, StyleSheet, ScrollView, useColorScheme} from 'react-native';

export default function FlatCard(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Text
        style={
          isDarkMode
            ? [styles.headingText, styles.headingTextWhite]
            : [styles.headingText, styles.headingTextDark]
        }>
        FlatCard
      </Text>
      <ScrollView horizontal>
        <View style={styles.cardSection}>
          <View style={[styles.cardContainer, styles.cardOne]}>
            <Text>Card 1</Text>
          </View>
          <View style={[styles.cardContainer, styles.cardTwo]}>
            <Text style={styles.cardTwoText}>Card 2</Text>
          </View>
          <View style={[styles.cardContainer, styles.cardThree]}>
            <Text>Card 3</Text>
          </View>
          <View style={[styles.cardContainer, styles.cardfour]}>
            <Text>Card 4</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  headingTextWhite: {
    color: '#fff',
  },
  headingTextDark: {
    color: '#fff',
  },
  cardSection: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 8,
    marginLeft: 8,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'lightblue',
  },
  cardfour: {
    backgroundColor: 'pink',
  },
  cardTwoText: {
    color: '#fff',
  },
});
