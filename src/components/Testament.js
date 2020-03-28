import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import ListContainer from './common/ListContainer';

function Testament({ books, navigation, selectedTestament, bookActions }) {

  useEffect(() => {
    bookActions.onFetchBooks(selectedTestament.id);
  }, []);

  const onItemPress = (item) => {
    bookActions.onSelectBook(item);
    navigation.push("Book");
  };

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.header} >
        <Image
          source={
            {uri: 'data:image/png;base64,'+selectedTestament.header_img}
          }
          style={styles.headerImg} 
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Introduction</Text>
        <Text style={styles.text}>
          {selectedTestament.summary}
        </Text>
      </View>
      <View style={{...styles.card, ...styles.bottomCard}}>
        <Text style={styles.cardTitle}>Books</Text>
        <ListContainer
          list={books.list}
          onClickEvent={onItemPress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#ececec',
  },
  header: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
    elevation: 10
  },
  headerImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  card: {
    display: 'flex',
    width: '100%',
    minHeight: 50,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    elevation: 5
  },
  bottomCard: {
    alignSelf: 'flex-end',
    flexGrow: 1,
    flexShrink: 1
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: '700',
    lineHeight: 32,
    color: '#8f8f8f'
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    color: '#303030'
  }
});

Testament.propTypes = {
  selectedTestament   : PropTypes.object.isRequired,
  books               : PropTypes.object.isRequired,
  bookActions         : PropTypes.object.isRequired,
}

export default Testament;
