import React, { useState } from "react";
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Alert} from "react-native";
const login = ({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const onPress = () =>{
    if (usuario=="gustavo" && contrasena=="123456789") {
      navigation.navigate('Peliculas');
    } else {
      Alert.alert('Error','Fallo de Contraseña',[
        {
          text:'Volver a intentar',
        },
        {
          text:'Olvido su contraseña',
          style:'destructive',
        },
      ])
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <View style={styles.text}>
          <Text style={styles.titulo}>Bienvenido a CreatoGuso</Text>
        </View>
        <View style={styles.viewImage}>
          <Image style={styles.imagen} source={require('../img/spaceX.png')}/>
        </View>
        <View style={styles.text}>
          <Text style={styles.titulo}>Usuario</Text>
        </View>
        <TextInput
        style={styles.inputext}
        onChangeText={(val)=> setUsuario(val)}
        placeholder="Ingresar Usuario"gustavo
        />
        <View style={styles.text}>
          <Text style={styles.titulo}>Contraseña</Text>
        </View>
        <TextInput
        style={styles.inputextContrasena}
        onChangeText={(val)=> setContrasena(val)}
        placeholder="Ingresar Contraseña"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingHorizontal: 10,
  },
  text:{
     alignItems: 'center',
     padding: 10,
  },
  titulo:{
    fontSize:30,
  },
  viewImage:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen:{
    width:400,
    height:150,
  },
  inputext:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
  },
  inputextContrasena:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
  },
  button:{
    top:10,
    alignItems:'center',
    backgroundColor:'#DDDDDD',
    padding: 10,
  },
});

export default login;
