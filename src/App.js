import React, {Component} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import './config/ReactotronConfig';
import createNavigator from './routes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChecked: false,
      userLogged: false,
      username: '',
    };
  }

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const {userChecked, userLogged} = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}
