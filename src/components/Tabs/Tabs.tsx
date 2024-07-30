import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export interface ITabsProps {
  tabs: {name: string; content: React.JSX.Element}[];
}
export const Tabs = ({tabs}: ITabsProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <View style={styles.tabAndContentContainer}>
      <View style={styles.tabContainer}>
        {tabs.map(({name}, idx) => {
          const tabSelected = idx === currentTab;
          return (
            <Pressable
              style={[styles.tab, tabSelected ? styles.tabActive : {}]}
              key={name}
              onPress={() => {
                setCurrentTab(idx);
              }}>
              <Text style={styles.tabText}>{name}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.contentContainer}>{tabs[currentTab].content}</View>
    </View>
  );
};
const purple = `rgb(201, 140, 255)`;
const purple_transparent = 'rgba(201, 140, 255,0.2)';
const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: purple_transparent,
    flex: 1,
  },
  tabAndContentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabContainer: {
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    overflow: 'scroll',
  },
  tab: {
    padding: 10,
    paddingBottom: 0,
  },
  tabActive: {
    borderTopColor: purple,
    borderTopWidth: 2,
    backgroundColor: purple_transparent,
  },
  tabText: {color: 'black'},
});
