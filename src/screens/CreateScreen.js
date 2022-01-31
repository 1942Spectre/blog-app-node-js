import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

function CreateScreen(){
    return(
        <View>
            <Text>Create Blog Post</Text>
            <View style={styles.titleInput}>
                <TextInput placeholder='Title' />
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    titleInput:{
        backgroundColor: "#dfe3ee",
        height: 18,
        width: '80%'
    }
})

export default CreateScreen