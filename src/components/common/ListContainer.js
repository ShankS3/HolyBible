import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function ListContainer(props) {
  let {list, onClickEvent} = props;

  function Item({item}) {
    return (
      <TouchableOpacity onPress={() => onClickEvent(item)}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            {item.name}
          </Text>
          <Text style={styles.cardSubTitle}>
            {item.summary.length > 150 ? item.summary.substr(0, 150)+'...' : item.summary}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList 
      data={list}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    zIndex: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 26,
    color: '#303030',
    marginLeft: 10,
  },
  cardSubTitle: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 19,
    color: '#303030',
    marginLeft: 10,
    marginBottom: 15,
    opacity: 1
  },
});

ListContainer.propTypes = {
  flow: PropTypes.string,
  list: PropTypes.array.isRequired,
  onClickEvent: PropTypes.func.isRequired,
};

export default ListContainer;
