import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  TouchableHighlight,
  SafeAreaView,
  SectionList,
  StyleSheet,
  View,
  Text,
} from 'react-native';

function Book({selectedBook, chapters, chapterActions, navigation}) {

  useEffect(() => {
    chapterActions.onFetchChapters(selectedBook.id);
  }, []);

  const onItemPress = item => {
    chapterActions.onSelectChapter(item);
    navigation.push("Chapter");
  };

  const onSubItemPress = item => {
    chapterActions.onSelectTitle(item);
    navigation.push("Chapter");
  };

  const Item = (chapter) => {
    return (
      <TouchableHighlight onPress={() => onSubItemPress(chapter['id'])}>
        <Text style={styles.sectionSubTitle}>
          {chapter['id'].title}
        </Text>
      </TouchableHighlight>
    );
  }

  const chapterList = _.chain(chapters.list)
                        .map(d => d.chapter)
                        .uniq()
                        .value();

  const sectionList = _.map(chapterList, ((d,i) => {
                        return {
                          id: i,
                          title: d,
                          data: _.chain(chapters.list)
                                .filter(item => item.chapter == d)
                                .map(item => {
                                  return !_.isEmpty(item.title) ? {
                                    title: item.title, 
                                    verses_count: item.verses_count, 
                                    start_verse: item.start_verse
                                  } : null
                                })
                                .compact()
                                .value()
                        }
                      }));

  return (
    <SafeAreaView style={styles.parent}>
      <Text style={styles.headerText}>{selectedBook.name}</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Introduction</Text>
        <Text style={styles.text}>
          {selectedBook.summary}
        </Text>
      </View>
      <View style={{...styles.card, ...styles.bottomCard}}>
        <Text style={styles.cardTitle}>Chapters</Text>
        <SectionList
          style={{height: "30%"}}
          sections={sectionList}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item id={item} />}
          renderSectionHeader={({section: {title}}) => (
            <TouchableHighlight onPress={() => onItemPress(title)}>
              <Text style={styles.sectionTitle}>{"Chapter "+title}</Text>
            </TouchableHighlight>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    display: 'flex',
    backgroundColor: '#ececec',
    height: '100%'
  },
  headerText:{
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 47,
    paddingTop: 10,
    paddingLeft: 10,
    color: '#5f5f5f'
  },
  card: {
    display: 'flex',
    width: '100%',
    minHeight: 50,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    elevation: 5,
  },
  bottomCard: {
    alignSelf: 'flex-end',
    flexGrow: 1,
    flexShrink: 1
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: '700',
    lineHeight: 35,
    color: '#8f8f8f'
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    color: '#303030'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 31,
    color: '#5f5f5f',
    marginLeft: 10,
  },
  sectionSubTitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#303030',
    marginLeft: 30,
  },
});

Book.propTypes = {
  selectedBook      : PropTypes.object.isRequired,
  chapters          : PropTypes.object.isRequired,
  chapterActions    : PropTypes.object.isRequired,
};

export default Book;
