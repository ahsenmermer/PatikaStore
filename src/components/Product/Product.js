import { Image,  Text, View,  } from 'react-native'
import React from 'react'
import { styles } from './Product.style'


const Product = ({ product }) => {
    return (
        <View style={product.id == 10 ? styles.fullContainer : styles.container}>
            <Image source={{ uri: product.imgURL }} style={product.id == 10 ? styles.fullImage : styles.image} resizeMode='contain' />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            {product.inStock == false && <Text style= {styles.stock}>STOKTA YOK</Text>}
        </View>
    )
}
export default Product