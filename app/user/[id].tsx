import { StyleSheet, SafeAreaView, ScrollView, Pressable} from 'react-native';
import { useEffect, useState } from 'react';
import UserProfile from '../../components/UserProfil';
import { router, useLocalSearchParams } from 'expo-router';
import { useUsers } from '../../components/UsersContext';
import { User } from '../../services/Interfaces';
import { Entypo } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed';
import TopBarCustom from '../../components/TopBarCustom';
// Remove the import statement for 'StatusBar' from 'expo-status-bar'
import { StatusBar } from 'expo-status-bar';
import { statusBarStyles } from '../../constants/Colors';

export default function UserScreen() {
    const params = useLocalSearchParams();
    const { state, dispatch } = useUsers();
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        if (params.id !== undefined) {
            setUser(state.users.find((user: User) => user.id.toString() === params.id));
        }
    }, [params.id]);

    return (
      <>
        <StatusBar style="dark"/>
        <SafeAreaView style={[styles.container, { padding: 0 }]}>
          <TopBarCustom title="Profil" />
          <View style={{flex: 0.9, width: "100%", padding: 0, margin: 0}}>
            <UserProfile user={user} />
          </View>
        </SafeAreaView> 
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#3444F1",
    padding: 0,
    margin: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
