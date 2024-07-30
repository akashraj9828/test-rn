/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface IProductCardProps {
  product: {
    winery: string;
    wine: string;
    rating: {
      average: string;
      reviews: string;
    };
    location: string;
    image: string;
    id: number;
  };
}
export const ProductCard = ({product}: IProductCardProps) => {
  const {wine, id, image, location, rating} = product;
  const url =
    'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  return (
    <View style={styles.productContainer}>
      <Image
        src={url}
        width={200}
        height={100}
        style={{height: 100, width: 180, objectFit: 'cover', padding: 5}}
      />
      <Text style={{color: 'gray'}}>{product.winery}</Text>
      <Text style={{fontWeight: 'bold'}}>{wine}</Text>
      <Text style={{}}>{rating.average} Stars</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 5,
    marginHorizontal: 10,
    width: 200,
    height: 200,
    borderColor: 'gray',
    borderWidth: 2,
    display: 'flex',
    gap: 2,
    flexDirection: 'column',
  },
});
