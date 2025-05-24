import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, Text, View } from 'react-native';

type USER_AVATAR = {
  name: string;
  image: string;
  date: string;
};

export default function UserAvatar({ name, image, date }: USER_AVATAR) {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
      }}>
        <Image
          source={{ uri: image }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 99,
          }}
        />
        <View>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}>{name}</Text>
          <Text style={{ 
            fontSize: 12, 
            color: 'gray' 
          }}>{date}</Text>
        </View>
      </View>
      <Ionicons name="ellipsis-vertical" size={24} color="black" />
    </View>
  );
}
