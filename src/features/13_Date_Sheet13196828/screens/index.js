import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_2378}>
        <View style={styles.View_0_2379} />
        <View style={styles.View_0_2380}>
          <View style={styles.View_0_2381}>
            <View source={{ uri: "undefined" }} style={styles.View_0_2382} />
            <View source={{ uri: "undefined" }} style={styles.View_0_2388} />
          </View>
          <View source={{ uri: "undefined" }} style={styles.View_0_2394} />
        </View>
        <View source={{ uri: "undefined" }} style={styles.View_0_2403} />
      </View>
      <View style={styles.View_0_2404}>
        <View style={styles.View_I0_2404_0_2874}>
          <View style={styles.View_I0_2404_0_2875} />
          <View style={styles.View_I0_2404_0_2876}>
            <View
              source={{ uri: "undefined" }}
              style={styles.View_I0_2404_0_2877}
            />
            <View
              source={{ uri: "undefined" }}
              style={styles.View_I0_2404_0_2880}
            />
            <View
              source={{ uri: "undefined" }}
              style={styles.View_I0_2404_0_2881}
            />
          </View>
          <View
            source={{ uri: "undefined" }}
            style={styles.View_I0_2404_0_2884}
          />
          <View
            source={{ uri: "undefined" }}
            style={styles.View_I0_2404_0_2888}
          />
          <View style={styles.View_I0_2404_0_2891}>
            <View style={styles.View_I0_2404_0_2892}>
              <Text style={styles.Text_I0_2404_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2405}>
        <View style={styles.View_0_2406}>
          <Text style={styles.Text_0_2406}>Datesheet</Text>
        </View>
        <View style={styles.View_0_2407}>
          <View
            source={{ uri: "undefined" }}
            style={styles.View_I0_2407_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_2408}>
        <View style={styles.View_0_2409}>
          <View style={styles.View_0_2410}>
            <Text style={styles.Text_0_2410}>JAN</Text>
          </View>
          <View style={styles.View_0_2411}>
            <Text style={styles.Text_0_2411}>11</Text>
          </View>
          <View style={styles.View_0_2412}>
            <Text style={styles.Text_0_2412}>Science</Text>
          </View>
          <View style={styles.View_0_2413} />
          <View style={styles.View_0_2414} />
          <View style={styles.View_0_2415}>
            <Text style={styles.Text_0_2415}>Monday</Text>
          </View>
          <View style={styles.View_0_2416}>
            <Text style={styles.Text_0_2416}>09:00 AM</Text>
          </View>
          <View source={{ uri: "undefined" }} style={styles.View_0_2419} />
          <View style={styles.View_0_2421}>
            <View source={{ uri: "undefined" }} style={styles.View_0_2424} />
          </View>
        </View>
        <View style={styles.View_0_2426}>
          <View style={styles.View_0_2427}>
            <Text style={styles.Text_0_2427}>JAN</Text>
          </View>
          <View style={styles.View_0_2428}>
            <Text style={styles.Text_0_2428}>13</Text>
          </View>
          <View style={styles.View_0_2429}>
            <Text style={styles.Text_0_2429}>English</Text>
          </View>
          <View style={styles.View_0_2430} />
          <View style={styles.View_0_2431}>
            <Text style={styles.Text_0_2431}>Wednesday</Text>
          </View>
          <View style={styles.View_0_2432}>
            <Text style={styles.Text_0_2432}>09:00 AM</Text>
          </View>
          <View style={styles.View_0_2433}>
            <View source={{ uri: "undefined" }} style={styles.View_0_2436} />
          </View>
        </View>
        <View style={styles.View_0_2438}>
          <View style={styles.View_0_2439}>
            <Text style={styles.Text_0_2439}>JAN</Text>
          </View>
          <View style={styles.View_0_2440}>
            <Text style={styles.Text_0_2440}>20</Text>
          </View>
          <View style={styles.View_0_2441}>
            <Text style={styles.Text_0_2441}>Social Study</Text>
          </View>
          <View style={styles.View_0_2442} />
          <View style={styles.View_0_2443}>
            <Text style={styles.Text_0_2443}>Wednesday</Text>
          </View>
          <View style={styles.View_0_2444}>
            <Text style={styles.Text_0_2444}>09:00 AM</Text>
          </View>
          <View style={styles.View_0_2445}>
            <View source={{ uri: "undefined" }} style={styles.View_0_2448} />
          </View>
        </View>
        <View style={styles.View_0_2450}>
          <View style={styles.View_0_2451}>
            <Text style={styles.Text_0_2451}>JAN</Text>
          </View>
          <View style={styles.View_0_2452}>
            <Text style={styles.Text_0_2452}>15</Text>
          </View>
          <View style={styles.View_0_2453}>
            <Text style={styles.Text_0_2453}>Hindi</Text>
          </View>
          <View style={styles.View_0_2454} />
          <View style={styles.View_0_2455}>
            <Text style={styles.Text_0_2455}>Friday</Text>
          </View>
          <View style={styles.View_0_2456}>
            <Text style={styles.Text_0_2456}>09:00 AM</Text>
          </View>
          <View style={styles.View_0_2457}>
            <View source={{ uri: "undefined" }} style={styles.View_0_2460} />
          </View>
        </View>
        <View style={styles.View_0_2462}>
          <View style={styles.View_0_2463}>
            <Text style={styles.Text_0_2463}>JAN</Text>
          </View>
          <View style={styles.View_0_2464}>
            <Text style={styles.Text_0_2464}>22</Text>
          </View>
          <View style={styles.View_0_2465}>
            <Text style={styles.Text_0_2465}>Drawing</Text>
          </View>
          <View style={styles.View_0_2466} />
          <View style={styles.View_0_2467}>
            <Text style={styles.Text_0_2467}>Friday</Text>
          </View>
          <View style={styles.View_0_2468}>
            <Text style={styles.Text_0_2468}>09:00 AM</Text>
          </View>
          <View style={styles.View_0_2469}>
            <View source={{ uri: "undefined" }} style={styles.View_0_2472} />
          </View>
        </View>
        <View style={styles.View_0_2474}>
          <View style={styles.View_0_2475}>
            <Text style={styles.Text_0_2475}>JAN</Text>
          </View>
          <View style={styles.View_0_2476}>
            <Text style={styles.Text_0_2476}>18</Text>
          </View>
          <View style={styles.View_0_2477}>
            <Text style={styles.Text_0_2477}>Math</Text>
          </View>
          <View style={styles.View_0_2478} />
          <View style={styles.View_0_2479}>
            <Text style={styles.Text_0_2479}>Monday</Text>
          </View>
          <View style={styles.View_0_2480}>
            <Text style={styles.Text_0_2480}>09:00 AM</Text>
          </View>
          <View style={styles.View_0_2481}>
            <View source={{ uri: "undefined" }} style={styles.View_0_2484} />
          </View>
        </View>
        <View style={styles.View_0_2486}>
          <View style={styles.View_0_2487}>
            <Text style={styles.Text_0_2487}>JAN</Text>
          </View>
          <View style={styles.View_0_2488}>
            <Text style={styles.Text_0_2488}>25</Text>
          </View>
          <View style={styles.View_0_2489}>
            <Text style={styles.Text_0_2489}>Computer</Text>
          </View>
          <View style={styles.View_0_2490} />
          <View style={styles.View_0_2491}>
            <Text style={styles.Text_0_2491}>Monday</Text>
          </View>
          <View style={styles.View_0_2492}>
            <Text style={styles.Text_0_2492}>09:00 AM</Text>
          </View>
          <View style={styles.View_0_2493}>
            <View source={{ uri: "undefined" }} style={styles.View_0_2496} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_2498}>
        <View style={styles.View_I0_2498_0_2899}>
          <View style={styles.View_I0_2498_0_2900}>
            <View style={styles.View_I0_2498_0_2901} />
            <View style={styles.View_I0_2498_0_2902}>
              <View style={styles.View_I0_2498_0_2903}>
                <View style={styles.View_I0_2498_0_2904}>
                  <View style={styles.View_I0_2498_0_2905} />
                  <View style={styles.View_I0_2498_0_2906}>
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2907}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2908}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2909}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2910}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2911}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2912}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2913}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2914}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2915}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2916}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2917}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2918}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2919}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2920}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2921}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2922}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2923}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2924}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2925}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2926}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2927}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2928}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2929}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2930}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2931}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2932}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2933}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2934}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2935}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2936}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2937}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2938}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2939}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2940}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2941}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2942}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2943}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2944}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2945}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2946}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2947}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2948}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2949}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2950}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2951}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2952}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2953}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2954}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2955}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2956}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2957}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2958}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2959}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2960}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2961}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2962}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2963}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2964}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2965}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2966}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2967}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2968}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2969}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2970}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2971}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2972}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2973}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2974}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2975}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2976}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2977}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2978}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2979}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2980}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2981}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2982}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2983}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2984}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2985}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2986}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2987}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2988}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2989}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2990}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2991}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2992}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2993}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2994}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2995}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2996}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2997}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2998}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_2999}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3000}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3001}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3002}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3003}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3004}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3005}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3006}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3007}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3008}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3009}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3010}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3011}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3012}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3013}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3014}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3015}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3016}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3017}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3018}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3019}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3020}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3021}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3022}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3023}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3024}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3025}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3026}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3027}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3028}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3029}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3030}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3031}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3032}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3033}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3034}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3035}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3036}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3037}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3038}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3039}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3040}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3041}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3042}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3043}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3044}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3045}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3046}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3047}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3048}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3049}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3050}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3051}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3052}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3053}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3054}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3055}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3056}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3057}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3058}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3059}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3060}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3061}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3062}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3063}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3064}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3065}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3066}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3067}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3068}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3069}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3070}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3071}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3072}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3073}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3074}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3075}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3076}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3077}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3078}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3079}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3080}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3081}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3082}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3083}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3084}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3085}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3086}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3087}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3088}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3089}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3092}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3093}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3094}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3095}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3096}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3097}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3098}
                    />
                    <View
                      source={{ uri: "undefined" }}
                      style={styles.View_I0_2498_0_3099}
                    />
                    <View style={styles.View_I0_2498_0_3100}>
                      <View style={styles.View_I0_2498_0_3101}>
                        <View style={styles.View_I0_2498_0_3102}>
                          <View style={styles.View_I0_2498_0_3103} />
                          <View
                            source={{ uri: "undefined" }}
                            style={styles.View_I0_2498_0_3104}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_2378: {
    width: 375,
    minWidth: 375,
    height: 813,
    minHeight: 813,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2379: {
    width: 375,
    minWidth: 375,
    height: 813,
    minHeight: 813,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2380: {
    width: 333.41796875,
    minWidth: 333.41796875,
    height: 62.45203399658203,
    minHeight: 62.45203399658203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 74.989990234375
  },
  View_0_2381: {
    width: 268.06695556640625,
    minWidth: 268.06695556640625,
    height: 53.36000061035156,
    minHeight: 53.36000061035156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.9248046875,
    top: 4.697998046875
  },
  View_0_2382: {
    width: 13.14794921875,
    minWidth: 13.14794921875,
    height: 13.147994995117188,
    minHeight: 13.147994995117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 254.9189453125,
    top: 0
  },
  View_0_2388: {
    width: 13.14801025390625,
    minWidth: 13.14801025390625,
    height: 13.147994995117188,
    minHeight: 13.147994995117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40.2119140625
  },
  View_0_2394: {
    width: 333.41796875,
    minWidth: 333.41796875,
    height: 62.45203399658203,
    minHeight: 62.45203399658203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2403: {
    width: 375,
    minWidth: 375,
    height: 699,
    minHeight: 699,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 113
  },
  View_0_2404: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2404_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2404_0_2875: {
    width: 375,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.00009999999747378752
  },
  View_I0_2404_0_2876: {
    width: 24.3280029296875,
    minWidth: 24.3280029296875,
    height: 11.333000183105469,
    minHeight: 11.333000183105469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336.8330078125,
    top: 15.3330078125
  },
  View_I0_2404_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_2404_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_2404_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_I0_2404_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.334716796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  View_I0_2404_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_2404_0_2891: {
    width: 29,
    minWidth: 29,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.5,
    top: 13
  },
  View_I0_2404_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_2404_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2405: {
    width: 103,
    minWidth: 103,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 53
  },
  View_0_2406: {
    width: 76,
    minWidth: 76,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 0
  },
  Text_0_2406: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2407: {
    width: 12.000144958496094,
    minWidth: 12.000144958496094,
    height: 20.499969482421875,
    minHeight: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.49951171875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2407_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2408: {
    width: 313,
    minWidth: 313,
    height: 477,
    minHeight: 477,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 133.8310546875
  },
  View_0_2409: {
    width: 313,
    minWidth: 313,
    height: 69,
    minHeight: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2410: {
    width: 23,
    minWidth: 23,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 39.1689453125
  },
  Text_0_2410: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2411: {
    width: 21,
    minWidth: 21,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 9.1689453125
  },
  Text_0_2411: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2412: {
    width: 53,
    minWidth: 53,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 12.1689453125
  },
  Text_0_2412: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2413: {
    width: 271.19500732421875,
    minWidth: 271.19500732421875,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.8046875,
    top: 68,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2414: {
    width: 271.19500732421875,
    minWidth: 271.19500732421875,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.8046875,
    top: 0,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2415: {
    width: 41,
    minWidth: 41,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 36.1689453125
  },
  Text_0_2415: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2416: {
    width: 50,
    minWidth: 50,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 25.1689453125
  },
  Text_0_2416: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2419: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.599990844726562,
    minHeight: 12.599990844726562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244.2001953125,
    top: 27.9970703125
  },
  View_0_2421: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.599990844726562,
    minHeight: 12.599990844726562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244.2001953125,
    top: 27.9970703125
  },
  View_0_2424: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.599990844726562,
    minHeight: 12.599990844726562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2426: {
    width: 313,
    minWidth: 313,
    height: 59.8310546875,
    minHeight: 59.8310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 77.1689453125
  },
  View_0_2427: {
    width: 23,
    minWidth: 23,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_0_2427: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2428: {
    width: 21,
    minWidth: 21,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0
  },
  Text_0_2428: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2429: {
    width: 51,
    minWidth: 51,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 3
  },
  Text_0_2429: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2430: {
    width: 271.19500732421875,
    minWidth: 271.19500732421875,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.8046875,
    top: 58.8310546875,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2431: {
    width: 58,
    minWidth: 58,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 27
  },
  Text_0_2431: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2432: {
    width: 50,
    minWidth: 50,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 16
  },
  Text_0_2432: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2433: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.599990844726562,
    minHeight: 12.599990844726562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244.2001953125,
    top: 18.828125
  },
  View_0_2436: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.599990844726562,
    minHeight: 12.599990844726562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2438: {
    width: 313,
    minWidth: 313,
    height: 59.8310546875,
    minHeight: 59.8310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 281.1689453125
  },
  View_0_2439: {
    width: 23,
    minWidth: 23,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_0_2439: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2440: {
    width: 21,
    minWidth: 21,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0
  },
  Text_0_2440: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2441: {
    width: 85,
    minWidth: 85,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 3
  },
  Text_0_2441: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2442: {
    width: 271.19500732421875,
    minWidth: 271.19500732421875,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.8046875,
    top: 58.8310546875,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2443: {
    width: 58,
    minWidth: 58,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 27
  },
  Text_0_2443: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2444: {
    width: 50,
    minWidth: 50,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 16
  },
  Text_0_2444: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2445: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.600006103515625,
    minHeight: 12.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244.2001953125,
    top: 18.828125
  },
  View_0_2448: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.600006103515625,
    minHeight: 12.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2450: {
    width: 313,
    minWidth: 313,
    height: 59.8310546875,
    minHeight: 59.8310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 145.1689453125
  },
  View_0_2451: {
    width: 23,
    minWidth: 23,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_0_2451: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2452: {
    width: 21,
    minWidth: 21,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0
  },
  Text_0_2452: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2453: {
    width: 37,
    minWidth: 37,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 3
  },
  Text_0_2453: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2454: {
    width: 271.19500732421875,
    minWidth: 271.19500732421875,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.8046875,
    top: 58.8310546875,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2455: {
    width: 32,
    minWidth: 32,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 27
  },
  Text_0_2455: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2456: {
    width: 50,
    minWidth: 50,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 16
  },
  Text_0_2456: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2457: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.600006103515625,
    minHeight: 12.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244.2001953125,
    top: 18.828125
  },
  View_0_2460: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.600006103515625,
    minHeight: 12.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2462: {
    width: 313,
    minWidth: 313,
    height: 59.8310546875,
    minHeight: 59.8310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 349.1689453125
  },
  View_0_2463: {
    width: 23,
    minWidth: 23,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_0_2463: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2464: {
    width: 21,
    minWidth: 21,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0
  },
  Text_0_2464: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2465: {
    width: 58,
    minWidth: 58,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 3
  },
  Text_0_2465: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2466: {
    width: 271.19500732421875,
    minWidth: 271.19500732421875,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.8046875,
    top: 58.8310546875,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2467: {
    width: 32,
    minWidth: 32,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 27
  },
  Text_0_2467: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2468: {
    width: 50,
    minWidth: 50,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 16
  },
  Text_0_2468: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2469: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.5999755859375,
    minHeight: 12.5999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244.2001953125,
    top: 18.828125
  },
  View_0_2472: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.5999755859375,
    minHeight: 12.5999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2474: {
    width: 313,
    minWidth: 313,
    height: 59.8310546875,
    minHeight: 59.8310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 213.1689453125
  },
  View_0_2475: {
    width: 23,
    minWidth: 23,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_0_2475: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2476: {
    width: 21,
    minWidth: 21,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0
  },
  Text_0_2476: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2477: {
    width: 35,
    minWidth: 35,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 3
  },
  Text_0_2477: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2478: {
    width: 271.19500732421875,
    minWidth: 271.19500732421875,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.8046875,
    top: 58.8310546875,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2479: {
    width: 41,
    minWidth: 41,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 27
  },
  Text_0_2479: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2480: {
    width: 50,
    minWidth: 50,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 16
  },
  Text_0_2480: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2481: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.600006103515625,
    minHeight: 12.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244.2001953125,
    top: 18.828125
  },
  View_0_2484: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.600006103515625,
    minHeight: 12.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2486: {
    width: 313,
    minWidth: 313,
    height: 59.8310546875,
    minHeight: 59.8310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 417.1689453125
  },
  View_0_2487: {
    width: 23,
    minWidth: 23,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_0_2487: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2488: {
    width: 21,
    minWidth: 21,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0
  },
  Text_0_2488: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2489: {
    width: 70,
    minWidth: 70,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 3
  },
  Text_0_2489: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2490: {
    width: 271.19500732421875,
    minWidth: 271.19500732421875,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.8046875,
    top: 58.8310546875,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2491: {
    width: 41,
    minWidth: 41,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 27
  },
  Text_0_2491: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2492: {
    width: 50,
    minWidth: 50,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 16
  },
  Text_0_2492: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2493: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.5999755859375,
    minHeight: 12.5999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244.2001953125,
    top: 18.828125
  },
  View_0_2496: {
    width: 12.5999755859375,
    minWidth: 12.5999755859375,
    height: 12.5999755859375,
    minHeight: 12.5999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2498: {
    width: 374.7879638671875,
    minWidth: 374.7879638671875,
    height: 131.843994140625,
    minHeight: 131.843994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 680.156005859375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2498_0_2899: {
    flexGrow: 1,
    width: 374.7879638671875,
    height: 131.843994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2498_0_2900: {
    width: 374.7879638671875,
    minWidth: 374.7879638671875,
    height: 131.843994140625,
    minHeight: 131.843994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2498_0_2901: {
    width: 374.7879943847656,
    height: 131.843994140625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_2498_0_2902: {
    width: 374.7879943847656,
    minWidth: 374.7879943847656,
    height: 131.843994140625,
    minHeight: 131.843994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2498_0_2903: {
    width: 374.824951171875,
    minWidth: 374.824951171875,
    height: 128.38800048828125,
    minHeight: 128.38800048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2498_0_2904: {
    width: 374.824951171875,
    minWidth: 374.824951171875,
    height: 128.38800048828125,
    minHeight: 128.38800048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2498_0_2905: {
    width: 374.82501220703125,
    height: 128.38800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_2498_0_2906: {
    width: 374.82501220703125,
    minWidth: 374.82501220703125,
    height: 128.38800048828125,
    minHeight: 128.38800048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2498_0_2907: {
    width: 180.069091796875,
    height: 55.492271423339844,
    top: 60.3173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.92578125
  },
  View_I0_2498_0_2908: {
    width: 36.69970703125,
    height: 36.876121520996094,
    top: 5.48583984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0390625
  },
  View_I0_2498_0_2909: {
    width: 7.91632080078125,
    height: 29.485069274902344,
    top: 8.75146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.9560546875
  },
  View_I0_2498_0_2910: {
    width: 16.75469970703125,
    height: 25.380634307861328,
    top: 5.92431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.4033203125
  },
  View_I0_2498_0_2911: {
    width: 16.41424560546875,
    height: 20.61669921875,
    top: 21.033447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.7958984375
  },
  View_I0_2498_0_2912: {
    width: 1.624755859375,
    height: 1.6282730102539062,
    top: 12.022216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.490234375
  },
  View_I0_2498_0_2913: {
    width: 1.31103515625,
    height: 1.3120002746582031,
    top: 15.61572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.1533203125
  },
  View_I0_2498_0_2914: {
    width: 1,
    height: 1,
    top: 18.895263671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.849609375
  },
  View_I0_2498_0_2915: {
    width: 1.24859619140625,
    height: 1.252685546875,
    top: 25.452880859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.044921875
  },
  View_I0_2498_0_2916: {
    width: 2.50787353515625,
    height: 1,
    top: 32.45068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.3095703125
  },
  View_I0_2498_0_2917: {
    width: 1.50286865234375,
    height: 1.502349853515625,
    top: 24.820556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.27734375
  },
  View_I0_2498_0_2918: {
    width: 1.75091552734375,
    height: 1.0569992065429688,
    top: 30.371337890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.9111328125
  },
  View_I0_2498_0_2919: {
    width: 1,
    height: 1.4359817504882812,
    top: 37.876708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.0458984375
  },
  View_I0_2498_0_2920: {
    width: 1.62579345703125,
    height: 1,
    top: 37.178955078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.4765625
  },
  View_I0_2498_0_2921: {
    width: 1.49554443359375,
    height: 2.1327285766601562,
    top: 25.76416015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.9697265625
  },
  View_I0_2498_0_2922: {
    width: 1.50189208984375,
    height: 1,
    top: 21.223388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.69921875
  },
  View_I0_2498_0_2923: {
    width: 1,
    height: 1.8170585632324219,
    top: 13.347900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.0791015625
  },
  View_I0_2498_0_2924: {
    width: 1.75079345703125,
    height: 1.248565673828125,
    top: 10.6962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.08203125
  },
  View_I0_2498_0_2925: {
    width: 25.73016357421875,
    height: 20.381210327148438,
    top: 67.72265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.931640625
  },
  View_I0_2498_0_2926: {
    width: 4.573974609375,
    height: 9.015464782714844,
    top: 61.837158203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.9541015625
  },
  View_I0_2498_0_2927: {
    width: 4.552001953125,
    height: 4.34100341796875,
    top: 62.664306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.3857421875
  },
  View_I0_2498_0_2928: {
    width: 3.04693603515625,
    height: 2.803924560546875,
    top: 63.97998046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60.7646484375
  },
  View_I0_2498_0_2929: {
    width: 3.3436279296875,
    height: 4.467857360839844,
    top: 70.235595703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.0205078125
  },
  View_I0_2498_0_2930: {
    width: 47.27099609375,
    height: 52.37481689453125,
    top: 76.01611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245.82421875
  },
  View_I0_2498_0_2931: {
    width: 14.6064453125,
    height: 41.423866271972656,
    top: 84.649169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251.05078125
  },
  View_I0_2498_0_2932: {
    width: 15.621337890625,
    height: 8.054542541503906,
    top: 89.91162109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260.59765625
  },
  View_I0_2498_0_2933: {
    width: 14.9285888671875,
    height: 5.9549560546875,
    top: 99.236328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 264.1953125
  },
  View_I0_2498_0_2934: {
    width: 14.9285888671875,
    height: 5.9549560546875,
    top: 96.480224609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262.890625
  },
  View_I0_2498_0_2935: {
    width: 18.5472412109375,
    height: 18.727962493896484,
    top: 16.966552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 281.107421875
  },
  View_I0_2498_0_2936: {
    width: 12.7366943359375,
    height: 12.895675659179688,
    top: 19.9033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283.9990234375
  },
  View_I0_2498_0_2937: {
    width: 1.4794921875,
    height: 4.214263916015625,
    top: 24.71875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 286.1796875
  },
  View_I0_2498_0_2938: {
    width: 2.570556640625,
    height: 8.605827331542969,
    top: 21.7177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289.041015625
  },
  View_I0_2498_0_2939: {
    width: 1.14208984375,
    height: 2.8031463623046875,
    top: 24.968505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292.6181640625
  },
  View_I0_2498_0_2940: {
    width: 17.18359375,
    height: 7.682445526123047,
    top: 27.842041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297.30859375
  },
  View_I0_2498_0_2941: {
    width: 48.77862548828125,
    height: 38.798377990722656,
    top: 82.806396484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84.4580078125
  },
  View_I0_2498_0_2942: {
    width: 1,
    height: 30.056838989257812,
    top: 90.102783203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.4619140625
  },
  View_I0_2498_0_2943: {
    width: 18.14080810546875,
    height: 2.3446502685546875,
    top: 89.71337890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.404296875
  },
  View_I0_2498_0_2944: {
    width: 18.14117431640625,
    height: 2.344635009765625,
    top: 93.859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.4033203125
  },
  View_I0_2498_0_2945: {
    width: 18.14117431640625,
    height: 2.343780517578125,
    top: 98.00634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.4033203125
  },
  View_I0_2498_0_2946: {
    width: 18.14080810546875,
    height: 2.344635009765625,
    top: 102.15234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.404296875
  },
  View_I0_2498_0_2947: {
    width: 18.14117431640625,
    height: 2.3447723388671875,
    top: 106.30029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.4033203125
  },
  View_I0_2498_0_2948: {
    width: 18.14080810546875,
    height: 2.3447723388671875,
    top: 110.4462890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.404296875
  },
  View_I0_2498_0_2949: {
    width: 18.1422119140625,
    height: 2.3446502685546875,
    top: 89.71337890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  View_I0_2498_0_2950: {
    width: 18.1422119140625,
    height: 2.344635009765625,
    top: 93.859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  View_I0_2498_0_2951: {
    width: 18.1422119140625,
    height: 2.3436431884765625,
    top: 98.00634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  View_I0_2498_0_2952: {
    width: 18.1422119140625,
    height: 2.344635009765625,
    top: 102.15234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  View_I0_2498_0_2953: {
    width: 18.1422119140625,
    height: 2.3447723388671875,
    top: 106.30029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  View_I0_2498_0_2954: {
    width: 18.1422119140625,
    height: 2.344635009765625,
    top: 110.446533203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  View_I0_2498_0_2955: {
    width: 35.610107421875,
    height: 31.10565948486328,
    top: 46.64111328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 290.958984375
  },
  View_I0_2498_0_2956: {
    width: 21.1883544921875,
    height: 18.541282653808594,
    top: 51.718505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 296.974609375
  },
  View_I0_2498_0_2957: {
    width: 1.7750244140625,
    height: 3.1312179565429688,
    top: 72.2685546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 296.84765625
  },
  View_I0_2498_0_2958: {
    width: 1.5208740234375,
    height: 2.32794189453125,
    top: 69.85400390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303.83984375
  },
  View_I0_2498_0_2959: {
    width: 1.470947265625,
    height: 2.429718017578125,
    top: 66.182861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310.8837890625
  },
  View_I0_2498_0_2960: {
    width: 1.66357421875,
    height: 2.3273849487304688,
    top: 62.91455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 317.12109375
  },
  View_I0_2498_0_2961: {
    width: 2.3258056640625,
    height: 1.5180587768554688,
    top: 57.836669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 322.544921875
  },
  View_I0_2498_0_2962: {
    width: 2.376953125,
    height: 2.0702972412109375,
    top: 52.1552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 317.91796875
  },
  View_I0_2498_0_2963: {
    width: 1.6729736328125,
    height: 2.1720352172851562,
    top: 47.780029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 312.287109375
  },
  View_I0_2498_0_2964: {
    width: 1.1221923828125,
    height: 2.53314208984375,
    top: 46.970458984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305.44921875
  },
  View_I0_2498_0_2965: {
    width: 1.8699951171875,
    height: 1.8743972778320312,
    top: 49.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297.9560546875
  },
  View_I0_2498_0_2966: {
    width: 2.1783447265625,
    height: 1.0747146606445312,
    top: 56.423095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.0771484375
  },
  View_I0_2498_0_2967: {
    width: 2.679931640625,
    height: 1,
    top: 64.123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.1640625
  },
  View_I0_2498_0_2968: {
    width: 2.1795654296875,
    height: 1.2717514038085938,
    top: 71.1640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292.31640625
  },
  View_I0_2498_0_2969: {
    width: 16.37982177734375,
    height: 21.38909912109375,
    top: 42.568603515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.1943359375
  },
  View_I0_2498_0_2970: {
    width: 12.20001220703125,
    height: 10.945304870605469,
    top: 61.90966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86.46484375
  },
  View_I0_2498_0_2971: {
    width: 5.50836181640625,
    height: 2.3047866821289062,
    top: 64.152587890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.6904296875
  },
  View_I0_2498_0_2972: {
    width: 4.6494140625,
    height: 2.0127792358398438,
    top: 67.9716796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90.7041015625
  },
  View_I0_2498_0_2973: {
    width: 10.367431640625,
    height: 13.326515197753906,
    top: 50.522216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90.998046875
  },
  View_I0_2498_0_2974: {
    width: 23.56005859375,
    height: 22.71147918701172,
    top: 3.2216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.654296875
  },
  View_I0_2498_0_2975: {
    width: 17.05908203125,
    height: 16.45627212524414,
    top: 6.34423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 317.919921875
  },
  View_I0_2498_0_2976: {
    width: 23.5643310546875,
    height: 22.714595794677734,
    top: 13.279052734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342.0478515625
  },
  View_I0_2498_0_2977: {
    width: 17.0552978515625,
    height: 16.454532623291016,
    top: 16.404052734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345.31640625
  },
  View_I0_2498_0_2978: {
    width: 6.4356689453125,
    height: 3.011180877685547,
    top: 15.68359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337.6728515625
  },
  View_I0_2498_0_2979: {
    width: 6.0386962890625,
    height: 2.900867462158203,
    top: 18.01123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337.2109375
  },
  View_I0_2498_0_2980: {
    width: 6.02734375,
    height: 3.0972938537597656,
    top: 9.380859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.7998046875
  },
  View_I0_2498_0_2981: {
    width: 8.102783203125,
    height: 4.08929443359375,
    top: 11.822021484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 322.615234375
  },
  View_I0_2498_0_2982: {
    width: 2.7313232421875,
    height: 1.5959701538085938,
    top: 16.12646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326.5712890625
  },
  View_I0_2498_0_2983: {
    width: 7.825439453125,
    height: 3.928295135498047,
    top: 20.219970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 347.689453125
  },
  View_I0_2498_0_2984: {
    width: 4.8546142578125,
    height: 2.5669403076171875,
    top: 24.95263671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 352.208984375
  },
  View_I0_2498_0_2985: {
    width: 1,
    height: 1,
    top: 27.760498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 356.3173828125
  },
  View_I0_2498_0_2986: {
    width: 15.54400634765625,
    height: 9.765811920166016,
    top: 21.673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.59375
  },
  View_I0_2498_0_2987: {
    width: 12.93634033203125,
    height: 11.75637435913086,
    top: 21.314453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70.56640625
  },
  View_I0_2498_0_2988: {
    width: 18.60009765625,
    height: 4.900764465332031,
    top: 20.78466796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64.884765625
  },
  View_I0_2498_0_2989: {
    width: 16.16436767578125,
    height: 20.53191375732422,
    top: 32.1865234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50.9521484375
  },
  View_I0_2498_0_2990: {
    width: 64.7900390625,
    height: 22.418731689453125,
    top: 93.546630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.2177734375
  },
  View_I0_2498_0_2991: {
    width: 57.23663330078125,
    height: 19.285675048828125,
    top: 96.65380859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.611328125
  },
  View_I0_2498_0_2992: {
    width: 7.79241943359375,
    height: 9.287139892578125,
    top: 104.3037109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.2158203125
  },
  View_I0_2498_0_2993: {
    width: 10.12109375,
    height: 8.8919677734375,
    top: 100.740234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.7109375
  },
  View_I0_2498_0_2994: {
    width: 6.29901123046875,
    height: 7.1674346923828125,
    top: 98.616455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.8349609375
  },
  View_I0_2498_0_2995: {
    width: 3.93768310546875,
    height: 5.06243896484375,
    top: 97.394775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.4638671875
  },
  View_I0_2498_0_2996: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 101.089599609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.15234375
  },
  View_I0_2498_0_2997: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 99.358642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.7607421875
  },
  View_I0_2498_0_2998: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 102.820556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.775390625
  },
  View_I0_2498_0_2999: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 103.8095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61.5068359375
  },
  View_I0_2498_0_3000: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 95.525634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75.3544921875
  },
  View_I0_2498_0_3001: {
    width: 39.29241943359375,
    height: 58.85499572753906,
    top: 36.75048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.015625
  },
  View_I0_2498_0_3002: {
    width: 33.16119384765625,
    height: 50.66117858886719,
    top: 43.063720703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.8388671875
  },
  View_I0_2498_0_3003: {
    width: 10.8885498046875,
    height: 9.633522033691406,
    top: 75.84130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.697265625
  },
  View_I0_2498_0_3004: {
    width: 11.98486328125,
    height: 11.721038818359375,
    top: 63.6044921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.125
  },
  View_I0_2498_0_3005: {
    width: 11.64849853515625,
    height: 9.793548583984375,
    top: 55.91455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.517578125
  },
  View_I0_2498_0_3006: {
    width: 11.03387451171875,
    height: 8.178909301757812,
    top: 47.382568359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.2099609375
  },
  View_I0_2498_0_3007: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 51.712646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.58203125
  },
  View_I0_2498_0_3008: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 49.853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.3125
  },
  View_I0_2498_0_3009: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 52.45361328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.806640625
  },
  View_I0_2498_0_3010: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 59.378662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.47265625
  },
  View_I0_2498_0_3011: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 57.024658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.2041015625
  },
  View_I0_2498_0_3012: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 59.62548828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.0693359375
  },
  View_I0_2498_0_3013: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 77.797607421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.8720703125
  },
  View_I0_2498_0_3014: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 77.0556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.46875
  },
  View_I0_2498_0_3015: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 69.517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.3408203125
  },
  View_I0_2498_0_3016: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 66.669677734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.8349609375
  },
  View_I0_2498_0_3017: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 45.03564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.2626953125
  },
  View_I0_2498_0_3018: {
    width: 46.46435546875,
    height: 46.51941680908203,
    top: 69.158203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_2498_0_3019: {
    width: 38.78125,
    height: 44.05986022949219,
    top: 72.69921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.3798828125
  },
  View_I0_2498_0_3020: {
    width: 17.1988525390625,
    height: 16.653671264648438,
    top: 77.46484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.4794921875
  },
  View_I0_2498_0_3021: {
    width: 18.3408203125,
    height: 17.028823852539062,
    top: 91.807861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0009765625
  },
  View_I0_2498_0_3022: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 86.5185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.1650390625
  },
  View_I0_2498_0_3023: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 81.819580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.1650390625
  },
  View_I0_2498_0_3024: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 82.5615234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.5732421875
  },
  View_I0_2498_0_3025: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 87.754638671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.9375
  },
  View_I0_2498_0_3026: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 89.238525390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.646484375
  },
  View_I0_2498_0_3027: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 100.861572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.6162109375
  },
  View_I0_2498_0_3028: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 105.8076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.7548828125
  },
  View_I0_2498_0_3029: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 84.292724609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.0263671875
  },
  View_I0_2498_0_3030: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 102.09765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.05859375
  },
  View_I0_2498_0_3031: {
    width: 64.7900390625,
    height: 22.418731689453125,
    top: 93.546630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.81640625
  },
  View_I0_2498_0_3032: {
    width: 57.2366943359375,
    height: 19.283294677734375,
    top: 96.654052734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300.982421875
  },
  View_I0_2498_0_3033: {
    width: 7.789794921875,
    height: 9.28607177734375,
    top: 104.303955078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 338.8271484375
  },
  View_I0_2498_0_3034: {
    width: 10.122802734375,
    height: 8.892974853515625,
    top: 100.738037109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324.994140625
  },
  View_I0_2498_0_3035: {
    width: 6.300048828125,
    height: 7.1663360595703125,
    top: 98.61767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.697265625
  },
  View_I0_2498_0_3036: {
    width: 3.9388427734375,
    height: 5.0595703125,
    top: 97.3974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 308.421875
  },
  View_I0_2498_0_3037: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 101.089599609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 325.5048828125
  },
  View_I0_2498_0_3038: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 99.358642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323.896484375
  },
  View_I0_2498_0_3039: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 102.820556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313.8818359375
  },
  View_I0_2498_0_3040: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 103.8095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 312.150390625
  },
  View_I0_2498_0_3041: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 95.525634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298.302734375
  },
  View_I0_2498_0_3042: {
    width: 39.29248046875,
    height: 58.85499572753906,
    top: 36.75048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.5166015625
  },
  View_I0_2498_0_3043: {
    width: 33.1610107421875,
    height: 50.659515380859375,
    top: 43.064208984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339.82421875
  },
  View_I0_2498_0_3044: {
    width: 10.885986328125,
    height: 9.637481689453125,
    top: 75.833251953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 359.240234375
  },
  View_I0_2498_0_3045: {
    width: 11.989990234375,
    height: 11.730026245117188,
    top: 63.593505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 351.7109375
  },
  View_I0_2498_0_3046: {
    width: 11.6495361328125,
    height: 9.795211791992188,
    top: 55.919677734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345.6572265625
  },
  View_I0_2498_0_3047: {
    width: 10.99609375,
    height: 8.204757690429688,
    top: 47.377685546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339.578125
  },
  View_I0_2498_0_3048: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 51.712646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 355.076171875
  },
  View_I0_2498_0_3049: {
    width: 1.1676025390625,
    height: 1.235992431640625,
    top: 49.853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 353.3447265625
  },
  View_I0_2498_0_3050: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 52.45361328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 352.8505859375
  },
  View_I0_2498_0_3051: {
    width: 1.1676025390625,
    height: 1.235992431640625,
    top: 59.378662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345.1845703125
  },
  View_I0_2498_0_3052: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 57.024658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 343.453125
  },
  View_I0_2498_0_3053: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 59.62548828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342.587890625
  },
  View_I0_2498_0_3054: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 77.797607421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 358.78515625
  },
  View_I0_2498_0_3055: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 77.0556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 356.1884765625
  },
  View_I0_2498_0_3056: {
    width: 1.1676025390625,
    height: 1.235992431640625,
    top: 69.517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367.31640625
  },
  View_I0_2498_0_3057: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 66.669677734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 366.822265625
  },
  View_I0_2498_0_3058: {
    width: 1.1676025390625,
    height: 1.235992431640625,
    top: 45.03564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337.39453125
  },
  View_I0_2498_0_3059: {
    width: 46.46533203125,
    height: 46.51941680908203,
    top: 69.158203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 328.3603515625
  },
  View_I0_2498_0_3060: {
    width: 38.7816162109375,
    height: 44.057281494140625,
    top: 72.699951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 335.6650390625
  },
  View_I0_2498_0_3061: {
    width: 17.198974609375,
    height: 16.654922485351562,
    top: 77.464599609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337.146484375
  },
  View_I0_2498_0_3062: {
    width: 18.341796875,
    height: 17.029022216796875,
    top: 91.8076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 349.4873046875
  },
  View_I0_2498_0_3063: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 86.5185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 356.865234375
  },
  View_I0_2498_0_3064: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 81.819580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 356.865234375
  },
  View_I0_2498_0_3065: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 82.5615234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 348.45703125
  },
  View_I0_2498_0_3066: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 87.754638671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336.091796875
  },
  View_I0_2498_0_3067: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 89.238525390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 332.3828125
  },
  View_I0_2498_0_3068: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 100.861572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 352.4140625
  },
  View_I0_2498_0_3069: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 105.8076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342.275390625
  },
  View_I0_2498_0_3070: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 84.292724609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367.00390625
  },
  View_I0_2498_0_3071: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 102.09765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 369.970703125
  },
  View_I0_2498_0_3072: {
    width: 25.334716796875,
    height: 27.309738159179688,
    top: 89.68896484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160.193359375
  },
  View_I0_2498_0_3073: {
    width: 21.2943115234375,
    height: 24.3258056640625,
    top: 92.474853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160.66796875
  },
  View_I0_2498_0_3074: {
    width: 11.6278076171875,
    height: 9.145523071289062,
    top: 96.290771484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170.05078125
  },
  View_I0_2498_0_3075: {
    width: 12.48583984375,
    height: 10.500259399414062,
    top: 101.36767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163.8916015625
  },
  View_I0_2498_0_3076: {
    width: 21.305419921875,
    height: 37.464996337890625,
    top: 80.61962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140.7685546875
  },
  View_I0_2498_0_3077: {
    width: 16.815673828125,
    height: 32.51842498779297,
    top: 85.407470703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144.23046875
  },
  View_I0_2498_0_3078: {
    width: 5.9215087890625,
    height: 6.4123687744140625,
    top: 89.25390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144.1259765625
  },
  View_I0_2498_0_3079: {
    width: 8.39111328125,
    height: 7.28472900390625,
    top: 95.1826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 145.4873046875
  },
  View_I0_2498_0_3080: {
    width: 9.1285400390625,
    height: 6.5359344482421875,
    top: 103.349365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148.955078125
  },
  View_I0_2498_0_3081: {
    width: 25.0609130859375,
    height: 23.3690185546875,
    top: 94.739013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 205.1884765625
  },
  View_I0_2498_0_3082: {
    width: 19.2689208984375,
    height: 17.767822265625,
    top: 98.564208984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 208.2353515625
  },
  View_I0_2498_0_3083: {
    width: 1,
    height: 8.490005493164062,
    top: 84.5146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217.736328125
  },
  View_I0_2498_0_3084: {
    width: 2.5518798828125,
    height: 2.5527267456054688,
    top: 91.2841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 208.205078125
  },
  View_I0_2498_0_3085: {
    width: 2.93994140625,
    height: 2.939971923828125,
    top: 91.711669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225.8984375
  },
  View_I0_2498_0_3086: {
    width: 5.7117919921875,
    height: 1.8646087646484375,
    top: 100.526123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198.0029296875
  },
  View_I0_2498_0_3087: {
    width: 5.7216796875,
    height: 1.2978363037109375,
    top: 101.508056640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232.7939453125
  },
  View_I0_2498_0_3088: {
    width: 2.8280029296875,
    height: 1,
    top: 109.651611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 233.0654296875
  },
  View_I0_2498_0_3089: {
    width: 3.3798828125,
    height: 1,
    top: 109.792236328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 200.3369140625
  },
  View_I0_2498_0_3092: {
    width: 11.0718994140625,
    height: 13.313987731933594,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.0771484375
  },
  View_I0_2498_0_3093: {
    width: 8.46539306640625,
    height: 9.771949768066406,
    top: 64.459716796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114.857421875
  },
  View_I0_2498_0_3094: {
    width: 1.62591552734375,
    height: 1.6829986572265625,
    top: 50.15869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71.017578125
  },
  View_I0_2498_0_3095: {
    width: 1.62591552734375,
    height: 1.6829986572265625,
    top: 47.634521484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72.5283203125
  },
  View_I0_2498_0_3096: {
    width: 1.62591552734375,
    height: 1.6829986572265625,
    top: 50.49462890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73.70703125
  },
  View_I0_2498_0_3097: {
    width: 1.625732421875,
    height: 1.6829833984375,
    top: 81.65966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313.1318359375
  },
  View_I0_2498_0_3098: {
    width: 1.625732421875,
    height: 1.6829986572265625,
    top: 79.131591796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.6494140625
  },
  View_I0_2498_0_3099: {
    width: 1.6258544921875,
    height: 1.6829986572265625,
    top: 81.99169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.82421875
  },
  View_I0_2498_0_3100: {
    width: 48.029052734375,
    minWidth: 48.029052734375,
    height: 25.042999267578125,
    minHeight: 25.042999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172.609375,
    top: 39.515625
  },
  View_I0_2498_0_3101: {
    width: 48.029052734375,
    minWidth: 48.029052734375,
    height: 25.042999267578125,
    minHeight: 25.042999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2498_0_3102: {
    width: 48.029052734375,
    minWidth: 48.029052734375,
    height: 25.042999267578125,
    minHeight: 25.042999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2498_0_3103: {
    width: 48.02899932861328,
    height: 25.042999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_2498_0_3104: {
    width: 48.02899932861328,
    height: 25.042999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
