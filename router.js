import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';

import PostsScreen from './Screens/main/PostsScreen';
import CreateScreen from './Screens/main/CreatePostsScreen';
import ProfileScreen from './Screens/main/ProfileScreen';

import { SimpleLineIcons, Feather, Ionicons } from '@expo/vector-icons';


const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
	if (!isAuth) {
		return (<AuthStack.Navigator>
			<AuthStack.Screen
				options={{ headerShown: false }}
				name='Login'
				component={LoginScreen} />
			<AuthStack.Screen
				options={{ headerShown: false }}
				name='Registration'
				component={RegistrationScreen} />
		</AuthStack.Navigator>)
	}
	return (
		<MainTab.Navigator
			activeColor="#e91e63"
			barStyle={{ backgroundColor: 'tomato' }}
			ScreenOptions={{ showLabel: false }}>
			<MainTab.Screen
				name='Posts'
				component={PostsScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => (
						<SimpleLineIcons
							name="grid"
							size={24}
							color={color} />
					),
				}}
			/>
			<MainTab.Screen
				name='Create'
				component={CreateScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => (
						<Ionicons
							name="add"
							size={size}
							color={color} />
					),
				}}
			/>
			<MainTab.Screen
				name='Profiler'
				component={ProfileScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => (
						<Feather
							name="user"
							size={size}
							color={color} />
					),
				}} />
		</MainTab.Navigator>
	)
}
