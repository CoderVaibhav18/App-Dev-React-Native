import React, { JSX } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCard from './components/FlatCard';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
