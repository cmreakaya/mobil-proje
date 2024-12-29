import React,{useState} from 'react';
import {ImageBackground,SafeAreaView,Text,Button,TextInput,View,StyleSheet,TouchableOpacity} from 'react-native';

const image = {uri: 'https://www.av-online.hu/pictures/gallery/grado-sr225x_2022-02-26/big/Gardo-SR225x-fejhallgat%C3%B3-lifestyle-5_big.jpg'};

export default function Login({navigation}) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.logo}>Giriş Yap
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Kullanıcı Adı"
          placeholderTextColor="#FEFBF6"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Şifre"
          placeholderTextColor="#FEFBF6"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
       <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Signin")}>Kayıt ol
          </Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Anasayfa")}>İleri</Text>
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
  inputView: {
    width: '80%',
    backgroundColor:'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
     fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginRight: 30,
  },
  button: {
    backgroundColor:'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '55%',
    marginRight:"10px"
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
     fontWeight: 'bold',
  },
});