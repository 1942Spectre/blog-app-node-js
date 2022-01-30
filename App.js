import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import { BlogProvider } from "./src/context/BlogContext";


import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator({
  Index: IndexScreen,
},

  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  })

const App = createAppContainer(navigator);

// Wrapping app with blogprovider to provide access to the context to the children
export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>
}