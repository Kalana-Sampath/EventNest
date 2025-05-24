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
      {/* <Image source={require('./../../assets/images/profile.jpg')} 
              style={styles.image}
              /> */}
      <WritePost/>
    </View>
  )
}

// want remove because this not get from auth data
// const styles = StyleSheet.create({
    
//     image:{
//         width: 80,
//         height: 80,
//         borderRadius: 15,
//         marginTop: 15,
//         // borderWidth: 0.4
//     }
// })