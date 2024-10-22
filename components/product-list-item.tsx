// each product in a cart, after this file will be called by shop --> index.tsx to show these products in list
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import {Product} from '../assets/types/product'; // TypeScript interface that defines the shape of the product object (e.g., its properties like title, price, slug, etc.).
import { Link } from 'expo-router'; // handle navigation between screens.
// product (property) : Product (imported)
// `/product/${product.slug}` : dynamic routing
// Link: The component returns a Link component that allows for navigation to the product's detail page.

// every cart is one styles.item

// export - in JavaScript and TypeScript allows a variable, function, or component to be 
// made available outside of the module (file) it’s defined in, so that it can be imported and used 
// in other modules.

export const ProductListItem = ( { product }: { product: Product }) => {
  return (
  <Link asChild href={`/product/${product.slug}`}> 
      <Pressable style = {styles.item}>
        <View style={styles.itemImageContainer}>
          <Image source={product.heroImage} style={styles.itemImage}/>
        </View>

        <View style={styles.itemTextContainer}>
          <Text style = {styles.itemTitle}>{product.title}</Text>
          <Text style = {styles.itemPrice}>${product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};
// see the image for code desc. / item-cart.jpg --- represent one example cart, for each cart this whole code runs once

const styles = StyleSheet.create({
  item: {
    width: '48%',
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 10, 
    overflow: 'hidden',
  },
  itemImageContainer: {
    borderRadius: 10,
    width: '100%',
    height: 150,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemTextContainer: {
    padding: 8,
    alignItems: 'flex-start',
    gap: 4,
  },
  itemTitle: {
    fontSize: 16,
    color: '#888',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
})