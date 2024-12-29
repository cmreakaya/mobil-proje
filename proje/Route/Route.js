import { Text, SafeAreaView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login'
import SigninScreen from '../Screens/Signin'
import AnasayfaScreen from '../Screens/Anasayfa'
import KlarneterScreen from '../Nefesliler/Klarnet'
import BateriScreen from '../Screens/Bateri'
import GitarScreen from '../Gitarlar/Gitar'
import ElektroScreen from '../Gitarlar/Elektro'
import KlasikScreen from '../Gitarlar/Klasik'
import AkustikScreen from '../Gitarlar/Akustik'
import BasScreen from '../Gitarlar/Bas'
import PiyanoScreen from '../Piyanolar/Piyano'
import DuvarScreen from '../Piyanolar/Duvar'
import KuyrukluScreen from '../Piyanolar/Kuyruklu'
import KonsolScreen from '../Piyanolar/Konsol'
import DijitalScreen from '../Piyanolar/Dijital'
import ViolinScreen from '../Keman/Violin'
import KemanScreen from '../Keman/Keman'
import CelloScreen from '../Keman/Cello'
import ViyolaScreen from '../Keman/Viyola'
import NefesliScreen from '../Nefesliler/Nefesli'
import YanflutScreen from '../Nefesliler/Yanflut'
import SepetScreen from '../Screens/Sepet'




const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Signin' component={SigninScreen}/>
        <Stack.Screen name='Anasayfa' component={AnasayfaScreen}/>
         <Stack.Screen name='Keman' component={KemanScreen}/>
          <Stack.Screen name='Gitar' component={GitarScreen}/>
          <Stack.Screen name='Piyano' component={PiyanoScreen}/>
          <Stack.Screen name='Klarnet' component={KlarneterScreen}/>
          <Stack.Screen name='Bateri' component={BateriScreen}/>
          <Stack.Screen name='Elektro Gitar' component={ElektroScreen}/>
          <Stack.Screen name='Klasik Gitar' component={KlasikScreen}/>
          <Stack.Screen name='Akustik Gitar' component={AkustikScreen}/>
          <Stack.Screen name='Bas Gitar' component={BasScreen}/>
          <Stack.Screen name='Akustik Duvar Piyanoları' component={DuvarScreen}/>
          <Stack.Screen name='Akustik Kuyruklu Piyanolar' component={KuyrukluScreen}/>
          <Stack.Screen name='Dijital Konsol Piyanolar' component={KonsolScreen}/>
          <Stack.Screen name='Dijital Kuyruklu Piyanolar' component={DijitalScreen}/>
          <Stack.Screen name='Cello' component={CelloScreen}/>
          <Stack.Screen name='Viyola' component={ViyolaScreen}/>
          <Stack.Screen name='Violin' component={ViolinScreen}/>
          <Stack.Screen name='Nefesli' component={NefesliScreen}/>
          <Stack.Screen name='Yanflut' component={YanflutScreen}/>
          <Stack.Screen name='Sepetim' component={SepetScreen}/>
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}