import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegistrationScreen = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTRATION</Text>
            
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#333" style={styles.icon} />
                <TextInput 
                    style={styles.input} 
                    placeholder="Full Name" 
                    value={fullName} 
                    onChangeText={setFullName} 
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Icon name="phone" size={20} color="#333" style={styles.icon} />
                <TextInput 
                    style={styles.input} 
                    placeholder="Phone number" 
                    keyboardType="phone-pad"
                    value={phoneNumber} 
                    onChangeText={setPhoneNumber} 
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#333" style={styles.icon} />
                <TextInput 
                    style={styles.input} 
                    placeholder="Password" 
                    secureTextEntry
                    value={password} 
                    onChangeText={setPassword} 
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#333" style={styles.icon} />
                <TextInput 
                    style={styles.input} 
                    placeholder="Re-enter password" 
                    secureTextEntry
                    value={confirmPassword} 
                    onChangeText={setConfirmPassword} 
                />
            </View>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 10,
        width: '80%',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    icon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        height: 50
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 12,
        width: '80%',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default RegistrationScreen;
