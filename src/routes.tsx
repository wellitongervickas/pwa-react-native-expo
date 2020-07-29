import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons'

import Camera from './pages/Camera'
import Main from './pages/Main'

const Tab = createBottomTabNavigator();

const Routes = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={Main} 
                options={{
                    tabBarIcon: ({ color }) => <Feather name="home" size={20} color={color} />,
                }}
            />
            <Tab.Screen 
                name="Camera" 
                component={Camera} 
                options={{
                    tabBarIcon: ({ color }) => <Feather name="camera" size={20} color={color} />,
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
)

export default Routes;