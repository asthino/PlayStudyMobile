import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'exercises'
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
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
          headerShown:false,
          tabBarLabelStyle: {
            bottom: 15
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="video" color={color} />,
        }}
      />
      <Tabs.Screen
        name="badge"
        options={{
          headerShown:false,
          tabBarLabelStyle: {
            bottom: 15
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="award" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          headerShown:false,
          tabBarLabelStyle: {
            bottom: 15
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
