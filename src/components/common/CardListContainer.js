import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

function CardListContainer(props) {
  let {list, onClickEvent} = props;

  function Item({item}) {
    return (
      <TouchableNativeFeedback onPress={() => onClickEvent(item)}>
        <View style={styles.card}>
          <ImageBackground
            style={styles.cardBackground}
            source={{uri: 'data:image/jpg;base64,'+item.card_img}}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubTitle}>{item.summary.substr(0, 150)+'...'}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{flexGrow: 1}}
      style={styles.mainList}
      data={list}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    margin: 10,
    minHeight: 80,
    borderRadius: 7,
    zIndex: 2,
    overflow: 'hidden',
    elevation: 10,
    backgroundColor: '#fff'
  },
  cardBackground: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
  overlay: {
    display: 'flex',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.65,
    height: 80
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#fff',
    marginLeft: 10,
  },
  cardSubTitle: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 19,
    color: '#fff',
    marginLeft: 10,
    marginBottom: 15,
    opacity: 1
  },
});

CardListContainer.propTypes = {
  list: PropTypes.array.isRequired,
  onClickEvent: PropTypes.func.isRequired,
};

export default CardListContainer;
