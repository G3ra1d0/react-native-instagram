import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import Freed from './screens/Freed';
import addPhoto from './screens/addPhoto';
import Perfil from './screens/Perfil';
import Login from './screens/Login';

const Tab = createBottomTabNavigator();

export default () => {
  const [rota, setRota] = useState('Login');

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Freed"
        tabBarOptions={{showLabel: false}}>
        <Tab.Screen
          name="Freed"
          component={Freed}
          options={{
            tabBarLabel: 'Freed',
            tabBarIcon: ({color}) => (
              <Icon name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AddFoto"
          component={addPhoto}
          options={{
            tabBarLabel: 'Adiciona Foto',
            tabBarIcon: ({color}) => (
              <Icon name="camera" size={30} color={color} />
            ),
          }}
        />
        {rota == 'Perfil' ? (
          <Tab.Screen
            name="Perfil"
            component={Perfil}
            initialParams={{setRota: (rota) => setRota(rota)}}
            options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: ({color}) => (
                <Icon name="user" size={30} color={color} />
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="Login"
            component={Login}
            initialParams={{setRota: (rota) => setRota(rota)}}
            options={{
              tabBarLabel: 'Login',
              tabBarIcon: ({color}) => (
                <Icon name="user" size={30} color={color} />
              ),
            }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
