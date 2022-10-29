import React, { Component, } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, TextInput} from 'react-native';
import {Card, Icon} from 'react-native-elements'
import icon from "react-native-vector-icons/FontAwesome"
import firebase from 'firebase';

export default function bikeServico({ navigation }){

  agendamento = () => {
    navigation.navigate('Agendamento')
  }
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card style={styles.card}> 
        <Card.Title>Troca de Pneus</Card.Title>
        <Card.Divider/>
        <Card.Image style={styles.img}
          styles={"padding:10"} 
          source={require('../../assets/trocadepneu.png')}
        />
        <Button style={styles.button}
          color="green"
          title="Contratar"
          onPress={() => this.userLogin()} />  
        </Card>
        <TouchableOpacity style={styles.buttonAgendar}>
            <Button
                color="blue"
                title="Agendar"
                onPress={() => this.agendamento()}
              />
            </TouchableOpacity>
           
            
           <View styles={styles.containerComentarios}>
             <Text style={{left: '20px', fontWeight:'bold'}}>Para mais detalhes sobre a munutenção</Text>
            <TextInput style={styles.textInput}
             
             placeholder="Faça uma observação.."  />
            <TouchableOpacity style={styles.button}>
             <Button
                color="blue"
                title="Enviar"
                onPress={() => this.observacao()}
              
                />
            </TouchableOpacity>

            </View>
              <TouchableOpacity style= {styles.sair}
                activeOpacity={0.7}
                onPress={() => this.signOut()}
                style={styles.touchableOpacityStyle}>
                <Image style={styles.touchableOpacityStyle}
                source={require('../../assets/logout.png')}
              />   
            </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  img:{
    width: '120px',
    height: '120px',
  },
 touchableOpacityStyle: {
  position: 'absolute',
  width: 20,
  height: 20,
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  right: 5,
  bottom: 1,
},
sair:{
    position: 'absolute',
},
  containerComentarios:{
    marginBottom:'200px'
  },
  textInput:{
    backgroundColor:'#D3D3D3',
    borderRadius: '10px',
    fontSize: 16,
    margin: 10,
    padding: 8,
   },
  button:{
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '13px',  
},
buttonAgendar:{
  marginBottom: '46px',
  marginTop: '8px'
}
});



