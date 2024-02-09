import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const DetailScreen = ({route} : any ) => {


  const series = route.params.seriesObj.show;

  const removeHtmlTags = (string: string) => {
    return string ? string.replace(/<[^>]+>/g, '') : '';
  };
  

  return (
    <View style = {styles.container}>
      {series.image && series.image.medium ? (
        <Image style={styles.image} source={{ uri: series.image.medium }} />
        ) : (
        <Text style={styles.noPictureText}>No picture</Text>
        )}
      <Text style={styles.heading}>{series.name}</Text>
      <Text style={styles.seriesDetail}>Language: {series.language ? (series.language) : 'No language'}</Text>
      <Text style={styles.seriesDetail}>Genres:</Text>
        {series.genres.map((genre : string, index: number) => (
          <Text style={styles.detailInfo} key={index}>{genre}</Text> 
        ))}
    
      <Text style={styles.seriesDetail}>Rating: {series.rating && series.rating.average ? series.rating.average : 'No rating to be shown'} </Text> 
      <Text style={styles.detailInfo}>{series.summary ? removeHtmlTags(series.summary) : 'No Summary'}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20
  },
  image: {
    height: 200,
    width: 150,
  },
  noPictureText: {
    fontSize: 36,
    color: 'red',
    borderStyle: "solid",
    borderWidth: 1,
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
  seriesDetail: {
    paddingVertical:5,
  },
  detailInfo: {
    fontWeight: "bold",
  },
})

export default DetailScreen;