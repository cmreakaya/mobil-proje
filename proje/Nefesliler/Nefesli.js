import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';

export default function Nefesliler({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
        <Card >
          <Card.Title>Yan Flüt</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/bohemia-bfl003-yan-flut-eb89c721a6094643c3a36212d6959e3e-7022120c1e17fcbdb6691fe01001eefe-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
         
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Yanflut")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Klarnet</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/jinbao-jbcl-570-mi-bemol-klarnet-8dacb8011a66d845c29a49f9271e687e-5de5d472f762245b5bde98a995c4a61a-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Klarnet")}>Kategoriye Git</Text>
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
    justifyContent: 'center'
  },
  });