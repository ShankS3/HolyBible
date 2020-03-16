import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import ListContainer from './common/ListContainer';

function Home({testaments, selectTestament, navigation}) {
  const onItemPress = (itemId) => {
    selectTestament(itemId);
    navigation.push("Testament");
  };

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.backgroundColor}>
        <ListContainer
          title="Testaments"
          list={testaments}
          onClickEvent={onItemPress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#001',
    height: '100%',
  },
});

Home.propTypes = {
  testaments: PropTypes.array.isRequired,
  selectTestament: PropTypes.func.isRequired,
}

export default Home;
