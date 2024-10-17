import { Stack } from "expo-router";

export default function RootLayout() {

    return ( 
        <Stack>
            <Stack.Screen name='(shope)' options={{headerShown: false, title: 'EZ-Shop'}}/>

            <Stack.Screen name='category' options={{headerShown: true, title: 'Categories'}}/>

            <Stack.Screen name='product' options={{headerShown: true, title: 'Products'}}/>

            <Stack.Screen name='cart' options={{presentation: 'modal', title: 'Shopping Cart'}}/>

            <Stack.Screen name='auth' options={{headerShown: true}}/>
        </Stack>
    );
};

