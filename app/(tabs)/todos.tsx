import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { triplit } from '@/triplit/client';
import { useQuery } from '@triplit/react-native';
import { useState } from 'react';
import { Button, Image, StyleSheet, TextInput } from 'react-native';

export default function TodosScreen() {
	const { results, fetching, error } = useQuery(triplit, triplit.query('todos'));
	const [todoText, setTodoText] = useState('');
	const textColor = useThemeColor({}, 'text');

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
					style={styles.reactLogo}
				/>
			}>
			<ThemedView>
				<ThemedText type="title">Todos</ThemedText>
				{fetching && <ThemedText>Loading...</ThemedText>}
				{error && <ThemedText>Error: {error.message}</ThemedText>}
				{results?.map((todo) => {
					return (
						<ThemedText key={todo.id}>{todo.text}</ThemedText>
					)
				})}
				<ThemedView style={{ marginTop: 20, gap: 10 }}>
					<TextInput
						placeholder="Add a todo"
						onChangeText={setTodoText}
						value={todoText}
						style={{ color: textColor, borderWidth: 1, borderColor: textColor, padding: 10 }}
					/>
					<Button title="Add" onPress={async () => {
						await triplit.insert('todos', { text: todoText, id: '' });
						setTodoText('');
					}} />
				</ThemedView>
			</ThemedView>
		</ParallaxScrollView>
	);
}

// const useMutateTodo = () => {
// 	return useMutation({
// 		mutationFn: async (todo: Todo) => {
// 			await triplit.insert('todos', todo);
// 		},
// 	});
// };

const styles = StyleSheet.create({
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});