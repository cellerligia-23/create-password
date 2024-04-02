import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './InputTextStyle';

interface InputTextProps {
  password: string
  text: string
}

export function InputText(props: InputTextProps) {
  return (
    <TextInput 
      placeholder={props.text}
      value={props.password}
      style={styles.inputer}
    >      
    </TextInput>    
  );
}