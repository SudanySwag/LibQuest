import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlannedLibrariesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Libraries to Visit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlannedLibrariesScreen;
