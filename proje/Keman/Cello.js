import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';

export default function Keman({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
        <Card >
          <Card.Title>Rösler MC6012 Çello (1/2)</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/rosler-mc6012-cello-1-2-54b9936b4605bd9c93eb3e9d3daab917-b8e09699dbc143afa6253546368f199a-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text style={styles.fiyat}>24,983.00TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Mavis MC6011 Çello (3/4)</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/mavis-mc6011-cello-3-4-60d57938b7360fae8301d3d7dce726a9-d5c276b99bed96a010b59223cfab8c8a-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text style={styles.fiyat}>13,424.00TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

         <Card >
          <Card.Title>Yamaha VC5S Çello (4/4)</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/yamaha-vc5s-cello-4-4-4bd8676a571ccc88a94d10dafa8a039c-43a5594f2093f4b6737a64e3532d2028-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text style={styles.fiyat}>79,387.00TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Kinglos DSDT 1601 DSDT Series Elektro Çello</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/kinglos-dsdt-1601-dsdt-series-elektro-cello-f1a3e3d618e02825b40820a41c85d690-95bfd3657551a7f4d4409cf10e0d46a4-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text style={styles.fiyat}>25,900.00TL</Text>
          
          
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