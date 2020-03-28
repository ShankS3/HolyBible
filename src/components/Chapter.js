import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, SectionList, View, Text, StyleSheet} from 'react-native';

function Chapter({titles, verses}) {
  const Item = ({id}) => {
    let selectedVerse = verses.find(verse => verse.id === id);
    return (
      <View>
        <Text style={style.verse}>{id + ' ' + selectedVerse.verse}</Text>
      </View>
    );
  }
  
  return (
    <SafeAreaView style={style.parent}>
      <SectionList
        sections={titles}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item id={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={style.versesTitle}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  parent: {
    backgroundColor: '#001',
    color: '#ECECEC',
    height: '100%',
    padding: 10
  },
  versesTitle: {
    fontSize: 21,
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#ECECEC',
  },
  verse: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ECECEC',
  },
});

Chapter.propTypes = {
  titles: PropTypes.array.isRequired,
  verses: PropTypes.array.isRequired
};

export default Chapter;
