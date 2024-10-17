import {Tabs} from "expo-router"
import { SafeAreaViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {StyleSheet} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome> ['name'];
    color: String;
}) {
    return <FontAwesome size={24} {...props} style= {{ color: '#ebb48f' }}/>;
};

const TabsLayout = () => {
    return (
        
        <SafeAreaView style = {styles.safeArea}>
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#04e090",
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: { fontSize: 10 },
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 10,
                },
                headerShown: false,
            }}>
                <Tabs.Screen name='index' options={{
                    tabBarIcon(props) {
                        return <TabBarIcon {...props} name='shopping-cart' />
                    },
                }}/>
                <Tabs.Screen name='orders' options={{
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