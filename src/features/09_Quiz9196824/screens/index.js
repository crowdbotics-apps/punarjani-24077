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
      <View style={styles.View_0_1939}>
        <View style={styles.View_0_1940} />
        <View style={styles.View_0_1941}>
          <View style={styles.View_0_1942}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1943}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1949}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_1955}
          />
        </View>
      </View>
      <View style={styles.View_0_1964}>
        <View style={styles.View_I0_1964_0_2894}>
          <View style={styles.View_I0_1964_0_2895}>
            <View style={styles.View_I0_1964_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_1964_0_2897}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1965}>
        <View style={styles.View_I0_1965_0_2874}>
          <View style={styles.View_I0_1965_0_2875} />
          <View style={styles.View_I0_1965_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_1965_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_1965_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_1965_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_1965_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_1965_0_2888}
          />
          <View style={styles.View_I0_1965_0_2891}>
            <View style={styles.View_I0_1965_0_2892}>
              <Text style={styles.Text_I0_1965_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1966}>
        <View style={styles.View_0_1967}>
          <Text style={styles.Text_0_1967}>Play Quiz</Text>
        </View>
        <View style={styles.View_0_1968}>
          <Text style={styles.Text_0_1968}>Skip</Text>
        </View>
        <View style={styles.View_0_1969}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_1969_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_1970}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d246/53f2/c286431146db4d6a350d10da32d745fd"
          }}
          style={styles.ImageBackground_0_1971}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba05/a9b5/dbb735b22eac245ae477ec1eb87469ed"
          }}
          style={styles.ImageBackground_0_1974}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48f2/9282/56c15709c8ba31d4fb18b59486cb9914"
          }}
          style={styles.ImageBackground_0_1977}
        />
        <View style={styles.View_0_1979}>
          <Text style={styles.Text_0_1979}>18 Sec</Text>
        </View>
      </View>
      <View style={styles.View_0_1980}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fed0/29aa/e84baaf3acb1a996f0fdf0cd82b9d206"
          }}
          style={styles.ImageBackground_0_1981}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bb8/6980/fc70f561201a382ef9dc7cde93e443f1"
          }}
          style={styles.ImageBackground_0_1982}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b67/eab2/5452b1ed68a3ad253f7fe8cef18934af"
          }}
          style={styles.ImageBackground_0_1983}
        />
        <View style={styles.View_0_1984}>
          <Text style={styles.Text_0_1984}>
            In 2017, which player became the leading run scorer of all tie in
            women&#39;s ODI cricket?
          </Text>
        </View>
        <View style={styles.View_0_1985}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1666/aa79/8fca4bf991763ff94a0391a3ce567f6b"
            }}
            style={styles.ImageBackground_0_1986}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf5c/00ae/378f0eca9017bb2d63de0214704039f7"
            }}
            style={styles.ImageBackground_0_1989}
          />
          <View style={styles.View_0_1992}>
            <Text style={styles.Text_0_1992}>A. Stefanie Taylor</Text>
          </View>
        </View>
        <View style={styles.View_0_1993}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21bd/3466/097a4afba3235ab05b9ca893183b1137"
            }}
            style={styles.ImageBackground_0_1994}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf5c/00ae/378f0eca9017bb2d63de0214704039f7"
            }}
            style={styles.ImageBackground_0_1997}
          />
          <View style={styles.View_0_2000}>
            <Text style={styles.Text_0_2000}>C. Suzia Betes</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b683/3339/ff4dbea0bb33a0a9ace3d0bbf5453c35"
            }}
            style={styles.ImageBackground_0_2001}
          />
        </View>
        <View style={styles.View_0_2004}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59af/5262/f23f6759286560468cc8f118bb2360ce"
            }}
            style={styles.ImageBackground_0_2005}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf5c/00ae/378f0eca9017bb2d63de0214704039f7"
            }}
            style={styles.ImageBackground_0_2008}
          />
          <View style={styles.View_0_2011}>
            <Text style={styles.Text_0_2011}>B. Mithali Raj</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a71/acfc/9ae53f3224980a8102f5ad3c7dd22bbf"
            }}
            style={styles.ImageBackground_0_2014}
          />
        </View>
        <View style={styles.View_0_2015}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1666/aa79/8fca4bf991763ff94a0391a3ce567f6b"
            }}
            style={styles.ImageBackground_0_2016}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf5c/00ae/378f0eca9017bb2d63de0214704039f7"
            }}
            style={styles.ImageBackground_0_2019}
          />
          <View style={styles.View_0_2022}>
            <Text style={styles.Text_0_2022}>D. Harmanpreet Kaur</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2023}>
        <View style={styles.View_0_2024}>
          <Text style={styles.Text_0_2024}>Question 1</Text>
        </View>
        <View style={styles.View_0_2025}>
          <Text style={styles.Text_0_2025}>/10</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a717/4972/5eb855c85a7f0a853e431b09d79c446b"
          }}
          style={styles.ImageBackground_0_2026}
        />
        <View style={styles.View_0_2027}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6c/8a4b/77c7b2491a7f954b829ec890e90362b4"
            }}
            style={styles.ImageBackground_0_2028}
          />
          <View style={styles.View_0_2030}>
            <Text style={styles.Text_0_2030}>265</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1c3/55cb/7b8f525105b4468951fc1cd7aab864ee"
            }}
            style={styles.ImageBackground_0_2033}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1939: {
    width: 375,
    minWidth: 375,
    height: 813,
    minHeight: 813,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1.0009765625,
    top: -1
  },
  View_0_1940: {
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
  View_0_1941: {
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
  View_0_1942: {
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
  ImageBackground_0_1943: {
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
  ImageBackground_0_1949: {
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
  ImageBackground_0_1955: {
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
  View_0_1964: {
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
  View_I0_1964_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1964_0_2895: {
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
  View_I0_1964_0_2896: {
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
  ImageBackground_I0_1964_0_2897: {
    width: 134,
    height: 5,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_0_1965: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: -1,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1965_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1965_0_2875: {
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
  View_I0_1965_0_2876: {
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
  ImageBackground_I0_1965_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1965_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_1965_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_1965_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_1965_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_1965_0_2891: {
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
  View_I0_1965_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_1965_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1966: {
    width: 343,
    minWidth: 343,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 52
  },
  View_0_1967: {
    width: 70,
    minWidth: 70,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 0
  },
  Text_0_1967: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1968: {
    width: 33,
    minWidth: 33,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310,
    top: 0
  },
  Text_0_1968: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1969: {
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
  ImageBackground_I0_1969_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1970: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 135
  },
  ImageBackground_0_1971: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1974: {
    width: 175,
    minWidth: 175,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  ImageBackground_0_1977: {
    width: 18.733123779296875,
    minWidth: 18.733123779296875,
    height: 18.732955932617188,
    minHeight: 18.732955932617188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.583984375,
    top: 7.8380126953125
  },
  View_0_1979: {
    width: 38,
    minWidth: 38,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 8
  },
  Text_0_1979: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1980: {
    width: 343,
    minWidth: 343,
    height: 484,
    minHeight: 484,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 277
  },
  ImageBackground_0_1981: {
    width: 283,
    minWidth: 283,
    height: 473,
    minHeight: 473,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 11
  },
  ImageBackground_0_1982: {
    width: 313,
    minWidth: 313,
    height: 473,
    minHeight: 473,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 0
  },
  ImageBackground_0_1983: {
    width: 343,
    minWidth: 343,
    height: 459,
    minHeight: 459,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1984: {
    width: 308,
    minWidth: 308,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 23
  },
  Text_0_1984: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1985: {
    width: 303,
    minWidth: 303,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 134
  },
  ImageBackground_0_1986: {
    width: 303,
    minWidth: 303,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1989: {
    width: 26,
    minWidth: 26,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260,
    top: 17
  },
  View_0_1992: {
    width: 115,
    minWidth: 115,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 20
  },
  Text_0_1992: {
    color: "rgba(152, 152, 152, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1993: {
    width: 303,
    minWidth: 303,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 294
  },
  ImageBackground_0_1994: {
    width: 303,
    minWidth: 303,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1997: {
    width: 26,
    minWidth: 26,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260,
    top: 17
  },
  View_0_2000: {
    width: 93,
    minWidth: 93,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 20
  },
  Text_0_2000: {
    color: "rgba(233, 46, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2001: {
    width: 27,
    minWidth: 27,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 259,
    top: 16
  },
  View_0_2004: {
    width: 303,
    minWidth: 303,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 214
  },
  ImageBackground_0_2005: {
    width: 303,
    minWidth: 303,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_2008: {
    width: 26,
    minWidth: 26,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260,
    top: 17
  },
  View_0_2011: {
    width: 93,
    minWidth: 93,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 20
  },
  Text_0_2011: {
    color: "rgba(106, 194, 89, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2014: {
    width: 26.666015625,
    minWidth: 26.666015625,
    height: 26.666015625,
    minHeight: 26.666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260,
    top: 17
  },
  View_0_2015: {
    width: 303,
    minWidth: 303,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 374
  },
  ImageBackground_0_2016: {
    width: 303,
    minWidth: 303,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_2019: {
    width: 26,
    minWidth: 26,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260,
    top: 17
  },
  View_0_2022: {
    width: 142,
    minWidth: 142,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 20
  },
  Text_0_2022: {
    color: "rgba(152, 152, 152, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2023: {
    width: 343,
    minWidth: 343,
    height: 52.5,
    minHeight: 52.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 196
  },
  View_0_2024: {
    width: 135,
    minWidth: 135,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_2024: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2025: {
    width: 25,
    minWidth: 25,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 11
  },
  Text_0_2025: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2026: {
    width: 341.5,
    minWidth: 341.5,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.5,
    top: 50.5
  },
  View_0_2027: {
    width: 82,
    minWidth: 82,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 261,
    top: 4
  },
  ImageBackground_0_2028: {
    width: 82,
    minWidth: 82,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2030: {
    width: 21,
    minWidth: 21,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 8
  },
  Text_0_2030: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2033: {
    width: 17.14300537109375,
    minWidth: 17.14300537109375,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.927734375,
    top: 10
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
