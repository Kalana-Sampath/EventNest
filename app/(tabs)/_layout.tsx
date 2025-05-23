import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='Home' />
        <Tabs.Screen name='Event' />
        <Tabs.Screen name='Clubs' />
        <Tabs.Screen name='Profile' />
    </Tabs>
  )
}