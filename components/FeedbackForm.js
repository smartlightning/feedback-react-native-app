import React, {useState} from 'react';
import { StyleSheet,View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const handleTextChange =(e) => {
        setText(e.target.value)
    }
  return (
    <View style= {styles.container}>
      <View style= {styles.form}>
        <Text style= {styles.header} >How would you rate our service</Text>
      </View>
      <View>
        <TextInput style= {styles.input}
          type='text'
          placeholder='Write a review'
          onChange={handleTextChange}
          value={text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 18,
     //   fontFamily: 'Poppins',
        margin: 20
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 18,
        padding: 10,
        margin: 10
    },
  });

export default FeedbackForm;
