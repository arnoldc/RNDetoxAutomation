
import React, { useState} from 'react';
import {  View, Text } from 'react-native';

const Page2 = ({ route }) => {
    return (
        <View>
                <Text>{`Welcome back ${route.params.name}`}</Text>
        </View>
    )
}

export default Page2;