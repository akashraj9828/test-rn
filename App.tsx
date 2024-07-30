/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React, {useMemo, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ProductTabContent} from './src/components/ProductTabContent/ProductTabContent';
import {ITabsProps, Tabs} from './src/components/Tabs';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [categories, setCategories] = useState({
    name: 'wines',
    link: 'wines',
    metaData: {
      title: 'Wines',
      longDesc: 'Wines.',
      desc: 'Wines',
      featured: true,
      categories: ['food & beverage', 'list'],
    },
    endpoints: ['reds', 'whites', 'sparkling', 'rose', 'dessert', 'port'],
  });

  const tabs = useMemo(() => {
    const _tabs: ITabsProps['tabs'] = categories.endpoints.map(subCat => ({
      content: (
        <ProductTabContent subCategory={subCat} category={categories.name} />
      ),
      name: subCat,
    }));
    return _tabs;
  }, [categories]);

  return (
    <SafeAreaView style={[backgroundStyle, StyleSheet.absoluteFillObject]}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          flex: 1,
        }}>
        <Tabs tabs={tabs} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
