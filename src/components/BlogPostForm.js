import React, {useState}  from 'react' ; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native' ;

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const[title, setTitle] = useState(initialValues.title);
    const[content, setContent] = useState(initialValues.content);

    return ( 
        <View style = {styles.viewStyle}>
                <Text style = {styles.titleStyle}>Enter Title:</Text>
                <TextInput style = {styles.textInput} value = {title} onChangeText = {(text) => setTitle(text)}  />
                <Text style = {styles.titleStyle}>Enter Content:</Text>
                <TextInput style = {styles.textInput} value = {content} onChangeText = {(text) => setContent(text)} />
                <TouchableOpacity 
                      onPress = {() => onSubmit(title, content)}
                      >
                    <Text style = {styles.buttonStyle}>Save Blog Post</Text>
                </TouchableOpacity>
        </View>
    );

};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        color: 'white',
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 20
    },
    viewStyle: {
        flex: 1,
        backgroundColor: 'pink',
        //justifyContent: 'center',
        alignItems: 'stretch'
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
        
    },
    textInput: {
        fontSize: 18,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        backgroundColor: 'lightskyblue',
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
        marginBottom: 5,
        padding: 5,
        marginHorizontal: 50,
        
    },
    buttonStyle: {
        fontSize: 24,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        backgroundColor: 'lightskyblue',
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
        marginBottom: 15,
        padding: 3,
        marginHorizontal: 50,
        borderRadius: 10,
        marginTop: 40
    }


});

export default BlogPostForm;