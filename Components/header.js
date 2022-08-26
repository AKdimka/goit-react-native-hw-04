import { StyleSheet, Text, View } from 'react-native';

export default function Header({ title }) {

	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.3)',
		paddingTop: 27,
		paddingBottom: 12,
		backgroundColor: '#fff'
	},
	headerText: {
		fontWeight: '700',
		fontSize: 20,
		color: '#212121;',
		letterSpacing: 1,
	}
})