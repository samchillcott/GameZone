import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppNavigator } from './routes/AppNavigator';
import Home from './Screens/Home';

const App = () => {
	return(
		<View style={styles.container}>
			<AppNavigator />
			<StatusBar />
		</View>
	)
}
export default App;

const styles = StyleSheet.create({
	container: {
		padding: 20,
	}
});
