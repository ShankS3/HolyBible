import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import ListContainer from './common/ListContainer';

function Testament({books, selectBook, navigation}) {
  const onItemPress = (itemId) => {
    selectBook(itemId);
    navigation.push("Book");
  };

  return (
    <View style={styles.parent}>
      <ListContainer
        title="Old Testament"
        list={books}
        onClickEvent={onItemPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#001',
    height: '100%',
  },
});

Testament.propTypes = {
  books: PropTypes.array.isRequired,
  selectBook: PropTypes.func.isRequired,
}

export default Testament;
