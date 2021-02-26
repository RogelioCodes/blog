import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };

    }, [] );

    return (
        <View style = {styles.viewStyle}>
            <FlatList 
                data = {state} 
                keyExtractor = {(blogPost) => blogPost.title}
                renderItem = {({ item }) => {
                    return ( 
                        <TouchableOpacity onPress = { () => navigation.navigate('Show', {id: item.id}) }>
                                <View style = {styles.rowStyle}>
                                    <Text style = {styles.title}>
                                        {item.title} - {item.id}
                                    </Text>
                                    <TouchableOpacity onPress = {() => deleteBlogPost(item.id) } >
                                        <Feather style = {styles.icon} name = "trash" />
                                    </TouchableOpacity>
                                </View>
                        </TouchableOpacity>
                        );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: 
            <TouchableOpacity onPress = {() => navigation.navigate('Create')}>
                <Feather name = "plus" size = {24} style = {{paddingHorizontal: 30}} />
            </TouchableOpacity> 
    };
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontStyle: ('normal', 'italic'),
    },
    icon: {
        fontSize: 24,
        color: 'white'
    },
    viewStyle: {
        //paddingTop: 10,
        flex: 1,
        backgroundColor: 'pink'
    },
    textStyle: {
        color: 'white',
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
    },
    buttonStyle: {
        fontSize: 24,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        backgroundColor: 'lightskyblue',
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
    }

});

export default IndexScreen ; 