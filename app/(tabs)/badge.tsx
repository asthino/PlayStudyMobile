import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import BagdeView from '../../components/BagdeView';
import { StatusBar } from 'expo-status-bar';

export default function BadgesSreen() {
  return (
    <View lightColor='#fff' style={styles.container}>
      <StatusBar style='dark' />
      <BagdeView  title='Université' subTitle="L'ensemble de vos études et cours" style={{ backgroundColor: '#3444F1' }} />
      <BagdeView  title='Université' subTitle="L'ensemble de vos études et cours" style={{ backgroundColor: '#FF8504' }} />
      <BagdeView  title='Université' subTitle="L'ensemble de vos études et cours" style={{ backgroundColor: '#DD246E' }} />
      <BagdeView  title='Université' subTitle="L'ensemble de vos études et cours" style={{ backgroundColor: '#3444F1' }} />
      <BagdeView  title='Université' subTitle="L'ensemble de vos études et cours" style={{ backgroundColor: '#FF8504' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
