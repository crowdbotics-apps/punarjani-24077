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
      <View style={styles.View_0_2112}>
        <View style={styles.View_0_2113} />
        <View style={styles.View_0_2114}>
          <View style={styles.View_0_2115}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_2116}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_2122}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_2128}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc2/42fa/6909e939e932888794ebbac489d939ad"
          }}
          style={styles.ImageBackground_0_2137}
        />
      </View>
      <View style={styles.View_0_2138}>
        <View style={styles.View_I0_2138_0_2874}>
          <View style={styles.View_I0_2138_0_2875} />
          <View style={styles.View_I0_2138_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_2138_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_2138_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_2138_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_2138_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_2138_0_2888}
          />
          <View style={styles.View_I0_2138_0_2891}>
            <View style={styles.View_I0_2138_0_2892}>
              <Text style={styles.Text_I0_2138_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2139}>
        <View style={styles.View_0_2140}>
          <Text style={styles.Text_0_2140}>Timetable</Text>
        </View>
        <View style={styles.View_0_2141}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_2141_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_2142}>
        <View style={styles.View_0_2143}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd96/7ca0/d71c1ccd71fb48ed89edd328ff1b9bc4"
            }}
            style={styles.ImageBackground_0_2144}
          />
          <View style={styles.View_0_2147}>
            <Text style={styles.Text_0_2147}>Computer Science</Text>
          </View>
          <View style={styles.View_0_2148}>
            <Text style={styles.Text_0_2148}>08:15am - 9:00am</Text>
          </View>
          <View style={styles.View_0_2149} />
          <View style={styles.View_0_2150}>
            <Text style={styles.Text_0_2150}>Cherise James</Text>
          </View>
          <View style={styles.View_0_2151}>
            <Text style={styles.Text_0_2151}>Period 1</Text>
          </View>
        </View>
        <View style={styles.View_0_2152}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd96/7ca0/d71c1ccd71fb48ed89edd328ff1b9bc4"
            }}
            style={styles.ImageBackground_0_2153}
          />
          <View style={styles.View_0_2156}>
            <Text style={styles.Text_0_2156}>English</Text>
          </View>
          <View style={styles.View_0_2157}>
            <Text style={styles.Text_0_2157}>09:45am - 10:30am</Text>
          </View>
          <View style={styles.View_0_2158} />
          <View style={styles.View_0_2159}>
            <Text style={styles.Text_0_2159}>Marta Magana</Text>
          </View>
          <View style={styles.View_0_2160}>
            <Text style={styles.Text_0_2160}>Period 3</Text>
          </View>
        </View>
        <View style={styles.View_0_2161}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd96/7ca0/d71c1ccd71fb48ed89edd328ff1b9bc4"
            }}
            style={styles.ImageBackground_0_2162}
          />
          <View style={styles.View_0_2165}>
            <Text style={styles.Text_0_2165}>Science</Text>
          </View>
          <View style={styles.View_0_2166}>
            <Text style={styles.Text_0_2166}>11:00am - 11:45am</Text>
          </View>
          <View style={styles.View_0_2167} />
          <View style={styles.View_0_2168}>
            <Text style={styles.Text_0_2168}>Danica Partridge</Text>
          </View>
          <View style={styles.View_0_2169}>
            <Text style={styles.Text_0_2169}>Period 4</Text>
          </View>
        </View>
        <View style={styles.View_0_2170}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd96/7ca0/d71c1ccd71fb48ed89edd328ff1b9bc4"
            }}
            style={styles.ImageBackground_0_2171}
          />
          <View style={styles.View_0_2174}>
            <Text style={styles.Text_0_2174}>Mathematics </Text>
          </View>
          <View style={styles.View_0_2175}>
            <Text style={styles.Text_0_2175}>09:00am - 09:45am</Text>
          </View>
          <View style={styles.View_0_2176} />
          <View style={styles.View_0_2177}>
            <Text style={styles.Text_0_2177}>Rivka Steadman</Text>
          </View>
          <View style={styles.View_0_2178}>
            <Text style={styles.Text_0_2178}>Period 2</Text>
          </View>
        </View>
        <View style={styles.View_0_2179}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b41e/db3f/94f925ea6b65e1efc5508a9fe9dc5700"
            }}
            style={styles.ImageBackground_0_2180}
          />
          <View style={styles.View_0_2183}>
            <Text style={styles.Text_0_2183}>Lunch Break</Text>
          </View>
          <View style={styles.View_0_2184}>
            <Text style={styles.Text_0_2184}>10:30am - 11:00am</Text>
          </View>
          <View style={styles.View_0_2185}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c57/00f2/64ec96ab8757540cda7ebdff3e6d0843"
              }}
              style={styles.ImageBackground_0_2186}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/669a/91b2/b17a136cf33e39f3ecb31c6d2e430bf7"
              }}
              style={styles.ImageBackground_0_2187}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6abe/483b/6b9c3bf1c53d5d85c76e41085b015803"
              }}
              style={styles.ImageBackground_0_2188}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b6/a15b/a2de8a781405b0cc8cba6a210b25a5c9"
              }}
              style={styles.ImageBackground_0_2189}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b467/3856/07258550cb1790de12eb08c7b81f8a70"
              }}
              style={styles.ImageBackground_0_2190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f628/c358/df062b03bb58ad97600ca74aa278df36"
              }}
              style={styles.ImageBackground_0_2191}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7695/3921/36bffa3a202635f11c9bd5fa15930156"
              }}
              style={styles.ImageBackground_0_2192}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c80/5185/ee3402dd9e6bff97cf88a0371b1c78b0"
              }}
              style={styles.ImageBackground_0_2193}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57c6/db9f/b0ac7a044a4a33c74ef0e3777b09f884"
              }}
              style={styles.ImageBackground_0_2194}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/217a/d64d/3d4d0a74d26b450e7cf3b11bfb62cf51"
              }}
              style={styles.ImageBackground_0_2195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e945/4dbe/d3988a5bbf7c46c900c9a1a1ea22eb0b"
              }}
              style={styles.ImageBackground_0_2196}
            />
          </View>
        </View>
        <View style={styles.View_0_2203}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd96/7ca0/d71c1ccd71fb48ed89edd328ff1b9bc4"
            }}
            style={styles.ImageBackground_0_2204}
          />
          <View style={styles.View_0_2207}>
            <Text style={styles.Text_0_2207}>Social Study</Text>
          </View>
          <View style={styles.View_0_2208}>
            <Text style={styles.Text_0_2208}>11:45am - 12:30pm</Text>
          </View>
          <View style={styles.View_0_2209} />
          <View style={styles.View_0_2210}>
            <Text style={styles.Text_0_2210}>Cherise James</Text>
          </View>
          <View style={styles.View_0_2211}>
            <Text style={styles.Text_0_2211}>English</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2212}>
        <View style={styles.View_I0_2212_0_2894}>
          <View style={styles.View_I0_2212_0_2895}>
            <View style={styles.View_I0_2212_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_2212_0_2897}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_2213}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7a5/0b35/ebb3c9e3803a79c84e91c8bb8bd0a855"
          }}
          style={styles.ImageBackground_0_2214}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a24/0615/572e8f54047475c4f4ab3d07b79ece5f"
          }}
          style={styles.ImageBackground_0_2217}
        />
        <View style={styles.View_0_2218}>
          <Text style={styles.Text_0_2218}>TUE WED THU FRI SAT</Text>
        </View>
        <View style={styles.View_0_2219}>
          <Text style={styles.Text_0_2219}> MON</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_2112: {
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
  View_0_2113: {
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
  View_0_2114: {
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
  View_0_2115: {
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
  ImageBackground_0_2116: {
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
  ImageBackground_0_2122: {
    width: 13.14801025390625,
    minWidth: 13.14801025390625,
    height: 13.147994995117188,
    minHeight: 13.147994995117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40.2120361328125
  },
  ImageBackground_0_2128: {
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
  ImageBackground_0_2137: {
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
  View_0_2138: {
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
  View_I0_2138_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2138_0_2875: {
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
  View_I0_2138_0_2876: {
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
  ImageBackground_I0_2138_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_2138_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_2138_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_2138_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_2138_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_2138_0_2891: {
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
  View_I0_2138_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_2138_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2139: {
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
  View_0_2140: {
    width: 76,
    minWidth: 76,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 0
  },
  Text_0_2140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2141: {
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
  ImageBackground_I0_2141_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2142: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 687,
    minHeight: 687,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 177.699951171875
  },
  View_0_2143: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110.00001525878906,
    minHeight: 110.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_2144: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110.00001525878906,
    minHeight: 110.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2147: {
    width: 110,
    minWidth: 110,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  Text_0_2147: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2148: {
    width: 103,
    minWidth: 103,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 41.300048828125
  },
  Text_0_2148: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2149: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 73.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2150: {
    width: 85,
    minWidth: 85,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 82.300048828125
  },
  Text_0_2150: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2151: {
    width: 50,
    minWidth: 50,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.7998046875,
    top: 82.300048828125
  },
  Text_0_2151: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2152: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 244
  },
  ImageBackground_0_2153: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2156: {
    width: 44,
    minWidth: 44,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  Text_0_2156: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2157: {
    width: 110,
    minWidth: 110,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 41.300048828125
  },
  Text_0_2157: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2158: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 73.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2159: {
    width: 83,
    minWidth: 83,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 82.300048828125
  },
  Text_0_2159: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2160: {
    width: 50,
    minWidth: 50,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.7998046875,
    top: 82.300048828125
  },
  Text_0_2160: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2161: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 455
  },
  ImageBackground_0_2162: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2165: {
    width: 46,
    minWidth: 46,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  Text_0_2165: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2166: {
    width: 110,
    minWidth: 110,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 41.300048828125
  },
  Text_0_2166: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2167: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 73.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2168: {
    width: 97,
    minWidth: 97,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 82.300048828125
  },
  Text_0_2168: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2169: {
    width: 50,
    minWidth: 50,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.7998046875,
    top: 82.300048828125
  },
  Text_0_2169: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2170: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 122
  },
  ImageBackground_0_2171: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2174: {
    width: 78,
    minWidth: 78,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  Text_0_2174: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2175: {
    width: 110,
    minWidth: 110,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 41.300048828125
  },
  Text_0_2175: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2176: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 73.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2177: {
    width: 95,
    minWidth: 95,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 82.300048828125
  },
  Text_0_2177: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2178: {
    width: 50,
    minWidth: 50,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.7998046875,
    top: 82.300048828125
  },
  Text_0_2178: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2179: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 366
  },
  ImageBackground_0_2180: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2183: {
    width: 75,
    minWidth: 75,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  Text_0_2183: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2184: {
    width: 110,
    minWidth: 110,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 41.300048828125
  },
  Text_0_2184: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2185: {
    width: 37.57781982421875,
    minWidth: 37.57781982421875,
    height: 39.04852294921875,
    minHeight: 39.04852294921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284.255859375,
    top: 17.951416015625
  },
  ImageBackground_0_2186: {
    width: 29.13134765625,
    minWidth: 29.13134765625,
    height: 29.26348876953125,
    minHeight: 29.26348876953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.4462890625,
    top: 0
  },
  ImageBackground_0_2187: {
    width: 11.56561279296875,
    minWidth: 11.56561279296875,
    height: 27.94671630859375,
    minHeight: 27.94671630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.01171875,
    top: 0.959716796875
  },
  ImageBackground_0_2188: {
    width: 15.316009521484375,
    minWidth: 15.316009521484375,
    height: 15.31597900390625,
    minHeight: 15.31597900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.4833984375,
    top: 16.24951171875
  },
  ImageBackground_0_2189: {
    width: 3.345977783203125,
    minWidth: 3.345977783203125,
    height: 14.64501953125,
    minHeight: 14.64501953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.4501953125,
    top: 16.9215087890625
  },
  ImageBackground_0_2190: {
    width: 15.94000244140625,
    minWidth: 15.94000244140625,
    height: 15.94000244140625,
    minHeight: 15.94000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.4443359375,
    top: 5.861572265625
  },
  ImageBackground_0_2191: {
    width: 12.765594482421875,
    minWidth: 12.765594482421875,
    height: 15.58880615234375,
    minHeight: 15.58880615234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.6171875,
    top: 6.2135009765625
  },
  ImageBackground_0_2192: {
    width: 32.768829345703125,
    minWidth: 32.768829345703125,
    height: 31.19842529296875,
    minHeight: 31.19842529296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.892578125,
    top: 3.628173828125
  },
  ImageBackground_0_2193: {
    width: 6.608001708984375,
    minWidth: 6.608001708984375,
    height: 7.941162109375,
    minHeight: 7.941162109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.056640625,
    top: 26.8974609375
  },
  ImageBackground_0_2194: {
    width: 36.3194580078125,
    minWidth: 36.3194580078125,
    height: 35.15435791015625,
    minHeight: 35.15435791015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3.89306640625
  },
  ImageBackground_0_2195: {
    width: 36.3194580078125,
    minWidth: 36.3194580078125,
    height: 35.1553955078125,
    minHeight: 35.1553955078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3.89306640625
  },
  ImageBackground_0_2196: {
    width: 28.362030029296875,
    minWidth: 28.362030029296875,
    height: 27.35009765625,
    minHeight: 27.35009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.4931640625,
    top: 9.1573486328125
  },
  View_0_2203: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 577
  },
  ImageBackground_0_2204: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2207: {
    width: 75,
    minWidth: 75,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  Text_0_2207: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2208: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 41.300048828125
  },
  Text_0_2208: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2209: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 73.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_2210: {
    width: 85,
    minWidth: 85,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 82.300048828125
  },
  Text_0_2210: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2211: {
    width: 44,
    minWidth: 44,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283.7998046875,
    top: 82.10009765625
  },
  Text_0_2211: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2212: {
    width: 375,
    minWidth: 375,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 796,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2212_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2212_0_2895: {
    width: 375,
    minWidth: 375,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2212_0_2896: {
    width: 375,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(211, 211, 211, 1)",
    opacity: 0.00009999999747378752
  },
  ImageBackground_I0_2212_0_2897: {
    width: 134,
    height: 5,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_0_2213: {
    width: 343,
    minWidth: 343,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 137
  },
  ImageBackground_0_2214: {
    width: 343,
    minWidth: 343,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_2217: {
    width: 77,
    minWidth: 77,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2218: {
    width: 243,
    minWidth: 243,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 5
  },
  Text_0_2218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2219: {
    width: 52,
    minWidth: 52,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 5
  },
  Text_0_2219: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
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
