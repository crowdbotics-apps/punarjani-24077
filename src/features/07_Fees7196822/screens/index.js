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
      <View style={styles.View_0_1799}>
        <View style={styles.View_0_1800} />
        <View style={styles.View_0_1801}>
          <View style={styles.View_0_1802}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1803}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1809}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_1815}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc2/42fa/6909e939e932888794ebbac489d939ad"
          }}
          style={styles.ImageBackground_0_1824}
        />
      </View>
      <View style={styles.View_0_1825}>
        <View style={styles.View_I0_1825_0_2874}>
          <View style={styles.View_I0_1825_0_2875} />
          <View style={styles.View_I0_1825_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_1825_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_1825_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_1825_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_1825_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_1825_0_2888}
          />
          <View style={styles.View_I0_1825_0_2891}>
            <View style={styles.View_I0_1825_0_2892}>
              <Text style={styles.Text_I0_1825_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1826}>
        <View style={styles.View_0_1827}>
          <Text style={styles.Text_0_1827}>Fees Due</Text>
        </View>
        <View style={styles.View_0_1828}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_1828_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_1829}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/584d/420d/8b3fcac4f10db4d5e1b2d7cba695d6a2"
          }}
          style={styles.ImageBackground_0_1830}
        />
        <View style={styles.View_0_1833}>
          <Text style={styles.Text_0_1833}>Receipt No.</Text>
        </View>
        <View style={styles.View_0_1834}>
          <Text style={styles.Text_0_1834}>Month</Text>
        </View>
        <View style={styles.View_0_1835}>
          <Text style={styles.Text_0_1835}>Pay Mode</Text>
        </View>
        <View style={styles.View_0_1836}>
          <Text style={styles.Text_0_1836}>Payment Date </Text>
        </View>
        <View style={styles.View_0_1837}>
          <Text style={styles.Text_0_1837}>Total Amount </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a9/b911/4ab3a35a551709c7c9cf64d75114c561"
          }}
          style={styles.ImageBackground_0_1838}
        />
        <View style={styles.View_0_1839}>
          <Text style={styles.Text_0_1839}>DONWLOAD</Text>
        </View>
        <View style={styles.View_0_1840}>
          <Text style={styles.Text_0_1840}>#98761</Text>
        </View>
        <View style={styles.View_0_1841}>
          <Text style={styles.Text_0_1841}>August</Text>
        </View>
        <View style={styles.View_0_1842}>
          <Text style={styles.Text_0_1842}>Cash on Counter</Text>
        </View>
        <View style={styles.View_0_1843}>
          <Text style={styles.Text_0_1843}>10 Aug 20</Text>
        </View>
        <View style={styles.View_0_1844}>
          <Text style={styles.Text_0_1844}>₹999</Text>
        </View>
        <View style={styles.View_0_1845} />
        <View style={styles.View_0_1846} />
      </View>
      <View style={styles.View_0_1847}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/584d/420d/8b3fcac4f10db4d5e1b2d7cba695d6a2"
          }}
          style={styles.ImageBackground_0_1848}
        />
        <View style={styles.View_0_1851}>
          <Text style={styles.Text_0_1851}>Receipt No.</Text>
        </View>
        <View style={styles.View_0_1852}>
          <Text style={styles.Text_0_1852}>Month</Text>
        </View>
        <View style={styles.View_0_1853}>
          <Text style={styles.Text_0_1853}>Pay Mode</Text>
        </View>
        <View style={styles.View_0_1854}>
          <Text style={styles.Text_0_1854}>Payment Date </Text>
        </View>
        <View style={styles.View_0_1855}>
          <Text style={styles.Text_0_1855}>Total Amount </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a9/b911/4ab3a35a551709c7c9cf64d75114c561"
          }}
          style={styles.ImageBackground_0_1856}
        />
        <View style={styles.View_0_1857}>
          <Text style={styles.Text_0_1857}>DONWLOAD</Text>
        </View>
        <View style={styles.View_0_1858}>
          <Text style={styles.Text_0_1858}>#98431</Text>
        </View>
        <View style={styles.View_0_1859}>
          <Text style={styles.Text_0_1859}>September</Text>
        </View>
        <View style={styles.View_0_1860}>
          <Text style={styles.Text_0_1860}>Cash on Counter</Text>
        </View>
        <View style={styles.View_0_1861}>
          <Text style={styles.Text_0_1861}>10 Sep 20</Text>
        </View>
        <View style={styles.View_0_1862}>
          <Text style={styles.Text_0_1862}>₹999</Text>
        </View>
        <View style={styles.View_0_1863} />
        <View style={styles.View_0_1864} />
        <View style={styles.View_0_1865}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/179c/bcdb/6fcb6bd1fea47829ae4ea160439cbb41"
            }}
            style={styles.ImageBackground_0_1868}
          />
        </View>
      </View>
      <View style={styles.View_0_1872}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db2d/1bda/e57414cc416701e661e295fcf6b99f26"
          }}
          style={styles.ImageBackground_0_1873}
        />
        <View style={styles.View_0_1876}>
          <Text style={styles.Text_0_1876}>Receipt No.</Text>
        </View>
        <View style={styles.View_0_1877}>
          <Text style={styles.Text_0_1877}>Month</Text>
        </View>
        <View style={styles.View_0_1878}>
          <Text style={styles.Text_0_1878}>Payment Date </Text>
        </View>
        <View style={styles.View_0_1879}>
          <Text style={styles.Text_0_1879}>Total Pending Amount </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a9/b911/4ab3a35a551709c7c9cf64d75114c561"
          }}
          style={styles.ImageBackground_0_1880}
        />
        <View style={styles.View_0_1881}>
          <Text style={styles.Text_0_1881}>PAY NOW</Text>
        </View>
        <View style={styles.View_0_1882}>
          <Text style={styles.Text_0_1882}>#98761</Text>
        </View>
        <View style={styles.View_0_1883}>
          <Text style={styles.Text_0_1883}>October</Text>
        </View>
        <View style={styles.View_0_1884}>
          <Text style={styles.Text_0_1884}>10 Oct 20</Text>
        </View>
        <View style={styles.View_0_1885}>
          <Text style={styles.Text_0_1885}>₹999</Text>
        </View>
        <View style={styles.View_0_1886} />
        <View style={styles.View_0_1887} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a70/6915/157296911a585afde4af492406e32c3b"
          }}
          style={styles.ImageBackground_0_1888}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1799: {
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
  View_0_1800: {
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
  View_0_1801: {
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
  View_0_1802: {
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
  ImageBackground_0_1803: {
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
  ImageBackground_0_1809: {
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
  ImageBackground_0_1815: {
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
  ImageBackground_0_1824: {
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
  View_0_1825: {
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
  View_I0_1825_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1825_0_2875: {
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
  View_I0_1825_0_2876: {
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
  ImageBackground_I0_1825_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1825_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_1825_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_1825_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_1825_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_1825_0_2891: {
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
  View_I0_1825_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_1825_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1826: {
    width: 95,
    minWidth: 95,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 53
  },
  View_0_1827: {
    width: 68,
    minWidth: 68,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 0
  },
  Text_0_1827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1828: {
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
  ImageBackground_I0_1828_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1829: {
    width: 343,
    minWidth: 343,
    height: 241.300048828125,
    minHeight: 241.300048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 610.699951171875
  },
  ImageBackground_0_1830: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 241,
    minHeight: 241,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1833: {
    width: 67,
    minWidth: 67,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 12.300048828125
  },
  Text_0_1833: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1834: {
    width: 38,
    minWidth: 38,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 57.300048828125
  },
  Text_0_1834: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1835: {
    width: 57,
    minWidth: 57,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 121.300048828125
  },
  Text_0_1835: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1836: {
    width: 85,
    minWidth: 85,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 89.300048828125
  },
  Text_0_1836: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1837: {
    width: 82,
    minWidth: 82,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 166.300048828125
  },
  Text_0_1837: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1838: {
    width: 343,
    minWidth: 343,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 196.300048828125
  },
  View_0_1839: {
    width: 70,
    minWidth: 70,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128.5,
    top: 209.300048828125
  },
  Text_0_1839: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1840: {
    width: 44,
    minWidth: 44,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284.900390625,
    top: 12.300048828125
  },
  Text_0_1840: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1841: {
    width: 42,
    minWidth: 42,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 285.900390625,
    top: 57.300048828125
  },
  Text_0_1841: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1842: {
    width: 99,
    minWidth: 99,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228.900390625,
    top: 121.300048828125
  },
  Text_0_1842: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1843: {
    width: 58,
    minWidth: 58,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270.900390625,
    top: 89.300048828125
  },
  Text_0_1843: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1844: {
    width: 29,
    minWidth: 29,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298.900390625,
    top: 166.300048828125
  },
  Text_0_1844: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1845: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 42.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_1846: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 154.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_1847: {
    width: 343,
    minWidth: 343,
    height: 241.300048828125,
    minHeight: 241.300048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 353.699951171875
  },
  ImageBackground_0_1848: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 241,
    minHeight: 241,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1851: {
    width: 67,
    minWidth: 67,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 12.300048828125
  },
  Text_0_1851: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1852: {
    width: 38,
    minWidth: 38,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 57.300048828125
  },
  Text_0_1852: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1853: {
    width: 57,
    minWidth: 57,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 121.300048828125
  },
  Text_0_1853: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1854: {
    width: 85,
    minWidth: 85,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 89.300048828125
  },
  Text_0_1854: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1855: {
    width: 82,
    minWidth: 82,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 166.300048828125
  },
  Text_0_1855: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1856: {
    width: 343,
    minWidth: 343,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 196.300048828125
  },
  View_0_1857: {
    width: 72,
    minWidth: 72,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124.5,
    top: 208.300048828125
  },
  Text_0_1857: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1858: {
    width: 44,
    minWidth: 44,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284.900390625,
    top: 12.300048828125
  },
  Text_0_1858: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1859: {
    width: 67,
    minWidth: 67,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260.900390625,
    top: 57.300048828125
  },
  Text_0_1859: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1860: {
    width: 99,
    minWidth: 99,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228.900390625,
    top: 121.300048828125
  },
  Text_0_1860: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1861: {
    width: 57,
    minWidth: 57,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270.900390625,
    top: 89.300048828125
  },
  Text_0_1861: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1862: {
    width: 29,
    minWidth: 29,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298.900390625,
    top: 166.300048828125
  },
  Text_0_1862: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1863: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 42.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_1864: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 154.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_1865: {
    width: 14,
    minWidth: 14,
    height: 13.99700927734375,
    minHeight: 13.99700927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 205.5,
    top: 211.050048828125
  },
  ImageBackground_0_1868: {
    width: 14,
    minWidth: 14,
    height: 13.99700927734375,
    minHeight: 13.99700927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1872: {
    width: 343,
    minWidth: 343,
    height: 209.300048828125,
    minHeight: 209.300048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 128.699951171875
  },
  ImageBackground_0_1873: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 209.00001525878906,
    minHeight: 209.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1876: {
    width: 67,
    minWidth: 67,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 12.300048828125
  },
  Text_0_1876: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1877: {
    width: 38,
    minWidth: 38,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 57.300048828125
  },
  Text_0_1877: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1878: {
    width: 85,
    minWidth: 85,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 89.300048828125
  },
  Text_0_1878: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1879: {
    width: 133,
    minWidth: 133,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 134.300048828125
  },
  Text_0_1879: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1880: {
    width: 343,
    minWidth: 343,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 164.300048828125
  },
  View_0_1881: {
    width: 55,
    minWidth: 55,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140.5,
    top: 176.300048828125
  },
  Text_0_1881: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1882: {
    width: 44,
    minWidth: 44,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284.900390625,
    top: 12.300048828125
  },
  Text_0_1882: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1883: {
    width: 49,
    minWidth: 49,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278.900390625,
    top: 57.300048828125
  },
  Text_0_1883: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1884: {
    width: 56,
    minWidth: 56,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 272.900390625,
    top: 89.300048828125
  },
  Text_0_1884: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1885: {
    width: 29,
    minWidth: 29,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298.900390625,
    top: 134.300048828125
  },
  Text_0_1885: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1886: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 42.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  View_0_1887: {
    width: 312.85101318359375,
    minWidth: 312.85101318359375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 122.1309814453125,
    backgroundColor: "rgba(219, 219, 219, 1)"
  },
  ImageBackground_0_1888: {
    width: 17.60205078125,
    minWidth: 17.60205078125,
    height: 12.375946044921875,
    minHeight: 12.375946044921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206.99609375,
    top: 181.0369873046875
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
