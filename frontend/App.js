import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./components/Navigator/BottomNavigation";
import HomeStackNavigation from "./components/Navigator/HomeStackNavigation";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <HomeStackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
