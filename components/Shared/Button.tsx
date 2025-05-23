import Colors from '@/data/Colors'
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

type ButoonProps = {
    text: string,
    onPress: () => void,
    loading?: boolean
}

export default function Button({ text, onPress, loading = false }: ButoonProps) {
    return (
        <TouchableOpacity
            onPress={!loading ? onPress : undefined}
            style={{

                padding: 20,
                backgroundColor: Colors.PRIMARY,
                marginTop: 10,
                marginLeft: 12,
                marginRight: 12,
                borderRadius: 40,
                opacity: loading ? 0.7 : 1,
            }}
            disabled={loading}
        >

            {loading ? <ActivityIndicator  color={Colors.WHITE} /> :
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: Colors.WHITE
                }}>{text}
                </Text>}

        </TouchableOpacity>
    )
}