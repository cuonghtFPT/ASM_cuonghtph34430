import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Image, Pressable, Text } from 'react-native';

const Favourite = () => {
  const [isLoading, setisLoading] = useState(true);
  const [dssp, setdssp] = useState([]);

  useEffect(() => {
    const getListPro = async () => {
      let url_api = 'http://10.24.32.155:3003/tb_dsyt';

      try {
        const response = await fetch(url_api);
        const json = await response.json();
        setdssp(json);
      } catch (error) {
        console.error(error);
      } finally {
        setisLoading(false);
      }
    };

    getListPro();
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <View>
          {/* Display loading indicator or any other loading UI */}
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          {dssp.map((item, index) => (
            <View key={index} style={styles.container}>
              <Image style={styles.image} source={{ uri: item.anh }} />
              <View style={styles.viewContainer}>
                <Text style={styles.textTitle}>{item.name}</Text>
                <Image style={styles.icon} source={require('./images/coffee-beans.png')} />
                <Image style={styles.icon1} source={require('./images/water-drop.png')} />
              </View>

              <View style={styles.viewContainer}>
                <View style={styles.view}>
                  <Image style={styles.icon2} source={require('./images/star.png')} />
                  <Text style={styles.text}>4.5</Text>
                </View>
                <Pressable style={styles.nen}>
                  <Text style={styles.textM}>Medium</Text>
                </Pressable>
              </View>

              <View style={styles.nen1}>
                <Text style={styles.textM}>{item.noidung}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '95%',
    marginLeft: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  image: {
    width: '90%',
    height: 250,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
  },

  viewContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  view: {
    flexDirection: 'row',
  },

  nen: {
    width: 100,
    height: 30,
    backgroundColor: '#d0753d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 20,
  },

  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 120,
    borderRadius: 10,
    marginTop: 10,
  },

  icon1: {
    width: 25,
    height: 25,
    marginRight: 20,
    marginTop: 10,
  },
  icon2: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textM: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  nen1: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 20,
  },
});
