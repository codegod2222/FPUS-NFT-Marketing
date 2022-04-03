import React from 'react'
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import { useState } from 'react';
import{NFTCard, HomeHeader, FocusedStatusBar} from '../components';
import {COLORS, NFTData} from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
       
       <FocusedStatusBar background={COLORS.primary}/>
       <View style={{flex: 1}}>
            <View style={{zIndex:0}}>
                <FlatList 
                data = {NFTData}
                renderItem = {({item}) => <NFTCard data={item.name}/>}
                keyExtractor = {(item) => item.id}
                showsHorizontalScrollIndicator = {false}
                ListHeaderComponent = {<HomeHeader/>}
                // numColumns = {2}
                
                />
            </View>
        </View>
    </SafeAreaView>

  )
}

export default Home