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
      <View style={styles.View_0_3}>
        <View style={styles.View_0_4}>
          <View style={styles.View_0_5} />
          <View style={styles.View_0_6} />
        </View>
        <View style={styles.View_0_7}>
          <View style={styles.View_0_8} />
          <View style={styles.View_0_9}>
            <View style={styles.View_0_10}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/761b/1354/661b69c3245d8304f39973ae2be3d4e9"
                }}
                style={styles.ImageBackground_0_11}
              />
              <View style={styles.View_0_12}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f83c/58d3/9d17839e5b7944e9cf2aae06d179f60e"
                  }}
                  style={styles.ImageBackground_0_13}
                />
                <View style={styles.View_0_17}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/789f/d964/753284f5a5ee41cf87150c345ceddd86"
                    }}
                    style={styles.ImageBackground_0_18}
                  />
                  <View style={styles.View_0_24}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f37/9bb6/0beabd2d7c7be38103058dad0a31a21a"
                      }}
                      style={styles.ImageBackground_0_25}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81f5/7031/8f08d57eedb5dca70384c888b21afd84"
                      }}
                      style={styles.ImageBackground_0_27}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f63d/2422/65fd434350eb9684794999707b2ed3b0"
                      }}
                      style={styles.ImageBackground_0_28}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abb9/7a40/e2cd242123d6f2801cf7c42a2ae66001"
                      }}
                      style={styles.ImageBackground_0_29}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4527/2282/0c57518b4687297f70b293dc49bc9482"
                      }}
                      style={styles.ImageBackground_0_30}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5ce/4a7a/8d3fd1e75d181812eebc9cad0c304e37"
                      }}
                      style={styles.ImageBackground_0_31}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c8/2cb4/2b57602fdd65f88ee362b0653f9fda23"
                      }}
                      style={styles.ImageBackground_0_32}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a03/b82a/7acc6eee64b94bd85509cd39e4cafb17"
                      }}
                      style={styles.ImageBackground_0_33}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a05d/ff43/223f427f040190db643f308ce6c4c491"
                    }}
                    style={styles.ImageBackground_0_34}
                  />
                  <View style={styles.View_0_43}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a41a/f1d1/7a52b8aec61169a753411e48dc5388cd"
                      }}
                      style={styles.ImageBackground_0_44}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d117/46fd/5f66dbbe32a287afae46ddd8e3e7c977"
                      }}
                      style={styles.ImageBackground_0_45}
                    />
                    <View style={styles.View_0_46}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4853/b409/04df70b36bbfae3874fd33ffd10daefb"
                        }}
                        style={styles.ImageBackground_0_47}
                      />
                    </View>
                  </View>
                  <View style={styles.View_0_49}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4357/b568/5c2ceb7cbbecdf45b0b9b3e69a18a7f2"
                      }}
                      style={styles.ImageBackground_0_50}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93c6/2b16/a132759479b8d611077a254c1952fbc4"
                      }}
                      style={styles.ImageBackground_0_56}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6815/61cd/ab38a6680cd03a9c8537909dd630ea7f"
                  }}
                  style={styles.ImageBackground_0_62}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc87/9dc2/b56db5dd58f87b1c9bb459caf8d51a2e"
                  }}
                  style={styles.ImageBackground_0_63}
                />
                <View style={styles.View_0_73}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/019e/e0ce/aa2a2d6162e6a069861af54032a64135"
                    }}
                    style={styles.ImageBackground_0_74}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b562/f54b/f4bf2029f0b6a85684cb4f4731dd1fff"
                    }}
                    style={styles.ImageBackground_0_76}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3c9/2e43/0e637f33c10c419c955bc57873835444"
                    }}
                    style={styles.ImageBackground_0_77}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7310/e6123fa2fef9c3c7cebdcdc64f4caff6"
                    }}
                    style={styles.ImageBackground_0_82}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53e9/dad9/e2cd2a053fde28ea2299669241f0a9fb"
                    }}
                    style={styles.ImageBackground_0_83}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6e2/4699/6f2af28557f4783a356230811d4e77f8"
                    }}
                    style={styles.ImageBackground_0_84}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b6f/5ae6/b8de47db2454d8166172c3c0b2ee2723"
                    }}
                    style={styles.ImageBackground_0_85}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef86/80fc/51b06ecacb2b8bc8b3bd16d6521423e8"
                    }}
                    style={styles.ImageBackground_0_86}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81fb/30d3/14e56136efd67c95fb213c9dc8d1578b"
                    }}
                    style={styles.ImageBackground_0_87}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bf/681d/af2b36c0f64dacf7ffc54df7bfe70396"
                    }}
                    style={styles.ImageBackground_0_88}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59fd/398b/a5ab400eb69f7dd3f13a35346a31b688"
                    }}
                    style={styles.ImageBackground_0_89}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b8c/5959/41426ebb88ee1f233b2e2de7bc76e4e4"
                    }}
                    style={styles.ImageBackground_0_90}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d96b/9dc0/4e0dd736282f6472e835ed95755c14f8"
                    }}
                    style={styles.ImageBackground_0_91}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a93/5ed9/5e485b42c159df54519a3040e0bd8c3b"
                    }}
                    style={styles.ImageBackground_0_92}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b99/e9de/64d674cdaaee5b97874068f2bb014e20"
                    }}
                    style={styles.ImageBackground_0_93}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fce/248e/249925b689e315f232d401c33931109a"
                    }}
                    style={styles.ImageBackground_0_98}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/662e/7621/21dcd7218bb9590db9184bb9e3c36174"
                    }}
                    style={styles.ImageBackground_0_103}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa6d/37fc/66fbc53e9707943bd7b5d8b2db3299a5"
                    }}
                    style={styles.ImageBackground_0_107}
                  />
                  <View style={styles.View_0_111}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc20/952d/86de3f892c48894d2a69640ed00c5079"
                      }}
                      style={styles.ImageBackground_0_112}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ea6/49e0/83fd44578aef3c64fe138da04be09dff"
                      }}
                      style={styles.ImageBackground_0_113}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e8f/6053/049a43f1a0287f84c68a053127d936e8"
                      }}
                      style={styles.ImageBackground_0_120}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9b2/4a0d/a0d885ba801f6e93f5b5d358ae2ac831"
                      }}
                      style={styles.ImageBackground_0_122}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63cd/8760/fb4dfd21f0b36c02ad37c91a28e51b96"
                      }}
                      style={styles.ImageBackground_0_125}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1be/a882/5bc69fa6b9a414dac7bc18070f7a1a3f"
                      }}
                      style={styles.ImageBackground_0_126}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0feb/3a6c/0ff437f1f5ce30dfed1464f56ee59fbb"
                      }}
                      style={styles.ImageBackground_0_127}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02cf/c7d6/0694b04afd23f7a850bc38392c342974"
                      }}
                      style={styles.ImageBackground_0_128}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3c8/5179/7f8031cb8070600add46e93641776db5"
                    }}
                    style={styles.ImageBackground_0_129}
                  />
                </View>
                <View style={styles.View_0_133}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/144c/da55/bb5accd0ab920e282c1427f2c77a16e6"
                    }}
                    style={styles.ImageBackground_0_134}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8089/3964/91fa3e83287adda9fc2fafcc841b0029"
                    }}
                    style={styles.ImageBackground_0_137}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0626/258f/eb4aca92de614179524706f0644cdf64"
                    }}
                    style={styles.ImageBackground_0_138}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0123/f8ad/dbeb5ab11c135afd29368694a0a3d933"
                    }}
                    style={styles.ImageBackground_0_139}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa5c/14a6/0f94ff254995124f6b03f701e2ca022f"
                    }}
                    style={styles.ImageBackground_0_140}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e645/d086/5409e5d220225c3f3f64b4dc8583e99c"
                    }}
                    style={styles.ImageBackground_0_141}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c290/05b6/7434511aed00eaf7754692bf8b10326e"
                    }}
                    style={styles.ImageBackground_0_142}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0869/d83b/93eee7f038b56e42bd07d02f2a7c6838"
                    }}
                    style={styles.ImageBackground_0_143}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6fa/7a55/4e98f29bf1e38fa496aa8e19a2df46de"
                    }}
                    style={styles.ImageBackground_0_144}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f669/ad2c/f1357a56ed912dfc63b3a1c7bad3a768"
                    }}
                    style={styles.ImageBackground_0_145}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b6/55b3/6edad68731162e16ebd09bbd1058d920"
                    }}
                    style={styles.ImageBackground_0_146}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d92/1d10/f4ed1092cd585f5b6b561134119efea9"
                    }}
                    style={styles.ImageBackground_0_147}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfd8/8bfc/f8fccd1eec8cd3a9d92043232443235f"
                    }}
                    style={styles.ImageBackground_0_148}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e034/c88e/c2c0c06b72c96237c956935967d56022"
                    }}
                    style={styles.ImageBackground_0_149}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0c3/d195/c9ac01bbe392d5bb2cde87b4e1f0da74"
                    }}
                    style={styles.ImageBackground_0_168}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/367b/99d9/2577a6f7325e04c5d1261e904432f842"
                    }}
                    style={styles.ImageBackground_0_169}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07b5/5042/da37640238089b51e967c4ae66d75000"
                    }}
                    style={styles.ImageBackground_0_170}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cee/a4d3/d13a2fe9fc39f10aea16958cb68294a9"
                    }}
                    style={styles.ImageBackground_0_173}
                  />
                  <View style={styles.View_0_176}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/5014/98e7710b31c98aa164bb5464e74d3116"
                      }}
                      style={styles.ImageBackground_0_179}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea4d/07aa/d9580ec462c5f704a3a23968ef06ab9d"
                    }}
                    style={styles.ImageBackground_0_180}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7d3/8e61/c3bad06767a9549f5994ac349a59c48d"
                    }}
                    style={styles.ImageBackground_0_187}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2825/7f5c/0ab114d73671f750b06a5eb57d34ba42"
                    }}
                    style={styles.ImageBackground_0_190}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b10/e5fe/d842abaa2192e054b2ef8766c3e0ca65"
                    }}
                    style={styles.ImageBackground_0_193}
                  />
                  <View style={styles.View_0_197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1a6/a145/fff1eb873c7455f6099af10f1772c505"
                      }}
                      style={styles.ImageBackground_0_200}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4706/4efb/5d20d30142645c08699bcc3d0902f014"
                    }}
                    style={styles.ImageBackground_0_201}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5835/5b1d/705fa6ea92d03d10215d6ff2cfe82e70"
                    }}
                    style={styles.ImageBackground_0_210}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ba3/f67e/ecc2aae8e38291917c2b54b20b902c1c"
                    }}
                    style={styles.ImageBackground_0_217}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ed/f562/49a6b8551b1f2fa0840313168e0c9ea6"
                    }}
                    style={styles.ImageBackground_0_223}
                  />
                </View>
                <View style={styles.View_0_224}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91bd/ed45/e53efe0b24182dee53d6694d18892eb6"
                    }}
                    style={styles.ImageBackground_0_225}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc9e/2115/78089206d115b78b2af2bf70a33a417c"
                    }}
                    style={styles.ImageBackground_0_226}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baed/78e6/02eee92124a80c0800350c463d94250a"
                    }}
                    style={styles.ImageBackground_0_227}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ca/ce08/1dc186c9af71556bcc00ed050426e072"
                    }}
                    style={styles.ImageBackground_0_228}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/036c/be7f/5e2254503a5ff82113be1240cfce6179"
                    }}
                    style={styles.ImageBackground_0_229}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc65/ae31/6ba9948564587c3f1fe5483de0c92098"
                    }}
                    style={styles.ImageBackground_0_237}
                  />
                  <View style={styles.View_0_241}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5a4/a27e/0e0980ee260bdbe43b675b81406a5747"
                      }}
                      style={styles.ImageBackground_0_242}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd41/adbe/f6e93b45da4ca7c7f944426de37ef9a7"
                      }}
                      style={styles.ImageBackground_0_243}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89ac/2b24/16b9f05425174497b58827def50df32d"
                      }}
                      style={styles.ImageBackground_0_244}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5308/3e02/de338b17d6e223150e0a11b67ff0ecb2"
                      }}
                      style={styles.ImageBackground_0_245}
                    />
                    <View style={styles.View_0_246}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f208/bccb/fec4ffc40f465a663860b0e0293a48d1"
                        }}
                        style={styles.ImageBackground_0_247}
                      />
                      <View style={styles.View_0_248}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e124/dbb0/b5a184a04e264926cb9f7dbd809b77d8"
                          }}
                          style={styles.ImageBackground_0_249}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/166a/6494/c2cb019c325aec20a986cf861dd63e7e"
                          }}
                          style={styles.ImageBackground_0_250}
                        />
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d4/3aa4/ba63cd7ad85a6652610594907833e4a7"
                      }}
                      style={styles.ImageBackground_0_252}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bb4/ee3a/57641966216e2418da01a014aab79dfa"
                      }}
                      style={styles.ImageBackground_0_253}
                    />
                    <View style={styles.View_0_254}>
                      <View style={styles.View_0_255}>
                        <View style={styles.View_0_256}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3d1/dac6/0552e490312e1345cba360d8d047fa39"
                            }}
                            style={styles.ImageBackground_0_257}
                          />
                          <View style={styles.View_0_258}>
                            <View style={styles.View_0_259}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f446/3d69/84dbdb9ef203e830f8d80f4bab60c9c2"
                                }}
                                style={styles.ImageBackground_0_260}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1faf/58d3/d058ba247f647844a6c9db9f4b4c5290"
                                }}
                                style={styles.ImageBackground_0_262}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5425/d9f9/dcaa0bb363706fcac3f3edb5c3197232"
                                }}
                                style={styles.ImageBackground_0_264}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ea7/2420/bd92e1e92d9dcc349ce6cb7b8c10ebf1"
                                }}
                                style={styles.ImageBackground_0_266}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8523/4139/dfa6606f2696b4ca9a6e0d11d84a6fdf"
                                }}
                                style={styles.ImageBackground_0_268}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5317/6ee4/ba54d94a417053b8d46dd9821ac42625"
                                }}
                                style={styles.ImageBackground_0_270}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f446/3d69/84dbdb9ef203e830f8d80f4bab60c9c2"
                                }}
                                style={styles.ImageBackground_0_272}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f446/3d69/84dbdb9ef203e830f8d80f4bab60c9c2"
                                }}
                                style={styles.ImageBackground_0_274}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b0c/daa7/1256658ba2aa03f93e8734a9057f4593"
                                }}
                                style={styles.ImageBackground_0_276}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f85/92cd/793d7e92683ed1b5248dcffe0b139e6b"
                                }}
                                style={styles.ImageBackground_0_278}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/987c/dcb9/d9753e2908ef7bef3c73e1e83736e7b0"
                                }}
                                style={styles.ImageBackground_0_280}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c095/03e1/802e301c1c8886b4d50458476c8a04b1"
                                }}
                                style={styles.ImageBackground_0_282}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca10/b467/170da760160adad056410196cd007e17"
                                }}
                                style={styles.ImageBackground_0_284}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ef/9e8f/afd7f703f5ce5c2d33a6b1d1fde16104"
                                }}
                                style={styles.ImageBackground_0_286}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/166f/1b4e/cf6a4ffbda4c54b2de2ec941a909fec7"
                                }}
                                style={styles.ImageBackground_0_288}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2775/56ed/e35512a0f734d65e508bfbd71a0b6f9a"
                                }}
                                style={styles.ImageBackground_0_290}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c54/9024/90d9079cdef2df1b2b1c96238d36142f"
                                }}
                                style={styles.ImageBackground_0_292}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6422/e512/84f055ee5809b9625eac66c1846248bd"
                                }}
                                style={styles.ImageBackground_0_294}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2221/a5e5/11eb25be65cc1a72696890c712cf4253"
                        }}
                        style={styles.ImageBackground_0_296}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a4/d656/59406d5231116b2b3db1f28f5a2faa95"
                        }}
                        style={styles.ImageBackground_0_297}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7580/bb56/114e9c8ac901e1d5e5e444bf12286ddf"
                }}
                style={styles.ImageBackground_0_316}
              />
              <View style={styles.View_0_334}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fbb/1ff9/ecb60e90cc067349809f4098619e5745"
                  }}
                  style={styles.ImageBackground_0_335}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be9c/109c/c05592444908fc42c14315c95de1052f"
                  }}
                  style={styles.ImageBackground_0_342}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4534/75c0/c9caf055bb6aca66728a7b3c935d4755"
                  }}
                  style={styles.ImageBackground_0_343}
                />
              </View>
              <View style={styles.View_0_344}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aa0/c26d/d5d205d7fef6de2b18649b838d049489"
                  }}
                  style={styles.ImageBackground_0_345}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c36f/fa82/fd6020e2a258854e4d9b8f6b51628d82"
                  }}
                  style={styles.ImageBackground_0_352}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2673/e2f9/9afd888b260370c221251af58bdf2a7e"
                  }}
                  style={styles.ImageBackground_0_353}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5d4/8b58/a41bc65deb9ac0e1e1031926c507d97d"
                }}
                style={styles.ImageBackground_0_354}
              />
              <View style={styles.View_0_355}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba58/77d9/456753cdf4b2769058d3a64f2d1c9f8f"
                  }}
                  style={styles.ImageBackground_0_356}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f6c/58b1/3e62a9a4b94e7c08d51686f1efd89ba1"
                  }}
                  style={styles.ImageBackground_0_357}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58bd/0324/37940570866235abd601851b0273fbb6"
                  }}
                  style={styles.ImageBackground_0_364}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2fc/2b9e/9465cef88983218176592d04fde3be32"
                  }}
                  style={styles.ImageBackground_0_365}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a1/a08f/982eb8f34edba60e361a5c7b7e2de435"
                  }}
                  style={styles.ImageBackground_0_366}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6061/5510/753b7db96f83e854c4ac9080e6d280f9"
                  }}
                  style={styles.ImageBackground_0_367}
                />
              </View>
              <View style={styles.View_0_368}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24e9/200a/d6384bf5ace3b09647f1901e5a248f94"
                  }}
                  style={styles.ImageBackground_0_369}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24e9/200a/d6384bf5ace3b09647f1901e5a248f94"
                  }}
                  style={styles.ImageBackground_0_375}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc95/396f/87778ceea636b9c40fd846a768fd10fb"
                }}
                style={styles.ImageBackground_0_381}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_390}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06ff/b328/944df662e9926f4ad1132d76073d4917"
          }}
          style={styles.ImageBackground_0_393}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7057/d083/6646f1354b2827b1666b0b805d6355c2"
          }}
          style={styles.ImageBackground_0_402}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_3: {
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
  View_0_4: {
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
  View_0_5: {
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
  View_0_6: {
    width: 374,
    minWidth: 374,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    top: 0.5,
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1
  },
  View_0_7: {
    width: 375,
    minWidth: 375,
    height: 385,
    minHeight: 385,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 428
  },
  View_0_8: {
    width: 375,
    minWidth: 375,
    height: 385,
    minHeight: 385,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_9: {
    width: 375,
    minWidth: 375,
    height: 385,
    minHeight: 385,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_10: {
    width: 551.3104248046875,
    minWidth: 551.3104248046875,
    height: 310.43896484375,
    minHeight: 310.43896484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_11: {
    width: 334.8479919433594,
    minWidth: 334.8479919433594,
    height: 17.979999542236328,
    minHeight: 17.979999542236328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 214.7275390625,
    top: 292.458984375
  },
  View_0_12: {
    width: 334.2654724121094,
    minWidth: 334.2654724121094,
    height: 224.466796875,
    minHeight: 224.466796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217.044921875,
    top: 39.1669921875
  },
  ImageBackground_0_13: {
    width: 31.957046508789062,
    minWidth: 31.957046508789062,
    height: 23.3870849609375,
    minHeight: 23.3870849609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148.4755859375,
    top: 125.666015625
  },
  View_0_17: {
    width: 334.2654724121094,
    minWidth: 334.2654724121094,
    height: 102.513427734375,
    minHeight: 102.513427734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 121.953369140625
  },
  ImageBackground_0_18: {
    width: 54.06298828125,
    minWidth: 54.06298828125,
    height: 66.6959228515625,
    minHeight: 66.6959228515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 10.016845703125
  },
  View_0_24: {
    width: 50.30474853515625,
    minWidth: 50.30474853515625,
    height: 68.87982177734375,
    minHeight: 68.87982177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.2802734375,
    top: 18.947021484375
  },
  ImageBackground_0_25: {
    width: 50.30474853515625,
    minWidth: 50.30474853515625,
    height: 68.8797607421875,
    minHeight: 68.8797607421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_27: {
    width: 33.6339111328125,
    minWidth: 33.6339111328125,
    height: 11.2279052734375,
    minHeight: 11.2279052734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.1328125,
    top: 0.6055908203125
  },
  ImageBackground_0_28: {
    width: 40.070350646972656,
    minWidth: 40.070350646972656,
    height: 45.02825927734375,
    minHeight: 45.02825927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23.8515625
  },
  ImageBackground_0_29: {
    width: 40.0418701171875,
    minWidth: 40.0418701171875,
    height: 30.126220703125,
    minHeight: 30.126220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.029296875,
    top: 38.7525634765625
  },
  ImageBackground_0_30: {
    width: 32.282283782958984,
    minWidth: 32.282283782958984,
    height: 62.9630126953125,
    minHeight: 62.9630126953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.513671875,
    top: 1.7236328125
  },
  ImageBackground_0_31: {
    width: 14.751953125,
    minWidth: 14.751953125,
    height: 6.5670166015625,
    minHeight: 6.5670166015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.3427734375,
    top: 3.0955810546875
  },
  ImageBackground_0_32: {
    width: 17.166316986083984,
    minWidth: 17.166316986083984,
    height: 37.950927734375,
    minHeight: 37.950927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.513671875,
    top: 26.7396240234375
  },
  ImageBackground_0_33: {
    width: 16.841064453125,
    minWidth: 16.841064453125,
    height: 22.70599365234375,
    minHeight: 22.70599365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.841796875,
    top: 41.986572265625
  },
  ImageBackground_0_34: {
    width: 223.46401977539062,
    minWidth: 223.46401977539062,
    height: 102.513427734375,
    minHeight: 102.513427734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.34765625,
    top: 0
  },
  View_0_43: {
    width: 29.370285034179688,
    minWidth: 29.370285034179688,
    height: 15.74322509765625,
    minHeight: 15.74322509765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66.283203125,
    top: 51.4324951171875
  },
  ImageBackground_0_44: {
    width: 29.370285034179688,
    minWidth: 29.370285034179688,
    height: 15.74322509765625,
    minHeight: 15.74322509765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_45: {
    width: 28.92156219482422,
    minWidth: 28.92156219482422,
    height: 12.1500244140625,
    minHeight: 12.1500244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0087890625,
    top: 3.5902099609375
  },
  View_0_46: {
    width: 16.910446166992188,
    minWidth: 16.910446166992188,
    height: 10.64141845703125,
    minHeight: 10.64141845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1865234375,
    top: 2.86083984375
  },
  ImageBackground_0_47: {
    width: 16.910446166992188,
    minWidth: 16.910446166992188,
    height: 10.64141845703125,
    minHeight: 10.64141845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_49: {
    width: 112.32122802734375,
    minWidth: 112.32122802734375,
    height: 86.69842529296875,
    minHeight: 86.69842529296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 221.9443359375,
    top: 0.0152587890625
  },
  ImageBackground_0_50: {
    width: 112.32122802734375,
    minWidth: 112.32122802734375,
    height: 86.69842529296875,
    minHeight: 86.69842529296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_56: {
    width: 46.510589599609375,
    minWidth: 46.510589599609375,
    height: 43.73883056640625,
    minHeight: 43.73883056640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.783203125,
    top: 6.8953857421875
  },
  ImageBackground_0_62: {
    width: 71.20337677001953,
    minWidth: 71.20337677001953,
    height: 60.782470703125,
    minHeight: 60.782470703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82.8798828125,
    top: 149.052978515625
  },
  ImageBackground_0_63: {
    width: 73.55675506591797,
    minWidth: 73.55675506591797,
    height: 78.246337890625,
    minHeight: 78.246337890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.5146484375,
    top: 62.251953125
  },
  View_0_73: {
    width: 124.20777893066406,
    minWidth: 124.20777893066406,
    height: 81.98419189453125,
    minHeight: 81.98419189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.974609375,
    top: 63.25146484375
  },
  ImageBackground_0_74: {
    width: 8.949844360351562,
    minWidth: 8.949844360351562,
    height: 25.3585205078125,
    minHeight: 25.3585205078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.6201171875,
    top: 18.732666015625
  },
  ImageBackground_0_76: {
    width: 5.97930908203125,
    minWidth: 5.97930908203125,
    height: 25.0040283203125,
    minHeight: 25.0040283203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.6201171875,
    top: 19.051513671875
  },
  ImageBackground_0_77: {
    width: 16.643692016601562,
    minWidth: 16.643692016601562,
    height: 28.77386474609375,
    minHeight: 28.77386474609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107.564453125,
    top: 30.0484619140625
  },
  ImageBackground_0_82: {
    width: 64.15950012207031,
    minWidth: 64.15950012207031,
    height: 64.9423828125,
    minHeight: 64.9423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.552734375,
    top: 6.9296875
  },
  ImageBackground_0_83: {
    width: 40.9039306640625,
    minWidth: 40.9039306640625,
    height: 27.388671875,
    minHeight: 27.388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.5546875,
    top: 44.4345703125
  },
  ImageBackground_0_84: {
    width: 13.8310546875,
    minWidth: 13.8310546875,
    height: 4.9031982421875,
    minHeight: 4.9031982421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96.0927734375,
    top: 37.452392578125
  },
  ImageBackground_0_85: {
    width: 49.5340576171875,
    minWidth: 49.5340576171875,
    height: 26.81298828125,
    minHeight: 26.81298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.3046875,
    top: 34.294677734375
  },
  ImageBackground_0_86: {
    width: 9.77557373046875,
    minWidth: 9.77557373046875,
    height: 10.28033447265625,
    minHeight: 10.28033447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93.7958984375,
    top: 25.42822265625
  },
  ImageBackground_0_87: {
    width: 7.4578094482421875,
    minWidth: 7.4578094482421875,
    height: 9.35198974609375,
    minHeight: 9.35198974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96.0927734375,
    top: 16.95068359375
  },
  ImageBackground_0_88: {
    width: 9.597702026367188,
    minWidth: 9.597702026367188,
    height: 12.27032470703125,
    minHeight: 12.27032470703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90.5341796875,
    top: 11.3846435546875
  },
  ImageBackground_0_89: {
    width: 4.9588165283203125,
    minWidth: 4.9588165283203125,
    height: 9.64630126953125,
    minHeight: 9.64630126953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.1572265625,
    top: 13.41064453125
  },
  ImageBackground_0_90: {
    width: 19.28509521484375,
    minWidth: 19.28509521484375,
    height: 28.60675048828125,
    minHeight: 28.60675048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70.9345703125,
    top: 8.503662109375
  },
  ImageBackground_0_91: {
    width: 19.284637451171875,
    minWidth: 19.284637451171875,
    height: 28.6064453125,
    minHeight: 28.6064453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69.3310546875,
    top: 7.1015625
  },
  ImageBackground_0_92: {
    width: 15.502182006835938,
    minWidth: 15.502182006835938,
    height: 28.32037353515625,
    minHeight: 28.32037353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69.33203125,
    top: 7.380615234375
  },
  ImageBackground_0_93: {
    width: 68.135009765625,
    minWidth: 68.135009765625,
    height: 56.7945556640625,
    minHeight: 56.7945556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 25.189697265625
  },
  ImageBackground_0_98: {
    width: 37.20359802246094,
    minWidth: 37.20359802246094,
    height: 35.77008056640625,
    minHeight: 35.77008056640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44.7412109375,
    top: 5.563232421875
  },
  ImageBackground_0_103: {
    width: 9.687667846679688,
    minWidth: 9.687667846679688,
    height: 15.6690673828125,
    minHeight: 15.6690673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105.6474609375,
    top: 7.5634765625
  },
  ImageBackground_0_107: {
    width: 19.3388671875,
    minWidth: 19.3388671875,
    height: 17.004638671875,
    minHeight: 17.004638671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 89.734375,
    top: 0
  },
  View_0_111: {
    width: 75.66050720214844,
    minWidth: 75.66050720214844,
    height: 38.76068115234375,
    minHeight: 38.76068115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.8271484375,
    top: 13.115966796875
  },
  ImageBackground_0_112: {
    width: 73.73873901367188,
    minWidth: 73.73873901367188,
    height: 36.8065185546875,
    minHeight: 36.8065185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.9541015625
  },
  ImageBackground_0_113: {
    width: 69.3291015625,
    minWidth: 69.3291015625,
    height: 34.41607666015625,
    minHeight: 34.41607666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.044921875,
    top: 4.339599609375
  },
  ImageBackground_0_120: {
    width: 12.422332763671875,
    minWidth: 12.422332763671875,
    height: 13.89215087890625,
    minHeight: 13.89215087890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63.23828125,
    top: 0
  },
  ImageBackground_0_122: {
    width: 12.275421142578125,
    minWidth: 12.275421142578125,
    height: 13.49395751953125,
    minHeight: 13.49395751953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63.376953125,
    top: 0.2626953125
  },
  ImageBackground_0_125: {
    width: 7.041015625,
    minWidth: 7.041015625,
    height: 13.73297119140625,
    minHeight: 13.73297119140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63.23828125,
    top: 0.13671875
  },
  ImageBackground_0_126: {
    width: 69.43911743164062,
    minWidth: 69.43911743164062,
    height: 33.1429443359375,
    minHeight: 33.1429443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0029296875,
    top: 5.61669921875
  },
  ImageBackground_0_127: {
    width: 42.337066650390625,
    minWidth: 42.337066650390625,
    height: 19.826904296875,
    minHeight: 19.826904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.892578125,
    top: 3.279052734375
  },
  ImageBackground_0_128: {
    width: 3.996978759765625,
    minWidth: 3.996978759765625,
    height: 11.23162841796875,
    minHeight: 11.23162841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71.0087890625,
    top: 1.348876953125
  },
  ImageBackground_0_129: {
    width: 20.563934326171875,
    minWidth: 20.563934326171875,
    height: 22.611328125,
    minHeight: 22.611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80.5693359375,
    top: 1.241455078125
  },
  View_0_133: {
    width: 83.94235229492188,
    minWidth: 83.94235229492188,
    height: 73.17767333984375,
    minHeight: 73.17767333984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105.2919921875,
    top: 0
  },
  ImageBackground_0_134: {
    width: 16.317138671875,
    minWidth: 16.317138671875,
    height: 12.16131591796875,
    minHeight: 12.16131591796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.431640625,
    top: 51.5960693359375
  },
  ImageBackground_0_137: {
    width: 56.348907470703125,
    minWidth: 56.348907470703125,
    height: 56.65093994140625,
    minHeight: 56.65093994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.6103515625,
    top: 16.52197265625
  },
  ImageBackground_0_138: {
    width: 12.9559326171875,
    minWidth: 12.9559326171875,
    height: 18.23419189453125,
    minHeight: 18.23419189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.0185546875,
    top: 27.947998046875
  },
  ImageBackground_0_139: {
    width: 35.6669921875,
    minWidth: 35.6669921875,
    height: 19.6927490234375,
    minHeight: 19.6927490234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.5439453125,
    top: 16.533935546875
  },
  ImageBackground_0_140: {
    width: 17.54199981689453,
    minWidth: 17.54199981689453,
    height: 17.54199981689453,
    minHeight: 17.54199981689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.4501953125,
    top: 44.115966796875
  },
  ImageBackground_0_141: {
    width: 8.760818481445312,
    minWidth: 8.760818481445312,
    height: 17.3677978515625,
    minHeight: 17.3677978515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.1865234375,
    top: 44.488037109375
  },
  ImageBackground_0_142: {
    width: 54.802978515625,
    minWidth: 54.802978515625,
    height: 14.50189208984375,
    minHeight: 14.50189208984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.3056640625,
    top: 39.5
  },
  ImageBackground_0_143: {
    width: 7.85009765625,
    minWidth: 7.85009765625,
    height: 2.57000732421875,
    minHeight: 2.57000732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.2587890625,
    top: 50.0250244140625
  },
  ImageBackground_0_144: {
    width: 27.034042358398438,
    minWidth: 27.034042358398438,
    height: 27.6036376953125,
    minHeight: 27.6036376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.9248046875,
    top: 45.573974609375
  },
  ImageBackground_0_145: {
    width: 10.8670654296875,
    minWidth: 10.8670654296875,
    height: 9.78399658203125,
    minHeight: 9.78399658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.1171875,
    top: 44.2010498046875
  },
  ImageBackground_0_146: {
    width: 5.676025390625,
    minWidth: 5.676025390625,
    height: 3.60003662109375,
    minHeight: 3.60003662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.4892578125,
    top: 43.6170654296875
  },
  ImageBackground_0_147: {
    width: 18.723800659179688,
    minWidth: 18.723800659179688,
    height: 20.2740478515625,
    minHeight: 20.2740478515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.5478515625,
    top: 30.52294921875
  },
  ImageBackground_0_148: {
    width: 13.930084228515625,
    minWidth: 13.930084228515625,
    height: 18.6004638671875,
    minHeight: 18.6004638671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.6982421875,
    top: 30.528564453125
  },
  ImageBackground_0_149: {
    width: 83.94235229492188,
    minWidth: 83.94235229492188,
    height: 45.4111328125,
    minHeight: 45.4111328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_168: {
    width: 11.196563720703125,
    minWidth: 11.196563720703125,
    height: 7.71990966796875,
    minHeight: 7.71990966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.8701171875,
    top: 28.48388671875
  },
  ImageBackground_0_169: {
    width: 8.885406494140625,
    minWidth: 8.885406494140625,
    height: 7.2642822265625,
    minHeight: 7.2642822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.814453125,
    top: 29.2772216796875
  },
  ImageBackground_0_170: {
    width: 11.624404907226562,
    minWidth: 11.624404907226562,
    height: 7.8507080078125,
    minHeight: 7.8507080078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.8681640625,
    top: 27.0244140625
  },
  ImageBackground_0_173: {
    width: 9.28826904296875,
    minWidth: 9.28826904296875,
    height: 7.306884765625,
    minHeight: 7.306884765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.8115234375,
    top: 27.92431640625
  },
  View_0_176: {
    width: 18.39990234375,
    minWidth: 18.39990234375,
    height: 19.76800537109375,
    minHeight: 19.76800537109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56.0322265625,
    top: 31.9500732421875
  },
  ImageBackground_0_179: {
    width: 18.39990234375,
    minWidth: 18.39990234375,
    height: 19.76800537109375,
    minHeight: 19.76800537109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_180: {
    width: 14.400192260742188,
    minWidth: 14.400192260742188,
    height: 14.641845703125,
    minHeight: 14.641845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.310546875,
    top: 36.1572265625
  },
  ImageBackground_0_187: {
    width: 5.5030517578125,
    minWidth: 5.5030517578125,
    height: 2.84539794921875,
    minHeight: 2.84539794921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.5859375,
    top: 41.8297119140625
  },
  ImageBackground_0_190: {
    width: 15.4169921875,
    minWidth: 15.4169921875,
    height: 4.59002685546875,
    minHeight: 4.59002685546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.3046875,
    top: 38.623046875
  },
  ImageBackground_0_193: {
    width: 6.603607177734375,
    minWidth: 6.603607177734375,
    height: 7.93280029296875,
    minHeight: 7.93280029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.80078125,
    top: 45.852783203125
  },
  View_0_197: {
    width: 22.58203125,
    minWidth: 22.58203125,
    height: 22.58197021484375,
    minHeight: 22.58197021484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.974609375,
    top: 30.5430908203125
  },
  ImageBackground_0_200: {
    width: 22.58203125,
    minWidth: 22.58203125,
    height: 22.58197021484375,
    minHeight: 22.58197021484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_201: {
    width: 25.274444580078125,
    minWidth: 25.274444580078125,
    height: 12.29559326171875,
    minHeight: 12.29559326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.08984375,
    top: 56.32080078125
  },
  ImageBackground_0_210: {
    width: 12.124481201171875,
    minWidth: 12.124481201171875,
    height: 12.95050048828125,
    minHeight: 12.95050048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.60546875,
    top: 36.1273193359375
  },
  ImageBackground_0_217: {
    width: 37.46434020996094,
    minWidth: 37.46434020996094,
    height: 34.99456787109375,
    minHeight: 34.99456787109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.671875,
    top: 37.58251953125
  },
  ImageBackground_0_223: {
    width: 10.1341552734375,
    minWidth: 10.1341552734375,
    height: 3.0029296875,
    minHeight: 3.0029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.7841796875,
    top: 67.6669921875
  },
  View_0_224: {
    width: 87.2074203491211,
    minWidth: 87.2074203491211,
    height: 91.018310546875,
    minHeight: 91.018310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80.4150390625,
    top: 122.05615234375
  },
  ImageBackground_0_225: {
    width: 50.941566467285156,
    minWidth: 50.941566467285156,
    height: 37.8065185546875,
    minHeight: 37.8065185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_226: {
    width: 11.975830078125,
    minWidth: 11.975830078125,
    height: 13.71197509765625,
    minHeight: 13.71197509765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.142578125,
    top: 1.31689453125
  },
  ImageBackground_0_227: {
    width: 45.433631896972656,
    minWidth: 45.433631896972656,
    height: 32.2352294921875,
    minHeight: 32.2352294921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0009765625,
    top: 5.57177734375
  },
  ImageBackground_0_228: {
    width: 9.06298828125,
    minWidth: 9.06298828125,
    height: 2.75445556640625,
    minHeight: 2.75445556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.26171875,
    top: 2.33837890625
  },
  ImageBackground_0_229: {
    width: 43.94804382324219,
    minWidth: 43.94804382324219,
    height: 71.1427001953125,
    minHeight: 71.1427001953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.44140625,
    top: 2.567138671875
  },
  ImageBackground_0_237: {
    width: 28.23004150390625,
    minWidth: 28.23004150390625,
    height: 18.10577392578125,
    minHeight: 18.10577392578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.427734375,
    top: 55.607177734375
  },
  View_0_241: {
    width: 47.78373718261719,
    minWidth: 47.78373718261719,
    height: 29.39178466796875,
    minHeight: 29.39178466796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.423828125,
    top: 61.62646484375
  },
  ImageBackground_0_242: {
    width: 45.72419738769531,
    minWidth: 45.72419738769531,
    height: 17.99212646484375,
    minHeight: 17.99212646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.1220703125,
    top: 1.740234375
  },
  ImageBackground_0_243: {
    width: 31.136184692382812,
    minWidth: 31.136184692382812,
    height: 17.83099365234375,
    minHeight: 17.83099365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.119140625,
    top: 1.8984375
  },
  ImageBackground_0_244: {
    width: 20.086624145507812,
    minWidth: 20.086624145507812,
    height: 9.3634033203125,
    minHeight: 9.3634033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.75,
    top: 0
  },
  ImageBackground_0_245: {
    width: 20.089630126953125,
    minWidth: 20.089630126953125,
    height: 7.355224609375,
    minHeight: 7.355224609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.7470703125,
    top: 2.005126953125
  },
  View_0_246: {
    width: 47.78373718261719,
    minWidth: 47.78373718261719,
    height: 26.1807861328125,
    minHeight: 26.1807861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3.208984375
  },
  ImageBackground_0_247: {
    width: 47.78373718261719,
    minWidth: 47.78373718261719,
    height: 26.1807861328125,
    minHeight: 26.1807861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_248: {
    width: 47.78373718261719,
    minWidth: 47.78373718261719,
    height: 26.1807861328125,
    minHeight: 26.1807861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_249: {
    width: 47.78373718261719,
    minWidth: 47.78373718261719,
    height: 26.1807861328125,
    minHeight: 26.1807861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_250: {
    width: 47.78373718261719,
    minWidth: 47.78373718261719,
    height: 26.1807861328125,
    minHeight: 26.1807861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_252: {
    width: 47.40879821777344,
    minWidth: 47.40879821777344,
    height: 23.06097412109375,
    minHeight: 23.06097412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.3564453125,
    top: 6.330810546875
  },
  ImageBackground_0_253: {
    width: 44.53108215332031,
    minWidth: 44.53108215332031,
    height: 20.20513916015625,
    minHeight: 20.20513916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.791015625,
    top: 7.766357421875
  },
  View_0_254: {
    width: 45.467010498046875,
    minWidth: 45.467010498046875,
    height: 21.8280029296875,
    minHeight: 21.8280029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.4140625,
    top: 6.9423828125
  },
  View_0_255: {
    width: 44.53108215332031,
    minWidth: 44.53108215332031,
    height: 20.20513916015625,
    minHeight: 20.20513916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.376953125,
    top: 0.823974609375
  },
  View_0_256: {
    width: 44.53108215332031,
    minWidth: 44.53108215332031,
    height: 20.20513916015625,
    minHeight: 20.20513916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_257: {
    width: 44.53108215332031,
    minWidth: 44.53108215332031,
    height: 20.20513916015625,
    minHeight: 20.20513916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_258: {
    width: 44.53108215332031,
    minWidth: 44.53108215332031,
    height: 20.20513916015625,
    minHeight: 20.20513916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_259: {
    width: 45.83491516113281,
    minWidth: 45.83491516113281,
    height: 21.9521484375,
    minHeight: 21.9521484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_260: {
    width: 2.5274505615234375,
    minWidth: 2.5274505615234375,
    height: 12.0926513671875,
    minHeight: 12.0926513671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.88671875,
    top: 0.820556640625
  },
  ImageBackground_0_262: {
    width: 2.94647216796875,
    minWidth: 2.94647216796875,
    height: 15.2711181640625,
    minHeight: 15.2711181640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.8193359375,
    top: 0
  },
  ImageBackground_0_264: {
    width: 2.9846343994140625,
    minWidth: 2.9846343994140625,
    height: 15.7847900390625,
    minHeight: 15.7847900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.8994140625,
    top: 0.84765625
  },
  ImageBackground_0_266: {
    width: 3.1735992431640625,
    minWidth: 3.1735992431640625,
    height: 16.476318359375,
    minHeight: 16.476318359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.958984375,
    top: 1.34375
  },
  ImageBackground_0_268: {
    width: 2.9312744140625,
    minWidth: 2.9312744140625,
    height: 15.5948486328125,
    minHeight: 15.5948486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.0556640625,
    top: 3.46875
  },
  ImageBackground_0_270: {
    width: 2.7442474365234375,
    minWidth: 2.7442474365234375,
    height: 13.7264404296875,
    minHeight: 13.7264404296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.2099609375,
    top: 5.895751953125
  },
  ImageBackground_0_272: {
    width: 2.5273284912109375,
    minWidth: 2.5273284912109375,
    height: 12.0916748046875,
    minHeight: 12.0916748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.326171875,
    top: 8.614501953125
  },
  ImageBackground_0_274: {
    width: 2.5274505615234375,
    minWidth: 2.5274505615234375,
    height: 12.0926513671875,
    minHeight: 12.0926513671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.3759765625,
    top: 9.743408203125
  },
  ImageBackground_0_276: {
    width: 2.35009765625,
    minWidth: 2.35009765625,
    height: 10.74725341796875,
    minHeight: 10.74725341796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.63671875,
    top: 11.204833984375
  },
  ImageBackground_0_278: {
    width: 2.1963958740234375,
    minWidth: 2.1963958740234375,
    height: 9.58135986328125,
    minHeight: 9.58135986328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.8837890625,
    top: 12.1827392578125
  },
  ImageBackground_0_280: {
    width: 1.9523773193359375,
    minWidth: 1.9523773193359375,
    height: 7.72442626953125,
    minHeight: 7.72442626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.220703125,
    top: 13.103759765625
  },
  ImageBackground_0_282: {
    width: 15.610870361328125,
    minWidth: 15.610870361328125,
    height: 7.33782958984375,
    minHeight: 7.33782958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14.57080078125
  },
  ImageBackground_0_284: {
    width: 17.263992309570312,
    minWidth: 17.263992309570312,
    height: 7.94866943359375,
    minHeight: 7.94866943359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.509765625,
    top: 12.209716796875
  },
  ImageBackground_0_286: {
    width: 16.535797119140625,
    minWidth: 16.535797119140625,
    height: 7.90936279296875,
    minHeight: 7.90936279296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.0908203125,
    top: 10.284423828125
  },
  ImageBackground_0_288: {
    width: 17.453994750976562,
    minWidth: 17.453994750976562,
    height: 8.13934326171875,
    minHeight: 8.13934326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.58984375,
    top: 7.9114990234375
  },
  ImageBackground_0_290: {
    width: 17.431472778320312,
    minWidth: 17.431472778320312,
    height: 8.34051513671875,
    minHeight: 8.34051513671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.5888671875,
    top: 4.94921875
  },
  ImageBackground_0_292: {
    width: 16.47509765625,
    minWidth: 16.47509765625,
    height: 7.6815185546875,
    minHeight: 7.6815185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.1220703125,
    top: 2.34130859375
  },
  ImageBackground_0_294: {
    width: 11.316909790039062,
    minWidth: 11.316909790039062,
    height: 5.50482177734375,
    minHeight: 5.50482177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.517578125,
    top: 0.1475830078125
  },
  ImageBackground_0_296: {
    width: 44.54779052734375,
    minWidth: 44.54779052734375,
    height: 18.1771240234375,
    minHeight: 18.1771240234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.369140625,
    top: 2.85302734375
  },
  ImageBackground_0_297: {
    width: 45.467010498046875,
    minWidth: 45.467010498046875,
    height: 21.8280029296875,
    minHeight: 21.8280029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_316: {
    width: 90.32220458984375,
    minWidth: 90.32220458984375,
    height: 52.020904541015625,
    minHeight: 52.020904541015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 456.421875,
    top: 32.2691650390625
  },
  View_0_334: {
    width: 78.43506622314453,
    minWidth: 78.43506622314453,
    height: 48.4931640625,
    minHeight: 48.4931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185.900390625,
    top: 39.926513671875
  },
  ImageBackground_0_335: {
    width: 78.43506622314453,
    minWidth: 78.43506622314453,
    height: 48.4931640625,
    minHeight: 48.4931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_342: {
    width: 60.23885726928711,
    minWidth: 60.23885726928711,
    height: 27.56597900390625,
    minHeight: 27.56597900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.4853515625,
    top: 17.70849609375
  },
  ImageBackground_0_343: {
    width: 34.3499755859375,
    minWidth: 34.3499755859375,
    height: 40.979034423828125,
    minHeight: 40.979034423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.216796875,
    top: 3.33251953125
  },
  View_0_344: {
    width: 66.88932800292969,
    minWidth: 66.88932800292969,
    height: 38.53564453125,
    minHeight: 38.53564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 408.1650390625,
    top: 97.615234375
  },
  ImageBackground_0_345: {
    width: 66.88932800292969,
    minWidth: 66.88932800292969,
    height: 38.53564453125,
    minHeight: 38.53564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_352: {
    width: 51.863616943359375,
    minWidth: 51.863616943359375,
    height: 13.72021484375,
    minHeight: 13.72021484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.9306640625,
    top: 20.1787109375
  },
  ImageBackground_0_353: {
    width: 33.126953125,
    minWidth: 33.126953125,
    height: 26.864990234375,
    minHeight: 26.864990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.3232421875,
    top: 3.1826171875
  },
  ImageBackground_0_354: {
    width: 89.5111083984375,
    minWidth: 89.5111083984375,
    height: 40.50701904296875,
    minHeight: 40.50701904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113.251953125,
    top: 96.23193359375
  },
  View_0_355: {
    width: 55.93000030517578,
    minWidth: 55.93000030517578,
    height: 55.930419921875,
    minHeight: 55.930419921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74.65625,
    top: 0
  },
  ImageBackground_0_356: {
    width: 55.93000030517578,
    minWidth: 55.93000030517578,
    height: 55.93000030517578,
    minHeight: 55.93000030517578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_357: {
    width: 55.60699462890625,
    minWidth: 55.60699462890625,
    height: 55.71246337890625,
    minHeight: 55.71246337890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.154296875,
    top: 0.218017578125
  },
  ImageBackground_0_364: {
    width: 45.054046630859375,
    minWidth: 45.054046630859375,
    height: 53.93597412109375,
    minHeight: 53.93597412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.869140625,
    top: 1.992919921875
  },
  ImageBackground_0_365: {
    width: 38.08715057373047,
    minWidth: 38.08715057373047,
    height: 46.168212890625,
    minHeight: 46.168212890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.572265625,
    top: 7.373046875
  },
  ImageBackground_0_366: {
    width: 27.078872680664062,
    minWidth: 27.078872680664062,
    height: 42.038543701171875,
    minHeight: 42.038543701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.44140625,
    top: 3.3424072265625
  },
  ImageBackground_0_367: {
    width: 27.739524841308594,
    minWidth: 27.739524841308594,
    height: 42.056671142578125,
    minHeight: 42.056671142578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.78125,
    top: 3.3203125
  },
  View_0_368: {
    width: 350.0989990234375,
    minWidth: 350.0989990234375,
    height: 69.6920166015625,
    minHeight: 69.6920166015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.61328125,
    top: 8.60400390625
  },
  ImageBackground_0_369: {
    width: 17.176025390625,
    minWidth: 17.176025390625,
    height: 17.175994873046875,
    minHeight: 17.175994873046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 332.9228515625,
    top: 0
  },
  ImageBackground_0_375: {
    width: 17.17193603515625,
    minWidth: 17.17193603515625,
    height: 17.176025390625,
    minHeight: 17.176025390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 52.5159912109375
  },
  ImageBackground_0_381: {
    width: 435.4478759765625,
    minWidth: 435.4478759765625,
    height: 81.56106567382812,
    minHeight: 81.56106567382812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.4749755859375
  },
  View_0_390: {
    width: 126.15478515625,
    minWidth: 126.15478515625,
    height: 62.967926025390625,
    minHeight: 62.967926025390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124.609375,
    top: 161.1259765625
  },
  ImageBackground_0_393: {
    width: 116.85400390625,
    minWidth: 116.85400390625,
    height: 19.836990356445312,
    minHeight: 19.836990356445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.30078125,
    top: 0
  },
  ImageBackground_0_402: {
    width: 121.50498962402344,
    minWidth: 121.50498962402344,
    height: 35.360992431640625,
    minHeight: 35.360992431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 27.60693359375
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
