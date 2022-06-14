import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { RootStackParamList } from './types';
import { Brand, Home, SearchResult } from '../screens';
import { colors } from '../constants';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: colors.secondaryColor,
      }}
    >
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Hello, Jokotoye',
        }}
      />
      <RootStack.Screen
        name="Brand"
        component={Brand}
        options={({ route }) => ({
          title: `${route.params.brand}`,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        })}
      />

      <RootStack.Screen
        name="SearchResult"
        component={SearchResult}
        options={() => ({
          title: 'Search results',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
    </RootStack.Navigator>
  );
};
