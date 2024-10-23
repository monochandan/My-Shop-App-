// Purpose: 
// The index.tsx file typically serves as the main entry point for that specific section of the app.
// It contains the functional component that renders the UI for that screen.

// Usage:
// This file usually contains the business logic and presentation code. It fetches data, manages state,
//  and displays the actual content of the screen (e.g., product lists, user details).
// In a nested structure (like within a shop), the index.tsx file might render the main content 
// for that section, while _layout.tsx handles the navigation around that content.

import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PRODUCTS } from '../../assets/products'; // imported array from a local file 
import {ProductListItem} from '../../components/product-list-item'; // custome component for rendering each product
import {ListHeader} from '../../components/list-header' // custome component for displaying header for the product

// Home is a functional component that will render the main UI for the home screen of the app.
// It returns a View component that serves as a container for the FlatList.
const Home = () => {
  return (
    <View>
      <FlatList 
        data={PRODUCTS}  // The FlatList is supplied with the PRODUCTS array as its data source.
        renderItem={( { item }) => // takes the item from the data and renders into the list

        //renderItem={({ item }) => <ProductListItem product={item} />}: 
        //  For each item in the PRODUCTS array, the renderItem prop specifies how to render that item. 
        //  It uses the ProductListItem component to display the product, passing the current item as a prop.

      //  (  <View style={{flex: 1, margin: 10}}>
      //   //   <Text>{item.title}</Text> 
      //   // </View> )} 
        <ProductListItem product= {item}/>}
        // This function generates a unique key for each item based on its id. 
        // This is important for efficiently updating and rendering the list.
        keyExtractor = { item => item.id.toString()}
        //This property makes the FlatList display items in two columns, effectively creating a grid layout.
        numColumns={2}
        // ListHeaderComponent={ListHeader}: This prop specifies a header component 
        // that will be rendered at the top of the FlatList. It is likely used to 
        // display a title or some introductory content for the product list.
        ListHeaderComponent={ListHeader}
       // This applies custom styles to the content area of the FlatList.
        contentContainerStyle={styles.flatListContent}
        // This styles the rows of columns in the grid layout.
        columnWrapperStyle={styles.flatListColumn}
        //This applies padding around the FlatList itself.
        style={{paddingHorizontal : 10, paddingVertical: 5}}

      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn:{
    justifyContent: 'space-between',
  },
});