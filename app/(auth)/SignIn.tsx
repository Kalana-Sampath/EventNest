import Button from '@/components/Shared/Button'
import TextInputField from '@/components/Shared/TextInputField'
import React, { useContext, useState } from 'react'
import { Image, Text, ToastAndroid, View } from 'react-native'

import { auth } from '@/configs/FirebaseConfig'
import { useRouter } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'

import axios from 'axios'

import { AuthContext } from '@/context/AuthContext'

export default function SignIn() {

  const router = useRouter()

  const [email, setEmail] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()

  const [loading, setLoading] = useState(false);

  const { user,setUser }=useContext(AuthContext)

  // const {user,setUser}=useContext(AuthContext)

  const onSignInBtnClick = async () => {
    if(!email||!password)
    {
      ToastAndroid.show('Enter Email & Password', ToastAndroid.BOTTOM)
      return ;
    }
    setLoading(true)
    signInWithEmailAndPassword(auth,email,password)
    .then(async(resp) => {
      if (resp.user) {
        console.log(resp.user?.email);
        // API call to fetch user Data
        const result=await axios.get(process.env.EXPO_PUBLIC_HOST_URL+"/user?email="+resp.user?.email)
        console.log(result.data);
        setUser(result?.data)
        // Save to Context to share acorss application
      }
      setLoading(false)
    }).catch(e=>{
      setLoading(false)
      ToastAndroid.show('Incorrect email & Password', ToastAndroid.BOTTOM)
    })
 }





     
    // Save to Context to share acorss application



  return (
    <View style={{
      padding: 20,
      paddingTop: 50
    }}>

      <View style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25
      }}>
        <Image source={require('./../../assets/images/logo.png')} style={{
          width: 250,
          height: 250
        }}
        />


        <Text style={{
          fontSize: 25,
          fontWeight: 'bold'
        }}>Sign In To Event Nest</Text>


      </View>

      <TextInputField label='College Email' onChangeText={(v) => setEmail(v)
      } />
      <TextInputField label='Password' password={true} onChangeText={(v) => setPassword(v)
      } />

      <Button text="Sign In" onPress={() => onSignInBtnClick()} loading={loading} />

    </View>
  )
}