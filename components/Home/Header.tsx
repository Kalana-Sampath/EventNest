import { AuthContext } from '@/context/AuthContext';
import Colors from '@/data/Colors';
import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';

export default function Header() {
    const { user } = useContext(AuthContext);

  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>

      <View>

        <Text style={{
            fontSize: 25,
            color: Colors.PRIMARY,
            fontWeight: 'bold'
        }}>Hey There!
        </Text>
        
        <Text style={{
            fontSize: 18,
            color: Colors.GRAY,
        }}>
            Sabaragamuwa University
        </Text>

      </View>

      <Image
        source={{ uri: user?.image }} style={{
            width: 40,
            height: 40,
            borderRadius: 99
        }} />

    </View>
  )
}