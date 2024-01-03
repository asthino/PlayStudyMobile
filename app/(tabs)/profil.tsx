import { StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, Image } from 'react-native';
import ProfileForme from '../../assets/images/profile-forme.svg';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AvatarImage from '../../components/AvatarImage';
// import { Text } from '../../components/Themed';

export default function TabTwoScreen() {
  const [hidePassword, setHidePassWord] = useState<boolean>(true);
  const [nameValue, onChangeNameValue] = useState('Asthino');
  const [pseudoValue, onChangePseudoValue] = useState('Astty');
  const [emailValue, onChangeEmailValue] = useState('astty@playmail.com');
  const [passwordValue, onChangePasswordValue] = useState('123456');
  const [ageValue, onChangeAgeValue] = useState('23');
  const avatarImage = require('../../assets/images/profile.jpg');
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.forme}>
        <ProfileForme width={430} height={430}/>
      </View>
      <View style={{flex:0.4, top: "20%"}}>
        <View style={styles.avatar}>
          <AvatarImage size={148} avatarImageSource={avatarImage}/>
          <View style={styles.editBtn}>
            <FontAwesome name="pen" size={16} color="#fff"/>
          </View>
        </View>
      </View>
      <View style={{flex: 0.1, alignItems: "center"}}>
        <Text style={{ fontFamily: 'PopinsBold', fontSize: 20, color: "#263238" }}>Asthino</Text>
        <Text style={{ fontFamily: 'PopinsRegular', fontSize: 18, color: "#898989" }}>Étudiant</Text>
      </View>
      <View style={{flex: 0.4, alignItems: "flex-start", display: 'flex', flexDirection: 'column', gap: 15,width: '100%', paddingHorizontal: 20}}>
        <SafeAreaView style={styles.inputContainer}>
          <Text style={{ fontSize: 14, color: "#898989", fontFamily: 'PopinsRegular'}}>Nom</Text>
          <TextInput
            editable
            style={styles.input}
            value={nameValue}
            onChangeText={(text) => onChangeNameValue(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.inputContainer}>
          <Text style={{ fontSize: 14, color: "#898989", fontFamily: 'PopinsRegular'}}>Pseudo</Text>
          <TextInput
            editable
            style={[styles.input, ]}
            value={"@" + pseudoValue}
            onChangeText={(text) => onChangePseudoValue(text.split('@')[1]??"")}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.inputContainer}>
          <Text style={{ fontSize: 14, color: "#898989", fontFamily: 'PopinsRegular'}}>Adresse mail</Text>
          <TextInput
            editable
            style={styles.input}
            value={emailValue}
            onChangeText={(text) => onChangeEmailValue(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.inputContainer}>
          <Text style={{ fontSize: 14, color: "#898989", fontFamily: 'PopinsRegular'}}>Mot de passe</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              editable
              secureTextEntry={hidePassword}
              style={styles.input}
              value={passwordValue}
              onChangeText={(text) => onChangePasswordValue(text)}
            />
            <Pressable  style={{ left: -30, bottom: 10, alignItems:'center', justifyContent:'center', height:50 }} onPress={() => setHidePassWord(!hidePassword)}><FontAwesome name={hidePassword ? "eye" : "eye-slash"} size={18} color="rgba(60, 60, 67, 0.6)"/></Pressable>
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.inputContainer}>
          <Text style={{ fontSize: 14, color: "#898989", fontFamily: 'PopinsRegular'}}>Âge</Text>
          <TextInput
            editable={false}
            style={[styles.input, {borderBottomWidth: 0}]}
            value={ageValue}
          />
        </SafeAreaView>
      </View>
      <View style={{flex: 0.1,flexDirection:"row", alignSelf: "flex-end", marginHorizontal: 20, top: 45}}>
        <Text style={{fontFamily: 'PopinsRegular', fontSize: 12}}>Rejoins le </Text>
        <Text style={{fontFamily: 'PopinsBold', fontSize: 12}}>8 Dec 2022</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  forme: {
    position: 'absolute',
    width: '100%',
    top: 0,
    right: 0
  },
  inputContainer: {
    width: "100%"
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.6)',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    top: -15,
    height: 45,
    width: '100%'
  },
  avatar: {
    alignItems:"center",
  },
  avatarImage: {
    height: 147,
    width: 147,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000",
  },
  editBtn: {
    alignItems:"center", 
    justifyContent: "center", 
    width:40, 
    height:40, 
    borderRadius: 50,
    borderWidth: 2, 
    borderColor: "#fff",
    backgroundColor: "#3972FE",
    top: -50,
    left: "40%"
  }
});
