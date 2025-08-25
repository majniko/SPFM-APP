import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@colors';
import { CategoriesProvider } from '@contexts/categories-context';
import { useContext } from 'react';
import { AuthContext } from '@contexts/auth-context';
import { TouchableOpacity } from 'react-native';

const LogoutButton = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={signOut} style={{ marginRight: 15 }}>
      <Ionicons name="log-out-outline" size={24} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default function AppLayout() {
  return (
    <CategoriesProvider>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          drawerInactiveTintColor: Colors.darkGrey,
          drawerActiveTintColor: Colors.primary,
          headerRight: () => <LogoutButton />,
        }}>
        <Drawer.Screen
          name="transactions"
          options={{
            title: 'Transactions',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="swap-horizontal" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="categories"
          options={{
            title: 'Categories',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="pricetags-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </CategoriesProvider>
  );
}
