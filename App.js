import React, { Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableOpacityBase
} from 'react-native';

class App extends Component{

  constructor(props){
      super(props);
      this.state= {
            textoFrase: '',
            img: require('./src/biscoito.png'),
      };

      this.quebraBiscoito = this.quebraBiscoito.bind(this);

      this.frases = [ 
        'A vida vai ficando cada vez mais dura perto do topo.',
        'As convicções são inimigas mais perigosas da verdade do que as mentiras.',
        'É mais fácil lidar com uma má consciência do que com uma má reputação.',
        'O que não provoca minha morte faz com que eu fique mais forte.',
        'Os grandes intelectuais são céticos.',
        'O ser refutável não é o menor dos encantos de uma teoria.',
        'Temos a arte para não morrer da verdade.',
        'Tudo é precioso para aquele que foi, por muito tempo, privado de tudo.'
      ];

  }

  quebraBiscoito(){
      let numeroAleatorio = Math.floor(Math.random( ) *this.frases.length );

      this.setState({
          textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
          img: require('./src/biscoitoAberto.png')
      });
  }

  render( ){
    return(
        <View style={styles.container}>

          <Image
              source={this.state.img}
              style={ styles.img}
          />

    <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

          <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
              <View style={styles.btnArea}>
                  <Text style={styles.btnTexto}>Abrir Biscoito</Text>
              </View>
          </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize:20,
    color: '#ff0000',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 240,
    height: 60,
    borderWidth: 2,
    borderColor: '#ff0000',
    borderRadius: 30
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff0000'
  }


});


export default App;
