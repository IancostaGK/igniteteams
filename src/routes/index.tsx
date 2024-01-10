import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';

NavigationContainer;

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
