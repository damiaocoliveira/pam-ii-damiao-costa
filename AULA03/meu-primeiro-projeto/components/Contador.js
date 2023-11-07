import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default class Contador extends React.Component {
    constructor(){                          
        super();
        this.state = {
            contador: 0,
        };
    }
    Decrementar() {
        this.setState({
            contador: this.state.contador - 1
    });
    }
    Incrementar(){
        this.setState({
            contador: this.state.contador + 1
    });
    }
render() {
    return (
        <View>
            <View style={styles.texto}>
                <Text>{this.state.contador}</Text>
            </View>
            <View style={styles.botoes}>
                <Button
                style={styles.botao1}
                title="Aumenta"
                onPress={this.Incrementar.bind(this)}
                />
                <Button
                style={styles.botao2}
                onPress={this.Decrementar.bind(this)}
                title="Diminui"
                />
            </View>
        </View> 
    ) 
}
};

const styles = StyleSheet.create({
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top: 300,
        height: 45,
    },
    texto: {
        alignItems: 'center',
        top: 200,
    },
});




// construtor = construir pre atributos da classe
// estado = alterar o estado dele dinamicamente sem ter que atualizar a página similar ao funcionamento 'variavél' no caso do React
// super = necessário para manipular o estado
// set = para alterar algo
// get = 
// render = sempre vai retornar algo
// tudo o que esta entre chaves é JavaScript
// 