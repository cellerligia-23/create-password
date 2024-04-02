import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './LogoStyle';
import logo  from '../../../assets/bat-logo.png'

export function Logo() {
  return (
    <View >
      <Text style={styles.title}>GERAR BAT SENHA</Text>
      <Image source={ logo } style={styles.img}/>
    </View>
  );
}