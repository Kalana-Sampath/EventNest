import Colors from '@/data/Colors';
import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../Shared/Button';

export default function WritePost() {

    const [open,setOpen]=useState(false);
    const [value,setValue]=useState(null)
    const [item,setItems]=useState([
        {label:'Public',value:'Public'},
        {label:'ABC Club',value:'ABC Club'}
    ])

    const onPostBtnClick=() => {
        
    }

  return (
    <View>
      <TextInput placeholder='Write your post here...'
        style={styles.TextInput}
        multiline={true}
        numberOfLines={5}
        maxLength={1000}
      />

      <Image source={require('./../../assets/images/select-image.webp')} 
        style={styles.image}
      />

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
            <Button text='Post' onPress={()=>onPostBtnClick()}/>
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
    image:{
        width: 100,
        height: 100,
        borderRadius: 15,
        marginTop: 15,
        // borderWidth: 0.4
    }
})