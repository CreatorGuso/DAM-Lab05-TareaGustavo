import * as React from 'react';
import {View,FlatList,StyleSheet,Text,Image,Button} from 'react-native';

function Informacion ({route,navigation}) {
    const { miID } = route.params;
    const { titulo } = route.params;
    const { synopsis } = route.params;
    const { imagen } = route.params;
        return (
            <View style={styles.container}>
                <Text style={styles.diseñotitulo}>{JSON.stringify(titulo)} </Text>
                <Image source={{uri: imagen}} style={styles.imagenPelicula}/>
                <Text style={styles.diseñoSynopsis}>{JSON.stringify(synopsis)} </Text>
            </View>
        )
    }

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        flex: 1,
        marginTop: 20,
    },
    imagenPelicula:{
        position:'relative',
        alignSelf: 'center',
        height:200, 
        width:200,
    },
    diseñotitulo:{
        alignSelf: 'center',
        fontSize:30,
    },
    diseñoSynopsis:{
        fontSize:20,
    }
});
      
      
export default Informacion;
