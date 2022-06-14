import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from './navigations/NavigationContainer';
import { queryClient } from './services';

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <NavigationContainer />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default registerRootComponent(App);
