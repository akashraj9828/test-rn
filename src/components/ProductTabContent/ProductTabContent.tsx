/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {getData} from '../../stub/getData';
import {ProductCard} from '../ProductCard';

interface IProductTabContentProps {
  subCategory: string;
  category: string;
}
export const ProductTabContent = ({
  subCategory,
  category,
}: IProductTabContentProps) => {
  const [data, setData] = useState<
    | {
        winery: string;
        wine: string;
        rating: {
          average: string;
          reviews: string;
        };
        location: string;
        image: string;
        id: number;
      }[]
    | undefined
  >([]);
  const [state, setState] = useState({loading: false, error: false});
  const fetchData = useCallback(async () => {
    try {
      setState({loading: true, error: false});
      const _data = await getData(category, subCategory);
      setData(_data);
      setState({loading: false, error: false});
    } catch (error) {
      console.log({error});
      setState({loading: false, error: true});
    }
  }, [subCategory, category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <View style={{padding: 10}}>
      {state.loading && <Text>Loading Data...</Text>}
      {state.error && <Text>Failed to load data</Text>}
      {!state.loading && !state.error && (
        <FlatList
          data={data || []}
          ListEmptyComponent={
            <Text>
              No Product found in {category}-{subCategory}
            </Text>
          }
          keyExtractor={product => String(product.id)}
          horizontal={true}
          renderItem={product => <ProductCard product={product.item} />}
        />
      )}
    </View>
  );
};
