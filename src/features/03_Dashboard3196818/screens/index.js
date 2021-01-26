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
      <View style={styles.View_0_1222}>
        <View style={styles.View_0_1223} />
        <View style={styles.View_0_1224}>
          <View style={styles.View_0_1225}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1226}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1232}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_1238}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4f0/aac0/e8189fceb12e1b327859d9f18331aa53"
          }}
          style={styles.ImageBackground_0_1247}
        />
      </View>
      <View style={styles.View_0_1248}>
        <View style={styles.View_I0_1248_0_2874}>
          <View style={styles.View_I0_1248_0_2875} />
          <View style={styles.View_I0_1248_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_1248_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_1248_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_1248_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_1248_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_1248_0_2888}
          />
          <View style={styles.View_I0_1248_0_2891}>
            <View style={styles.View_I0_1248_0_2892}>
              <Text style={styles.Text_I0_1248_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4788/ac1c/843d871b4d99f4a6504139af81998bad"
        }}
        style={styles.ImageBackground_0_1249}
      />
      <View style={styles.View_0_1252}>
        <View style={styles.View_0_1253}>
          <Text style={styles.Text_0_1253}>Class XI-B | Roll no: 04</Text>
        </View>
        <View style={styles.View_0_1254}>
          <Text style={styles.Text_0_1254}>Hi Akshay</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab2b/0112/70a3e7deda6d660ab6c627d88174623a"
          }}
          style={styles.ImageBackground_0_1255}
        />
        <View style={styles.View_0_1256}>
          <Text style={styles.Text_0_1256}>2020-2021</Text>
        </View>
      </View>
      <View style={styles.View_0_1257}>
        <View style={styles.View_0_1258}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cc1/a245/0a919e706d87772241d7f27da31ff00d"
            }}
            style={styles.ImageBackground_0_1259}
          />
          <View style={styles.View_0_1262}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b549/8e2f/942e482a389947aef92c80541cbfcce1"
              }}
              style={styles.ImageBackground_0_1263}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dd1/132d/43f9b789098f6e716585d06200773788"
              }}
              style={styles.ImageBackground_0_1264}
            />
          </View>
          <View style={styles.View_0_1267}>
            <Text style={styles.Text_0_1267}>80.39 %</Text>
          </View>
          <View style={styles.View_0_1268}>
            <Text style={styles.Text_0_1268}>Attendance</Text>
          </View>
        </View>
        <View style={styles.View_0_1269}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1270}
          />
          <View style={styles.View_0_1271}>
            <Text style={styles.Text_0_1271}>Result</Text>
          </View>
          <View style={styles.View_0_1272}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/783d/0ad4/d447c1871b52143071d39b5d764ec287"
              }}
              style={styles.ImageBackground_0_1275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1568/7351/91d4be76ae08c61638128e84ba64e1e9"
              }}
              style={styles.ImageBackground_0_1285}
            />
          </View>
        </View>
        <View style={styles.View_0_1286}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1287}
          />
          <View style={styles.View_0_1288}>
            <Text style={styles.Text_0_1288}>Ask Doubts</Text>
          </View>
          <View style={styles.View_0_1289}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c77/a871/331adb89f45dbc31b30d8e8c7394d8f0"
              }}
              style={styles.ImageBackground_0_1290}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c77/a871/331adb89f45dbc31b30d8e8c7394d8f0"
              }}
              style={styles.ImageBackground_0_1292}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc65/e851/e611afe5415cee1c772a87f50d97573f"
              }}
              style={styles.ImageBackground_0_1296}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d632/1df3/66c5b482f473f945ff151524c93cac9c"
              }}
              style={styles.ImageBackground_0_1298}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d632/1df3/66c5b482f473f945ff151524c93cac9c"
              }}
              style={styles.ImageBackground_0_1300}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/589f/de47/cbc0af83e37d05653d7c0f140fa2484c"
              }}
              style={styles.ImageBackground_0_1304}
            />
          </View>
        </View>
        <View style={styles.View_0_1305}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1306}
          />
          <View style={styles.View_0_1307}>
            <Text style={styles.Text_0_1307}>Events</Text>
          </View>
          <View style={styles.View_0_1308}>
            <View style={styles.View_0_1309}>
              <View style={styles.View_0_1310}>
                <View style={styles.View_0_1311}>
                  <View style={styles.View_0_1312}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d09e/6902/aabe057367229ec5ce57454377270336"
                      }}
                      style={styles.ImageBackground_0_1315}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_0_1316}>
                <View style={styles.View_0_1317}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f623/fee2/7d4adb6bb0901bc6c1d131be2bc3c387"
                    }}
                    style={styles.ImageBackground_0_1318}
                  />
                </View>
              </View>
              <View style={styles.View_0_1320}>
                <View style={styles.View_0_1321}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec29/c015/6208b8a2dc31fd8193fcb9575a3e929a"
                    }}
                    style={styles.ImageBackground_0_1322}
                  />
                </View>
              </View>
              <View style={styles.View_0_1324}>
                <View style={styles.View_0_1325}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec29/c015/6208b8a2dc31fd8193fcb9575a3e929a"
                    }}
                    style={styles.ImageBackground_0_1326}
                  />
                </View>
              </View>
              <View style={styles.View_0_1328}>
                <View style={styles.View_0_1329}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af9e/2bb5/a465d235c421e9e0f215c5cecab772a0"
                    }}
                    style={styles.ImageBackground_0_1330}
                  />
                </View>
              </View>
              <View style={styles.View_0_1332}>
                <View style={styles.View_0_1333}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af9e/2bb5/a465d235c421e9e0f215c5cecab772a0"
                    }}
                    style={styles.ImageBackground_0_1334}
                  />
                </View>
              </View>
              <View style={styles.View_0_1336}>
                <View style={styles.View_0_1337}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffd0/6c72/79aa40219737dfbf8ff8f9eb9a72a52a"
                    }}
                    style={styles.ImageBackground_0_1338}
                  />
                </View>
              </View>
              <View style={styles.View_0_1340}>
                <View style={styles.View_0_1341}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af9e/2bb5/a465d235c421e9e0f215c5cecab772a0"
                    }}
                    style={styles.ImageBackground_0_1342}
                  />
                </View>
              </View>
              <View style={styles.View_0_1344}>
                <View style={styles.View_0_1345}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af9e/2bb5/a465d235c421e9e0f215c5cecab772a0"
                    }}
                    style={styles.ImageBackground_0_1346}
                  />
                </View>
              </View>
              <View style={styles.View_0_1348}>
                <View style={styles.View_0_1349}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b9/43f3/20dadd7e2d5698241dafe91138a3db5b"
                    }}
                    style={styles.ImageBackground_0_1350}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1352}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1353}
          />
          <View style={styles.View_0_1354}>
            <Text style={styles.Text_0_1354}>School Holiday</Text>
          </View>
          <View style={styles.View_0_1355}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e056/723c/41e0d95c3773d20562b88aef910d7528"
              }}
              style={styles.ImageBackground_0_1358}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9597/6666/123d26fde9aa5478dda65fadaaca3cf5"
              }}
              style={styles.ImageBackground_0_1359}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a526/99a9/6c4bd571a3eca38c46963c5ed90c5185"
              }}
              style={styles.ImageBackground_0_1360}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e60/a409/e0592a4f4ca9111b2a187450dcf20753"
              }}
              style={styles.ImageBackground_0_1363}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2756/f567/03eb16b7e57421fff5bc49510ce8d945"
              }}
              style={styles.ImageBackground_0_1367}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/468f/b572/4cebdd68877061801aa09d93b61bc640"
              }}
              style={styles.ImageBackground_0_1370}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/209d/6159/c9a1ea863ff87ff86ec6d53e912852ec"
              }}
              style={styles.ImageBackground_0_1371}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5518/b2f2/17997a74d13c60142a62c758f4b64c73"
              }}
              style={styles.ImageBackground_0_1372}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beb2/de7b/e9d28f1a148d045d2f0604ca975b6835"
              }}
              style={styles.ImageBackground_0_1373}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6e8/39de/07d388f8ddbc1eb24adc02babd35cd8b"
              }}
              style={styles.ImageBackground_0_1374}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b49f/c69e/98608b10300f9e0d155621f12635c259"
              }}
              style={styles.ImageBackground_0_1375}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be28/369a/8ee0148829c1da42902b50e928af94f9"
              }}
              style={styles.ImageBackground_0_1376}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b26/da8f/4ffdaa02c3c7be0ccfe68dd8a4d936e1"
              }}
              style={styles.ImageBackground_0_1377}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e592/d7d6/f7fcc93254172c6ac874360370cfbfac"
              }}
              style={styles.ImageBackground_0_1378}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e6b/2afc/49038187a00acef1e5d19542cada5ca0"
              }}
              style={styles.ImageBackground_0_1379}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dd3/ada9/0084681794940446e9c28a91e6a76cff"
              }}
              style={styles.ImageBackground_0_1380}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e592/d7d6/f7fcc93254172c6ac874360370cfbfac"
              }}
              style={styles.ImageBackground_0_1381}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/431d/7ad0/ba1f83719950bfb69cd1136eab8aafff"
              }}
              style={styles.ImageBackground_0_1382}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f08/3639/949202c5b44c9da3ce145d515833a7dc"
              }}
              style={styles.ImageBackground_0_1383}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c35/e7ef/a2e695b7a594ae786c4c740e103c8ce0"
              }}
              style={styles.ImageBackground_0_1384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/659a/94d6/5bd6f922493bbabf0e2bd8312153e823"
              }}
              style={styles.ImageBackground_0_1385}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42b9/7697/e9041f07da3602250230dd7fea993adc"
              }}
              style={styles.ImageBackground_0_1386}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/362d/577e/3c38b2fb13e111a1c858cbb23080b307"
              }}
              style={styles.ImageBackground_0_1387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac83/d4da/4ffbb51f1d1fdb7d8a04dae1c3c2134b"
              }}
              style={styles.ImageBackground_0_1388}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6dd/f551/67a7eeb8ab18fc1cf5e72fd723f6019f"
              }}
              style={styles.ImageBackground_0_1389}
            />
          </View>
        </View>
        <View style={styles.View_0_1390}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1391}
          />
          <View style={styles.View_0_1392}>
            <Text style={styles.Text_0_1392}>Time Table</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea6/8907/3969b41e14166b2974fed4c206e8c75e"
            }}
            style={styles.ImageBackground_0_1395}
          />
        </View>
        <View style={styles.View_0_1398}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cc1/a245/0a919e706d87772241d7f27da31ff00d"
            }}
            style={styles.ImageBackground_0_1399}
          />
          <View style={styles.View_0_1402}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d861/5599/e2a8870c1148ade115ff0efe386f3cc2"
              }}
              style={styles.ImageBackground_0_1403}
            />
            <View style={styles.View_0_1404}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7606/471b/fcd92c478849b5486ab69d77926bab88"
                }}
                style={styles.ImageBackground_0_1407}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c485/b75e/ac94d22a983c8beff661b2fa9537b668"
                }}
                style={styles.ImageBackground_0_1408}
              />
            </View>
          </View>
          <View style={styles.View_0_1409}>
            <Text style={styles.Text_0_1409}>₹6400</Text>
          </View>
          <View style={styles.View_0_1410}>
            <Text style={styles.Text_0_1410}>Fees Due</Text>
          </View>
        </View>
        <View style={styles.View_0_1411}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1412}
          />
          <View style={styles.View_0_1413}>
            <Text style={styles.Text_0_1413}>Date Sheet</Text>
          </View>
          <View style={styles.View_0_1414}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a28/2a94/8dfdf9ccd3e45b2f7b19ff730af8465a"
              }}
              style={styles.ImageBackground_0_1417}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddad/5bc8/2fbab460bf27e1756ca507993c9588c7"
              }}
              style={styles.ImageBackground_0_1418}
            />
          </View>
        </View>
        <View style={styles.View_0_1419}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1420}
          />
          <View style={styles.View_0_1421}>
            <Text style={styles.Text_0_1421}>School Gallery</Text>
          </View>
          <View style={styles.View_0_1422}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d515/ef5b/a901bc63e50e3a99285e8e70c71dd68d"
              }}
              style={styles.ImageBackground_0_1425}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01c7/5a0c/3b9642e8072dc821ccf93dc1964bb1ed"
              }}
              style={styles.ImageBackground_0_1426}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cda6/661c/e13fc8aa6bc2bc3c63772cdb202fa194"
              }}
              style={styles.ImageBackground_0_1427}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e18/0a3e/1d650537ab339ba9df2d06979f0fce6f"
              }}
              style={styles.ImageBackground_0_1428}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38f7/5dfb/e97e4b43116dc71b0ce41b93c68a7536"
              }}
              style={styles.ImageBackground_0_1429}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74ae/9c2e/61f90a3e25ae8f99d876dbc64acfcfb4"
              }}
              style={styles.ImageBackground_0_1430}
            />
          </View>
        </View>
        <View style={styles.View_0_1431}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1432}
          />
          <View style={styles.View_0_1433}>
            <Text style={styles.Text_0_1433}>Logout</Text>
          </View>
          <View style={styles.View_0_1434}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de5e/88eb/0ef1b4c5c90eee4abefa84395c063db3"
              }}
              style={styles.ImageBackground_0_1437}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/682f/fdb2/bcf6365419002db5c1c0e3ce9bf72691"
              }}
              style={styles.ImageBackground_0_1438}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8ce/ad09/6346af6e9e3566e46a44c96d98c9c833"
              }}
              style={styles.ImageBackground_0_1439}
            />
          </View>
        </View>
        <View style={styles.View_0_1440}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1441}
          />
          <View style={styles.View_0_1442}>
            <Text style={styles.Text_0_1442}>Play Quiz</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d7f/05ce/ff8a44cf2743c7eee07b671f74b3b51c"
            }}
            style={styles.ImageBackground_0_1443}
          />
        </View>
        <View style={styles.View_0_1448}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192e/aa1f/5a5492ca8bbc2c84040e184c7c67235e"
            }}
            style={styles.ImageBackground_0_1449}
          />
          <View style={styles.View_0_1450}>
            <Text style={styles.Text_0_1450}>Assignment</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560d/5474/87a739099c068c6c97e9e7ae88200def"
            }}
            style={styles.ImageBackground_0_1451}
          />
        </View>
        <View style={styles.View_0_1457}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44d9/2096/0fc6376059ebc0c0447fbb7ee763a1a6"
            }}
            style={styles.ImageBackground_0_1458}
          />
          <View style={styles.View_0_1459}>
            <Text style={styles.Text_0_1459}>Leave Application</Text>
          </View>
          <View style={styles.View_0_1460}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67dc/9308/4632f5d34ce09ed931dab0742bde5488"
              }}
              style={styles.ImageBackground_0_1463}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5a9/1a23/43180a576fd0931ea678b9abcca5a12e"
              }}
              style={styles.ImageBackground_0_1464}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5a9/1a23/43180a576fd0931ea678b9abcca5a12e"
              }}
              style={styles.ImageBackground_0_1465}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bee/1cf7/a0e18a17c094c9641dca4388b3cbf544"
              }}
              style={styles.ImageBackground_0_1466}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba2/6618/c158c7e1a9e771be7441ebf233984d05"
              }}
              style={styles.ImageBackground_0_1467}
            />
          </View>
        </View>
        <View style={styles.View_0_1468}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44d9/2096/0fc6376059ebc0c0447fbb7ee763a1a6"
            }}
            style={styles.ImageBackground_0_1469}
          />
          <View style={styles.View_0_1470}>
            <Text style={styles.Text_0_1470}>Change Password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1037/27f7/2b3200fe7f70a896148feaa9e88c14af"
            }}
            style={styles.ImageBackground_0_1473}
          />
        </View>
      </View>
      <View style={styles.View_0_1475}>
        <View style={styles.View_I0_1475_0_2894}>
          <View style={styles.View_I0_1475_0_2895}>
            <View style={styles.View_I0_1475_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_1475_0_2897}
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
  View_0_1222: {
    width: 375,
    minWidth: 375,
    height: 1354,
    minHeight: 1354,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1223: {
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
  View_0_1224: {
    width: 333.41796875,
    minWidth: 333.41796875,
    height: 62.45204162597656,
    minHeight: 62.45204162597656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 160.989990234375
  },
  View_0_1225: {
    width: 268.06695556640625,
    minWidth: 268.06695556640625,
    height: 53.360015869140625,
    minHeight: 53.360015869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.9248046875,
    top: 4.697998046875
  },
  ImageBackground_0_1226: {
    width: 13.14794921875,
    minWidth: 13.14794921875,
    height: 13.14801025390625,
    minHeight: 13.14801025390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 254.9189453125,
    top: 0
  },
  ImageBackground_0_1232: {
    width: 13.14801025390625,
    minWidth: 13.14801025390625,
    height: 13.14801025390625,
    minHeight: 13.14801025390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 40.2120361328125
  },
  ImageBackground_0_1238: {
    width: 333.41796875,
    minWidth: 333.41796875,
    height: 62.45204162597656,
    minHeight: 62.45204162597656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1247: {
    width: 375,
    minWidth: 375,
    height: 1058,
    minHeight: 1058,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 296
  },
  View_0_1248: {
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
  View_I0_1248_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1248_0_2875: {
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
  View_I0_1248_0_2876: {
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
  ImageBackground_I0_1248_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1248_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_1248_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_1248_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_1248_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_1248_0_2891: {
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
  View_I0_1248_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_1248_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1249: {
    width: 62,
    minWidth: 62,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 89
  },
  View_0_1252: {
    width: 170,
    minWidth: 170,
    height: 104,
    minHeight: 104,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 69
  },
  View_0_1253: {
    width: 170,
    minWidth: 170,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 47
  },
  Text_0_1253: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1254: {
    width: 123,
    minWidth: 123,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1255: {
    width: 84,
    minWidth: 84,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 80
  },
  View_0_1256: {
    width: 61,
    minWidth: 61,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 83
  },
  Text_0_1256: {
    color: "rgba(97, 132, 199, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1257: {
    width: 343,
    minWidth: 343,
    height: 1118,
    minHeight: 1118,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 204
  },
  View_0_1258: {
    width: 163,
    minWidth: 163,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1259: {
    width: 163,
    minWidth: 163,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1262: {
    width: 72,
    minWidth: 72,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.8056640625,
    top: 22.447021484375
  },
  ImageBackground_0_1263: {
    width: 72,
    minWidth: 72,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1264: {
    width: 31.985267639160156,
    minWidth: 31.985267639160156,
    height: 40.301239013671875,
    minHeight: 40.301239013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.1884765625,
    top: 15.555419921875
  },
  View_0_1267: {
    width: 102,
    minWidth: 102,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 108
  },
  Text_0_1267: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1268: {
    width: 77,
    minWidth: 77,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 162
  },
  Text_0_1268: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1269: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 514
  },
  ImageBackground_0_1270: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1271: {
    width: 48,
    minWidth: 48,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1272: {
    width: 33.0830078125,
    minWidth: 33.0830078125,
    height: 38.50799560546875,
    minHeight: 38.50799560546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.9033203125,
    top: 27.877685546875
  },
  ImageBackground_0_1275: {
    width: 33.0830078125,
    minWidth: 33.0830078125,
    height: 38.50799560546875,
    minHeight: 38.50799560546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1285: {
    width: 1.7669677734375,
    minWidth: 1.7669677734375,
    height: 2.490966796875,
    minHeight: 2.490966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.94921875,
    top: 7.28125
  },
  View_0_1286: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 662
  },
  ImageBackground_0_1287: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1288: {
    width: 84,
    minWidth: 84,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1288: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1289: {
    width: 38.30598068237305,
    minWidth: 38.30598068237305,
    height: 38.30712890625,
    minHeight: 38.30712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.0830078125,
    top: 28.0830078125
  },
  ImageBackground_0_1290: {
    width: 8.978130340576172,
    minWidth: 8.978130340576172,
    height: 8.9781494140625,
    minHeight: 8.9781494140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.2451171875,
    top: 0
  },
  ImageBackground_0_1292: {
    width: 8.97802734375,
    minWidth: 8.97802734375,
    height: 8.97802734375,
    minHeight: 8.97802734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.083984375,
    top: 22.59521484375
  },
  ImageBackground_0_1296: {
    width: 24.67615509033203,
    minWidth: 24.67615509033203,
    height: 20.20013427734375,
    minHeight: 20.20013427734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18.10595703125
  },
  ImageBackground_0_1298: {
    width: 13.467002868652344,
    minWidth: 13.467002868652344,
    height: 6.7340087890625,
    minHeight: 6.7340087890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8.97802734375
  },
  ImageBackground_0_1300: {
    width: 13.46697998046875,
    minWidth: 13.46697998046875,
    height: 6.7340087890625,
    minHeight: 6.7340087890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.8388671875,
    top: 31.5732421875
  },
  ImageBackground_0_1304: {
    width: 24.693389892578125,
    minWidth: 24.693389892578125,
    height: 20.2000732421875,
    minHeight: 20.2000732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.6083984375,
    top: 0
  },
  View_0_1305: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 986
  },
  ImageBackground_0_1306: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1307: {
    width: 50,
    minWidth: 50,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1308: {
    width: 40.40704345703125,
    minWidth: 40.40704345703125,
    height: 37.6300048828125,
    minHeight: 37.6300048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 27.805908203125
  },
  View_0_1309: {
    width: 40.40704345703125,
    minWidth: 40.40704345703125,
    height: 37.6300048828125,
    minHeight: 37.6300048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1310: {
    width: 17.4580078125,
    minWidth: 17.4580078125,
    height: 17.4580078125,
    minHeight: 17.4580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.94921875,
    top: 20.172119140625
  },
  View_0_1311: {
    width: 17.4580078125,
    minWidth: 17.4580078125,
    height: 17.4580078125,
    minHeight: 17.4580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1312: {
    width: 17.4580078125,
    minWidth: 17.4580078125,
    height: 17.4580078125,
    minHeight: 17.4580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1315: {
    width: 17.4580078125,
    minWidth: 17.4580078125,
    height: 17.4580078125,
    minHeight: 17.4580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1316: {
    width: 7.4952545166015625,
    minWidth: 7.4952545166015625,
    height: 5.931640625,
    minHeight: 5.931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.2802734375,
    top: 24.456298828125
  },
  View_0_1317: {
    width: 7.4952545166015625,
    minWidth: 7.4952545166015625,
    height: 5.931640625,
    minHeight: 5.931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1318: {
    width: 7.4952545166015625,
    minWidth: 7.4952545166015625,
    height: 5.931640625,
    minHeight: 5.931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1320: {
    width: 5.5260009765625,
    minWidth: 5.5260009765625,
    height: 11.5260009765625,
    minHeight: 11.5260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.638671875,
    top: 0
  },
  View_0_1321: {
    width: 5.5260009765625,
    minWidth: 5.5260009765625,
    height: 11.5260009765625,
    minHeight: 11.5260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1322: {
    width: 5.5260009765625,
    minWidth: 5.5260009765625,
    height: 11.5260009765625,
    minHeight: 11.5260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1324: {
    width: 5.526031494140625,
    minWidth: 5.526031494140625,
    height: 11.5260009765625,
    minHeight: 11.5260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.564453125,
    top: 0
  },
  View_0_1325: {
    width: 5.526031494140625,
    minWidth: 5.526031494140625,
    height: 11.5260009765625,
    minHeight: 11.5260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1326: {
    width: 5.526031494140625,
    minWidth: 5.526031494140625,
    height: 11.5260009765625,
    minHeight: 11.5260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1328: {
    width: 5.507011413574219,
    minWidth: 5.507011413574219,
    height: 5.506103515625,
    minHeight: 5.506103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.638671875,
    top: 17.77197265625
  },
  View_0_1329: {
    width: 5.507011413574219,
    minWidth: 5.507011413574219,
    height: 5.506103515625,
    minHeight: 5.506103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1330: {
    width: 5.507011413574219,
    minWidth: 5.507011413574219,
    height: 5.506103515625,
    minHeight: 5.506103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1332: {
    width: 5.5070037841796875,
    minWidth: 5.5070037841796875,
    height: 5.5030517578125,
    minHeight: 5.5030517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.111328125,
    top: 17.774169921875
  },
  View_0_1333: {
    width: 5.5070037841796875,
    minWidth: 5.5070037841796875,
    height: 5.5030517578125,
    minHeight: 5.5030517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1334: {
    width: 5.5070037841796875,
    minWidth: 5.5070037841796875,
    height: 5.5030517578125,
    minHeight: 5.5030517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1336: {
    width: 5.50299072265625,
    minWidth: 5.50299072265625,
    height: 5.4609375,
    minHeight: 5.4609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.5830078125,
    top: 17.77099609375
  },
  View_0_1337: {
    width: 5.50299072265625,
    minWidth: 5.50299072265625,
    height: 5.4609375,
    minHeight: 5.4609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1338: {
    width: 5.50299072265625,
    minWidth: 5.50299072265625,
    height: 5.4609375,
    minHeight: 5.4609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1340: {
    width: 5.506004333496094,
    minWidth: 5.506004333496094,
    height: 5.501953125,
    minHeight: 5.501953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.638671875,
    top: 24.946044921875
  },
  View_0_1341: {
    width: 5.506004333496094,
    minWidth: 5.506004333496094,
    height: 5.501953125,
    minHeight: 5.501953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1342: {
    width: 5.506004333496094,
    minWidth: 5.506004333496094,
    height: 5.501953125,
    minHeight: 5.501953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1344: {
    width: 5.501007080078125,
    minWidth: 5.501007080078125,
    height: 5.5009765625,
    minHeight: 5.5009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.1181640625,
    top: 24.947021484375
  },
  View_0_1345: {
    width: 5.501007080078125,
    minWidth: 5.501007080078125,
    height: 5.5009765625,
    minHeight: 5.5009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1346: {
    width: 5.501007080078125,
    minWidth: 5.501007080078125,
    height: 5.5009765625,
    minHeight: 5.5009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1348: {
    width: 33.728004455566406,
    minWidth: 33.728004455566406,
    height: 32.2449951171875,
    minHeight: 32.2449951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 5.35693359375
  },
  View_0_1349: {
    width: 33.728004455566406,
    minWidth: 33.728004455566406,
    height: 32.2449951171875,
    minHeight: 32.2449951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1350: {
    width: 33.728004455566406,
    minWidth: 33.728004455566406,
    height: 32.2449951171875,
    minHeight: 32.2449951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1352: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 366
  },
  ImageBackground_0_1353: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1354: {
    width: 114,
    minWidth: 114,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1354: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1355: {
    width: 56.74676513671875,
    minWidth: 56.74676513671875,
    height: 32.78204345703125,
    minHeight: 32.78204345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.5634765625,
    top: 29.4180908203125
  },
  ImageBackground_0_1358: {
    width: 13.042495727539062,
    minWidth: 13.042495727539062,
    height: 11.0408935546875,
    minHeight: 11.0408935546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.451171875,
    top: 0
  },
  ImageBackground_0_1359: {
    width: 19.57235336303711,
    minWidth: 19.57235336303711,
    height: 26.93951416015625,
    minHeight: 26.93951416015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.7431640625,
    top: 5.711181640625
  },
  ImageBackground_0_1360: {
    width: 16.982257843017578,
    minWidth: 16.982257843017578,
    height: 12.280517578125,
    minHeight: 12.280517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.0888671875,
    top: 14.7908935546875
  },
  ImageBackground_0_1363: {
    width: 8.413658142089844,
    minWidth: 8.413658142089844,
    height: 8.09130859375,
    minHeight: 8.09130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.712890625,
    top: 20.8887939453125
  },
  ImageBackground_0_1367: {
    width: 5.555671691894531,
    minWidth: 5.555671691894531,
    height: 5.55322265625,
    minHeight: 5.55322265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.09375,
    top: 9.2235107421875
  },
  ImageBackground_0_1370: {
    width: 5.437023162841797,
    minWidth: 5.437023162841797,
    height: 5.39501953125,
    minHeight: 5.39501953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.923828125,
    top: 9.4188232421875
  },
  ImageBackground_0_1371: {
    width: 7.9238433837890625,
    minWidth: 7.9238433837890625,
    height: 3.9234619140625,
    minHeight: 3.9234619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.26953125,
    top: 26.3026123046875
  },
  ImageBackground_0_1372: {
    width: 3.9377517700195312,
    minWidth: 3.9377517700195312,
    height: 6.042236328125,
    minHeight: 6.042236328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.7197265625,
    top: 26.7398681640625
  },
  ImageBackground_0_1373: {
    width: 7.489990234375,
    minWidth: 7.489990234375,
    height: 3.7979736328125,
    minHeight: 3.7979736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.2978515625,
    top: 8.6549072265625
  },
  ImageBackground_0_1374: {
    width: 4.179931640625,
    minWidth: 4.179931640625,
    height: 2.32049560546875,
    minHeight: 2.32049560546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.5390625,
    top: 11.125732421875
  },
  ImageBackground_0_1375: {
    width: 4.817863464355469,
    minWidth: 4.817863464355469,
    height: 4.6678466796875,
    minHeight: 4.6678466796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.3056640625,
    top: 19.176025390625
  },
  ImageBackground_0_1376: {
    width: 4.042182922363281,
    minWidth: 4.042182922363281,
    height: 5.91998291015625,
    minHeight: 5.91998291015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.384765625,
    top: 2.1239013671875
  },
  ImageBackground_0_1377: {
    width: 4.2529296875,
    minWidth: 4.2529296875,
    height: 5.9010009765625,
    minHeight: 5.9010009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.048828125,
    top: 3.141845703125
  },
  ImageBackground_0_1378: {
    width: 1.0610198974609375,
    minWidth: 1.0610198974609375,
    height: 6.68499755859375,
    minHeight: 6.68499755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.8857421875,
    top: 0.6768798828125
  },
  ImageBackground_0_1379: {
    width: 6.030170440673828,
    minWidth: 6.030170440673828,
    height: 3.3370361328125,
    minHeight: 3.3370361328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.6142578125,
    top: 5.6348876953125
  },
  ImageBackground_0_1380: {
    width: 6.030029296875,
    minWidth: 6.030029296875,
    height: 3.364013671875,
    minHeight: 3.364013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.224609375,
    top: 6.7188720703125
  },
  ImageBackground_0_1381: {
    width: 1.0524368286132812,
    minWidth: 1.0524368286132812,
    height: 6.65301513671875,
    minHeight: 6.65301513671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.5615234375,
    top: 1.75390625
  },
  ImageBackground_0_1382: {
    width: 12.12890625,
    minWidth: 12.12890625,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44.6181640625,
    top: 17.3165283203125
  },
  ImageBackground_0_1383: {
    width: 8.450927734375,
    minWidth: 8.450927734375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.2861328125,
    top: 16.4285888671875
  },
  ImageBackground_0_1384: {
    width: 8.4208984375,
    minWidth: 8.4208984375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.111328125,
    top: 18.2689208984375
  },
  ImageBackground_0_1385: {
    width: 1.8274383544921875,
    minWidth: 1.8274383544921875,
    height: 2.24755859375,
    minHeight: 2.24755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.42578125,
    top: 20.999267578125
  },
  ImageBackground_0_1386: {
    width: 1,
    minWidth: 1,
    height: 2.1820068359375,
    minHeight: 2.1820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.6591796875,
    top: 6.118896484375
  },
  ImageBackground_0_1387: {
    width: 1,
    minWidth: 1,
    height: 2.32000732421875,
    minHeight: 2.32000732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24.10693359375
  },
  ImageBackground_0_1388: {
    width: 1,
    minWidth: 1,
    height: 1.509033203125,
    minHeight: 1.509033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.703125,
    top: 24.4698486328125
  },
  ImageBackground_0_1389: {
    width: 1,
    minWidth: 1,
    height: 1.4169921875,
    minHeight: 1.4169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.06640625,
    top: 6.4569091796875
  },
  View_0_1390: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 366
  },
  ImageBackground_0_1391: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1392: {
    width: 83,
    minWidth: 83,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1392: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1395: {
    width: 36.44007873535156,
    minWidth: 36.44007873535156,
    height: 39.2890625,
    minHeight: 39.2890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 25.68896484375
  },
  View_0_1398: {
    width: 163,
    minWidth: 163,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 0
  },
  ImageBackground_0_1399: {
    width: 163,
    minWidth: 163,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1402: {
    width: 72,
    minWidth: 72,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.8056640625,
    top: 22.447021484375
  },
  ImageBackground_0_1403: {
    width: 72,
    minWidth: 72,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1404: {
    width: 32.82130432128906,
    minWidth: 32.82130432128906,
    height: 39.85374450683594,
    minHeight: 39.85374450683594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.1904296875,
    top: 16.0035400390625
  },
  ImageBackground_0_1407: {
    width: 32.82130432128906,
    minWidth: 32.82130432128906,
    height: 28.498733520507812,
    minHeight: 28.498733520507812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 11.35498046875
  },
  ImageBackground_0_1408: {
    width: 21.383590698242188,
    minWidth: 21.383590698242188,
    height: 9.235458374023438,
    minHeight: 9.235458374023438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.7314453125,
    top: 0
  },
  View_0_1409: {
    width: 81,
    minWidth: 81,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 108
  },
  Text_0_1409: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1410: {
    width: 60,
    minWidth: 60,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 162
  },
  Text_0_1410: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1411: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 514
  },
  ImageBackground_0_1412: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1413: {
    width: 82,
    minWidth: 82,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1413: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1414: {
    width: 33.908660888671875,
    minWidth: 33.908660888671875,
    height: 35.39019775390625,
    minHeight: 35.39019775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.8701171875,
    top: 29.341796875
  },
  ImageBackground_0_1417: {
    width: 33.908660888671875,
    minWidth: 33.908660888671875,
    height: 35.39019775390625,
    minHeight: 35.39019775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1418: {
    width: 15.335723876953125,
    minWidth: 15.335723876953125,
    height: 14.70501708984375,
    minHeight: 14.70501708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.30859375,
    top: 16.258056640625
  },
  View_0_1419: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 662
  },
  ImageBackground_0_1420: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1421: {
    width: 109,
    minWidth: 109,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1421: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1422: {
    width: 41.6710205078125,
    minWidth: 41.6710205078125,
    height: 40.73199462890625,
    minHeight: 40.73199462890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.3603515625,
    top: 26.68212890625
  },
  ImageBackground_0_1425: {
    width: 33.83599853515625,
    minWidth: 33.83599853515625,
    height: 33.8380126953125,
    minHeight: 33.8380126953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1426: {
    width: 18.552978515625,
    minWidth: 18.552978515625,
    height: 6.8489990234375,
    minHeight: 6.8489990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.0205078125,
    top: 27.574951171875
  },
  ImageBackground_0_1427: {
    width: 7.03546142578125,
    minWidth: 7.03546142578125,
    height: 19.25506591796875,
    minHeight: 19.25506591796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.0029296875,
    top: 6.64599609375
  },
  ImageBackground_0_1428: {
    width: 12.8990478515625,
    minWidth: 12.8990478515625,
    height: 5.7919921875,
    minHeight: 5.7919921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.3828125,
    top: 34.93994140625
  },
  ImageBackground_0_1429: {
    width: 4.10498046875,
    minWidth: 4.10498046875,
    height: 9.0860595703125,
    minHeight: 9.0860595703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37.56640625,
    top: 14.83984375
  },
  ImageBackground_0_1430: {
    width: 4.305328369140625,
    minWidth: 4.305328369140625,
    height: 4.3018798828125,
    minHeight: 4.3018798828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.7822265625,
    top: 9.7900390625
  },
  View_0_1431: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 986
  },
  ImageBackground_0_1432: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1433: {
    width: 53,
    minWidth: 53,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1433: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1434: {
    width: 34.68901062011719,
    minWidth: 34.68901062011719,
    height: 37.4039306640625,
    minHeight: 37.4039306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.0029296875,
    top: 26.64013671875
  },
  ImageBackground_0_1437: {
    width: 20.639358520507812,
    minWidth: 20.639358520507812,
    height: 37.4039306640625,
    minHeight: 37.4039306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.0498046875,
    top: 0
  },
  ImageBackground_0_1438: {
    width: 20.075927734375,
    minWidth: 20.075927734375,
    height: 13.4593505859375,
    minHeight: 13.4593505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 10.474609375
  },
  ImageBackground_0_1439: {
    width: 2.9900970458984375,
    minWidth: 2.9900970458984375,
    height: 7.72705078125,
    minHeight: 7.72705078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.0654296875,
    top: 23.18017578125
  },
  View_0_1440: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 218
  },
  ImageBackground_0_1441: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1442: {
    width: 70,
    minWidth: 70,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1442: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1443: {
    width: 39.49998474121094,
    minWidth: 39.49998474121094,
    height: 39.501007080078125,
    minHeight: 39.501007080078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.5,
    top: 26.5
  },
  View_0_1448: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 218
  },
  ImageBackground_0_1449: {
    width: 163,
    minWidth: 163,
    height: 132,
    minHeight: 132,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1450: {
    width: 89,
    minWidth: 89,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1450: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1451: {
    width: 28.072998046875,
    minWidth: 28.072998046875,
    height: 40.42901611328125,
    minHeight: 40.42901611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.5234375,
    top: 26.9849853515625
  },
  View_0_1457: {
    width: 163,
    minWidth: 163,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 810
  },
  ImageBackground_0_1458: {
    width: 163,
    minWidth: 163,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1459: {
    width: 133,
    minWidth: 133,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1459: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1460: {
    width: 37.800079345703125,
    minWidth: 37.800079345703125,
    height: 37.803955078125,
    minHeight: 37.803955078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.00390625,
    top: 29.60302734375
  },
  ImageBackground_0_1463: {
    width: 37.800079345703125,
    minWidth: 37.800079345703125,
    height: 34.931640625,
    minHeight: 34.931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.872314453125
  },
  ImageBackground_0_1464: {
    width: 2.9420013427734375,
    minWidth: 2.9420013427734375,
    height: 7.3026123046875,
    minHeight: 7.3026123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7001953125,
    top: 0
  },
  ImageBackground_0_1465: {
    width: 2.91961669921875,
    minWidth: 2.91961669921875,
    height: 7.302734375,
    minHeight: 7.302734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.1728515625,
    top: 0
  },
  ImageBackground_0_1466: {
    width: 4.780677795410156,
    minWidth: 4.780677795410156,
    height: 10.2540283203125,
    minHeight: 10.2540283203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.5673828125,
    top: 14.49951171875
  },
  ImageBackground_0_1467: {
    width: 4.416618347167969,
    minWidth: 4.416618347167969,
    height: 4.417724609375,
    minHeight: 4.417724609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.6826171875,
    top: 27.619384765625
  },
  View_0_1468: {
    width: 163,
    minWidth: 163,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 810
  },
  ImageBackground_0_1469: {
    width: 163,
    minWidth: 163,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1470: {
    width: 133,
    minWidth: 133,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 89
  },
  Text_0_1470: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1473: {
    width: 31.407012939453125,
    minWidth: 31.407012939453125,
    height: 40.4478759765625,
    minHeight: 40.4478759765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 26.966064453125
  },
  View_0_1475: {
    width: 375,
    minWidth: 375,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1338,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1475_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1475_0_2895: {
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
  View_I0_1475_0_2896: {
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
  ImageBackground_I0_1475_0_2897: {
    width: 134,
    height: 5,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_2: { height: 1352 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
