import { StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { User } from '../../services/Interfaces';
import { Disponibility } from '../../services/Enums';
import UserVisio from '../../components/UserVisio';
import { useEffect, useState } from 'react';

export default function VisioScreen() {  
  const arrayUsers: Array<User> = [
    {name:"Manon", disponibility: Disponibility["A"], avatarImage: undefined},
    {name:"Robert", disponibility: Disponibility["A"], avatarImage: undefined},
    {name:"Vincent", disponibility: Disponibility["B"], avatarImage: undefined},
    {name:"Elisa", disponibility: Disponibility["A"], avatarImage: undefined},
    {name:"Julie", disponibility: Disponibility["A"], avatarImage: undefined},
    {name:"Jean", disponibility: Disponibility["C"], avatarImage: undefined},
    {name:"Martin", disponibility: Disponibility["A"], avatarImage: undefined},
  ];
  const [clickedUser, setClickedUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    if (clickedUser !== undefined) {
      console.log(clickedUser);
    }
  }, [clickedUser]);

  const userListe : Array<JSX.Element> = arrayUsers.map((user, index) => <UserVisio key={index} user={user} onPress={() => setClickedUser(user)} />);
  return (
    <SafeAreaView style={[styles.container, { padding: 0 }]}>
      <ScrollView style={{width: '100%', paddingHorizontal: 20}} showsVerticalScrollIndicator={false}>{userListe}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
