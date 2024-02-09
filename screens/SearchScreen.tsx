import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { searchSeries } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import {Series} from '../types';


const SearchScreen: React.FC = () => {

  const navigation = useNavigation();

  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Series[]>([]);

  const handleSearch = async () => {
    if (!query) {
      Alert.alert(
        'Hey buddy',
        'Please enter a search query')
      return;
    }
    try {
      const response = await searchSeries(query);
      setResults(response.data);
    } catch (error) {
      console.error('Error during search:', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  const renderListItem = (item: Series, navigation: any) => {
    
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {seriesObj: item} )} style = {styles.itemWrapper}>
        {item.show.image && item.show.image.medium ? (
        <Image style={styles.itemImage} source={{ uri: item.show.image.medium }} />
        ) : (
        <Text style={styles.noPictureText}>No picture</Text>
        )}
        <View style = {styles.textContentWrapper}>
        <Text style = {styles.itemTitle}>{item.show.name}</Text>
        {item.show.rating && item.show.rating.average ? (<Text style = {styles.itemRating}>{item.show.rating.average}</Text>) : (<Text style = {styles.itemRating}>No rating to be shown</Text>)}
        </View>
      </TouchableOpacity>

      
    );
  };

  return (
    <View style={styles.listContainer}>
      <TextInput
        placeholder="Search TV Series"
        value={query}
        onChangeText={(text) => setQuery(text)}
        style= {styles.searchInput}
      />
      <Button title="Search series" onPress={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => renderListItem(item, navigation )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 150,
  }, 
  itemWrapper: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    itemImage: {
        width: 50,
        height: 50,
        marginRight: 16
    },
    textContentWrapper: {
        justifyContent: "space-around"
    },
    itemTitle: {
        fontSize: 16,
    },
    itemRating: {
        color: "#777",
    },
    searchInput: {
        borderWidth: 4,
        backgroundColor: "white",
        borderColor: "#ddd",
        borderRadius: 5,
        width:250,
        height:50,
        alignSelf: "center",
        marginBottom: 30,
        marginTop: 30,
        textAlign: "center",
        fontSize: 16,
    },
    noPictureText: {
      fontSize: 10,
      color: 'red',
    }
})

export default SearchScreen;