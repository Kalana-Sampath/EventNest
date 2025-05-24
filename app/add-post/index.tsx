import UserAvatar from '@/components/Post/UserAvatar'
import WritePost from '@/components/Post/WritePost'
import { AuthContext } from '@/context/AuthContext'
import React, { useContext } from 'react'
import { View } from 'react-native'

export default function AddPost() {
    const {user}=useContext(AuthContext)
  return (
    <View style={{
        padding: 20
    }}>
      <UserAvatar name={user?.name} image={user?.image} date='Now' />
      <WritePost/>
    </View>
  )
}