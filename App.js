import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import BackgroundImage from './assets/images/topo.png';
import Logo from './assets/images/logo.png';
import ButtonIcon from './assets/images/icon.png';

export default function App() {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.headerText }>Detalhe da cesta</Text>
        <Image source={ BackgroundImage } style={ styles.headerImage }></Image>
      </View>

      <Text style={ styles.title }>Cesta de Verduras</Text>

      <View style={ styles.wrapper }>
        <Image source={ Logo } style={ styles.vendorLogo }></Image>
        <Text style={ styles.vendor }>Jenny Jack Farm</Text>
      </View>

      <Text style={ styles.description }>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
      
      <Text style={ styles.price }>R$ 40,00</Text>
      <View style={ styles.button }>
        <Image source={ ButtonIcon } style={ styles.buttonImage }></Image>
        <Text style={ styles.buttonText }>Comprar</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'start',
    padding: '4%',
    marginTop: '280px'
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0
  },
  headerImage: {
    height: 280,
    width: '100vw'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center',

    position: 'absolute',
    zIndex: 10,
    width: '100vw',
    padding: 16
  },
  title: {
    fontSize: 28,
    fontWeight: 500,
    color: '#444'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 10
  },
  vendor: {
    fontSize: 18,
    fontWeight: 500,
    color: '#000'
  },
  vendorLogo: {
    width: 40,
    height: 40
  },
  description: {
    fontSize: 18,
    fontWeight: 500,
    color: '#aaa',
  },
  price: {
    fontSize: 28,
    fontWeight: 700,
    color: 'seagreen',
    marginVertical: 20
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: 'seagreen',
    borderRadius: 10,

    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center'
  },
  buttonImage: {
    width: 40,
    height: 40
  }
});
