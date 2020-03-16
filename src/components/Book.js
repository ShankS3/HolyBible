import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import ListContainer from './common/ListContainer';

function Book({chapters, selectChapter, navigation}) {
  const onItemPress = (itemId) => {
    selectChapter(itemId);
    navigation.push("Chapter");
  };

  return (
    <View style={styles.parent}>
      <ListContainer
        title="Matthew"
        list={chapters}
        redirects="Chapter"
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

Book.propTypes = {
  chapters: PropTypes.array.isRequired,
  selectChapter: PropTypes.func.isRequired,
};

export default Book;
