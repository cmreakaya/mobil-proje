import React,{useState} from 'react';
import {ImageBackground,SafeAreaView,Text,Button,TextInput,View,StyleSheet,TouchableOpacity} from 'react-native';

const image = {uri: 'https://www.av-online.hu/pictures/gallery/grado-sr225x_2022-02-26/big/Gardo-SR225x-fejhallgat%C3%B3-lifestyle-5_big.jpg'};
export default function Home({navigation}) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.logo}>Melodia'ya Hoşgeldin!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Login")}>Giriş Yap</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Signin")}>Kayıt ol
          </Text>
        </TouchableOpacity>
      </View>
       </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  logo: {
    fontSize: 30,
    color: 'white',
    marginBottom: 40,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    marginRight: 30,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '55%',
    marginRight:"10px",
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  
  },
});