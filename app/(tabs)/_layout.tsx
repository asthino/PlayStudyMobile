import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Button, Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'exercises'
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundColor,
          height: 83,
          borderTopWidth: 0.5,
          borderColor: "#f0f0f0"
        }
      }}>
      <Tabs.Screen
        name="exercises"
        options={{
          headerShown:false,
          tabBarLabelStyle: {
            bottom: 15
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="certificate" color={color} />,
        }}
      />
      <Tabs.Screen
        name="visio"
        options={{
          headerTitle: "Visio",
          headerTitleStyle: {
            fontFamily: 'PopinsRegular',
            fontSize: 18
          },
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            bottom: 15
          },
          headerLeft: () => (
            <Pressable onPress={()=>{}} style={{marginHorizontal: 20}}>
              <Entypo name="chevron-thin-left" color="#263238" size={30}/>
            </Pressable>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="video" color={color} />,
        }}
      />
      <Tabs.Screen
        name="badge"
        options={{
          headerTitle: "Badges remportés",
          headerTitleStyle: {
            fontFamily: 'PopinsRegular',
            fontSize: 18
          },
          headerLeft: () => (
            <Pressable onPress={()=>{}} style={{marginHorizontal: 20}}>
              <Entypo name="chevron-thin-left" color="#263238" size={30}/>
            </Pressable>
          ),
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            bottom: 15
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="award" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          headerTitle: "Profil",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: 'PopinsRegular',
            fontSize: 18,
            color: "#fff"
          },
          headerStyle: {
            backgroundColor: "#3444F1",
            elevation: 0
          },
          tabBarLabelStyle: {
            bottom: 15
          },
          headerLeft: () => (
            <Pressable onPress={()=>{}} style={{alignItems:"center", justifyContent:"center", marginLeft: 20, width: 42, height: 42, backgroundColor: "#fff", padding: 5, borderRadius: 12}}>
              <Entypo name="chevron-thin-left" color="#263238" size={20}/>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={()=>{}} style={{alignItems:"center", justifyContent:"center", marginRight: 20, width: 42, height: 42, backgroundColor: "#fff", padding: 5, borderRadius: 12}}>
              <Entypo name="dots-three-vertical" color="#263238" size={20}/>
            </Pressable>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
