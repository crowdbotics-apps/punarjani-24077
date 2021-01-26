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
      <View style={styles.View_0_2691}>
        <View style={styles.View_0_2692} />
        <View style={styles.View_0_2693}>
          <View style={styles.View_0_2694}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_2695}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_2701}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_2707}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc2/42fa/6909e939e932888794ebbac489d939ad"
          }}
          style={styles.ImageBackground_0_2716}
        />
      </View>
      <View style={styles.View_0_2717}>
        <View style={styles.View_I0_2717_0_2874}>
          <View style={styles.View_I0_2717_0_2875} />
          <View style={styles.View_I0_2717_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_2717_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_2717_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_2717_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_2717_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_2717_0_2888}
          />
          <View style={styles.View_I0_2717_0_2891}>
            <View style={styles.View_I0_2717_0_2892}>
              <Text style={styles.Text_I0_2717_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2718}>
        <View style={styles.View_0_2719}>
          <Text style={styles.Text_0_2719}>Events &amp; Programs</Text>
        </View>
        <View style={styles.View_0_2720}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_2720_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_2721}>
        <View style={styles.View_0_2722}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8bc/0524/9f0ab9e456662dbabe7ffe0a2126e141"
            }}
            style={styles.ImageBackground_0_2723}
          />
          <View style={styles.View_0_2726}>
            <Text style={styles.Text_0_2726}>Sleepover Night</Text>
          </View>
          <View style={styles.View_0_2727}>
            <Text style={styles.Text_0_2727}>06 Jan 21, 09:00 AM</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472c/fbac/93ccef0e35518b4dba75706ce1ea2411"
            }}
            style={styles.ImageBackground_0_2730}
          />
          <View style={styles.View_0_2732}>
            <Text style={styles.Text_0_2732}>
              A sleepover is a great treat for kids. Many schools use such an
              event as the culminating activity of the school year.{" "}
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48e3/5202/8c2c762a207aa4af8b79753f49432e30"
            }}
            style={styles.ImageBackground_0_2733}
          />
        </View>
        <View style={styles.View_0_2735}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8bc/0524/9f0ab9e456662dbabe7ffe0a2126e141"
            }}
            style={styles.ImageBackground_0_2736}
          />
          <View style={styles.View_0_2739}>
            <Text style={styles.Text_0_2739}>Fishing Tournament</Text>
          </View>
          <View style={styles.View_0_2740}>
            <Text style={styles.Text_0_2740}>12 Jan 21, 09:00 AM</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472c/fbac/93ccef0e35518b4dba75706ce1ea2411"
            }}
            style={styles.ImageBackground_0_2743}
          />
          <View style={styles.View_0_2745}>
            <Text style={styles.Text_0_2745}>
              Silver Sands Middle School in Port Orange, Florida, offers many
              special events, but one of the most unique ones is a springtime...
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48e3/5202/8c2c762a207aa4af8b79753f49432e30"
            }}
            style={styles.ImageBackground_0_2746}
          />
        </View>
        <View style={styles.View_0_2748}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8bc/0524/9f0ab9e456662dbabe7ffe0a2126e141"
            }}
            style={styles.ImageBackground_0_2749}
          />
          <View style={styles.View_0_2752}>
            <Text style={styles.Text_0_2752}>
              Rhyme Time: A Night of Poetry
            </Text>
          </View>
          <View style={styles.View_0_2753}>
            <Text style={styles.Text_0_2753}>24 Jan 21, 09:00 AM</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472c/fbac/93ccef0e35518b4dba75706ce1ea2411"
            }}
            style={styles.ImageBackground_0_2756}
          />
          <View style={styles.View_0_2758}>
            <Text style={styles.Text_0_2758}>
              April is also National Poetry Month. Now there is a great theme
              for a fun family night! Combine poetry readings by students...
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48e3/5202/8c2c762a207aa4af8b79753f49432e30"
            }}
            style={styles.ImageBackground_0_2759}
          />
        </View>
      </View>
      <View style={styles.View_0_2761}>
        <View style={styles.View_I0_2761_0_2894}>
          <View style={styles.View_I0_2761_0_2895}>
            <View style={styles.View_I0_2761_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_2761_0_2897}
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
  View_0_2691: {
    width: 375,
    minWidth: 375,
    height: 813,
    minHeight: 813,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.000244140625
  },
  View_0_2692: {
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
  View_0_2693: {
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
  View_0_2694: {
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
  ImageBackground_0_2695: {
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
  ImageBackground_0_2701: {
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
  ImageBackground_0_2707: {
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
  ImageBackground_0_2716: {
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
  View_0_2717: {
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
  View_I0_2717_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2717_0_2875: {
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
  View_I0_2717_0_2876: {
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
  ImageBackground_I0_2717_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_2717_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_2717_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_2717_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.334716796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_2717_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_2717_0_2891: {
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
  View_I0_2717_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_2717_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2718: {
    width: 168,
    minWidth: 168,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 53
  },
  View_0_2719: {
    width: 141,
    minWidth: 141,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 0
  },
  Text_0_2719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2720: {
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
  ImageBackground_I0_2720_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2721: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 414,
    minHeight: 414,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 128.699951171875
  },
  View_0_2722: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 130.00001525878906,
    minHeight: 130.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_2723: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 130.00001525878906,
    minHeight: 130.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2726: {
    width: 97,
    minWidth: 97,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 12.300048828125
  },
  Text_0_2726: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2727: {
    width: 109,
    minWidth: 109,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114,
    top: 41.300048828125
  },
  Text_0_2727: {
    color: "rgba(103, 137, 202, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2730: {
    width: 12.600006103515625,
    minWidth: 12.600006103515625,
    height: 12.599990844726562,
    minHeight: 12.599990844726562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.2001953125,
    top: 44.1279296875
  },
  View_0_2732: {
    width: 225.99998474121094,
    minWidth: 225.99998474121094,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95,
    top: 64.300048828125
  },
  Text_0_2732: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2733: {
    width: 75,
    minWidth: 75,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 42.300048828125
  },
  View_0_2735: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 142
  },
  ImageBackground_0_2736: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2739: {
    width: 121,
    minWidth: 121,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 12.300048828125
  },
  Text_0_2739: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2740: {
    width: 109,
    minWidth: 109,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114,
    top: 41.300048828125
  },
  Text_0_2740: {
    color: "rgba(103, 137, 202, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2743: {
    width: 12.600006103515625,
    minWidth: 12.600006103515625,
    height: 12.600006103515625,
    minHeight: 12.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.2001953125,
    top: 44.1279296875
  },
  View_0_2745: {
    width: 239.00001525878906,
    minWidth: 239.00001525878906,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95,
    top: 64.300048828125
  },
  Text_0_2745: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2746: {
    width: 75,
    minWidth: 75,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 42.300048828125
  },
  View_0_2748: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 284
  },
  ImageBackground_0_2749: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2752: {
    width: 183,
    minWidth: 183,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 12.300048828125
  },
  Text_0_2752: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2753: {
    width: 109,
    minWidth: 109,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114,
    top: 41.300048828125
  },
  Text_0_2753: {
    color: "rgba(103, 137, 202, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2756: {
    width: 12.600006103515625,
    minWidth: 12.600006103515625,
    height: 12.600006103515625,
    minHeight: 12.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.2001953125,
    top: 44.1279296875
  },
  View_0_2758: {
    width: 240.99998474121094,
    minWidth: 240.99998474121094,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95,
    top: 64.300048828125
  },
  Text_0_2758: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2759: {
    width: 75,
    minWidth: 75,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 42.300048828125
  },
  View_0_2761: {
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
  View_I0_2761_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2761_0_2895: {
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
  View_I0_2761_0_2896: {
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
  ImageBackground_I0_2761_0_2897: {
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
