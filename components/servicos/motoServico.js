import React, { Component, } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, TextInput} from 'react-native';
import {Card, Icon} from 'react-native-elements'
import PropTypes from "prop-types"
import icon from "react-native-vector-icons/FontAwesome"
import firebase from 'firebase';

export default class motoServico extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }
  agendamento = () => {
    this.props.navigation.navigate('Agendamento')
    
  }
  render() {
    this.setState = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }
    return (
     <View style={styles.container}>
      <Text style={{fontSize:15}}>Contrate um dos nossos serviços</Text>
        <View style={styles.containerServicos}>
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
            <Card> 
            <Card.Title style={styles.textStyle}>Troca de olio</Card.Title>
            <Card.Divider/>
            <Card.Image style={styles.img}
              styles={"padding:10"} 
              source={require('../../assets/alinhamento.jpg')}
            />
               <Button
                color="green"
                title="Contratar"
                onPress={() => this.userLogin()}
                />
            </Card>
            </View>
            <View style={styles.containerServicos}>
             <Card>
              <Card.Title style={styles.textStyle}>Troca de bateria</Card.Title>
              <Card.Divider/>
              <Card.Image style={styles.img}
                styles={"padding:10"} 
                source={require('../../assets/trocadeBateria.jpeg')}
                />
              <Button
                color="green"
                title="Contratar"
               />
              </Card>

               <Card>
              <Card.Title style={styles.textStyle}>Revisao</Card.Title>
              <Card.Divider/>
              <Card.Image style={styles.img}
                styles={"padding:10"} 
                source={require('../../assets/revisao.jpeg')}
                />
              <Button
                color="green"
                title="Contratar"
                />
              </Card>
            </View>
            
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  },
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
containerServicos:{
  display: 'flex',
  flexDirection:'row'
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