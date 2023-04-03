import React from "react";
import { View,Text} from "react-native";
import Landing from "./src/screens/Landing";
import Login from "./src/screens/Login";
import Registration from "./src/screens/Registration";
import Home from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";


const Stack=createNativeStackNavigator();
const App = () => {
  return (
    // <AuthProvider>
    <NavigationContainer>
      
    <SafeAreaProvider>
      
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LandingPage" component={Landing}/>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="RegisterPage" component={Registration}/>
        <Stack.Screen name="Home" component={Home}/>

</Stack.Navigator>

    </SafeAreaProvider>
   
    </NavigationContainer>
   
  )
}


export default App