import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
      </View>
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Monitore e organize seus Gastos de qualquer Lugar!</Text>
        <Text style={styles.text}> Faça Login para começar</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textButton}> Acessar </Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#13293D',

  },
  containerLogo: {
    flex:2,
  },
  containerForm: {
    flex:1,
    backgroundColor:'#FFF',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  title: {
    marginTop:28,
    marginBottom:12,
    fontSize:24,
    fontWeight:'bold'
  },
  text: {
    color:'#a1a1a1',
  },
  button: {
    position:'absolute',
    borderRadius:50,
    paddingVertical:8,
    width:'60%',
    backgroundColor:'#13293D',
    alignSelf:'center',
    bottom:'15%',
    alignItems:'center',
    justifyContent:'center'
  },
  textButton: {
    fontSize:18,
    fontWeight:'bold',
    color:'#FFF',
  },


})