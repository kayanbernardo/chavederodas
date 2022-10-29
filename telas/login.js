import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image } from 'react-native';
import firebase from '../database/firebase';


export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      senha: '',
      isLoading: false
    }
  }
 
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
    if(this.state.email === '' && this.state.senha === '') {
      Alert.alert('Insira os detalhes para fazer login')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then((res) => {
        console.log(res)
        console.log('Logado com sucesso!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
        <div style={styles.format}>
        <Image
          source={'https://cdn-icons-png.flaticon.com/512/1572/1572039.png'}
          style={styles.img}
        />
      </div>
        
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Senha"
          value={this.state.senha}
          onChangeText={(val) => this.updateInputVal(val, 'senha')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#00AEFF"
          title="Login"
          onPress={() => this.userLogin()}
        />   
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Cadastro')}>
         Criar uma nova conta.
        </Text>                          
      </View>
    );
  }
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
    marginTop: 10,
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
  },
  format: {
    alignSelf: 'center',
    margin: 1,
  },
  img: {
    width: '200px',
    height: '200px',
    margin: 10,
    alignItems: 'center',
    borderColor: 'black',
  }
});