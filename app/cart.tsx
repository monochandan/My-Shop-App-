import {StyleSheet,View, Text, Alert, Platform, TouchableOpacity, FlatList, Image, ViewBase} from 'react-native';
import { useCartStore } from '../store/cart-store';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

type CartItemType = {
    id: number;
    title: string;
    image: any;
    price: number; 
    quantity: number;

};

type CartItemProps = {
    item: CartItemType;
    onRemove: (id: number) => void;
    onIncrement: (id: number) => void;
    onDecrement: (id: number) => void;
};

const CartItem= ({item, onRemove, onDecrement,onIncrement}: CartItemProps) => {
    return (
        <View style={styles.cartItem}>

        <Image source={item.image} style={styles.itemImage}/>

        <View style={styles.itemDetails}>

            <Text style={styles.itemTitle}>{item.title}</Text>

            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>

            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => onDecrement(item.id)} style = {styles.quantityButton}>

                    <Text style={styles.quantityButtonText}>-</Text>

                </TouchableOpacity>

                <Text style={styles.itemQuantity}>{item.quantity}</Text>

                <TouchableOpacity onPress={() => onIncrement(item.id)}
                    style = {styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>

            </View>
        </View>
         
        <TouchableOpacity onPress={() => onRemove(item.id)}style={styles.removeButton}>

            <Text style={styles.removeButton}>Remove</Text>

        </TouchableOpacity>
    </View>
    );
};

export default function Cart() {
    
    const { items, removeItem, incrementItem, decrementItem, getTotalPrice } = useCartStore();

    const handleCheckout = () => {
        Alert.alert('Proceding to Checkout', `Total amount: $${getTotalPrice()}`);

    };

    return (
        <View style={styles.container}>
            <StatusBar style={Platform.OS === 'ios'? 'light': 'auto'}/>

            {/*FlatList*/}
            <FlatList 
            data= {items} 
            keyExtractor={item => item.id.toString()} 
            renderItem={({item})=> <CartItem item={item} onRemove={removeItem} onIncrement={incrementItem} onDecrement={decrementItem}/>}
            contentContainerStyle={styles.cartList}
            />

            <View style = {styles.footer}>

                <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
                <TouchableOpacity
                    onPress={handleCheckout}
                    style={styles.checkoutButton}
                >
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    cartList:{
        paddingVertical: 16,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantityButton:{
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#ddd',
        marginHorizontal: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    checkoutButton: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    footer: {
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    removeButton: {
        padding: 8,
        backgroundColor: '#ff5252',
        borderRadius: 8,
    },
    itemQuantity:{
        fontSize: 14,
        color: '#666',
    },
    itemPrice: {
        fontSize: 16,
        color: '#888',
        marginBottom: 4,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 16,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },

});