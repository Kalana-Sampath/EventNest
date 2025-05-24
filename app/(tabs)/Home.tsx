import Category from '@/components/Home/Category'
import Header from '@/components/Home/Header'
import React from 'react'
import { View } from 'react-native'

export default function Home() {
  return (
    <View style={{
      padding: 20,
      paddingTop: 40,
      // backgroundColor: Colors.WHITE,
    }}>
      {/* Header */}
      <Header/>
      {/* Category */}
      <Category/>
      {/* Latest Post */}
    </View>
  )
}