import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

class Welcome extends Component {
  constructor(props){
    super(props);

    this.state = { userName: '' };

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    const { userName } = this.state;
  }

  render() {
    const { userName } = this.state.userName;

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
            value={userName}
            onChangeText={text => this.setState({userName: text})}
          />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Welcome;
