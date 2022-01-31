import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import IndexScreen from "./src/screens/IndexScreen";


import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen
},

  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
      headerStyle: {
        backgroundColor: '#c1121f',
        marginBottom:0,
      },
      headerTitleStyle:{
        color:"#fff"
      }
    }
  })

const App = createAppContainer(navigator);

// Wrapping app with blogprovider to provide access to the context to the children
export default () => {
  return <Provider>
    <App />
  </Provider>
}