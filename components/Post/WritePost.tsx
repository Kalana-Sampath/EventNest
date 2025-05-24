import { cld, options } from '@/configs/CloudinaryConfig';
import { AuthContext } from '@/context/AuthContext';
import Colors from '@/data/Colors';
import axios from 'axios';
import { upload } from 'cloudinary-react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { Image, StyleSheet, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../Shared/Button';


export default function WritePost() {

    const [selectedImage, setSelectedImage] = useState<string | undefined>();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null)
    const [content, setContent] = useState<string | null>();
    const {user}=useContext(AuthContext);
    const [loading,setLoading]=useState(false)
    const [item, setItems] = useState([
        { label: 'Public', value: 'Public' },
        { label: 'ABC Club', value: 'ABC Club' }
    ])

    const route=useRouter();

    const onPostBtnClick = async () => {

        if (!content) {
            ToastAndroid.show('Please enter content', ToastAndroid.BOTTOM)
            return;

        }
        setLoading(true)
        // Upload Image
        let uploadImageUrl = '';
        if (selectedImage) {
            const resultData: any = await new Promise(async (resolve, reject) => {
                await upload(cld, {
                    file: selectedImage,
                    options: options,
                    callback: (error: any, response: any) => {
                        if (error) {
                            reject(error)
                        } else {
                            resolve(response)
                        }
                    }
                })
            });
            uploadImageUrl = resultData && resultData?.url
        }

        const result = await axios.post(process.env.EXPO_PUBLIC_HOST_URL+'/post',{
            content:content,
            imageUrl:uploadImageUrl,
            visibleIn:value,
            email:user?.email
        })
        console.log(result.data)
        setLoading(false)
        route.replace('/(tabs)/Home')
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.7,
        });



        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };


    return (
        <View>
            <TextInput placeholder='Write your post here...'
                style={styles.TextInput}
                multiline={true}
                numberOfLines={5}
                maxLength={1000}
                onChangeText={(value) => setContent(value)}
            />

            <TouchableOpacity onPress={pickImage}>
                {selectedImage ?
                    <Image source={{ uri: selectedImage }}
                        style={styles.image}
                    /> :
                    <Image source={require('./../../assets/images/select-image.webp')}
                        style={styles.image}
                    />}

            </TouchableOpacity>

            <View style={{
                marginTop: 15,
            }}>
                <DropDownPicker
                    items={item}
                    open={open}
                    value={value}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{
                        borderWidth: 0,
                        elevation: 1
                    }}
                />
            </View>
            <Button text='Post' onPress={() => onPostBtnClick()} loading={loading}/>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        height: 140,
        marginTop: 10,
        borderRadius: 15,
        textAlignVertical: 'top',
        elevation: 7
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginTop: 15,
        // borderWidth: 0.4
    }
})