import React from 'react'
import { View } from 'react-native'
import { Camera as CameraComponent } from 'expo-camera'

const Camera: React.FC = () => (
    <View style={{ flex: 1 }}>
        <CameraComponent 
            style={{ flex: 1 }}
        />
    </View>
)

export default Camera

