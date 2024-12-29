import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';

export default function Nefesliler({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
        <Card >
          <Card.Title>Bohemia BFL003 Yan Flüt(Parlak Siyah)</Card.Title>
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
          <Text>6,376.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Eastar EFL-1 Yan Flüt (Nikel)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/eastar-efl-1-yan-flut-nikel-369d176277f852a8dae7a84a9ff46977-b650defb2fc583a406dc7a26437a956b-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text>5,293.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        
        
        <Card >
          <Card.Title>Eastar EFL-2 Yan Flüt (Gümüş Kaplama)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/eastar-efl-2-yan-flut-gumus-kaplama-a9a05478074de219551d580ad0dfac9e-2f6852b4130105646ae65596bfa97405-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text>7,131.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Jinbao JBFL-6237S Gümüş Yan Flüt</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/jinbao-jbfl-6237s-gumus-yan-flut-08013965fe1584791fcc4a2162d4bbe5-31c79c66b85d3f34f022e9731d2dbb11-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 50,
            }}
          />
          <Text>7,860.00 TL</Text>
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
  });