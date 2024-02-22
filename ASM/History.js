import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Giohang = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.viewTB}>
        <View style={styles.viewContainer}>
          <Image style={styles.image} source={require('./images/lote.jpg')} />
          <View style={styles.viewPad}>
            <Text style={styles.textTitle}>Robuto Beans</Text>
            <Text>Medium Robuto</Text>
            <Pressable>
              <View>
                <Text style={styles.textDolla}>$37.20</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.sizeContainer}>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>S</Text>
              <Text style={styles.pressText2}>$4.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$8.40</Text>
            </View>
          </Pressable>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>M</Text>
              <Text style={styles.pressText2}>$6.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$12.40</Text>
            </View>
          </Pressable>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>L</Text>
              <Text style={styles.pressText2}>$8.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$16.40</Text>
            </View>
          </Pressable>
        </View>
      </View>

      

    
      <View style={styles.viewTB1}>
        <View style={styles.viewContainer}>
          <Image style={styles.image} source={require('./images/lote.jpg')} />
          <View style={styles.viewPad}>
            <Text style={styles.textTitle}>Robuto Beans</Text>
            <Text>Medium Robuto</Text>
            <Pressable>
              <View>
                <Text style={styles.textDolla}>$37.20</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.sizeContainer}>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>S</Text>
              <Text style={styles.pressText2}>$4.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$8.40</Text>
            </View>
          </Pressable>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>M</Text>
              <Text style={styles.pressText2}>$6.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$12.40</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={styles.viewTB1}>
        <View style={styles.viewContainer}>
          <Image style={styles.image} source={require('./images/lote.jpg')} />
          <View style={styles.viewPad}>
            <Text style={styles.textTitle}>Robuto Beans</Text>
            <Text>Medium Robuto</Text>
            <Pressable>
              <View>
                <Text style={styles.textDolla}>$37.20</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.sizeContainer}>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>S</Text>
              <Text style={styles.pressText2}>$4.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$8.40</Text>
            </View>
          </Pressable>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>M</Text>
              <Text style={styles.pressText2}>$6.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$12.40</Text>
            </View>
          </Pressable>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>L</Text>
              <Text style={styles.pressText2}>$8.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$16.40</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={styles.viewTB1}>
        <View style={styles.viewContainer}>
          <Image style={styles.image} source={require('./images/lote.jpg')} />
          <View style={styles.viewPad}>
            <Text style={styles.textTitle}>Robuto Beans</Text>
            <Text>Medium Robuto</Text>
            <Pressable>
              <View>
                <Text style={styles.textDolla}>$37.20</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.sizeContainer}>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>S</Text>
              <Text style={styles.pressText2}>$4.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$8.40</Text>
            </View>
          </Pressable>
          <Pressable style={styles.pressableContainer}>
            <View style={styles.pressableContent}>
              <Text style={styles.pressText}>M</Text>
              <Text style={styles.pressText2}>$46.40</Text>
              <Text style={styles.pressText3}>X</Text>
              <Text style={styles.pressText}>2</Text>
              <Text style={styles.textTong}>$12.40</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Giohang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 5,
  },
  textDolla: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10
  },
  textTong: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30 
  },
  viewContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    borderRadius: 10,
  },
  viewTB: {
    borderWidth: 1,
    borderRadius: 10,
  },
  viewTB1: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 40
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  viewPad: {
    marginLeft: 15,
  },
  sizeContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  pressableContainer: {
    marginRight: 10,
    borderRadius: 5,
  },
  pressableContent: {
    flexDirection: 'row',
    padding: 10,
  },
  pressText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#000000',
    width: 50,
    paddingLeft: 20,
    borderRadius: 5
  },

  pressText2: {
    color: '#000000',
    marginHorizontal: 5,
    fontWeight: 'bold',
    marginLeft: 70,
    marginRight: 50
  },

  pressText3: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#da7029',
    width: 25,
    paddingLeft: 10,
    borderRadius: 5,
    marginLeft: 10,
    marginRight:10
  },

  pressText4: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#000000',
    width: 50,
    paddingLeft: 20,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    
  },
  container_: {
    marginTop: 30
  }
});