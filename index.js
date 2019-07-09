import React, { Component } from 'react'
import {AppRegistry,StyleSheet,TouchableOpacity,Text,View,Image,Alert}from 'react-native'

 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  

 render() {
   return (
    <View style={styles.container}>
    <Image
      source={require('./imgs/logo.png')}
    />
   <TouchableOpacity onPress={gerarnovafrase} style={styles.button}>
    
   <Text style={styles.buttonText}>Nova Frase</Text>
    
   </TouchableOpacity>
    
  </View>
    )
  }
}
const gerarnovafrase = () => {
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 20); 
   
    var frases = Array();
    frases[0]= 'Se não der certo, a gente tenta de novo, de novo e de novo. E se não der certo a gente fica junto errado mesmo.'; 
    frases[1]= 'Seja a pessoa que seu cachorro acha que você é!!'; 
    frases[2]= 'Seja você mesma, todas as outras já existem.'; 
    frases[3]= 'Confie em quem te dá confiança, ame quem te dá amor, cuide de quem cuida de você'; 
    frases[5]= 'Amizade verdadeira não é ser inseparável. É estar separado, e nada mudar.'; 
    frases[6]= 'Enquanto alguns escolhem pessoas perfeitas, eu escolho as que me fazem bem.'; 
    frases[7]= 'O que você tem de diferente é o que você tem de mais bonito.'; 
    frases[8]= 'Não são as coisas bonitas que marcam nossas vidas, mas sim as pessoas que têm o dom de jamais serem esquecidas!'; 
    frases[9]= 'Nem todos os anjos tem asas, às vezes eles têm apenas o dom de te fazer sorrir.'; 
    frases[10]= 'Tomara que a felicidade te pegue de jeito, e não te solte nunca mais... Vou achar bem feito porque você vai ganhar o que você merece: ser feliz!'; 
    frases[11]= 'Eu desejo que seus dias sejam felizes, que suas noites sejam tranquilas e que não lhe falte paz e amor.'; 
    frases[12]= 'Não sei se o mundo é bom, mas quando você apareceu, o meu mundo ficou muito melhor.'; 
    frases[13]= 'Tem palavras que chegam como um abraço... E tem abraços que não precisam de palavras...'; 
    frases[14]= 'Amizade verdadeira não é ser inseparável. É estar separado, e nada mudar.'; 
    frases[15]= 'Amizade verdadeira não é ser inseparável. É estar separado, e nada mudar.'; 
    frases[16]= 'Amizade verdadeira não é ser inseparável. É estar separado, e nada mudar.'; 
    frases[17]= 'Amizade verdadeira não é ser inseparável. É estar separado, e nada mudar.'; 
    frases[18]= 'Amizade verdadeira não é ser inseparável. É estar separado, e nada mudar.'; 
    frases[19]= 'Amizade verdadeira não é ser inseparável. É estar separado, e nada mudar.'; 


    var frasesEscolhida = frases[numeroAleatorio];

    Alert.alert(frasesEscolhida ); 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5f9ea0',
    padding: 15,
    borderColor:'#008b8b',
    borderRadius:8,
    paddingHorizontal:40,
    borderWidth:3,
    marginTop:60,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.8  

  },
  buttonText: {
    color: '#f0f8ff',
    fontSize:18,
    fontWeight:'bold',
    alignSelf: 'center'
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF',
    fontSize:10
    
  }
})

AppRegistry.registerComponent('frasesdodia', () => App)
