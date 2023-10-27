import { StyleSheet, View as DefaultView, Text as DefaultText} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Astronot from '../../assets/images/Astronot.svg';
import Coin from '../../assets/images/Coin.svg'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <DefaultView style={{flex: 0.1, paddingHorizontal: 30, justifyContent: 'center', marginTop: 50, width:"100%",alignItems: 'flex-end'}}><View lightColor='#fff' style={styles.earnings}><Coin style={{position: 'absolute', left: -2}} width={27} height={27}/><Text lightColor='#616161' style={{fontSize: 10}}>150+</Text></View></DefaultView>
      <DefaultView style={styles.upperPart}>
        <DefaultView style={{ width: '60%'}}>
          <DefaultText style={{color: "#fff", fontWeight: 'bold', fontSize:24}}>Bonjour, Asthino</DefaultText>
          <DefaultText style={{color: "#fff", fontSize:13}}>Quelle thématique aimerais-tu choisir ?</DefaultText>
        </DefaultView>
        <Astronot />
      </DefaultView>
      <View lightColor='#fff' style={styles.containerBody}></View>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  upperPart: {
    flex: 0.25,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30
  },
  containerBody: {
    flex: 0.7,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    height: '100%',
    width: '100%'
  },
  earnings: {
    width: 52,
    height: 20,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
});
