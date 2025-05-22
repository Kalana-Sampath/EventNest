import Button from '@/components/Shared/Button'
import Colors from '@/data/Colors'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function LandingScreen() {

    const router = useRouter()

    return (
        <View>

            <Image source={require('./../assets/images/login.png')}
                style={{
                    width: '100%',
                    height: 430,
                }}
            />

            <View style={{
                padding: 20,
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>Welcome to Campus Event
                </Text>

                <Text style={{
                    fontSize: 17,
                    textAlign: 'center',
                    marginTop: 10,
                    color: Colors.GRAY,
                }}>Your college news, Updated in your pocket, Join the club, Register for new event and Many More
                </Text>

                <Button text='Get Stated' onPress={() => router.push('/(auth)/SignUp')} loading={false} />

                <View style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'center', 
                    marginTop: 8 }}>

                    <Text style={{ fontSize: 17 }}>
                        Already have an account?&nbsp;
                    </Text>

                    <TouchableOpacity onPress={() => router.push('/(auth)/SignIn')}>
                        <Text style={{ 
                            fontSize: 17}}>
                            Sign In Here
                        </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>

        </View>
    )
}

