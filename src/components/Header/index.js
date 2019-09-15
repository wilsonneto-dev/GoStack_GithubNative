import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';
import FontAwesomeIcon from '@fortawesome';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }),
  };

  async signOut() {
    const {navigation} = this.props;

    await AsyncStorage.removeItem('@Githuber:username');
    navigation.navigate('Welcome');
  }

  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <FontAwesomeIcon icon="coffee" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);
