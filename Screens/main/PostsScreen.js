import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

import Header from "../../Components/header";
import User from "../../Components/user";

export default function PostsScreen() {

	return (
		<View style={styles.container}>
			<Header title='Публікції' />
			<View style={styles.main}>

				<User />
				<User />

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start'
	},
	main: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: 30,
		paddingHorizontal: 16,
	},
})