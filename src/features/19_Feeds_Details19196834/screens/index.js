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
      <View style={styles.View_0_2763}>
        <View style={styles.View_0_2764} />
        <View style={styles.View_0_2765} />
      </View>
      <View style={styles.View_0_2766}>
        <View style={styles.View_0_2767} />
        <View style={styles.View_0_2768}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_2768_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_2769}>
        <View style={styles.View_I0_2769_0_2874}>
          <View style={styles.View_I0_2769_0_2875} />
          <View style={styles.View_I0_2769_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_2769_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_2769_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_2769_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_2769_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_2769_0_2888}
          />
          <View style={styles.View_I0_2769_0_2891}>
            <View style={styles.View_I0_2769_0_2892}>
              <Text style={styles.Text_I0_2769_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2770}>
        <View style={styles.View_0_2771}>
          <Text style={styles.Text_0_2771}>Rhyme Time: A Night of Poetry</Text>
        </View>
        <View style={styles.View_0_2772}>
          <Text style={styles.Text_0_2772}>
            April is also National Poetry Month. Now there is a great theme for
            a fun family night! Combine poetry readings by students and adults.
            Invite guest readers and poets. Sell a book of student poems as a
            fund-raiser. Display portfolios of students&#39; best poetry.
            Present your oldest students in a poetry slam competition, like
            teacher Brenda Dyck staged with her students (see the Education
            World article, A Poetry Slam Cures Midwinter Blahs). For more ideas
            for great poetry writing activities, don&#39;t miss Education
            World&#39;s special Poetry Month archive.
          </Text>
        </View>
        <View style={styles.View_0_2773}>
          <Text style={styles.Text_0_2773}>12 Jan 21, 09:00 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472c/fbac/93ccef0e35518b4dba75706ce1ea2411"
          }}
          style={styles.ImageBackground_0_2776}
        />
      </View>
      <View style={styles.View_0_2778}>
        <View style={styles.View_I0_2778_0_2894}>
          <View style={styles.View_I0_2778_0_2895}>
            <View style={styles.View_I0_2778_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_2778_0_2897}
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
  View_0_2763: {
    width: 375,
    minWidth: 375,
    height: 320,
    minHeight: 320,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2764: {
    width: 375,
    minWidth: 375,
    height: 320,
    minHeight: 320,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_2765: {
    width: 375,
    minWidth: 375,
    height: 320,
    minHeight: 320,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_2766: {
    width: 375,
    minWidth: 375,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2767: {
    width: 375,
    minWidth: 375,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.00009999999747378752
  },
  View_0_2768: {
    width: 12.000144958496094,
    minWidth: 12.000144958496094,
    height: 20.499969482421875,
    minHeight: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 55.49951171875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2768_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_2769: {
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
  View_I0_2769_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2769_0_2875: {
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
  View_I0_2769_0_2876: {
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
  ImageBackground_I0_2769_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_2769_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_2769_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_2769_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.334716796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_2769_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_2769_0_2891: {
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
  View_I0_2769_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_2769_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2770: {
    width: 343,
    minWidth: 343,
    height: 280,
    minHeight: 280,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 338
  },
  View_0_2771: {
    width: 209,
    minWidth: 209,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28
  },
  Text_0_2771: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2772: {
    width: 343,
    minWidth: 343,
    minHeight: 220,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 60
  },
  Text_0_2772: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2773: {
    width: 109,
    minWidth: 109,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 0
  },
  Text_0_2773: {
    color: "rgba(103, 137, 202, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2776: {
    width: 12.599998474121094,
    minWidth: 12.599998474121094,
    height: 12.600006103515625,
    minHeight: 12.600006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.2001953125,
    top: 2.828125
  },
  View_0_2778: {
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
  View_I0_2778_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_2778_0_2895: {
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
  View_I0_2778_0_2896: {
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
  ImageBackground_I0_2778_0_2897: {
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
