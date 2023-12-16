import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/stackNavigator';
import * as eva from '@eva-design/eva';
import {ApplicationProvider,IconRegistry} from '@ui-kitten/components';
import store from './src/store';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import MyColors from './src/theme/MyColors';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={MyColors.product} barStyle={'dark-content'} />
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
        <StackNavigator />
        </ApplicationProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
