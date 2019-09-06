import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: colors.lighter,
    fontSize: 14,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: colors.secundary,
    borderRadius: metrics.borderRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
  },
});

export default styles;
