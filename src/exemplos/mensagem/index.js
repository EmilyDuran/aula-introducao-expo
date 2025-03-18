import { View,Text  } from 'react-native';

import styles from './styles';

function Mensagem (props) {
    return(
        <View styles={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.texto}>{props.mensagem}</Text>

            <Mensagem titulo={'ERRO'} mensagem={'Você não clicou corretamente!'}></Mensagem>
            <Mensagem titulo={'ERRO'} mensagem={'Você não clicou corretamente!'}></Mensagem>
            <Mensagem titulo={'ERRO'} mensagem={'Você não clicou corretamente!'}></Mensagem>
        </View>
    )
}

export default Exemplo1;