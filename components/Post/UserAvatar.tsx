import React from 'react';
import { Image, Text, View } from 'react-native';

type UserAvatarProps = {
  name: string;
  image: string;
  date: string;
};

export default function UserAvatar({ name, image, date }: UserAvatarProps) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={{ uri: image }}
        style={{
          width: 45,
          height: 45,
          borderRadius: 22.5,
        }}
      />
      <Text>{name}</Text>
      <Text style={{ fontSize: 12, color: 'gray' }}>{date}</Text>
    </View>
  );
}
