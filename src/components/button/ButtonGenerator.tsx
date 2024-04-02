import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { InputText } from '../text-input/InputText';

import generatePass from '../../services/passwordService';

import { styles } from './ButtonGeneratorStyle';


export function ButtonGenerator() {
  const [password, setPass] = useState('');
  
  function handleGenerateButton() {
    const token = generatePass();
    setPass(token);
  };

  function handleCopyButton() {
    Clipboard.setStringAsync(password);
  };

  return (
    <>
      <InputText text="Senha Gerada" password={ password } />

      <Pressable
        style={styles.button}
        onPress={handleGenerateButton}
      >
        <Text style={styles.textButton}>⚡GERAR SENHA</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={handleCopyButton}
      >
        <Text style={styles.textButton}>©️ COPIAR SENHA</Text>
      </Pressable>
    </>
  );
};
