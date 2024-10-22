// Purpose: 
// The _layout.tsx file is primarily responsible for defining the layout structure and 
// navigation for a specific section of your app. It can include navigation components (like Tabs, 
// Stacks, or other navigators) and can wrap around other screens.

// Usage:
// It can set up common UI elements that should appear across multiple screens
// (like headers, footers, or sidebars).
// It helps in organizing the structure of the navigation, determining which screens are accessible 
// from which layout.

import {Tabs} from "expo-router" // create a tab navigation layout where users can switch between different screens by clicking tabs at the bottom.
import { SafeAreaViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; //that ensures content doesn't overlap with system UI elements (like the status bar) by adding padding around the content.
import {StyleSheet} from "react-native"; // create style objects for your components
import { FontAwesome } from '@expo/vector-icons'; //  A set of popular icons. Here it's used to provide icons for the tabs.

// reusable component that renders a FontAwesome icon for the tabs
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome> ['name'];
    color: String;
}) {
    return <FontAwesome size={24} {...props} style= {{ color: '#ebb48f' }}/>;
};

const TabsLayout = () => {
    return (
        // SafeAreaView (parent container): Wrapping everything inside SafeAreaView ensures your content doesn’t overlap with system UI elements
        
        //  <Tabs.Screen Defines individual screens within the tab navigation

        // <TabBarIcon {...props}> === <TabBarIcon name="shopping-cart" color="blue" />

        // flex: 1 == this property allows the component to take up all available space in 
        // its parent container. It effectively makes the component expand to fill the entire area, 
        // pushing out other sibling components.

        // <Tabs.Screen name='orders' options={{ : 
         //The name prop specifies the route. In this case, it's 'orders'. 
         //This tells the navigation system that when the "orders" tab is clicked, 
         //it should navigate to the /orders route.
        // When the "orders" tab is clicked, the Expo Router uses the route name 
        // to look for a corresponding component in your file structure.
        // It finds the app/shop/orders/index.tsx file because the name 'orders'
        // matches the directory structure.
        // The Expo Router automatically handles the routing based on your folder structure, 
        // so it knows to render the index.tsx file inside the orders folder when the route is accessed.
        
        <SafeAreaView edges={['top']} style = {styles.safeArea}>
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#04e090",
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: { fontSize: 11 },
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 10,
                },
                headerShown: false,
            }}>
                <Tabs.Screen name='index' options={{
                    // tabBarIcon(props) {
                    //     return <TabBarIcon {...props} name='shopping-cart' />
                    // },
                    title:'shop',
                    tabBarIcon(props){
                        return <TabBarIcon {...props} name='shopping-cart' />;
                    },
                }}/>
                
                <Tabs.Screen name='orders' options={{
                    //title:'clock for order',
                    tabBarIcon(props) {
                        return <TabBarIcon {...props} name='book' />
                    },
                }}/>
            </Tabs>
        </SafeAreaView>
        
    );
};

export default TabsLayout;
// tabs will move to the end of the screen
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});