import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import CardListContainer from './common/CardListContainer';

function Home({testaments, testamentActions, navigation}) {

  useEffect(() => {
    testamentActions.onFetchTestaments();
  }, []);

  const onItemPress = (item) => {
    testamentActions.onSelectTestament(item);
    navigation.push("Testament");
  };

  return (
    <SafeAreaView style={styles.parent}>
      {
        testaments.error 
        ? <Text>{testaments.errorMessage || "Nothing to load"}</Text>
        : (
          <CardListContainer
            list={testaments.list}
            onClickEvent={onItemPress}
          />
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#ececec',
    height: '100%',
    flex: 1
  },
});

Home.propTypes = {
  testaments      : PropTypes.object.isRequired,
  testamentActions: PropTypes.object.isRequired
}

export default Home;
