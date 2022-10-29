import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView, TouchableOpacity,TextInput } from 'react-native';
import firebase from '../../database/firebase';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App() {
    this.state = { 
      nome: '',
      email: '', 
      senha: '',
      telefone: '',
      endereco: '',
      isLoading: false
    }
  
  return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>
            Serviço foi agendado!!
        </Text>
         <Text style={{fontWeight: 'bold', fontSize:'15px'}}>
          Muito Obrigado! Volte sempre!
        </Text>
      <TextInput style={{marginVertical: '80px'}}
          placeholder="Faça um comentário"/>
      <TouchableOpacity style={styles.button}>
        <Button
          color="blue"
          title="Enviar"
          onPress={() => this.observacao()}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})