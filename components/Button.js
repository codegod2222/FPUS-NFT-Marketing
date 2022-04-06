import { TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react';
import {COLORS, SIZES, FONTS, SHADOWS, assets} from '../constants';

export const CircleButton = (imgUrl, handlePress, ...props ) => {
  return (
  <TouchableOpacity
    style={{
        width: 40,
        height: 40,
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        ...SHADOWS.light ,
        ...props  
    }}
    onPress={handlePress}
  > 
  <Image imgUrl={assets.heart} resizeMode="contain" style={{width: 20, height: 20}}/>
  </TouchableOpacity>
  )
}

// export default Button

export const RectButton = () => {
    return (
      <View>
        <Text>Button</Text>
      </View>
    )
  }