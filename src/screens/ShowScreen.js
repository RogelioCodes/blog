import React, { useContext } from 'react' ; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native' ;
import {Context} from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ( {navigation} ) => {

    const { state } = useContext(Context) ; 

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id') );

    return ( 
        <View style = {styles.viewStyle}>
            <Text style = {styles.titleStyle}>{blogPost.title}</Text>
            <Text style = {styles.titleStyle}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity 
            onPress = {() => 
                navigation.navigate('Edit', {id: navigation.getParam('id') })
                 }
                >
            <EvilIcons name = "pencil" size = {30} style = {{paddingHorizontal: 30}} />
            
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        color: 'white',
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
    },
    viewStyle: {
        flex: 1,
        backgroundColor: 'pink'
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
    }

});

export default ShowScreen;