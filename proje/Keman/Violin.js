import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';

export default function Keman({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
        <Card >
          <Card.Title>Keman</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
'https://www.do-re.com.tr/fenix-fv34-keman-3-4-6400563b7261a28c1e21776c1f97b793-177810e4a30851654e45af565607c3e7-large-pp.jpg'            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Keman")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Çello</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
'https://www.do-re.com.tr/yamaha-vc5s-cello-4-4-4bd8676a571ccc88a94d10dafa8a039c-43a5594f2093f4b6737a64e3532d2028-mid-pp.jpg'            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Cello")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

         <Card >
          <Card.Title>Viyola</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
'https://www.do-re.com.tr/stentor-1505-l-student-ii-viyola-12-inc-8781e3869be418b4db922bca5473f645-8e4ecf81cbb212b04d3ce571e8b9ade4-mid-pp.jpg'
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Viyola")}>Kategoriye Git</Text>
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