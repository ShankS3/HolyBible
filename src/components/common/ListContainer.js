import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

function ListContainer(props) {
  let {title, list, onClickEvent} = props;
  const [showList, setShowList] = useState(false);

  function Item({item}) {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => onClickEvent(item.id)}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={{...styles.card, ...styles.cardMain}}>
        <Text style={styles.cardTitle}>{title}</Text>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShowList(!showList)}>
          <Text>v</Text>
        </TouchableOpacity>
      </View>
      {showList ? (
        <SafeAreaView
          style={{...styles.card, ...styles.cardMain, ...styles.cardList}}>
          <FlatList
            style={styles.mainList}
            data={list}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    padding: 10,
  },
  cardMain: {
    position: 'relative',
    minHeight: 120,
    padding: 10,
    paddingBottom: 0,
    borderRadius: 13,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: '#ddd',
    zIndex: 2,
  },
  cardBackground: {
    marginTop: -43,
  },
  cardList: {
    marginTop: -20,
    padding: 10,
    maxHeight: '85%',
    zIndex: 1,
  },
  mainList: {
    marginTop: 15,
    marginBottom: 15,
  },
  cardTitle: {
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21,
  },
  toggleButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#DEE0EB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
    borderColor: '#DEE0EB',
    borderBottomWidth: 0,
    zIndex: 2,
  },
  item: {
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#DEE0EB',
  },
  itemTitle: {
    fontSize: 16,
    lineHeight: 21,
    marginLeft: 40,
    padding: 7,
    fontWeight: '300',
  },
});

ListContainer.propTypes = {
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func.isRequired,
};

export default ListContainer;
