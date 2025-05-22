import Colors from '@/data/Colors'
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

type ButoonProps = {
    text: string,
    onPress: () => void,    
    loading: boolean
}

export default function Button({text, onPress, loading = false}: ButoonProps) {
  return (
     <TouchableOpacity
     onPress={onPress} 
     style={{
                    padding: 15,
                    backgroundColor: Colors.PRIMARY,
                    marginTop: 10,
                    borderRadius: 10,

                }}>
                {loading? <ActivityIndicator  color={Colors.WHITE} />:   
                    <Text style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: Colors.WHITE
                    }}>{text}
                    </Text>}

                </TouchableOpacity>
  )
}