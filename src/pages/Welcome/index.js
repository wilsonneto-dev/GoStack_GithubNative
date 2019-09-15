import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      loading: false,
      error: false,
    };

    this.signIn = this.signIn.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  async checkUserExists(username) {
    const user = await api.get(`/users/${username}`);
    return user;
  }

  async saveUser(username) {
    await AsyncStorage.setItem('@Githuber:username', username);
  }

  async signIn() {
    const {username} = this.state;
    const {navigation} = this.props;

    this.setState({loading: true, error: false});

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (err) {
      console.tron.log('ERROR * usuário inexistente');
      this.setState({error: true, loading: false});
    }
  }

  render() {
    const {username, error} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.text}>
          Para continuar informe seu usuário do Github
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({username: text})}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.signIn();
            }}>
            {this.state.loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>

        {error && (
          <Text style={styles.error}>Houve um erro, tente novamente</Text>
        )}
      </View>
    );
  }
}

export default Welcome;
