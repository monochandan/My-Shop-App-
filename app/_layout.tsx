import { Stack } from "expo-router"; // manage stack of screen -- (i.e., the classic navigation where you push and pop screens on top of each other)

export default function RootLayout() { // main layout of this app, responsible for defining the structure and navigation behaiviour

    return ( 
        // <Stack> container -- stack based nevigation
        // nevigate to shop folder, contain the shop related screen
        // <Stack.Screen name='(shope)' options={{headerShown: false, title: 'EZ-Shop'}}/>
        <Stack>  
            
            <Stack.Screen name='(shope)' options={{headerShown: false, title: 'EZ-Shop'}}/> 

            <Stack.Screen name='category' options={{headerShown: false, title: 'Categories'}}/>

            <Stack.Screen name='product' options={{headerShown: true, title: 'Products'}}/>

            <Stack.Screen name='cart' options={{presentation: 'modal', title: 'Shopping Cart'}}/>

            <Stack.Screen name='auth' options={{headerShown: true}}/>
        </Stack>
    );
};

