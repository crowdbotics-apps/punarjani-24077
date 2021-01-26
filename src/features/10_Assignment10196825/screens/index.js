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
      <View style={styles.View_0_2039} />
      <View style={styles.View_0_2040}>
        <View style={styles.View_0_2041} />
        <View style={styles.View_0_2042}>
          <View style={styles.View_0_2043}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_2044}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_2050}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_2056}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc2/42fa/6909e939e932888794ebbac489d939ad"
          }}
          style={styles.ImageBackground_0_2065}
        />
      </View>
      <View style={styles.View_0_2066}>
        <View style={styles.View_I0_2066_0_2894}>
          <View style={styles.View_I0_2066_0_2895}>
            <View style={styles.View_I0_2066_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_2066_0_2897}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_2067}>
        <View style={styles.View_I0_2067_0_2874}>
          <View style={styles.View_I0_2067_0_2875} />
          <View style={styles.View_I0_2067_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_2067_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_2067_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_2067_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_2067_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_2067_0_2888}
          />
          <View style={styles.View_I0_2067_0_2891}>
            <View style={styles.View_I0_2067_0_2892}>
              <Text style={styles.Text_I0_2067_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2068}>
        <View style={styles.View_0_2069}>
          <Text style={styles.Text_0_2069}>Assignment</Text>
        </View>
        <View style={styles.View_0_2070}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_2070_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_2071}>
        <View style={styles.View_0_2072}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9bf/580d/3a3a19f4c7aa7b74876a3fb6f3d457db"
            }}
            style={styles.ImageBackground_0_2073}
          />
          <View style={styles.View_0_2076}>
            <Text style={styles.Text_0_2076}>Surface Areas and Volumes</Text>
          </View>
          <View style={styles.View_0_2077}>
            <Text style={styles.Text_0_2077}>Assign Date</Text>
          </View>
          <View style={styles.View_0_2078}>
            <Text style={styles.Text_0_2078}>Last Submission Date</Text>
          </View>
          <View style={styles.View_0_2079}>
            <Text style={styles.Text_0_2079}>10 Nov 20</Text>
          </View>
          <View style={styles.View_0_2080}>
            <Text style={styles.Text_0_2080}>10 Dec 20</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7232/cb72/4da961a524eb8349a35df0bfa5eaacd3"
            }}
            style={styles.ImageBackground_0_2081}
          />
          <View style={styles.View_0_2082}>
            <Text style={styles.Text_0_2082}>Mathematics</Text>
          </View>
          <View style={styles.View_0_2083}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d59/0d07/0f6a7cd115acc11741ae138ceb9e73bf"
              }}
              style={styles.ImageBackground_0_2084}
            />
            <View style={styles.View_0_2085}>
              <Text style={styles.Text_0_2085}>TO BE SUBMITTED</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_2086}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a08/7a86/763126dbe95c560a9d3b84a6bbd8aa83"
            }}
            style={styles.ImageBackground_0_2087}
          />
          <View style={styles.View_0_2090}>
            <Text style={styles.Text_0_2090}>My Bestfriend Essay</Text>
          </View>
          <View style={styles.View_0_2091}>
            <Text style={styles.Text_0_2091}>Assign Date</Text>
          </View>
          <View style={styles.View_0_2092}>
            <Text style={styles.Text_0_2092}>Last Submission Date</Text>
          </View>
          <View style={styles.View_0_2093}>
            <Text style={styles.Text_0_2093}>10 Sep 20</Text>
          </View>
          <View style={styles.View_0_2094}>
            <Text style={styles.Text_0_2094}>30 Sep 20</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2962/88cd/7aa048292117db53914821495d09d2c9"
            }}
            style={styles.ImageBackground_0_2095}
          />
          <View style={styles.View_0_2096}>
            <Text style={styles.Text_0_2096}>English</Text>
          </View>
        </View>
        <View style={styles.View_0_2097}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9bf/580d/3a3a19f4c7aa7b74876a3fb6f3d457db"
            }}
            style={styles.ImageBackground_0_2098}
          />
          <View style={styles.View_0_2101}>
            <Text style={styles.Text_0_2101}>Structure of Atoms</Text>
          </View>
          <View style={styles.View_0_2102}>
            <Text style={styles.Text_0_2102}>Assign Date</Text>
          </View>
          <View style={styles.View_0_2103}>
            <Text style={styles.Text_0_2103}>Last Submission Date</Text>
          </View>
          <View style={styles.View_0_2104}>
            <Text style={styles.Text_0_2104}>10 Oct 20</Text>
          </View>
          <View style={styles.View_0_2105}>
            <Text style={styles.Text_0_2105}>30 Oct 20</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2962/88cd/7aa048292117db53914821495d09d2c9"
            }}
            style={styles.ImageBackground_0_2106}
          />
          <View style={styles.View_0_2107}>
            <Text style={styles.Text_0_2107}>Science</Text>
          </View>
          <View style={styles.View_0_2108}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13ae/38a0/e23e41f9f702d3c90c7f42212c8256b2"
              }}
              style={styles.ImageBackground_0_2109}
            />
            <View style={styles.View_0_2110}>
              <Text style={styles.Text_0_2110}>TO BE SUBMITTED</Text>
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
  View_0_2039: {
    width: 375,
    minWidth: 375,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_2040: {
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
  View_0_2041: {
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
  View_0_2042: {
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
  View_0_2043: {
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
  ImageBackground_0_2044: {
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
  ImageBackground_0_2050: {
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
  ImageBackground_0_2056: {
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
  ImageBackground_0_2065: {
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
  View_0_2066: {
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
  View_I0_2066_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2066_0_2895: {
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
  View_I0_2066_0_2896: {
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
  ImageBackground_I0_2066_0_2897: {
    width: 134,
    height: 5,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_0_2067: {
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
  View_I0_2067_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2067_0_2875: {
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
  View_I0_2067_0_2876: {
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
  ImageBackground_I0_2067_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_2067_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_2067_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_2067_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_2067_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_2067_0_2891: {
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
  View_I0_2067_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_2067_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2068: {
    width: 116,
    minWidth: 116,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 53
  },
  View_0_2069: {
    width: 89,
    minWidth: 89,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 0
  },
  Text_0_2069: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2070: {
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
  ImageBackground_I0_2070_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2071: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 531,
    minHeight: 531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 128.699951171875
  },
  View_0_2072: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 186.00001525878906,
    minHeight: 186.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_2073: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 186.00001525878906,
    minHeight: 186.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2076: {
    width: 162,
    minWidth: 162,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 44.300048828125
  },
  Text_0_2076: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2077: {
    width: 68,
    minWidth: 68,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 72.300048828125
  },
  Text_0_2077: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2078: {
    width: 126,
    minWidth: 126,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 100.300048828125
  },
  Text_0_2078: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2079: {
    width: 59,
    minWidth: 59,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 72.300048828125
  },
  Text_0_2079: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2080: {
    width: 57,
    minWidth: 57,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 100.300048828125
  },
  Text_0_2080: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2081: {
    width: 98,
    minWidth: 98,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  View_0_2082: {
    width: 78,
    minWidth: 78,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 15.300048828125
  },
  Text_0_2082: {
    color: "rgba(103, 137, 202, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2083: {
    width: 313,
    minWidth: 313,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 132.300048828125
  },
  ImageBackground_0_2084: {
    width: 313,
    minWidth: 313,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2085: {
    width: 110,
    minWidth: 110,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101.0712890625,
    top: 9.5689697265625
  },
  Text_0_2085: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2086: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 135,
    minHeight: 135,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 396
  },
  ImageBackground_0_2087: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 135,
    minHeight: 135,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2090: {
    width: 120,
    minWidth: 120,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 44.300048828125
  },
  Text_0_2090: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2091: {
    width: 68,
    minWidth: 68,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 72.300048828125
  },
  Text_0_2091: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2092: {
    width: 126,
    minWidth: 126,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 100.300048828125
  },
  Text_0_2092: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2093: {
    width: 57,
    minWidth: 57,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271,
    top: 70.300048828125
  },
  Text_0_2093: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2094: {
    width: 57,
    minWidth: 57,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271,
    top: 98.300048828125
  },
  Text_0_2094: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2095: {
    width: 66,
    minWidth: 66,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  View_0_2096: {
    width: 44,
    minWidth: 44,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 15.300048828125
  },
  Text_0_2096: {
    color: "rgba(103, 137, 202, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2097: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 186,
    minHeight: 186,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 198
  },
  ImageBackground_0_2098: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 186,
    minHeight: 186,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2101: {
    width: 113,
    minWidth: 113,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 44.300048828125
  },
  Text_0_2101: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2102: {
    width: 68,
    minWidth: 68,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 72.300048828125
  },
  Text_0_2102: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2103: {
    width: 126,
    minWidth: 126,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 100.300048828125
  },
  Text_0_2103: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2104: {
    width: 56,
    minWidth: 56,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 72.300048828125
  },
  Text_0_2104: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2105: {
    width: 56,
    minWidth: 56,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 100.300048828125
  },
  Text_0_2105: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2106: {
    width: 66,
    minWidth: 66,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  View_0_2107: {
    width: 46,
    minWidth: 46,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 15.300048828125
  },
  Text_0_2107: {
    color: "rgba(103, 137, 202, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2108: {
    width: 313,
    minWidth: 313,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 132.300048828125
  },
  ImageBackground_0_2109: {
    width: 313,
    minWidth: 313,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2110: {
    width: 110,
    minWidth: 110,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101.0712890625,
    top: 9.5689697265625
  },
  Text_0_2110: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
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
