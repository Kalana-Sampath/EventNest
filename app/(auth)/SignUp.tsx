import Button from '@/components/Shared/Button';
import TextInputField from '@/components/Shared/TextInputField';
import Colors from '@/data/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import { useRouter } from 'expo-router';

export default function SignUp() {

    const [profileImage, setProfileImage] = useState<string | undefined>();
    const [fullName, setFullName] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();


    const [loading, setLoading] = useState(false);

    const router = useRouter();


    const onBtnPress = () => {
        console.log("button press");

    }


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.7,
        });

        console.log(result);

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ paddingTop: 40, padding: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
                Create New Account
            </Text>

            <View style={{ display: 'flex', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity onPress={() => pickImage()}>
                        {profileImage ? (
                            <Image source={{ uri: profileImage }} style={styles.profileImage} />
                        ) : (
                            <Image
                                source={require('./../../assets/images/profile.jpg')}
                                style={styles.profileImage}
                            />
                        )}

                        <Ionicons
                            name="camera"
                            size={24}
                            color={Colors.PRIMARY}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TextInputField label="Full Name" onChangeText={(v) => setFullName(v)} />
                <TextInputField label="College Email" onChangeText={(v) => setEmail(v)} />
                <TextInputField label="Password" password={true} onChangeText={(v) => setPassword(v)} />

            </View>

            <Button text="Create Account" onPress={() => onBtnPress()} loading={loading} />

        </View>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 99,
        marginTop: 20,
    },
});