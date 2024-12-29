import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';

export default function Keman({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
        <Card >
          <Card.Title>Stentor 1505/M Student II Viyola (13 Inc)</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/stentor-1505-m-student-ii-viyola-13-inc-a7e579f28c932b1049441d80a42e2f95-ff730b92ec0afe28e5a3cdd2d470b813-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text style={styles.fiyat}>18,692.00TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Yamaha VA5S Viyola (16 Inc)</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/yamaha-va5s-viyola-16-inc-04b998088106bfe2b3b56a415c4543b7-75272f87cf04d33df736bc555cea07df-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text style={styles.fiyat}>36,882.00TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

         <Card >
          <Card.Title>Stentor II VLA 4/4 Viyola</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/stentor-ii-vla-4-4-viyola-11ec45d4ce50fad5e00190eb14d15869-676dface5e7271df49a449c0af1edda9-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text style={styles.fiyat}>7,341.00 TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Stentor 1505/PE Student II Viyola (15 Inc)</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/stentor-1505-pe-student-ii-viyola-15-inc-b8232d9ac2dccc86c31839edd98d33e8-4bd366486f3950057b5bc45808f85ab0-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text style={styles.fiyat}>18,688.00TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>
      </View>
      </ScrollView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#561C24',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: '#6D2932',
    borderRadius: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    marginRight:"10px"
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  fiyat: {
fontStyle: 'bold',
textAlign:'center',

  },
  });