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
      <View style={styles.View_0_1477}>
        <View style={styles.View_0_1478} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf2/013d/53988b7417f9302d3347746e4f1c6f46"
          }}
          style={styles.ImageBackground_0_1479}
        />
        <View style={styles.View_0_1480}>
          <View style={styles.View_0_1481}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1482}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1488}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_1494}
          />
        </View>
      </View>
      <View style={styles.View_0_1503}>
        <View style={styles.View_0_1504}>
          <Text style={styles.Text_0_1504}>My Profile</Text>
        </View>
        <View style={styles.View_0_1505}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_1505_0_3107}
          />
        </View>
        <View style={styles.View_0_1506}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d47c/f173/dace7a3454b665dec1b37aef8a519ec2"
            }}
            style={styles.ImageBackground_0_1507}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3abf/9a02/a93307437758be7ec7bf7dc3dc9ae94f"
            }}
            style={styles.ImageBackground_0_1508}
          />
          <View style={styles.View_0_1509}>
            <Text style={styles.Text_0_1509}>DONE</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1510}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d7a/84d2/5f713fca7bef43b864dde0aff18745e9"
          }}
          style={styles.ImageBackground_0_1511}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48e3/5202/8c2c762a207aa4af8b79753f49432e30"
          }}
          style={styles.ImageBackground_0_1514}
        />
        <View style={styles.View_0_1516}>
          <Text style={styles.Text_0_1516}>Class XI-B | Roll no: 04</Text>
        </View>
        <View style={styles.View_0_1517}>
          <Text style={styles.Text_0_1517}>Akshay Syal</Text>
        </View>
        <View style={styles.View_0_1518}>
          <View style={styles.View_I0_1518_0_3142}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b88e/fca8/aef3e8afa52b03e3eff09bc9eb396054"
              }}
              style={styles.ImageBackground_I0_1518_0_3145}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1519}>
        <View style={styles.View_0_1520}>
          <View style={styles.View_0_1521}>
            <Text style={styles.Text_0_1521}>1234 4325 4567 1234</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca6e/8c88/4ec179b0b938dd8dcfc43599040fead3"
            }}
            style={styles.ImageBackground_0_1522}
          />
          <View style={styles.View_0_1523}>
            <Text style={styles.Text_0_1523}>Adhar No</Text>
          </View>
        </View>
        <View style={styles.View_0_1524}>
          <View style={styles.View_0_1525}>
            <Text style={styles.Text_0_1525}>2020-2021</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca6e/8c88/4ec179b0b938dd8dcfc43599040fead3"
            }}
            style={styles.ImageBackground_0_1526}
          />
          <View style={styles.View_0_1527}>
            <Text style={styles.Text_0_1527}>Academic Year</Text>
          </View>
        </View>
        <View style={styles.View_0_1528}>
          <View style={styles.View_0_1529}>
            <Text style={styles.Text_0_1529}>VI</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f954/534c/d90c8486fa1941e2829c0cc70d8bc1b8"
            }}
            style={styles.ImageBackground_0_1530}
          />
          <View style={styles.View_0_1531}>
            <Text style={styles.Text_0_1531}>Admission Class</Text>
          </View>
          <View style={styles.View_0_1532}>
            <View style={styles.View_I0_1532_0_3149}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/7051/897a7bbf1043aa0a1e2c0076662456c2"
                }}
                style={styles.ImageBackground_I0_1532_0_3152}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1533}>
          <View style={styles.View_0_1534}>
            <Text style={styles.Text_0_1534}>01 Apr 2018</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f954/534c/d90c8486fa1941e2829c0cc70d8bc1b8"
            }}
            style={styles.ImageBackground_0_1535}
          />
          <View style={styles.View_0_1536}>
            <Text style={styles.Text_0_1536}>Date of Admission</Text>
          </View>
          <View style={styles.View_0_1537}>
            <View style={styles.View_I0_1537_0_3149}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/7051/897a7bbf1043aa0a1e2c0076662456c2"
                }}
                style={styles.ImageBackground_I0_1537_0_3152}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1538}>
          <View style={styles.View_0_1539}>
            <Text style={styles.Text_0_1539}>T00221</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f954/534c/d90c8486fa1941e2829c0cc70d8bc1b8"
            }}
            style={styles.ImageBackground_0_1540}
          />
          <View style={styles.View_0_1541}>
            <Text style={styles.Text_0_1541}>Old Admission No</Text>
          </View>
          <View style={styles.View_0_1542}>
            <View style={styles.View_I0_1542_0_3149}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/7051/897a7bbf1043aa0a1e2c0076662456c2"
                }}
                style={styles.ImageBackground_I0_1542_0_3152}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1543}>
          <View style={styles.View_0_1544}>
            <Text style={styles.Text_0_1544}>22 July 1996</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f954/534c/d90c8486fa1941e2829c0cc70d8bc1b8"
            }}
            style={styles.ImageBackground_0_1545}
          />
          <View style={styles.View_0_1546}>
            <Text style={styles.Text_0_1546}>Date of Birth</Text>
          </View>
          <View style={styles.View_0_1547}>
            <View style={styles.View_I0_1547_0_3149}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/7051/897a7bbf1043aa0a1e2c0076662456c2"
                }}
                style={styles.ImageBackground_I0_1547_0_3152}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1548}>
          <View style={styles.View_0_1549}>
            <Text style={styles.Text_0_1549}>parentboth84@gmail.com</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7851/b23f/79c0f2c7353eacd5438368023f23b438"
            }}
            style={styles.ImageBackground_0_1550}
          />
          <View style={styles.View_0_1551}>
            <Text style={styles.Text_0_1551}>Parent Mail ID</Text>
          </View>
          <View style={styles.View_0_1552}>
            <View style={styles.View_I0_1552_0_3149}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/7051/897a7bbf1043aa0a1e2c0076662456c2"
                }}
                style={styles.ImageBackground_I0_1552_0_3152}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1553}>
          <View style={styles.View_0_1554}>
            <Text style={styles.Text_0_1554}>Bernard Taylor</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7851/b23f/79c0f2c7353eacd5438368023f23b438"
            }}
            style={styles.ImageBackground_0_1555}
          />
          <View style={styles.View_0_1556}>
            <Text style={styles.Text_0_1556}>Father Name</Text>
          </View>
          <View style={styles.View_0_1557}>
            <View style={styles.View_I0_1557_0_3149}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/7051/897a7bbf1043aa0a1e2c0076662456c2"
                }}
                style={styles.ImageBackground_I0_1557_0_3152}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1558}>
          <View style={styles.View_0_1559}>
            <Text style={styles.Text_0_1559}>Monica Larson</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7851/b23f/79c0f2c7353eacd5438368023f23b438"
            }}
            style={styles.ImageBackground_0_1560}
          />
          <View style={styles.View_0_1561}>
            <Text style={styles.Text_0_1561}>Mother Name</Text>
          </View>
          <View style={styles.View_0_1562}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/7051/897a7bbf1043aa0a1e2c0076662456c2"
              }}
              style={styles.ImageBackground_0_1565}
            />
          </View>
        </View>
        <View style={styles.View_0_1566}>
          <View style={styles.View_0_1567}>
            <Text style={styles.Text_0_1567}>Karol Bagh, Delhi</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7851/b23f/79c0f2c7353eacd5438368023f23b438"
            }}
            style={styles.ImageBackground_0_1568}
          />
          <View style={styles.View_0_1569}>
            <Text style={styles.Text_0_1569}>Parmanent Add.</Text>
          </View>
          <View style={styles.View_0_1570}>
            <View style={styles.View_I0_1570_0_3149}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/7051/897a7bbf1043aa0a1e2c0076662456c2"
                }}
                style={styles.ImageBackground_I0_1570_0_3152}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1571}>
        <View style={styles.View_I0_1571_0_2874}>
          <View style={styles.View_I0_1571_0_2875} />
          <View style={styles.View_I0_1571_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_1571_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_1571_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_1571_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_1571_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_1571_0_2888}
          />
          <View style={styles.View_I0_1571_0_2891}>
            <View style={styles.View_I0_1571_0_2892}>
              <Text style={styles.Text_I0_1571_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1572}>
        <View style={styles.View_I0_1572_0_2894}>
          <View style={styles.View_I0_1572_0_2895}>
            <View style={styles.View_I0_1572_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_1572_0_2897}
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
  View_0_1477: {
    width: 375,
    minWidth: 375,
    height: 918,
    minHeight: 918,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1478: {
    width: 375,
    minWidth: 375,
    height: 918,
    minHeight: 918,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1479: {
    width: 375,
    minWidth: 375,
    height: 805,
    minHeight: 805,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 113
  },
  View_0_1480: {
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
  View_0_1481: {
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
  ImageBackground_0_1482: {
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
  ImageBackground_0_1488: {
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
  ImageBackground_0_1494: {
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
  View_0_1503: {
    width: 343,
    minWidth: 343,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 54
  },
  View_0_1504: {
    width: 75,
    minWidth: 75,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 0
  },
  Text_0_1504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1505: {
    width: 12.000144958496094,
    minWidth: 12.000144958496094,
    height: 20.499969482421875,
    minHeight: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.49951171875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1505_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1506: {
    width: 86,
    minWidth: 86,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 257,
    top: 1
  },
  ImageBackground_0_1507: {
    width: 86,
    minWidth: 86,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1508: {
    width: 12.192657470703125,
    minWidth: 12.192657470703125,
    height: 8.771339416503906,
    minHeight: 8.771339416503906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.5205078125,
    top: 9.7696533203125
  },
  View_0_1509: {
    width: 33,
    minWidth: 33,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 5
  },
  Text_0_1509: {
    color: "rgba(102, 136, 202, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1510: {
    width: 341,
    minWidth: 341,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 131
  },
  ImageBackground_0_1511: {
    width: 341,
    minWidth: 341,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1514: {
    width: 75,
    minWidth: 75,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 12
  },
  View_0_1516: {
    width: 151,
    minWidth: 151,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 50
  },
  Text_0_1516: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1517: {
    width: 106,
    minWidth: 106,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 16
  },
  Text_0_1517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1518: {
    width: 20.77197265625,
    minWidth: 20.77197265625,
    height: 18.175994873046875,
    minHeight: 18.175994873046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 302.2265625,
    top: 17.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1518_0_3142: {
    flexGrow: 1,
    width: 20.77197265625,
    height: 18.175994873046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1518_0_3145: {
    width: 20.77197265625,
    height: 18.175994873046875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1519: {
    width: 342,
    minWidth: 342,
    height: 608,
    minHeight: 608,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 261
  },
  View_0_1520: {
    width: 161,
    minWidth: 161,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1521: {
    width: 141,
    minWidth: 141,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1521: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1522: {
    width: 161,
    minWidth: 161,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_1523: {
    width: 47,
    minWidth: 47,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1523: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1524: {
    width: 161,
    minWidth: 161,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181,
    top: 0
  },
  View_0_1525: {
    width: 71,
    minWidth: 71,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1525: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1526: {
    width: 161,
    minWidth: 161,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_1527: {
    width: 73,
    minWidth: 73,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1527: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1528: {
    width: 160.5,
    minWidth: 160.5,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 91
  },
  View_0_1529: {
    width: 14,
    minWidth: 14,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1529: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1530: {
    width: 160.5,
    minWidth: 160.5,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_1531: {
    width: 81,
    minWidth: 81,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1531: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1532: {
    width: 12.99786376953125,
    minWidth: 12.99786376953125,
    height: 15.83941650390625,
    minHeight: 15.83941650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147.4951171875,
    top: 25.995849609375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1532_0_3149: {
    flexGrow: 1,
    width: 12.99786376953125,
    height: 15.839401245117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1532_0_3152: {
    width: 12.99786376953125,
    height: 15.839401245117188,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1533: {
    width: 160.5,
    minWidth: 160.5,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 182
  },
  View_0_1534: {
    width: 80,
    minWidth: 80,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1534: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1535: {
    width: 160.5,
    minWidth: 160.5,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_1536: {
    width: 91,
    minWidth: 91,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1536: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1537: {
    width: 12.99786376953125,
    minWidth: 12.99786376953125,
    height: 15.83941650390625,
    minHeight: 15.83941650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147.4951171875,
    top: 25.995849609375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1537_0_3149: {
    flexGrow: 1,
    width: 12.99786376953125,
    height: 15.839401245117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1537_0_3152: {
    width: 12.99786376953125,
    height: 15.839401245117188,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1538: {
    width: 160.99298095703125,
    minWidth: 160.99298095703125,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180.5,
    top: 91
  },
  View_0_1539: {
    width: 50,
    minWidth: 50,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1539: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1540: {
    width: 160.5,
    minWidth: 160.5,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_1541: {
    width: 89,
    minWidth: 89,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1541: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1542: {
    width: 12.99786376953125,
    minWidth: 12.99786376953125,
    height: 15.83941650390625,
    minHeight: 15.83941650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147.9951171875,
    top: 25.995849609375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1542_0_3149: {
    flexGrow: 1,
    width: 12.99786376953125,
    height: 15.839401245117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1542_0_3152: {
    width: 12.99786376953125,
    height: 15.839401245117188,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1543: {
    width: 160.99298095703125,
    minWidth: 160.99298095703125,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180.5,
    top: 182
  },
  View_0_1544: {
    width: 85,
    minWidth: 85,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1544: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1545: {
    width: 160.5,
    minWidth: 160.5,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_1546: {
    width: 63,
    minWidth: 63,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1546: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1547: {
    width: 12.99786376953125,
    minWidth: 12.99786376953125,
    height: 15.83941650390625,
    minHeight: 15.83941650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147.9951171875,
    top: 25.995849609375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1547_0_3149: {
    flexGrow: 1,
    width: 12.99786376953125,
    height: 15.839401245117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1547_0_3152: {
    width: 12.99786376953125,
    height: 15.839401245117188,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1548: {
    width: 341.49298095703125,
    minWidth: 341.49298095703125,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 273
  },
  View_0_1549: {
    width: 181,
    minWidth: 181,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1549: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1550: {
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
  View_0_1551: {
    width: 70,
    minWidth: 70,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1551: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1552: {
    width: 12.99786376953125,
    minWidth: 12.99786376953125,
    height: 15.83941650390625,
    minHeight: 15.83941650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 328.4951171875,
    top: 23.995849609375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1552_0_3149: {
    flexGrow: 1,
    width: 12.99786376953125,
    height: 15.839401245117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1552_0_3152: {
    width: 12.99786376953125,
    height: 15.839401245117188,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1553: {
    width: 341.49298095703125,
    minWidth: 341.49298095703125,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 455
  },
  View_0_1554: {
    width: 102,
    minWidth: 102,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1554: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1555: {
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
  View_0_1556: {
    width: 65,
    minWidth: 65,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1556: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1557: {
    width: 12.99786376953125,
    minWidth: 12.99786376953125,
    height: 15.83941650390625,
    minHeight: 15.83941650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 328.4951171875,
    top: 23.995849609375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1557_0_3149: {
    flexGrow: 1,
    width: 12.99786376953125,
    height: 15.839401245117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1557_0_3152: {
    width: 12.99786376953125,
    height: 15.839401245117188,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1558: {
    width: 341.4934387207031,
    minWidth: 341.4934387207031,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 364
  },
  View_0_1559: {
    width: 100,
    minWidth: 100,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1559: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1560: {
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
  View_0_1561: {
    width: 68,
    minWidth: 68,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1561: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1562: {
    width: 12.997894287109375,
    minWidth: 12.997894287109375,
    height: 15.83941650390625,
    minHeight: 15.83941650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 328.4951171875,
    top: 23.995849609375
  },
  ImageBackground_0_1565: {
    width: 12.997894287109375,
    minWidth: 12.997894287109375,
    height: 15.83941650390625,
    minHeight: 15.83941650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1566: {
    width: 341.49298095703125,
    minWidth: 341.49298095703125,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 546
  },
  View_0_1567: {
    width: 119,
    minWidth: 119,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_1567: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1568: {
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
  View_0_1569: {
    width: 81,
    minWidth: 81,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1569: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1570: {
    width: 12.99786376953125,
    minWidth: 12.99786376953125,
    height: 15.83941650390625,
    minHeight: 15.83941650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 328.4951171875,
    top: 23.995849609375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1570_0_3149: {
    flexGrow: 1,
    width: 12.99786376953125,
    height: 15.839401245117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1570_0_3152: {
    width: 12.99786376953125,
    height: 15.839401245117188,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1571: {
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
  View_I0_1571_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1571_0_2875: {
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
  View_I0_1571_0_2876: {
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
  ImageBackground_I0_1571_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1571_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_1571_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_1571_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_1571_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_1571_0_2891: {
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
  View_I0_1571_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_1571_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1572: {
    width: 375,
    minWidth: 375,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 902,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1572_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1572_0_2895: {
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
  View_I0_1572_0_2896: {
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
  ImageBackground_I0_1572_0_2897: {
    width: 134,
    height: 5,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_2: { height: 918 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
