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
      <View style={styles.View_0_2780}>
        <View style={styles.View_0_2781} />
        <View style={styles.View_0_2782}>
          <View style={styles.View_0_2783}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_2784}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_2790}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_2796}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc2/42fa/6909e939e932888794ebbac489d939ad"
          }}
          style={styles.ImageBackground_0_2805}
        />
      </View>
      <View style={styles.View_0_2806}>
        <View style={styles.View_I0_2806_0_2874}>
          <View style={styles.View_I0_2806_0_2875} />
          <View style={styles.View_I0_2806_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_2806_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_2806_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_2806_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_2806_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_2806_0_2888}
          />
          <View style={styles.View_I0_2806_0_2891}>
            <View style={styles.View_I0_2806_0_2892}>
              <Text style={styles.Text_I0_2806_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2807}>
        <View style={styles.View_0_2808}>
          <Text style={styles.Text_0_2808}>Support</Text>
        </View>
        <View style={styles.View_0_2809}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_2809_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_2810}>
        <View style={styles.View_0_2811}>
          <Text style={styles.Text_0_2811}>Get Support</Text>
        </View>
        <View style={styles.View_0_2812}>
          <Text style={styles.Text_0_2812}>
            For any support request regards your orders or deliveries please
            feel free to speak with us at below.
          </Text>
        </View>
        <View style={styles.View_0_2813}>
          <Text style={styles.Text_0_2813}>
            Call us - +91 7838XXXXXX Mail us - syalfreelance@gmail.com
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8b9/108d/98bdf98decb21c225ab51b99ef15bda8"
          }}
          style={styles.ImageBackground_0_2814}
        />
        <View style={styles.View_0_2815}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc29/5b89/39e037a539b133200078195d42bca986"
            }}
            style={styles.ImageBackground_0_2816}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a91/91c5/7d125eacba311f500a809a2a746e25f4"
            }}
            style={styles.ImageBackground_0_2817}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ba4/09cc/b2834aff481c43224f290c0427962527"
            }}
            style={styles.ImageBackground_0_2818}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc18/f75b/58886e9c61de382ecf31f20796b675bf"
            }}
            style={styles.ImageBackground_0_2819}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f71/917b/3b21bc80f273e8cb80d5d14a354fd85f"
            }}
            style={styles.ImageBackground_0_2820}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92f6/5395/6c19ffc1297718ae6ee5fbd1536cc4d1"
            }}
            style={styles.ImageBackground_0_2821}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2661/7941/689d16fed83ae6692e79fddb6f20f493"
            }}
            style={styles.ImageBackground_0_2822}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/579a/64b6/eb1227b330124ed267c0e33c2cb3af43"
            }}
            style={styles.ImageBackground_0_2823}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92f6/610d/557683c3da2c278ad98e19cef3a999e5"
            }}
            style={styles.ImageBackground_0_2824}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fff/6028/ab37329b887946b3b2255f0e4f634dd6"
            }}
            style={styles.ImageBackground_0_2825}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ee3/e3ed/cb42a4b6c2af44d2eec6dd6d2de2a9ec"
            }}
            style={styles.ImageBackground_0_2826}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/294d/5d83/602a36117af4f42efb8dd51243eb90da"
            }}
            style={styles.ImageBackground_0_2827}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fd8/c193/8e610758a59cc98f7781fafe4eb0b9cc"
            }}
            style={styles.ImageBackground_0_2828}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8a7/180c/5ff6adf8f186897360b525091bb11d84"
            }}
            style={styles.ImageBackground_0_2829}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f21/b1fa/de48b9ecfb730353089da81ba1f9b110"
            }}
            style={styles.ImageBackground_0_2830}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57dd/476a/431d7ff8b0b722658aa50d1dc0c2216d"
            }}
            style={styles.ImageBackground_0_2831}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8a7/180c/5ff6adf8f186897360b525091bb11d84"
            }}
            style={styles.ImageBackground_0_2832}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea12/7fdf/62102c8b1963e75f56f1d2d47b609d73"
            }}
            style={styles.ImageBackground_0_2833}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5d3/e783/a613efadd46c3be481c66c44c30c5006"
            }}
            style={styles.ImageBackground_0_2834}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e89/7743/9c1323389d1fa0e5e11345ef6b73e69f"
            }}
            style={styles.ImageBackground_0_2835}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d6b/d430/a94509d1adea6feb7befe7286aa4e7cb"
            }}
            style={styles.ImageBackground_0_2836}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c1f/1c50/0708ac36296d64cc422878d974e63f2e"
            }}
            style={styles.ImageBackground_0_2837}
          />
          <View style={styles.View_0_2838}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/600f/4a81/95cad20506ddefd51829f5e7cb1f8a15"
              }}
              style={styles.ImageBackground_0_2839}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5366/b3ef/18e46e8c0c9a73b1a36262b2a7aa7311"
              }}
              style={styles.ImageBackground_0_2840}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19b6/631f/73b68c01fe2960eee8041907ebbe71e4"
              }}
              style={styles.ImageBackground_0_2841}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19b6/631f/73b68c01fe2960eee8041907ebbe71e4"
              }}
              style={styles.ImageBackground_0_2842}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3b8/48d3/b729ad1c720845cab3d4a3f5689463d9"
              }}
              style={styles.ImageBackground_0_2843}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ceb/ee98/a867d860c355b2d3956ae6b2af1d7dab"
              }}
              style={styles.ImageBackground_0_2844}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e51/ab62/7025d7702807f184032f799b0dd59407"
              }}
              style={styles.ImageBackground_0_2845}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae5/3264/34c4a34f1afe811400657a06980c11e3"
              }}
              style={styles.ImageBackground_0_2848}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_2854}>
        <View style={styles.View_I0_2854_0_2894}>
          <View style={styles.View_I0_2854_0_2895}>
            <View style={styles.View_I0_2854_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_2854_0_2897}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_2780: {
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
  View_0_2781: {
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
  View_0_2782: {
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
  View_0_2783: {
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
  ImageBackground_0_2784: {
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
  ImageBackground_0_2790: {
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
  ImageBackground_0_2796: {
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
  ImageBackground_0_2805: {
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
  View_0_2806: {
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
  View_I0_2806_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2806_0_2875: {
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
  View_I0_2806_0_2876: {
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
  ImageBackground_I0_2806_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_2806_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_2806_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_2806_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.334716796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_2806_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_2806_0_2891: {
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
  View_I0_2806_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_2806_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2807: {
    width: 88.9990234375,
    minWidth: 88.9990234375,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.0009765625,
    top: 53
  },
  View_0_2808: {
    width: 62,
    minWidth: 62,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.9990234375,
    top: 0
  },
  Text_0_2808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2809: {
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
  ImageBackground_I0_2809_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2810: {
    width: 277,
    minWidth: 277,
    height: 482.364501953125,
    minHeight: 482.364501953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.3740234375,
    top: 242.035400390625
  },
  View_0_2811: {
    width: 122,
    minWidth: 122,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80.4228515625,
    top: 216.3525390625
  },
  Text_0_2811: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2812: {
    width: 277,
    minWidth: 277,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 270.058349609375
  },
  Text_0_2812: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2813: {
    width: 230,
    minWidth: 230,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 442.364501953125
  },
  Text_0_2813: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2814: {
    width: 171.20521545410156,
    minWidth: 171.20521545410156,
    height: 176.2606658935547,
    minHeight: 176.2606658935547,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.6240234375,
    top: 0
  },
  View_0_2815: {
    width: 161.81503295898438,
    minWidth: 161.81503295898438,
    height: 170.47755432128906,
    minHeight: 170.47755432128906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.4296875,
    top: 0.00146484375
  },
  ImageBackground_0_2816: {
    width: 155.88201904296875,
    minWidth: 155.88201904296875,
    height: 66.29000854492188,
    minHeight: 66.29000854492188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.9677734375,
    top: 101.169921875
  },
  ImageBackground_0_2817: {
    width: 125.28602600097656,
    minWidth: 125.28602600097656,
    height: 66.18597412109375,
    minHeight: 66.18597412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.9677734375,
    top: 101.27294921875
  },
  ImageBackground_0_2818: {
    width: 23.542007446289062,
    minWidth: 23.542007446289062,
    height: 24.510009765625,
    minHeight: 24.510009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69.134765625,
    top: 109.803955078125
  },
  ImageBackground_0_2819: {
    width: 39.04301452636719,
    minWidth: 39.04301452636719,
    height: 24.670989990234375,
    minHeight: 24.670989990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.5263671875,
    top: 101.27490234375
  },
  ImageBackground_0_2820: {
    width: 39.04301452636719,
    minWidth: 39.04301452636719,
    height: 24.670989990234375,
    minHeight: 24.670989990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82.2451171875,
    top: 101.27490234375
  },
  ImageBackground_0_2821: {
    width: 24.659988403320312,
    minWidth: 24.659988403320312,
    height: 18.699981689453125,
    minHeight: 18.699981689453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82.2470703125,
    top: 107.258056640625
  },
  ImageBackground_0_2822: {
    width: 11.772003173828125,
    minWidth: 11.772003173828125,
    height: 22.8170166015625,
    minHeight: 22.8170166015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80.9072265625,
    top: 111.4970703125
  },
  ImageBackground_0_2823: {
    width: 71.16299438476562,
    minWidth: 71.16299438476562,
    height: 93.30648803710938,
    minHeight: 93.30648803710938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.326171875,
    top: 20.77197265625
  },
  ImageBackground_0_2824: {
    width: 55.1820068359375,
    minWidth: 55.1820068359375,
    height: 92.37591552734375,
    minHeight: 92.37591552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.326171875,
    top: 20.77197265625
  },
  ImageBackground_0_2825: {
    width: 5.94000244140625,
    minWidth: 5.94000244140625,
    height: 27.41357421875,
    minHeight: 27.41357421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.322265625,
    top: 140.04150390625
  },
  ImageBackground_0_2826: {
    width: 21.428009033203125,
    minWidth: 21.428009033203125,
    height: 33.144989013671875,
    minHeight: 33.144989013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70.193359375,
    top: 134.31396484375
  },
  ImageBackground_0_2827: {
    width: 18.644134521484375,
    minWidth: 18.644134521484375,
    height: 9.662872314453125,
    minHeight: 9.662872314453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.8828125,
    top: 58.93798828125
  },
  ImageBackground_0_2828: {
    width: 18.750808715820312,
    minWidth: 18.750808715820312,
    height: 9.662322998046875,
    minHeight: 9.662322998046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 89.2880859375,
    top: 58.9384765625
  },
  ImageBackground_0_2829: {
    width: 12.899993896484375,
    minWidth: 12.899993896484375,
    height: 26.71197509765625,
    minHeight: 26.71197509765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.423828125,
    top: 55.365966796875
  },
  ImageBackground_0_2830: {
    width: 73.40231323242188,
    minWidth: 73.40231323242188,
    height: 51.13279724121094,
    minHeight: 51.13279724121094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.6767578125,
    top: 10.773193359375
  },
  ImageBackground_0_2831: {
    width: 16.800010681152344,
    minWidth: 16.800010681152344,
    height: 33.600006103515625,
    minHeight: 33.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.5703125,
    top: 51.922119140625
  },
  ImageBackground_0_2832: {
    width: 12.899993896484375,
    minWidth: 12.899993896484375,
    height: 26.712005615234375,
    minHeight: 26.712005615234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 116.48828125,
    top: 55.365966796875
  },
  ImageBackground_0_2833: {
    width: 16.800003051757812,
    minWidth: 16.800003051757812,
    height: 33.600006103515625,
    minHeight: 33.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125.4453125,
    top: 51.923095703125
  },
  ImageBackground_0_2834: {
    width: 45.24420166015625,
    minWidth: 45.24420166015625,
    height: 19.91845703125,
    minHeight: 19.91845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.947265625,
    top: 79.16552734375
  },
  ImageBackground_0_2835: {
    width: 11.711999893188477,
    minWidth: 11.711999893188477,
    height: 11.711999893188477,
    minHeight: 11.711999893188477,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75.05078125,
    top: 90.260986328125
  },
  ImageBackground_0_2836: {
    width: 10.718002319335938,
    minWidth: 10.718002319335938,
    height: 33.144989013671875,
    minHeight: 33.144989013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70.193359375,
    top: 134.31396484375
  },
  ImageBackground_0_2837: {
    width: 63.23204040527344,
    minWidth: 63.23204040527344,
    height: 45.57794189453125,
    minHeight: 45.57794189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.84375,
    top: 10.77294921875
  },
  View_0_2838: {
    width: 161.81503295898438,
    minWidth: 161.81503295898438,
    height: 170.47755432128906,
    minHeight: 170.47755432128906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_2839: {
    width: 6.4109039306640625,
    minWidth: 6.4109039306640625,
    height: 6.4586181640625,
    minHeight: 6.4586181640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138.4677734375,
    top: 119.660888671875
  },
  ImageBackground_0_2840: {
    width: 16.229736328125,
    minWidth: 16.229736328125,
    height: 41.4453125,
    minHeight: 41.4453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 145.5849609375,
    top: 128.94873046875
  },
  ImageBackground_0_2841: {
    width: 5.936004638671875,
    minWidth: 5.936004638671875,
    height: 30.490570068359375,
    minHeight: 30.490570068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124.546875,
    top: 139.987060546875
  },
  ImageBackground_0_2842: {
    width: 5.936004638671875,
    minWidth: 5.936004638671875,
    height: 30.490447998046875,
    minHeight: 30.490447998046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.326171875,
    top: 139.987060546875
  },
  ImageBackground_0_2843: {
    width: 18.641571044921875,
    minWidth: 18.641571044921875,
    height: 9.661834716796875,
    minHeight: 9.661834716796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.8828125,
    top: 58.93896484375
  },
  ImageBackground_0_2844: {
    width: 18.644134521484375,
    minWidth: 18.644134521484375,
    height: 9.661865234375,
    minHeight: 9.661865234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 89.28515625,
    top: 58.93798828125
  },
  ImageBackground_0_2845: {
    width: 6.6612091064453125,
    minWidth: 6.6612091064453125,
    height: 6.3102264404296875,
    minHeight: 6.3102264404296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.8203125,
    top: 11.84619140625
  },
  ImageBackground_0_2848: {
    width: 145.20703125,
    minWidth: 145.20703125,
    height: 170.42857360839844,
    minHeight: 170.42857360839844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2854: {
    width: 375,
    minWidth: 375,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 797,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2854_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2854_0_2895: {
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
  View_I0_2854_0_2896: {
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
  ImageBackground_I0_2854_0_2897: {
    width: 134,
    height: 5,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
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
