import { StatusBar } from 'expo-status-bar';
import { Cell, Section, Separator, TableView } from 'react-native-tableview-simple';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, ImageBackground, Button} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreenCell = (props) => (
  <Cell
  {...props}
  cellContentView={
    <View>
    <Image
        style={styles.restaurantImg}
        source={props.imgUri}
      />
      <Text style={styles.etaDisplay}>{props.etaDisplay} minutes</Text>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.restaurantTagline}>{props.restaurantTagline}</Text>
    </View>
  }
  onPress={props.action}
  />
)

const MenuCell = (props) => (
  <Cell
  {...props}
  cellContentView={
    <View>
      <Text>{props.title}</Text>
    </View>
  }
  onPress={props.action}
  />
)

function RestaurantScreen({navigation}) {
  return(
    <View style={styles.background}>
      <ImageBackground source={require('./images/mainbground.jpg')} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <TableView>
          <Section name=' ' hideSeparator='true' separatorTintColor='#ccc'>
            <HomeScreenCell
              title="Locavore"
              restaurantTagline="European Cuisine with Local Seasonal Ingredients, $$$"
              etaDisplay="70"
              imgUri={require('./images/locavore.jpg')}
              height='290px'
              backgroundColor='transparent'
              highlightUnderlayColor={'#ccc'}
              action = {()=>navigation.navigate('Restaurant Menu',{ items:
                                                      [{ "title":"Main Dish",
                                                         "contents":[{"title":"Pakwan Salad","image":require('./images/locavore1.jpg')},
                                                                       {"title":"Turon","image":require('./images/locavore2.jpg')},
                                                                       {"title":"Bacon BBQ Skewers","image":require('./images/locavore4.jpg')}] },
                                                          {"title":'Dessert',
                                                         "contents":[{"title":"Choc Pudding","image":require('./images/locavore3.jpg')},
                                                                     {"title":"Dragonfruit Cake","image":require('./images/locavore5.jpg')},
                                                                     {"title":"Ice Cream Chocolatos","image":require('./images/locavore6.jpg')}]} ] })}
            />
          </Section>
          <Section name=' ' hideSeparator='true' separatorTintColor='#ccc'>
            <HomeScreenCell
              title="Mosaic"
              restaurantTagline="Solid Vegan, Vegetarian Meal, Plant-Based, $$$"
              etaDisplay="10-20"
              imgUri={require('./images/mosaic.jpg')}
              height='290px'
              backgroundColor='transparent'
              highlightUnderlayColor={'#ccc'}
              action={() => navigation.navigate('Restaurant Menu', { items: [{ "title":"Steak",
                                                                    "contents":[{"title":"Harissa Jackfruit Bowl","image":require('./images/mosaic1.jpg')},
                                                                    {"title":"Tangy Thai Stir Fry","image":require('./images/mosaic2.jpg')}] },
                                                                     { "title":"Fruit Juice",
                                                                      "contents":[{"title":"Tomato","image":require('./images/mosaic3.jpg')},
                                                                      {"title":"Pineapple","image":require('./images/mosaic4.jpg')}] }] })}
            />
          </Section>            
          <Section name=' ' hideSeparator='true' separatorTintColor='#ccc'>
            <HomeScreenCell
              title="Barbacoa"
              restaurantTagline="Latin American BBQ Wood Fired, $$$"
              etaDisplay="30-40"
              imgUri={require('./images/barbacoa.jpg')}
              height='290px'
              backgroundColor='transparent'
              highlightUnderlayColor={'#ccc'}
              action={() => navigation.navigate('Restaurant Menu', { items: [{ "title":"Main Dish",
                                                                    "contents":[{"title":"Ribeye Steak","image":require('./images/barbacoa1.jpg')},
                                                                    {"title":"Chicken BBQ","image":require('./images/barbacoa2.jpg')}] },
                                                                      { "title":"Dessert",
                                                                      "contents":[{"title":"Vanilla Crème Brûlée","image":require('./images/barbacoa3.jpg')},
                                                                      {"title":"Mango Cheesecake","image":require('./images/barbacoa4.jpg')}] }] })}
            />
          </Section>
          <Section name=' ' hideSeparator='true' separatorTintColor='#ccc'>
            <HomeScreenCell
              title="Blu Jaz"
              restaurantTagline="Muzium Mediterranean, Piedra Negra Mexican, $$$"
              etaDisplay="45"
              imgUri={require('./images/blujaz.jpg')}
              height='290px'
              backgroundColor='transparent'
              highlightUnderlayColor={'#ccc'}
              action={() => navigation.navigate('Restaurant Menu', { items: [{ "title":"Main Dish",
                                                                    "contents":[{"title":"Grilled Salmon","image":require('./images/blujaz1.jpg')},
                                                                    {"title":"Cold Cut Platter","image":require('./images/blujaz2.jpg')}] },
                                                                      { "title":"Dessert",
                                                                      "contents":[{"title":"Brownies","image":require('./images/blujaz3.jpg')},
                                                                      {"title":"Whisky Sour","image":require('./images/blujaz4.jpg')}] }] })}
            />
          </Section>
          <Section name=' ' hideSeparator='true' separatorTintColor='#ccc'>
            <HomeScreenCell
              title="Wild Air"
              restaurantTagline="Asian, Western Signatures, $$$"
              etaDisplay="80"
              imgUri={require('./images/wildair.jpg')}
              height='290px'
              backgroundColor='transparent'
              highlightUnderlayColor={'#ccc'}
              action={() => navigation.navigate('Restaurant Menu', { items: [{ "title":"Main Dish",
                                                                    "contents":[{"title":"Marinated Baby Lobster","image":require('./images/wildair1.jpg')},
                                                                    {"title":"Pan Seared Salmon - Saffron Sauce","image":require('./images/wildair2.jpg')}] },
                                                                      { "title":"Drinks",
                                                                      "contents":[{"title":"Iced Lemon Tea","image":require('./images/wildair3.jpg')},
                                                                      {"title":"Americano","image":require('./images/wildair4.jpg')}] }] })}
            />
          </Section>
        </TableView>
      </ScrollView> 
      </ImageBackground>
    </View>
  )
}

function MenuScreen({navigation, route}) {

  const {items} = route.params;
  return(
    <View>
      <ScrollView>
        <TableView>
        {items.map((item, i) => (
          <Section key={item.title} header={item.title}
          >
            {item.contents.map((content, i)=> (
              <MenuCell key={content.title}
                title={content.title}
                action={() => navigation.navigate('Selected Food', {'foodName': content.title, 'foodImg': content.image})}
              />
            ))}
          </Section>
        ))
        }
        </TableView>
      </ScrollView>
    </View>
  )
}

function FoodScreen({route}) {
  const {foodName, foodImg} = route.params;
  return(
    <View>
      <Image style={styles.foodImg} source={foodImg}></Image>
      <Text>You have selected {foodName}! Enjour your dish 😃 </Text>
    </View>
  )
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List of Restaurants' component={RestaurantScreen}/>
        <Stack.Screen name='Restaurant Menu' component={MenuScreen}/>
        <Stack.Screen name='Selected Food' component={FoodScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  etaDisplay: {
    fontSize:22,
    fontWeight: 'bold',
    height: 70,
    width: 90,
    backgroundColor: '#ffffff',
    opacity: 0.7,
    borderRadius: 150,
    position: 'absolute',
    marginTop: 170,
    marginLeft: 250,
    textAlign: 'center',
  },

  foodImg: {
    height: 350,
    width: 380,
    alignSelf: 'center',
    borderRadius: 35,
  },

  restaurantImg: {
    borderRadius: 25,
    height: 200,
    width: 360,
  },
  
  title: {
    color: '#332f24',
    fontSize:30,
    fontWeight: 'bold',
  },
  restaurantTagline: {
    color:'#993232'
  }
});
