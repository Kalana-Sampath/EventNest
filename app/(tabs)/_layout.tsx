import { AuthContext } from '@/context/AuthContext';
import Colors from '@/data/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import { Image } from 'react-native';

export default function TabLayout() {
    const {user}=useContext(AuthContext)
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: Colors.PRIMARY,
            headerShown: false
        }}
    >
        <Tabs.Screen name='Home' 
            options={{
                tabBarIcon:({color,size}) => <Ionicons name="home" size={size} color={color} />
            }}
        />
        <Tabs.Screen name='Event' 
         options={{
                tabBarIcon:({color,size}) => <Ionicons name="calendar" size={size} color={color} />
            }}
        />
        <Tabs.Screen name='Clubs' 
         options={{
                tabBarIcon:({color,size}) => <Ionicons name="people" size={size} color={color} />
            }}
        />
        <Tabs.Screen name='Profile' 
         options={{
                tabBarIcon:({color,size}) => <Image source={{uri:user?.image}} 
                    style={{
                        width: size,
                        height: size,
                        borderRadius: 99
                    }}
                />
            }}
        />
    </Tabs>
  )
}