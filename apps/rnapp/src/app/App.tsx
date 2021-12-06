
import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { useTodos } from '@nx-monorepo/data-access';

const App = () => {
  const { todos, getTodoes } = useTodos();

  const onRefresh = useCallback(() => getTodoes(), [getTodoes]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {todos.map(todo => (
            <View key={todo.id}>
              <Text style={{ fontSize: 25, padding: 5 }}>{todo.text}</Text>
            </View>
          ))}

          <TouchableOpacity onPressIn={onRefresh}>
            <Text style={{ fontSize: 35, padding: 5, color: Colors.green }}>Refresh</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default App;
