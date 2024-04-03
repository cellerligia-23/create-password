import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { FaTrashAlt } from "react-icons/fa";

import { InputText } from '../text-input/InputText';
import generatePass from '../../services/passwordService';

import { styles } from './ButtonGeneratorStyle';


export function ButtonGenerator() {
  const [password, setPass] = useState('');
  const [copyPassword, setCopyPassword] = useState('©️ COPIAR SENHA');
  
  
  
  function handleGenerateButton() {
    const token = generatePass();
    setPass(token);
    setCopyPassword('©️ COPIAR SENHA');
  };

  function handleCopyButton() {
    if (password) {
      Clipboard.setStringAsync(password);
      setCopyPassword('©️ SENHA COPIADA');
    };
  };

  function handleClearButton() {
    if (password) {
      setPass('');
      setCopyPassword('©️ COPIAR SENHA');
    };
  };

  return (
    <>
      <InputText text='Senha criada' password={ password } />

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
        <Text style={styles.textButton}>{copyPassword}</Text>
      </Pressable>

     <Pressable
        style={styles.button}
        onPress={handleClearButton}
      >
        <Text style={styles.icon}>🗑️ EXCLUIR SENHA</Text>
      </Pressable>
    </>
  );
};
