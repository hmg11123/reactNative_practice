import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';

const DATA = [
  {
    id: `game01`,
    name: `세븐나이츠 2`,
  },
  {
    id: `game02`,
    name: `가디언테일즈`,
  },
  {
    id: `game03`,
    name: `카드라이더`,
  },
  {
    id: `game04`,
    name: `포켓몬 go`,
  },
  {
    id: `game05`,
    name: `쿠키런 오븐브레이크`,
  },
];

const Item = ({item}) => {
  return (
    <View style={styles.flatStyle}>
      <View style={styles.flatBack}>
        <View style={styles.flatLeft}>
          <Text>{item.id.substring(4, 6)}. </Text>
        </View>
        <View style={styles.flatRight}>
          <Button title={item.name} color="#0b0b0b"></Button>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.top}>
        <Text style={styles.commonText}>Shop</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.title}>Game List</Text>
      </View>

      <ScrollView style={styles.bottom}>
        <FlatList data={DATA} renderItem={renderItem}></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#0b0b0b`,
  },
  top: {
    flex: 0.1,
    margin: 10,
  },
  middle: {
    flex: 0.2,
    justifyContent: `center`,
    alignItems: `center`,
  },
  bottom: {
    flex: 0.5,
    backgroundColor: `#fff`,
  },
  title: {
    color: `#fff`,
    fontSize: 35,
    // textDecorationLine: `underline`,
    textDecorationColor: `#fff`,
  },
  commonText: {
    color: `#fff`,
    fontSize: 20,
  },
  flatStyle: {
    flex: 1,
    margin: 20,
    borderBottomColor: `#0b0b0b`,
    borderBottomWidth: 3,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  flatBack: {
    flex: 1,
    flexDirection: `row`,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatLeft: {
    flex: 0.7,
    alignItems: `flex-end`,
  },
  flatRight: {
    flex: 1,
    alignItems: `flex-start`,
  },
});

export default App;
