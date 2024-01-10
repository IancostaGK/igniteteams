import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Groups } from '@screens/groups';
import { NewGroup } from '@screens/newGroup';
import { Players } from '@screens/players';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
