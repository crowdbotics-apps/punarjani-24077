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
      <View style={styles.View_0_1890} />
      <View style={styles.View_0_1891}>
        <View style={styles.View_0_1892} />
        <View style={styles.View_0_1893}>
          <View style={styles.View_0_1894}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1895}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1901}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_1907}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc2/42fa/6909e939e932888794ebbac489d939ad"
          }}
          style={styles.ImageBackground_0_1916}
        />
      </View>
      <View style={styles.View_0_1917}>
        <View style={styles.View_I0_1917_0_2894}>
          <View style={styles.View_I0_1917_0_2895}>
            <View style={styles.View_I0_1917_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_1917_0_2897}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1918}>
        <View style={styles.View_I0_1918_0_2874}>
          <View style={styles.View_I0_1918_0_2875} />
          <View style={styles.View_I0_1918_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_1918_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_1918_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_1918_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_1918_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_1918_0_2888}
          />
          <View style={styles.View_I0_1918_0_2891}>
            <View style={styles.View_I0_1918_0_2892}>
              <Text style={styles.Text_I0_1918_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1919}>
        <View style={styles.View_0_1920}>
          <Text style={styles.Text_0_1920}>Pay Online</Text>
        </View>
        <View style={styles.View_0_1921}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_1921_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_1922}>
        <View style={styles.View_0_1923}>
          <View style={styles.View_0_1924}>
            <Text style={styles.Text_0_1924}>01 Feb 2020</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7851/b23f/79c0f2c7353eacd5438368023f23b438"
            }}
            style={styles.ImageBackground_0_1925}
          />
          <View style={styles.View_0_1926}>
            <Text style={styles.Text_0_1926}>Date</Text>
          </View>
          <View style={styles.View_0_1927}>
            <View style={styles.View_I0_1927_0_3154}>
              <View style={styles.View_I0_1927_0_3155}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1927_0_3156}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1927_0_3157}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1927_0_3158}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1927_0_3159}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1927_0_3160}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1927_0_3161}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8348/b111/4af30476c1dafd7bdff59bbd8e942f6d"
                  }}
                  style={styles.ImageBackground_I0_1927_0_3164}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25fd/42b6/f32a49befb42a611fb13f2c15437cc32"
                  }}
                  style={styles.ImageBackground_I0_1927_0_3165}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25fd/42b6/f32a49befb42a611fb13f2c15437cc32"
                  }}
                  style={styles.ImageBackground_I0_1927_0_3166}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1928}>
          <View style={styles.View_0_1929}>
            <Text style={styles.Text_0_1929}>28 Feb 2020</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7851/b23f/79c0f2c7353eacd5438368023f23b438"
            }}
            style={styles.ImageBackground_0_1930}
          />
          <View style={styles.View_0_1931}>
            <Text style={styles.Text_0_1931}>Period</Text>
          </View>
          <View style={styles.View_0_1932}>
            <View style={styles.View_I0_1932_0_3154}>
              <View style={styles.View_I0_1932_0_3155}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1932_0_3156}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1932_0_3157}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1932_0_3158}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1932_0_3159}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1932_0_3160}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/723b/6e4989aab70fba58b0d3576b9367619a"
                  }}
                  style={styles.ImageBackground_I0_1932_0_3161}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8348/b111/4af30476c1dafd7bdff59bbd8e942f6d"
                  }}
                  style={styles.ImageBackground_I0_1932_0_3164}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25fd/42b6/f32a49befb42a611fb13f2c15437cc32"
                  }}
                  style={styles.ImageBackground_I0_1932_0_3165}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25fd/42b6/f32a49befb42a611fb13f2c15437cc32"
                  }}
                  style={styles.ImageBackground_I0_1932_0_3166}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1933}>
          <View style={styles.View_0_1934}>
            <Text style={styles.Text_0_1934}>₹999</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7851/b23f/79c0f2c7353eacd5438368023f23b438"
            }}
            style={styles.ImageBackground_0_1935}
          />
          <View style={styles.View_0_1936}>
            <Text style={styles.Text_0_1936}>Total Fees</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1937}>
        <View style={styles.View_I0_1937_0_3110}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcf5/894e/e106e2b3c540f3cc2435cb07e31ae3cf"
            }}
            style={styles.ImageBackground_I0_1937_0_3111}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c3/757e/b6a09ff370f26c263ad2ddfde82fb498"
            }}
            style={styles.ImageBackground_I0_1937_0_3112}
          />
          <View style={styles.View_I0_1937_0_3113}>
            <Text style={styles.Text_I0_1937_0_3113}>PAY NOW</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1890: {
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
  View_0_1891: {
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
  View_0_1892: {
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
  View_0_1893: {
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
  View_0_1894: {
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
  ImageBackground_0_1895: {
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
  ImageBackground_0_1901: {
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
  ImageBackground_0_1907: {
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
  ImageBackground_0_1916: {
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
  View_0_1917: {
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
  View_I0_1917_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1917_0_2895: {
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
  View_I0_1917_0_2896: {
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
  ImageBackground_I0_1917_0_2897: {
    width: 134,
    height: 5,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_0_1918: {
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
  View_I0_1918_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1918_0_2875: {
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
  View_I0_1918_0_2876: {
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
  ImageBackground_I0_1918_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1918_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_1918_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_1918_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_1918_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_1918_0_2891: {
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
  View_I0_1918_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_1918_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1919: {
    width: 108,
    minWidth: 108,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 53
  },
  View_0_1920: {
    width: 81,
    minWidth: 81,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 0
  },
  Text_0_1920: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1921: {
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
  ImageBackground_I0_1921_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1922: {
    width: 341,
    minWidth: 341,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 142
  },
  View_0_1923: {
    width: 341,
    minWidth: 341,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1924: {
    width: 81,
    minWidth: 81,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1924: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1925: {
    width: 341,
    minWidth: 341,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_1926: {
    width: 24,
    minWidth: 24,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1926: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1927: {
    width: 17.3289794921875,
    minWidth: 17.3289794921875,
    height: 17.7239990234375,
    minHeight: 17.7239990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319.6708984375,
    top: 24.8499755859375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1927_0_3154: {
    flexGrow: 1,
    width: 17.3289794921875,
    height: 17.7239990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1927_0_3155: {
    width: 17.3289794921875,
    minWidth: 17.3289794921875,
    height: 17.7239990234375,
    minHeight: 17.7239990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1927_0_3156: {
    width: 2.20001220703125,
    height: 2.199981689453125,
    top: 9.3770751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0595703125
  },
  ImageBackground_I0_1927_0_3157: {
    width: 2.199951171875,
    height: 2.199981689453125,
    top: 9.3770751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.5693359375
  },
  ImageBackground_I0_1927_0_3158: {
    width: 2.199951171875,
    height: 2.199981689453125,
    top: 9.3770751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.0771484375
  },
  ImageBackground_I0_1927_0_3159: {
    width: 2.20001220703125,
    height: 2.199981689453125,
    top: 12.885009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0595703125
  },
  ImageBackground_I0_1927_0_3160: {
    width: 2.199951171875,
    height: 2.199981689453125,
    top: 12.885009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.5693359375
  },
  ImageBackground_I0_1927_0_3161: {
    width: 2.199951171875,
    height: 2.199981689453125,
    top: 12.885009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.0771484375
  },
  ImageBackground_I0_1927_0_3164: {
    width: 17.3289794921875,
    height: 15.75799560546875,
    top: 1.9659423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1927_0_3165: {
    width: 2.29998779296875,
    height: 4.7180023193359375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6943359375
  },
  ImageBackground_I0_1927_0_3166: {
    width: 2.300048828125,
    height: 4.7180023193359375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.3115234375
  },
  View_0_1928: {
    width: 341,
    minWidth: 341,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 91
  },
  View_0_1929: {
    width: 81,
    minWidth: 81,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1929: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1930: {
    width: 341,
    minWidth: 341,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_1931: {
    width: 33,
    minWidth: 33,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1931: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1932: {
    width: 17.3289794921875,
    minWidth: 17.3289794921875,
    height: 17.7239990234375,
    minHeight: 17.7239990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319.6708984375,
    top: 24.8499755859375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1932_0_3154: {
    flexGrow: 1,
    width: 17.3289794921875,
    height: 17.7239990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1932_0_3155: {
    width: 17.3289794921875,
    minWidth: 17.3289794921875,
    height: 17.7239990234375,
    minHeight: 17.7239990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1932_0_3156: {
    width: 2.20001220703125,
    height: 2.199981689453125,
    top: 9.3770751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0595703125
  },
  ImageBackground_I0_1932_0_3157: {
    width: 2.199951171875,
    height: 2.199981689453125,
    top: 9.3770751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.5693359375
  },
  ImageBackground_I0_1932_0_3158: {
    width: 2.199951171875,
    height: 2.199981689453125,
    top: 9.3770751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.0771484375
  },
  ImageBackground_I0_1932_0_3159: {
    width: 2.20001220703125,
    height: 2.199981689453125,
    top: 12.885009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.0595703125
  },
  ImageBackground_I0_1932_0_3160: {
    width: 2.199951171875,
    height: 2.199981689453125,
    top: 12.885009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.5693359375
  },
  ImageBackground_I0_1932_0_3161: {
    width: 2.199951171875,
    height: 2.199981689453125,
    top: 12.885009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.0771484375
  },
  ImageBackground_I0_1932_0_3164: {
    width: 17.3289794921875,
    height: 15.75799560546875,
    top: 1.9659423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1932_0_3165: {
    width: 2.29998779296875,
    height: 4.7180023193359375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6943359375
  },
  ImageBackground_I0_1932_0_3166: {
    width: 2.300048828125,
    height: 4.7180023193359375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.3115234375
  },
  View_0_1933: {
    width: 341,
    minWidth: 341,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 182
  },
  View_0_1934: {
    width: 33,
    minWidth: 33,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1934: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1935: {
    width: 341,
    minWidth: 341,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_1936: {
    width: 50,
    minWidth: 50,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1936: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1937: {
    width: 341,
    minWidth: 341,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 732,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1937_0_3110: {
    flexGrow: 1,
    width: 341,
    height: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1937_0_3111: {
    width: 341,
    height: 54,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1937_0_3112: {
    width: 27.681396484375,
    height: 17.958892822265625,
    top: 17.9569091796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282.5556640625
  },
  View_I0_1937_0_3113: {
    width: 63,
    top: 15.9140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.8603515625
  },
  Text_I0_1937_0_3113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
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
