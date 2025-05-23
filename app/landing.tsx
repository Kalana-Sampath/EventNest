import Button from '@/components/Shared/Button';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';


const { height, width } = Dimensions.get('window')

export default function LandingScreen() {
    const router = useRouter()

    return (
        <View style={{ flex: 1 }}>

            {/* Logo  */}
            <Image
                source={require('./../assets/images/logo.png')}
                style={{
                    width: 190,
                    height: 190,
                    position: 'absolute',
                    top: 50,
                    alignSelf: 'center',
                    zIndex: 1,
                    marginLeft: 18
                }}
            />

            {/* Background Image */}
            <Image
                source={require('./../assets/images/landing-background.png')}
                style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
                resizeMode="cover"
            />

            {/* Overlay Content */}
            <View style={{
                flex: 1,
                paddingTop: 280,
                padding: 20,
            }}>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'skyblue',
                        textShadowColor: 'rgba(0, 0, 0, 0.7)',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3,
                        paddingRight: 110
                    }}>
                        Welcome to
                    </Text>
                    <Text style={{
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'skyblue',
                        textShadowColor: 'rgba(0, 0, 0, 0.7)',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3,
                        paddingLeft: 120, // Indents just the second line
                    }}>
                        Event Nest
                    </Text>
                </View>


                <Text style={{
                    fontSize: 18,
                    textAlign: 'justify',
                    color: 'white',
                    paddingTop: 25,
                    textShadowColor: 'rgba(0, 0, 0, 0.7)',
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 4,
                    marginBottom: 4, // control the space below this line
                }}>
                    Stay updated with {'\n'}                  Sabaragamuwa University Events.
                </Text>

                <Text style={{
                    fontSize: 18,
                    textAlign: 'justify',
                    color: 'white',
                    paddingBottom: 25,
                    textShadowColor: 'rgba(0, 0, 0, 0.7)',
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 4,
                    marginLeft: 60
                }}>
                    Join clubs, register instantly {'\n'}            Never miss out !
                </Text>


                <Button
                    text='Get Started'
                    onPress={() => router.push('/(auth)/SignUp')}
                    loading={false}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 8,
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: 'white',
                        paddingTop: 6,
                        textShadowColor: 'rgba(0, 0, 0, 0.7)',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 4,
                    }}>
                        Already have an account?&nbsp;
                    </Text>

                    <TouchableOpacity onPress={() => router.push('/(auth)/SignIn')}>
                        <Text style={{
                            fontSize: 17,
                            color: 'white',
                            paddingTop: 6,
                            textShadowColor: 'rgba(0, 0, 0, 0.7)',
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 4,
                        }}>
                            Sign In Here
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
