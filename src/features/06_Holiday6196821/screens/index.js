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
      <View style={styles.View_0_1683} />
      <View style={styles.View_0_1684}>
        <View style={styles.View_0_1685} />
        <View style={styles.View_0_1686}>
          <View style={styles.View_0_1687}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34c/6066/277ad132ceba10396ae14db3e69a05c4"
              }}
              style={styles.ImageBackground_0_1694}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa81/f055/75ff2d36ef15c3a2b4a3ce8e48ca7737"
            }}
            style={styles.ImageBackground_0_1700}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc2/42fa/6909e939e932888794ebbac489d939ad"
          }}
          style={styles.ImageBackground_0_1709}
        />
      </View>
      <View style={styles.View_0_1710}>
        <View style={styles.View_I0_1710_0_2874}>
          <View style={styles.View_I0_1710_0_2875} />
          <View style={styles.View_I0_1710_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_1710_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_1710_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_1710_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_1710_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_1710_0_2888}
          />
          <View style={styles.View_I0_1710_0_2891}>
            <View style={styles.View_I0_1710_0_2892}>
              <Text style={styles.Text_I0_1710_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1711}>
        <View style={styles.View_0_1712}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/167d/e6b8/4fb716a178dac7d59840b9f76d73ad84"
            }}
            style={styles.ImageBackground_0_1713}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab7c/1941/fcc90db5891dd3af0315defffe94b067"
            }}
            style={styles.ImageBackground_0_1714}
          />
          <View style={styles.View_0_1715}>
            <Text style={styles.Text_0_1715}>ATTENDANCE</Text>
          </View>
          <View style={styles.View_0_1716}>
            <Text style={styles.Text_0_1716}>HOLIDAY</Text>
          </View>
        </View>
        <View style={styles.View_0_1717}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf29/a60f/4bc82287ea6c954f9095ed8feac7a361"
            }}
            style={styles.ImageBackground_I0_1717_0_3107}
          />
        </View>
      </View>
      <View style={styles.View_0_1718}>
        <View style={styles.View_0_1719}>
          <Text style={styles.Text_0_1719}>NOVEMBER 2020</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ef/8b78/7865b10ff72c613271655999c6c7968d"
          }}
          style={styles.ImageBackground_0_1720}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/159e/f823/a8d3ef2355738060d2ff2e1fe99d5fa1"
          }}
          style={styles.ImageBackground_0_1721}
        />
      </View>
      <View style={styles.View_0_1722}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5741/71e3/ecfbc7bc0e596f0d19678152ba433bcb"
          }}
          style={styles.ImageBackground_0_1723}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5741/71e3/ecfbc7bc0e596f0d19678152ba433bcb"
          }}
          style={styles.ImageBackground_0_1724}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5741/71e3/ecfbc7bc0e596f0d19678152ba433bcb"
          }}
          style={styles.ImageBackground_0_1725}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2db/d774/265aa13cbb1c09dabe4d61b7a9d69b53"
          }}
          style={styles.ImageBackground_0_1726}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2db/d774/265aa13cbb1c09dabe4d61b7a9d69b53"
          }}
          style={styles.ImageBackground_0_1727}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2db/d774/265aa13cbb1c09dabe4d61b7a9d69b53"
          }}
          style={styles.ImageBackground_0_1728}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2db/d774/265aa13cbb1c09dabe4d61b7a9d69b53"
          }}
          style={styles.ImageBackground_0_1729}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2db/d774/265aa13cbb1c09dabe4d61b7a9d69b53"
          }}
          style={styles.ImageBackground_0_1730}
        />
        <View style={styles.View_0_1731}>
          <View style={styles.View_0_1732}>
            <Text style={styles.Text_0_1732}>31</Text>
          </View>
          <View style={styles.View_0_1733}>
            <Text style={styles.Text_0_1733}>1</Text>
          </View>
          <View style={styles.View_0_1734}>
            <Text style={styles.Text_0_1734}>30</Text>
          </View>
          <View style={styles.View_0_1735}>
            <Text style={styles.Text_0_1735}>29</Text>
          </View>
          <View style={styles.View_0_1736}>
            <Text style={styles.Text_0_1736}>28</Text>
          </View>
          <View style={styles.View_0_1737}>
            <Text style={styles.Text_0_1737}>27</Text>
          </View>
          <View style={styles.View_0_1738}>
            <Text style={styles.Text_0_1738}>26</Text>
          </View>
          <View style={styles.View_0_1739}>
            <Text style={styles.Text_0_1739}>25</Text>
          </View>
          <View style={styles.View_0_1740}>
            <Text style={styles.Text_0_1740}>24</Text>
          </View>
          <View style={styles.View_0_1741}>
            <Text style={styles.Text_0_1741}>23</Text>
          </View>
          <View style={styles.View_0_1742}>
            <Text style={styles.Text_0_1742}>22</Text>
          </View>
          <View style={styles.View_0_1743}>
            <Text style={styles.Text_0_1743}>21</Text>
          </View>
          <View style={styles.View_0_1744}>
            <Text style={styles.Text_0_1744}>19</Text>
          </View>
          <View style={styles.View_0_1745}>
            <Text style={styles.Text_0_1745}>20</Text>
          </View>
          <View style={styles.View_0_1746}>
            <Text style={styles.Text_0_1746}>18</Text>
          </View>
          <View style={styles.View_0_1747}>
            <Text style={styles.Text_0_1747}>17</Text>
          </View>
          <View style={styles.View_0_1748}>
            <Text style={styles.Text_0_1748}>16</Text>
          </View>
          <View style={styles.View_0_1749}>
            <Text style={styles.Text_0_1749}>15</Text>
          </View>
          <View style={styles.View_0_1750}>
            <Text style={styles.Text_0_1750}>14</Text>
          </View>
          <View style={styles.View_0_1751}>
            <Text style={styles.Text_0_1751}>13</Text>
          </View>
          <View style={styles.View_0_1752}>
            <Text style={styles.Text_0_1752}>12</Text>
          </View>
          <View style={styles.View_0_1753}>
            <Text style={styles.Text_0_1753}>11</Text>
          </View>
          <View style={styles.View_0_1754}>
            <Text style={styles.Text_0_1754}>10</Text>
          </View>
          <View style={styles.View_0_1755}>
            <Text style={styles.Text_0_1755}>9</Text>
          </View>
          <View style={styles.View_0_1756}>
            <Text style={styles.Text_0_1756}>8</Text>
          </View>
          <View style={styles.View_0_1757}>
            <Text style={styles.Text_0_1757}>7</Text>
          </View>
          <View style={styles.View_0_1758}>
            <Text style={styles.Text_0_1758}>6</Text>
          </View>
          <View style={styles.View_0_1759}>
            <Text style={styles.Text_0_1759}>5</Text>
          </View>
          <View style={styles.View_0_1760}>
            <Text style={styles.Text_0_1760}>4</Text>
          </View>
          <View style={styles.View_0_1761}>
            <Text style={styles.Text_0_1761}>3</Text>
          </View>
          <View style={styles.View_0_1762}>
            <Text style={styles.Text_0_1762}>2</Text>
          </View>
          <View style={styles.View_0_1763}>
            <Text style={styles.Text_0_1763}>1</Text>
          </View>
          <View style={styles.View_0_1764}>
            <Text style={styles.Text_0_1764}>31</Text>
          </View>
          <View style={styles.View_0_1765}>
            <Text style={styles.Text_0_1765}>30</Text>
          </View>
          <View style={styles.View_0_1766}>
            <Text style={styles.Text_0_1766}>29</Text>
          </View>
          <View style={styles.View_0_1767}>
            <Text style={styles.Text_0_1767}>Mo</Text>
          </View>
          <View style={styles.View_0_1768}>
            <Text style={styles.Text_0_1768}>Tu</Text>
          </View>
          <View style={styles.View_0_1769}>
            <Text style={styles.Text_0_1769}>We</Text>
          </View>
          <View style={styles.View_0_1770}>
            <Text style={styles.Text_0_1770}>Th</Text>
          </View>
          <View style={styles.View_0_1771}>
            <Text style={styles.Text_0_1771}>Fr</Text>
          </View>
          <View style={styles.View_0_1772}>
            <Text style={styles.Text_0_1772}>Sa</Text>
          </View>
          <View style={styles.View_0_1773}>
            <Text style={styles.Text_0_1773}>Su</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1774}>
        <Text style={styles.Text_0_1774}>List of Holiday</Text>
      </View>
      <View style={styles.View_0_1775}>
        <View style={styles.View_I0_1775_0_2899}>
          <View style={styles.View_I0_1775_0_2900}>
            <View style={styles.View_I0_1775_0_2901} />
            <View style={styles.View_I0_1775_0_2902}>
              <View style={styles.View_I0_1775_0_2903}>
                <View style={styles.View_I0_1775_0_2904}>
                  <View style={styles.View_I0_1775_0_2905} />
                  <View style={styles.View_I0_1775_0_2906}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348f/8196/36e11039f4aab47b0f22ebf4a5291940"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2907}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75b9/c0b1/649379600c5a0303adb1c355485b4cab"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2908}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/308b/cc1d/7f7665a882d4e415c27ed0c8ecbdb8a7"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2909}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab7/11e5/40db18f332c31f607b2c1b4afd8bd790"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2910}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9be/4dec/62cac639421dacc6837fef03cb46c02c"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2911}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9009/2818/280f39b91d3d0911302f8ea07b7cb77b"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2912}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/649d/7051/7efa3bd9c74109a3eec71ba00a2c841e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2913}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96d1/edee/359e85ec416827ee36c982e3b544e8b2"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2914}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/649d/7051/7efa3bd9c74109a3eec71ba00a2c841e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2915}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5406/d361/8748510ad86c412e048a2a8011bc607f"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2916}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/649d/7051/7efa3bd9c74109a3eec71ba00a2c841e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2917}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/3cc9/b43502098cae771f69d94205ad0df599"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2918}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cee9/b7cf/95f135db2c2be1ab71a5c88fd96cd3d2"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2919}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aadb/d2c1/4f4ffe04ce7e601fcfe06120ff5c2f03"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2920}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf6/aa27/40f0d0e03dcf23df0784296b1605468b"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2921}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aadb/d2c1/4f4ffe04ce7e601fcfe06120ff5c2f03"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2922}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1b6/f4a1/fc561ca34effa6cc6f10ba529dd56142"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2923}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc3/eed4/73846548159aadeda5a39be5ab9e0211"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2924}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6809/3c13/6cb3ade6e4b8cb2a4d8885391bd7d4b1"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2925}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff9c/5a7b/96a44e6db3e729c7705e88fedaf6fee0"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2926}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be8f/f042/f1196457abe29989c75cb5e27cb339ab"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2927}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/288f/48d5/65f8b578fbbe1574c8b1033ed86803f0"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2928}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8b8/b2e4/56f5149403348c61d05faef15a9504c5"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2929}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a758/6aa5/df7307807e2a763f6168c5783b4fb4c2"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2930}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e60/7d8a/b1ca01e61d14cd7cf6229996125f3c5a"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2931}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ffd/73cf/925fd394ba796a2e53da7d452465cf78"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2932}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7136/6264/acd6cf110f244285b3b9ccad23dc5ce7"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2933}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7136/6264/acd6cf110f244285b3b9ccad23dc5ce7"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2934}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92a3/f93b/632d0957b913b547f8b2250cb0cafc8b"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2935}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4384/4580/01262c6dd9f877bb3974a28722c90075"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2936}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8c/4d37/e39243029d71c4bf9a295204a6505ca7"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2937}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44c3/dcbe/339d2f3389d30e169a07c5e17f88d40d"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2938}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb91/f0e6/ec810a7724cbf34f2f101f725d3bb30d"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2939}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da07/c447/d855ce3678c51cd4d3a593d97b16280b"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2940}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/014c/d531/3ee50f45a09ba33a6ba04126ab856d31"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2941}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ec7/8cfe/44f3c547d7cefeee46eb34bbe98e7c7e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2942}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2943}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2944}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2945}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2946}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2947}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2948}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2949}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2950}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2951}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2952}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2953}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/002f/c93ef1e0a4da2144a12135b32359798e"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2954}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356a/b82d/5856a9d8136dd8ce743da3ab747124b8"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2955}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0f6/0c0a/2eacf8fc9923b7f1b0f0d447cea6b3bc"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2956}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebaf/525a/9037c8530cb8d80e53e4cb44a6442997"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2957}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/134b/8a89/259cca870e8790aca20d28316c383294"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2958}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fbe/02ee/bdbba8440b79f4c1fd6d8534681721ec"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2959}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e857/b984/d3d028f02cea2ca7166310847eda2051"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2960}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ee7/b1d4/bbe0a6f6dd18fc8b3c15753ea5c2a1e2"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2961}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d2d/24cd/880a7e5cdddc607ad2d3aecfc67b88ce"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2962}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa1/5103/e3bc1fdd3d4c8b3d3617a1b69d6999bc"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2963}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e062/52bb/f018df392c9fe58ff566a1db7553297d"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2964}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8264/48b8/981427ccaaa897891913a8e881794bb6"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2965}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386c/5af6/092f380d020cb9d81a57806601901d69"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2966}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ce/1531/433a8bf9ad271d96861470a252640ecd"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2967}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3697/df0b/4a33b8501036d62a7b4ee3b416fb37c8"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2968}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d424/727e/2d952e459c8d736c46f4bc05ade7c59c"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2969}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/395b/9fbd/7c0e40491bb7d631293129864f103b78"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2970}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b6/8a65/6c4c74489b34cf1a38dd56ae8184ca83"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2971}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6758/2cfe/0dba184c5ec49ec8634c85f0e0955a5c"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2972}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adea/ac0d/adf53e32fcb95319247c6d8017c0689a"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2973}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ee/da79/3a3d6fe1de7754c47ac90e23544863a8"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2974}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9235/2aff/38d73347ead6d886e1a3da7d7fda4890"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2975}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ee/da79/3a3d6fe1de7754c47ac90e23544863a8"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2976}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d6a/2183/8e222a6987e65b2cf9ce0026f7781893"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2977}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef57/713f/0a208ce365201043e128e83335fa57b0"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2978}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7745/9243/0f2f4f4be64b3e93bda98c4d7080c7d3"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2979}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eda5/42ab/5cf8f56738e0a14bb6d334c0747108cd"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2980}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58b7/6efd/0064bebec468f97cf4039d3455b92de2"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2981}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/154e/9ac7/245b7af8ac838ba45bf2909aaff54b73"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2982}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc2f/b5a5/c86bc5d70eff03afce34edbe5dfde3d9"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2983}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e61e/833b/36b8c7e04968d9de38bda67b6feb354c"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2984}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d80a/4d4c/c1be78a1fb9b3d0437596dd19662151d"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2985}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d419/805e/f636c675c44a9a0e565c2e0d2deb2500"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2986}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce89/7694/eaf7d7d71b3695db01ba1144c89992f9"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2987}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37da/97a5/ca93c27729edc932a63869ca0edbb1e2"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2988}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5511/c442/2fb90a6227763be418075fe1fdba31d8"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2989}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4334/b0ac/bdb43698391afb559aad5aec61066d45"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2990}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b82/ec4c/6714bcac838e296b52197a5305b81866"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2991}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad52/9857/741310053e5c025ff51d4d931ffd4959"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2992}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/455f/c8a0/fb2d7a204ba59cf097bc875793060a75"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2993}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b248/a18d/ca78af0c71b223d4850e007cb2460bcb"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2994}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3494/9991/3b6c2179f8087b6bb4b85bc482aa1deb"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2995}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2996}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2997}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2998}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_2999}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3000}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e08/ad7b/0d9f02a0f2b379fbaf06713367f109fc"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3001}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2055/a72a/9d95afd263d529c1258851bf32506223"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3002}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5d8/35c5/4b80fd9b97ec7f428c64787b9c9f99bc"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3003}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d759/c77e/fbdd9edc1bdff0bac8a7b14caf538806"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3004}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7467/503e/93d62520cb3d442bd66dd48aea2b260d"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3005}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff35/2b4f/d27adf2ec60bfc320028901292ea7440"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3006}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3007}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3008}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3009}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3010}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3011}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3012}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3013}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3014}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3015}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3016}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3017}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0994/cf0e/66d69d3d01d07408d6706d6a8b7fa5d0"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3018}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37eb/6b27/9567364d18e7a6790ea7f4c982b3d5bd"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3019}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35e1/4c9b/56259991f03b2cc68f6ee22f1fc9922d"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3020}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2876/262a/e12edf3a9deb62c8728482b1a74daf21"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3021}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3022}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3023}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3024}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3025}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3026}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3027}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3028}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3029}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3030}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba0f/e93b/9264e66dd3425534ab583d320034a1bf"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3031}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc47/7359/39c9c864d0a565ee1bc0c3bfb1f9143b"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3032}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b3/bd91/f35728299c2f3ea31058850fe4445066"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3033}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf12/9c46/3dcc97f68ec262ab7a03286dd5bd5664"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3034}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c755/f99d/aaa9a17d69312f66766a24a828fb3d2f"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3035}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/133a/8ccc/31a6788ef0b45fe4e5776b4ca26feaf0"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3036}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3037}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3038}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3039}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3040}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3041}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea56/54c2/4c81bba4204c6b3d4a70fe1f204be803"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3042}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2b9/99d4/3266dcdba20d7a715f1f113b09e74279"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3043}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58ca/d152/c8022260a3cbcb7d0e4ec5a33920044f"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3044}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2754/5f0e/0cac105447ffdc933e514fc34ce02891"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3045}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eef/99a5/19d8f15860bb97b5c29883e920b4a0bb"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3046}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0528/2df8/245afb9fcacf487009a9f4b3b31e0d4f"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3047}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3048}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3049}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3050}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3051}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3052}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3053}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3054}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3055}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3056}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3057}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2d/3f39/f865a025702070afedd3475a9ba72daa"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3058}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0e7/ac17/fdbbf4cd5e9f701375a80b31cf949c69"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3059}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79bb/51dd/b8e0751a10bc691ebb048b36bfb1f96f"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3060}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0fa/f92a/f2f165a03af7c0c33f781173f777118f"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3061}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bffa/174e/73f9f3f7e26a1eb15cb7a58ab777e472"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3062}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3063}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3064}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3065}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3066}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3067}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3068}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3069}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3070}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dee2/cd60/38718e234c2e45aa60a2dcbd8f3c1634"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3071}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd97/0e36/0c7999dc2f7303fbcf20db9f92e2bf08"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3072}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d92/91af/cdacb4bc8c86bc8405465255a6175a47"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3073}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3e/e9dd/c2b75c9f1c01d07801bca1f251fcaae4"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3074}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8718/01c1/f626632f4fc311510bca3515e87028f9"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3075}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76ab/2104/114fe687b6cd49e8d524f6538464f9b7"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3076}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cae8/d179/0b8323a74826913c5efec678acaf8086"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3077}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8069/5f3b/920038b3874fc57a78d125d5661415fe"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3078}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4642/11c8/d5870400c71847a44b27c2b3d16c230a"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3079}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59fb/a14f/b82aff5d8cb750ff68c469c53a89fc77"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3080}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6c6/f193/7a47d40f47464bed7e6004fc1ec937a6"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3081}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1567/a66d/d2e43171dbda3f0ce9236050ece4c8e2"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3082}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5a6/4df0/3268f604273b14cd1b625a531fe7b4f6"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3083}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e297/8811/03089ebd31b86121d16ce0220d3f5ec1"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3084}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/464d/f82d/df2087ab10894a757aa0d8dc62cd4eb8"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3085}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2be/12a6/a3a4452a695edd856c5ceb79fd271a39"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3086}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65c3/1012/883e3b4e2eeb349e02e61b50186b118b"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3087}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4726/0179/bcbf9cb94282a5b7f476d0cd783579ae"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3088}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ae7/3153/fc1ef0281dad92a2b74add4ceff1d005"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3089}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e241/c007/fd5f221f6ef0b098cfa8ce8c5061546b"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3092}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999a/491d/5f5652ad85d2c839c942e60d39bde3cc"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3093}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/610a/9d3e/6a7f86c4c8173b619ff0294c1b8b27f4"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3094}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/610a/9d3e/6a7f86c4c8173b619ff0294c1b8b27f4"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3095}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/610a/9d3e/6a7f86c4c8173b619ff0294c1b8b27f4"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3096}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/610a/9d3e/6a7f86c4c8173b619ff0294c1b8b27f4"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3097}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/610a/9d3e/6a7f86c4c8173b619ff0294c1b8b27f4"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3098}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/610a/9d3e/6a7f86c4c8173b619ff0294c1b8b27f4"
                      }}
                      style={styles.ImageBackground_I0_1775_0_3099}
                    />
                    <View style={styles.View_I0_1775_0_3100}>
                      <View style={styles.View_I0_1775_0_3101}>
                        <View style={styles.View_I0_1775_0_3102}>
                          <View style={styles.View_I0_1775_0_3103} />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7db5/55d1/2c21faf7d5fbf143a414a079cfd03556"
                            }}
                            style={styles.ImageBackground_I0_1775_0_3104}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1776}>
        <View style={styles.View_0_1777}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903d/6d93/a52e077aead30dfb22119f5c3641d3ce"
            }}
            style={styles.ImageBackground_0_1778}
          />
          <View style={styles.View_0_1781}>
            <Text style={styles.Text_0_1781}>14th November</Text>
          </View>
          <View style={styles.View_0_1782}>
            <Text style={styles.Text_0_1782}>Saturday</Text>
          </View>
          <View style={styles.View_0_1783}>
            <Text style={styles.Text_0_1783}>Diwali</Text>
          </View>
        </View>
        <View style={styles.View_0_1784}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903d/6d93/a52e077aead30dfb22119f5c3641d3ce"
            }}
            style={styles.ImageBackground_0_1785}
          />
          <View style={styles.View_0_1788}>
            <Text style={styles.Text_0_1788}>15th November</Text>
          </View>
          <View style={styles.View_0_1789}>
            <Text style={styles.Text_0_1789}>Sunday</Text>
          </View>
          <View style={styles.View_0_1790}>
            <Text style={styles.Text_0_1790}>Govardhan Puja</Text>
          </View>
        </View>
        <View style={styles.View_0_1791}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903d/6d93/a52e077aead30dfb22119f5c3641d3ce"
            }}
            style={styles.ImageBackground_0_1792}
          />
          <View style={styles.View_0_1795}>
            <Text style={styles.Text_0_1795}>16th November</Text>
          </View>
          <View style={styles.View_0_1796}>
            <Text style={styles.Text_0_1796}>Monday</Text>
          </View>
          <View style={styles.View_0_1797}>
            <Text style={styles.Text_0_1797}>Bhaiya Dooj </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1683: {
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
  View_0_1684: {
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
  View_0_1685: {
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
  View_0_1686: {
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
  View_0_1687: {
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
  ImageBackground_0_1688: {
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
  ImageBackground_0_1694: {
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
  ImageBackground_0_1700: {
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
  ImageBackground_0_1709: {
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
  View_0_1710: {
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
  View_I0_1710_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1710_0_2875: {
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
  View_I0_1710_0_2876: {
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
  ImageBackground_I0_1710_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1710_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_1710_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_1710_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_1710_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_1710_0_2891: {
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
  View_I0_1710_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_1710_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1711: {
    width: 261,
    minWidth: 261,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 52
  },
  View_0_1712: {
    width: 178,
    minWidth: 178,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83,
    top: 0
  },
  ImageBackground_0_1713: {
    width: 178,
    minWidth: 178,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1714: {
    width: 83,
    minWidth: 83,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95,
    top: 0
  },
  View_0_1715: {
    width: 76,
    minWidth: 76,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 5
  },
  Text_0_1715: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1716: {
    width: 51,
    minWidth: 51,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112,
    top: 5
  },
  Text_0_1716: {
    color: "rgba(102, 136, 202, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1717: {
    width: 12.000144958496094,
    minWidth: 12.000144958496094,
    height: 20.499969482421875,
    minHeight: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3.49951171875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1717_0_3107: {
    flexGrow: 1,
    width: 12.00014877319336,
    height: 20.499969482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1718: {
    width: 342.6810607910156,
    minWidth: 342.6810607910156,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.318359375,
    top: 141.8800048828125
  },
  View_0_1719: {
    width: 107,
    minWidth: 107,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117.783203125,
    top: 0
  },
  Text_0_1719: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1720: {
    width: 7.564002990722656,
    minWidth: 7.564002990722656,
    height: 13.196990966796875,
    minHeight: 13.196990966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3.532958984375
  },
  ImageBackground_0_1721: {
    width: 7.56402587890625,
    minWidth: 7.56402587890625,
    height: 13.196990966796875,
    minHeight: 13.196990966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 335.1171875,
    top: 3.5340576171875
  },
  View_0_1722: {
    width: 343,
    minWidth: 343,
    height: 284.583984375,
    minHeight: 284.583984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 195.81201171875
  },
  ImageBackground_0_1723: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101,
    top: 145.18798828125
  },
  ImageBackground_0_1724: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 155,
    top: 145.18798828125
  },
  ImageBackground_0_1725: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 205,
    top: 145.18798828125
  },
  ImageBackground_0_1726: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 252.583984375
  },
  ImageBackground_0_1727: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 200.991943359375
  },
  ImageBackground_0_1728: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 146.533935546875
  },
  ImageBackground_0_1729: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 88.2099609375
  },
  ImageBackground_0_1730: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 36.6629638671875
  },
  View_0_1731: {
    width: 334.0010070800781,
    minWidth: 334.0010070800781,
    height: 278.8290100097656,
    minHeight: 278.8290100097656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1732: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 268,
    top: 260.8289794921875
  },
  Text_0_1732: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1733: {
    width: 7,
    minWidth: 7,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 258.8740234375
  },
  Text_0_1733: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1734: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 214,
    top: 260.8289794921875
  },
  Text_0_1734: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1735: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163,
    top: 260.8289794921875
  },
  Text_0_1735: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1736: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109,
    top: 260.8289794921875
  },
  Text_0_1736: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1737: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.0009765625,
    top: 260.8289794921875
  },
  Text_0_1737: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1738: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.0009765625,
    top: 260.8289794921875
  },
  Text_0_1738: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1739: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320,
    top: 206.8070068359375
  },
  Text_0_1739: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1740: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 268.0009765625,
    top: 206.8070068359375
  },
  Text_0_1740: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1741: {
    width: 15,
    minWidth: 15,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 214.0009765625,
    top: 206.8070068359375
  },
  Text_0_1741: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1742: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163,
    top: 205.864013671875
  },
  Text_0_1742: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1743: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109,
    top: 205.864013671875
  },
  Text_0_1743: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1744: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 206.8070068359375
  },
  Text_0_1744: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1745: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 206.8070068359375
  },
  Text_0_1745: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1746: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.0009765625,
    top: 151.823974609375
  },
  Text_0_1746: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1747: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 268,
    top: 151.343017578125
  },
  Text_0_1747: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1748: {
    width: 15,
    minWidth: 15,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 214,
    top: 151.343017578125
  },
  Text_0_1748: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1749: {
    width: 15,
    minWidth: 15,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163,
    top: 151.343017578125
  },
  Text_0_1749: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1750: {
    width: 15,
    minWidth: 15,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109,
    top: 151.343017578125
  },
  Text_0_1750: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1751: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 151.343017578125
  },
  Text_0_1751: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1752: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 150.8809814453125
  },
  Text_0_1752: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1753: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320,
    top: 94.77099609375
  },
  Text_0_1753: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1754: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 268.0009765625,
    top: 94.77099609375
  },
  Text_0_1754: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1755: {
    width: 7,
    minWidth: 7,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 218,
    top: 93.77099609375
  },
  Text_0_1755: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1756: {
    width: 8,
    minWidth: 8,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 167,
    top: 93.77099609375
  },
  Text_0_1756: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1757: {
    width: 7,
    minWidth: 7,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112.0009765625,
    top: 94.77099609375
  },
  Text_0_1757: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1758: {
    width: 7,
    minWidth: 7,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.0009765625,
    top: 93.77099609375
  },
  Text_0_1758: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1759: {
    width: 7,
    minWidth: 7,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 94.77099609375
  },
  Text_0_1759: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1760: {
    width: 7,
    minWidth: 7,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323,
    top: 41.8489990234375
  },
  Text_0_1760: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1761: {
    width: 7,
    minWidth: 7,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 272,
    top: 41.8489990234375
  },
  Text_0_1761: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1762: {
    width: 7,
    minWidth: 7,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 218.0009765625,
    top: 44.18798828125
  },
  Text_0_1762: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1763: {
    width: 7,
    minWidth: 7,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 167.0009765625,
    top: 44.18798828125
  },
  Text_0_1763: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1764: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109,
    top: 44.18798828125
  },
  Text_0_1764: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1765: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.0009765625,
    top: 44.677978515625
  },
  Text_0_1765: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1766: {
    width: 14,
    minWidth: 14,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 44.677978515625
  },
  Text_0_1766: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1767: {
    width: 16,
    minWidth: 16,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.9830322265625
  },
  Text_0_1767: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1768: {
    width: 13,
    minWidth: 13,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.0009765625,
    top: 0
  },
  Text_0_1768: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1769: {
    width: 16,
    minWidth: 16,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 0.9830322265625
  },
  Text_0_1769: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1770: {
    width: 13,
    minWidth: 13,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 162.0009765625,
    top: 0
  },
  Text_0_1770: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1771: {
    width: 10,
    minWidth: 10,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 215,
    top: 0
  },
  Text_0_1771: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1772: {
    width: 13,
    minWidth: 13,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 267.0009765625,
    top: 0
  },
  Text_0_1772: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1773: {
    width: 13,
    minWidth: 13,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.15625,
    top: 0
  },
  Text_0_1773: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1774: {
    width: 95,
    minWidth: 95,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 505
  },
  Text_0_1774: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1775: {
    width: 374.7879638671875,
    minWidth: 374.7879638671875,
    height: 131.843994140625,
    minHeight: 131.843994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.2119140625,
    top: 681,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1775_0_2899: {
    flexGrow: 1,
    width: 374.7879638671875,
    height: 131.843994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1775_0_2900: {
    width: 374.7879638671875,
    minWidth: 374.7879638671875,
    height: 131.843994140625,
    minHeight: 131.843994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1775_0_2901: {
    width: 374.7879943847656,
    height: 131.843994140625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_1775_0_2902: {
    width: 374.7879943847656,
    minWidth: 374.7879943847656,
    height: 131.843994140625,
    minHeight: 131.843994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1775_0_2903: {
    width: 374.824951171875,
    minWidth: 374.824951171875,
    height: 128.38800048828125,
    minHeight: 128.38800048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1775_0_2904: {
    width: 374.824951171875,
    minWidth: 374.824951171875,
    height: 128.38800048828125,
    minHeight: 128.38800048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1775_0_2905: {
    width: 374.82501220703125,
    height: 128.38800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_1775_0_2906: {
    width: 374.82501220703125,
    minWidth: 374.82501220703125,
    height: 128.38800048828125,
    minHeight: 128.38800048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_1775_0_2907: {
    width: 180.069091796875,
    height: 55.492271423339844,
    top: 60.3173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.92578125
  },
  ImageBackground_I0_1775_0_2908: {
    width: 36.69970703125,
    height: 36.876121520996094,
    top: 5.4859619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0390625
  },
  ImageBackground_I0_1775_0_2909: {
    width: 7.91632080078125,
    height: 29.485069274902344,
    top: 8.7515869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.9560546875
  },
  ImageBackground_I0_1775_0_2910: {
    width: 16.75469970703125,
    height: 25.380634307861328,
    top: 5.92431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.4033203125
  },
  ImageBackground_I0_1775_0_2911: {
    width: 16.41424560546875,
    height: 20.61669921875,
    top: 21.0335693359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.7958984375
  },
  ImageBackground_I0_1775_0_2912: {
    width: 1.624755859375,
    height: 1.6282730102539062,
    top: 12.0223388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.490234375
  },
  ImageBackground_I0_1775_0_2913: {
    width: 1.31103515625,
    height: 1.3120002746582031,
    top: 15.6156005859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.1533203125
  },
  ImageBackground_I0_1775_0_2914: {
    width: 1,
    height: 1,
    top: 18.8953857421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.849609375
  },
  ImageBackground_I0_1775_0_2915: {
    width: 1.24859619140625,
    height: 1.252685546875,
    top: 25.4527587890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.044921875
  },
  ImageBackground_I0_1775_0_2916: {
    width: 2.50787353515625,
    height: 1,
    top: 32.4505615234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.3095703125
  },
  ImageBackground_I0_1775_0_2917: {
    width: 1.50286865234375,
    height: 1.502349853515625,
    top: 24.820556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.27734375
  },
  ImageBackground_I0_1775_0_2918: {
    width: 1.75091552734375,
    height: 1.0569992065429688,
    top: 30.371337890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.9111328125
  },
  ImageBackground_I0_1775_0_2919: {
    width: 1,
    height: 1.4359817504882812,
    top: 37.8768310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.0458984375
  },
  ImageBackground_I0_1775_0_2920: {
    width: 1.62579345703125,
    height: 1,
    top: 37.1788330078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.4765625
  },
  ImageBackground_I0_1775_0_2921: {
    width: 1.49554443359375,
    height: 2.1327285766601562,
    top: 25.7642822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.9697265625
  },
  ImageBackground_I0_1775_0_2922: {
    width: 1.50189208984375,
    height: 1,
    top: 21.223388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.69921875
  },
  ImageBackground_I0_1775_0_2923: {
    width: 1,
    height: 1.8170585632324219,
    top: 13.3480224609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.0791015625
  },
  ImageBackground_I0_1775_0_2924: {
    width: 1.75079345703125,
    height: 1.248565673828125,
    top: 10.6962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.08203125
  },
  ImageBackground_I0_1775_0_2925: {
    width: 25.73016357421875,
    height: 20.381210327148438,
    top: 67.72265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.931640625
  },
  ImageBackground_I0_1775_0_2926: {
    width: 4.573974609375,
    height: 9.015464782714844,
    top: 61.837158203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.9541015625
  },
  ImageBackground_I0_1775_0_2927: {
    width: 4.552001953125,
    height: 4.34100341796875,
    top: 62.664306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.3857421875
  },
  ImageBackground_I0_1775_0_2928: {
    width: 3.04693603515625,
    height: 2.803924560546875,
    top: 63.97998046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60.7646484375
  },
  ImageBackground_I0_1775_0_2929: {
    width: 3.3436279296875,
    height: 4.467857360839844,
    top: 70.2354736328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.0205078125
  },
  ImageBackground_I0_1775_0_2930: {
    width: 47.27099609375,
    height: 52.37481689453125,
    top: 76.01611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245.82421875
  },
  ImageBackground_I0_1775_0_2931: {
    width: 14.6064453125,
    height: 41.423866271972656,
    top: 84.649169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251.05078125
  },
  ImageBackground_I0_1775_0_2932: {
    width: 15.621337890625,
    height: 8.054542541503906,
    top: 89.9117431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260.59765625
  },
  ImageBackground_I0_1775_0_2933: {
    width: 14.9285888671875,
    height: 5.9549560546875,
    top: 99.2362060546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 264.1953125
  },
  ImageBackground_I0_1775_0_2934: {
    width: 14.9285888671875,
    height: 5.9549560546875,
    top: 96.480224609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262.890625
  },
  ImageBackground_I0_1775_0_2935: {
    width: 18.5472412109375,
    height: 18.727962493896484,
    top: 16.966552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 281.107421875
  },
  ImageBackground_I0_1775_0_2936: {
    width: 12.7366943359375,
    height: 12.895675659179688,
    top: 19.9033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283.9990234375
  },
  ImageBackground_I0_1775_0_2937: {
    width: 1.4794921875,
    height: 4.214263916015625,
    top: 24.7186279296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 286.1796875
  },
  ImageBackground_I0_1775_0_2938: {
    width: 2.570556640625,
    height: 8.605827331542969,
    top: 21.7176513671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289.041015625
  },
  ImageBackground_I0_1775_0_2939: {
    width: 1.14208984375,
    height: 2.8031463623046875,
    top: 24.968505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292.6181640625
  },
  ImageBackground_I0_1775_0_2940: {
    width: 17.18359375,
    height: 7.682445526123047,
    top: 27.8421630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297.30859375
  },
  ImageBackground_I0_1775_0_2941: {
    width: 48.77862548828125,
    height: 38.798377990722656,
    top: 82.8062744140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84.4580078125
  },
  ImageBackground_I0_1775_0_2942: {
    width: 1,
    height: 30.056838989257812,
    top: 90.1026611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.4619140625
  },
  ImageBackground_I0_1775_0_2943: {
    width: 18.14080810546875,
    height: 2.3446502685546875,
    top: 89.7135009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.404296875
  },
  ImageBackground_I0_1775_0_2944: {
    width: 18.14117431640625,
    height: 2.344635009765625,
    top: 93.859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.4033203125
  },
  ImageBackground_I0_1775_0_2945: {
    width: 18.14117431640625,
    height: 2.343780517578125,
    top: 98.00634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.4033203125
  },
  ImageBackground_I0_1775_0_2946: {
    width: 18.14080810546875,
    height: 2.344635009765625,
    top: 102.1524658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.404296875
  },
  ImageBackground_I0_1775_0_2947: {
    width: 18.14117431640625,
    height: 2.3447723388671875,
    top: 106.30029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.4033203125
  },
  ImageBackground_I0_1775_0_2948: {
    width: 18.14080810546875,
    height: 2.3447723388671875,
    top: 110.4462890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87.404296875
  },
  ImageBackground_I0_1775_0_2949: {
    width: 18.1422119140625,
    height: 2.3446502685546875,
    top: 89.7135009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  ImageBackground_I0_1775_0_2950: {
    width: 18.1422119140625,
    height: 2.344635009765625,
    top: 93.859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  ImageBackground_I0_1775_0_2951: {
    width: 18.1422119140625,
    height: 2.3436431884765625,
    top: 98.0064697265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  ImageBackground_I0_1775_0_2952: {
    width: 18.1422119140625,
    height: 2.344635009765625,
    top: 102.1524658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  ImageBackground_I0_1775_0_2953: {
    width: 18.1422119140625,
    height: 2.3447723388671875,
    top: 106.30029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  ImageBackground_I0_1775_0_2954: {
    width: 18.1422119140625,
    height: 2.344635009765625,
    top: 110.4464111328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111.119140625
  },
  ImageBackground_I0_1775_0_2955: {
    width: 35.610107421875,
    height: 31.10565948486328,
    top: 46.64111328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 290.958984375
  },
  ImageBackground_I0_1775_0_2956: {
    width: 21.1883544921875,
    height: 18.541282653808594,
    top: 51.718505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 296.974609375
  },
  ImageBackground_I0_1775_0_2957: {
    width: 1.7750244140625,
    height: 3.1312179565429688,
    top: 72.2686767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 296.84765625
  },
  ImageBackground_I0_1775_0_2958: {
    width: 1.5208740234375,
    height: 2.32794189453125,
    top: 69.85400390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303.83984375
  },
  ImageBackground_I0_1775_0_2959: {
    width: 1.470947265625,
    height: 2.429718017578125,
    top: 66.1829833984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310.8837890625
  },
  ImageBackground_I0_1775_0_2960: {
    width: 1.66357421875,
    height: 2.3273849487304688,
    top: 62.9144287109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 317.12109375
  },
  ImageBackground_I0_1775_0_2961: {
    width: 2.3258056640625,
    height: 1.5180587768554688,
    top: 57.8367919921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 322.544921875
  },
  ImageBackground_I0_1775_0_2962: {
    width: 2.376953125,
    height: 2.0702972412109375,
    top: 52.1552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 317.91796875
  },
  ImageBackground_I0_1775_0_2963: {
    width: 1.6729736328125,
    height: 2.1720352172851562,
    top: 47.7801513671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 312.287109375
  },
  ImageBackground_I0_1775_0_2964: {
    width: 1.1221923828125,
    height: 2.53314208984375,
    top: 46.9705810546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305.44921875
  },
  ImageBackground_I0_1775_0_2965: {
    width: 1.8699951171875,
    height: 1.8743972778320312,
    top: 49.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297.9560546875
  },
  ImageBackground_I0_1775_0_2966: {
    width: 2.1783447265625,
    height: 1.0747146606445312,
    top: 56.423095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.0771484375
  },
  ImageBackground_I0_1775_0_2967: {
    width: 2.679931640625,
    height: 1,
    top: 64.1231689453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291.1640625
  },
  ImageBackground_I0_1775_0_2968: {
    width: 2.1795654296875,
    height: 1.2717514038085938,
    top: 71.1640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292.31640625
  },
  ImageBackground_I0_1775_0_2969: {
    width: 16.37982177734375,
    height: 21.38909912109375,
    top: 42.5684814453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.1943359375
  },
  ImageBackground_I0_1775_0_2970: {
    width: 12.20001220703125,
    height: 10.945304870605469,
    top: 61.9097900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86.46484375
  },
  ImageBackground_I0_1775_0_2971: {
    width: 5.50836181640625,
    height: 2.3047866821289062,
    top: 64.1527099609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.6904296875
  },
  ImageBackground_I0_1775_0_2972: {
    width: 4.6494140625,
    height: 2.0127792358398438,
    top: 67.9716796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90.7041015625
  },
  ImageBackground_I0_1775_0_2973: {
    width: 10.367431640625,
    height: 13.326515197753906,
    top: 50.5223388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90.998046875
  },
  ImageBackground_I0_1775_0_2974: {
    width: 23.56005859375,
    height: 22.71147918701172,
    top: 3.2218017578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.654296875
  },
  ImageBackground_I0_1775_0_2975: {
    width: 17.05908203125,
    height: 16.45627212524414,
    top: 6.3441162109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 317.919921875
  },
  ImageBackground_I0_1775_0_2976: {
    width: 23.5643310546875,
    height: 22.714595794677734,
    top: 13.279052734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342.0478515625
  },
  ImageBackground_I0_1775_0_2977: {
    width: 17.0552978515625,
    height: 16.454532623291016,
    top: 16.4041748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345.31640625
  },
  ImageBackground_I0_1775_0_2978: {
    width: 6.4356689453125,
    height: 3.011180877685547,
    top: 15.68359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337.6728515625
  },
  ImageBackground_I0_1775_0_2979: {
    width: 6.0386962890625,
    height: 2.900867462158203,
    top: 18.01123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337.2109375
  },
  ImageBackground_I0_1775_0_2980: {
    width: 6.02734375,
    height: 3.0972938537597656,
    top: 9.3809814453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320.7998046875
  },
  ImageBackground_I0_1775_0_2981: {
    width: 8.102783203125,
    height: 4.08929443359375,
    top: 11.8218994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 322.615234375
  },
  ImageBackground_I0_1775_0_2982: {
    width: 2.7313232421875,
    height: 1.5959701538085938,
    top: 16.1263427734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326.5712890625
  },
  ImageBackground_I0_1775_0_2983: {
    width: 7.825439453125,
    height: 3.928295135498047,
    top: 20.219970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 347.689453125
  },
  ImageBackground_I0_1775_0_2984: {
    width: 4.8546142578125,
    height: 2.5669403076171875,
    top: 24.9527587890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 352.208984375
  },
  ImageBackground_I0_1775_0_2985: {
    width: 1,
    height: 1,
    top: 27.7606201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 356.3173828125
  },
  ImageBackground_I0_1775_0_2986: {
    width: 15.54400634765625,
    height: 9.765811920166016,
    top: 21.6739501953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67.59375
  },
  ImageBackground_I0_1775_0_2987: {
    width: 12.93634033203125,
    height: 11.75637435913086,
    top: 21.314453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70.56640625
  },
  ImageBackground_I0_1775_0_2988: {
    width: 18.60009765625,
    height: 4.900764465332031,
    top: 20.7847900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64.884765625
  },
  ImageBackground_I0_1775_0_2989: {
    width: 16.16436767578125,
    height: 20.53191375732422,
    top: 32.1866455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50.9521484375
  },
  ImageBackground_I0_1775_0_2990: {
    width: 64.7900390625,
    height: 22.418731689453125,
    top: 93.546630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.2177734375
  },
  ImageBackground_I0_1775_0_2991: {
    width: 57.23663330078125,
    height: 19.285675048828125,
    top: 96.6536865234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.611328125
  },
  ImageBackground_I0_1775_0_2992: {
    width: 7.79241943359375,
    height: 9.287139892578125,
    top: 104.3038330078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.2158203125
  },
  ImageBackground_I0_1775_0_2993: {
    width: 10.12109375,
    height: 8.8919677734375,
    top: 100.7401123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.7109375
  },
  ImageBackground_I0_1775_0_2994: {
    width: 6.29901123046875,
    height: 7.1674346923828125,
    top: 98.616455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.8349609375
  },
  ImageBackground_I0_1775_0_2995: {
    width: 3.93768310546875,
    height: 5.06243896484375,
    top: 97.3946533203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.4638671875
  },
  ImageBackground_I0_1775_0_2996: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 101.089599609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.15234375
  },
  ImageBackground_I0_1775_0_2997: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 99.358642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.7607421875
  },
  ImageBackground_I0_1775_0_2998: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 102.820556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.775390625
  },
  ImageBackground_I0_1775_0_2999: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 103.8095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61.5068359375
  },
  ImageBackground_I0_1775_0_3000: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 95.525634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75.3544921875
  },
  ImageBackground_I0_1775_0_3001: {
    width: 39.29241943359375,
    height: 58.85499572753906,
    top: 36.7506103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.015625
  },
  ImageBackground_I0_1775_0_3002: {
    width: 33.16119384765625,
    height: 50.66117858886719,
    top: 43.063720703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.8388671875
  },
  ImageBackground_I0_1775_0_3003: {
    width: 10.8885498046875,
    height: 9.633522033691406,
    top: 75.8411865234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.697265625
  },
  ImageBackground_I0_1775_0_3004: {
    width: 11.98486328125,
    height: 11.721038818359375,
    top: 63.6046142578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.125
  },
  ImageBackground_I0_1775_0_3005: {
    width: 11.64849853515625,
    height: 9.793548583984375,
    top: 55.91455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.517578125
  },
  ImageBackground_I0_1775_0_3006: {
    width: 11.03387451171875,
    height: 8.178909301757812,
    top: 47.382568359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.2099609375
  },
  ImageBackground_I0_1775_0_3007: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 51.712646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.58203125
  },
  ImageBackground_I0_1775_0_3008: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 49.8536376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.3125
  },
  ImageBackground_I0_1775_0_3009: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 52.45361328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.806640625
  },
  ImageBackground_I0_1775_0_3010: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 59.378662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.47265625
  },
  ImageBackground_I0_1775_0_3011: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 57.024658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.2041015625
  },
  ImageBackground_I0_1775_0_3012: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 59.6256103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.0693359375
  },
  ImageBackground_I0_1775_0_3013: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 77.797607421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.8720703125
  },
  ImageBackground_I0_1775_0_3014: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 77.0556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.46875
  },
  ImageBackground_I0_1775_0_3015: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 69.517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.3408203125
  },
  ImageBackground_I0_1775_0_3016: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 66.6695556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.8349609375
  },
  ImageBackground_I0_1775_0_3017: {
    width: 1.16754150390625,
    height: 1.235992431640625,
    top: 45.03564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.2626953125
  },
  ImageBackground_I0_1775_0_3018: {
    width: 46.46435546875,
    height: 46.51941680908203,
    top: 69.158203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_1775_0_3019: {
    width: 38.78125,
    height: 44.05986022949219,
    top: 72.69921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.3798828125
  },
  ImageBackground_I0_1775_0_3020: {
    width: 17.1988525390625,
    height: 16.653671264648438,
    top: 77.4647216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.4794921875
  },
  ImageBackground_I0_1775_0_3021: {
    width: 18.3408203125,
    height: 17.028823852539062,
    top: 91.8077392578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0009765625
  },
  ImageBackground_I0_1775_0_3022: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 86.5185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.1650390625
  },
  ImageBackground_I0_1775_0_3023: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 81.819580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.1650390625
  },
  ImageBackground_I0_1775_0_3024: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 82.5616455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.5732421875
  },
  ImageBackground_I0_1775_0_3025: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 87.754638671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.9375
  },
  ImageBackground_I0_1775_0_3026: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 89.2386474609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.646484375
  },
  ImageBackground_I0_1775_0_3027: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 100.861572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.6162109375
  },
  ImageBackground_I0_1775_0_3028: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 105.8076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.7548828125
  },
  ImageBackground_I0_1775_0_3029: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 84.2926025390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.0263671875
  },
  ImageBackground_I0_1775_0_3030: {
    width: 1.79498291015625,
    height: 1.8549957275390625,
    top: 102.09765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.05859375
  },
  ImageBackground_I0_1775_0_3031: {
    width: 64.7900390625,
    height: 22.418731689453125,
    top: 93.546630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.81640625
  },
  ImageBackground_I0_1775_0_3032: {
    width: 57.2366943359375,
    height: 19.283294677734375,
    top: 96.654052734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300.982421875
  },
  ImageBackground_I0_1775_0_3033: {
    width: 7.789794921875,
    height: 9.28607177734375,
    top: 104.3038330078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 338.8271484375
  },
  ImageBackground_I0_1775_0_3034: {
    width: 10.122802734375,
    height: 8.892974853515625,
    top: 100.7381591796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324.994140625
  },
  ImageBackground_I0_1775_0_3035: {
    width: 6.300048828125,
    height: 7.1663360595703125,
    top: 98.6177978515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.697265625
  },
  ImageBackground_I0_1775_0_3036: {
    width: 3.9388427734375,
    height: 5.0595703125,
    top: 97.3975830078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 308.421875
  },
  ImageBackground_I0_1775_0_3037: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 101.089599609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 325.5048828125
  },
  ImageBackground_I0_1775_0_3038: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 99.358642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323.896484375
  },
  ImageBackground_I0_1775_0_3039: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 102.820556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313.8818359375
  },
  ImageBackground_I0_1775_0_3040: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 103.8095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 312.150390625
  },
  ImageBackground_I0_1775_0_3041: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 95.525634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298.302734375
  },
  ImageBackground_I0_1775_0_3042: {
    width: 39.29248046875,
    height: 58.85499572753906,
    top: 36.7506103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.5166015625
  },
  ImageBackground_I0_1775_0_3043: {
    width: 33.1610107421875,
    height: 50.659515380859375,
    top: 43.064208984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339.82421875
  },
  ImageBackground_I0_1775_0_3044: {
    width: 10.885986328125,
    height: 9.637481689453125,
    top: 75.833251953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 359.240234375
  },
  ImageBackground_I0_1775_0_3045: {
    width: 11.989990234375,
    height: 11.730026245117188,
    top: 63.5936279296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 351.7109375
  },
  ImageBackground_I0_1775_0_3046: {
    width: 11.6495361328125,
    height: 9.795211791992188,
    top: 55.9195556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345.6572265625
  },
  ImageBackground_I0_1775_0_3047: {
    width: 10.99609375,
    height: 8.204757690429688,
    top: 47.3775634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339.578125
  },
  ImageBackground_I0_1775_0_3048: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 51.712646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 355.076171875
  },
  ImageBackground_I0_1775_0_3049: {
    width: 1.1676025390625,
    height: 1.235992431640625,
    top: 49.8536376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 353.3447265625
  },
  ImageBackground_I0_1775_0_3050: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 52.45361328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 352.8505859375
  },
  ImageBackground_I0_1775_0_3051: {
    width: 1.1676025390625,
    height: 1.235992431640625,
    top: 59.378662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345.1845703125
  },
  ImageBackground_I0_1775_0_3052: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 57.024658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 343.453125
  },
  ImageBackground_I0_1775_0_3053: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 59.6256103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342.587890625
  },
  ImageBackground_I0_1775_0_3054: {
    width: 1.167724609375,
    height: 1.235992431640625,
    top: 77.797607421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 358.78515625
  },
  ImageBackground_I0_1775_0_3055: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 77.0556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 356.1884765625
  },
  ImageBackground_I0_1775_0_3056: {
    width: 1.1676025390625,
    height: 1.235992431640625,
    top: 69.517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367.31640625
  },
  ImageBackground_I0_1775_0_3057: {
    width: 1.16748046875,
    height: 1.235992431640625,
    top: 66.6695556640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 366.822265625
  },
  ImageBackground_I0_1775_0_3058: {
    width: 1.1676025390625,
    height: 1.235992431640625,
    top: 45.03564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337.39453125
  },
  ImageBackground_I0_1775_0_3059: {
    width: 46.46533203125,
    height: 46.51941680908203,
    top: 69.158203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 328.3603515625
  },
  ImageBackground_I0_1775_0_3060: {
    width: 38.7816162109375,
    height: 44.057281494140625,
    top: 72.699951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 335.6650390625
  },
  ImageBackground_I0_1775_0_3061: {
    width: 17.198974609375,
    height: 16.654922485351562,
    top: 77.464599609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337.146484375
  },
  ImageBackground_I0_1775_0_3062: {
    width: 18.341796875,
    height: 17.029022216796875,
    top: 91.8076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 349.4873046875
  },
  ImageBackground_I0_1775_0_3063: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 86.5185546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 356.865234375
  },
  ImageBackground_I0_1775_0_3064: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 81.819580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 356.865234375
  },
  ImageBackground_I0_1775_0_3065: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 82.5616455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 348.45703125
  },
  ImageBackground_I0_1775_0_3066: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 87.754638671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336.091796875
  },
  ImageBackground_I0_1775_0_3067: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 89.2386474609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 332.3828125
  },
  ImageBackground_I0_1775_0_3068: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 100.861572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 352.4140625
  },
  ImageBackground_I0_1775_0_3069: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 105.8076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342.275390625
  },
  ImageBackground_I0_1775_0_3070: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 84.2926025390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367.00390625
  },
  ImageBackground_I0_1775_0_3071: {
    width: 1.794921875,
    height: 1.8549957275390625,
    top: 102.09765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 369.970703125
  },
  ImageBackground_I0_1775_0_3072: {
    width: 25.334716796875,
    height: 27.309738159179688,
    top: 89.6888427734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160.193359375
  },
  ImageBackground_I0_1775_0_3073: {
    width: 21.2943115234375,
    height: 24.3258056640625,
    top: 92.4749755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160.66796875
  },
  ImageBackground_I0_1775_0_3074: {
    width: 11.6278076171875,
    height: 9.145523071289062,
    top: 96.2906494140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170.05078125
  },
  ImageBackground_I0_1775_0_3075: {
    width: 12.48583984375,
    height: 10.500259399414062,
    top: 101.3677978515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163.8916015625
  },
  ImageBackground_I0_1775_0_3076: {
    width: 21.305419921875,
    height: 37.464996337890625,
    top: 80.61962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140.7685546875
  },
  ImageBackground_I0_1775_0_3077: {
    width: 16.815673828125,
    height: 32.51842498779297,
    top: 85.407470703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144.23046875
  },
  ImageBackground_I0_1775_0_3078: {
    width: 5.9215087890625,
    height: 6.4123687744140625,
    top: 89.2540283203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144.1259765625
  },
  ImageBackground_I0_1775_0_3079: {
    width: 8.39111328125,
    height: 7.28472900390625,
    top: 95.1826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 145.4873046875
  },
  ImageBackground_I0_1775_0_3080: {
    width: 9.1285400390625,
    height: 6.5359344482421875,
    top: 103.349365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148.955078125
  },
  ImageBackground_I0_1775_0_3081: {
    width: 25.0609130859375,
    height: 23.3690185546875,
    top: 94.7391357421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 205.1884765625
  },
  ImageBackground_I0_1775_0_3082: {
    width: 19.2689208984375,
    height: 17.767822265625,
    top: 98.564208984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 208.2353515625
  },
  ImageBackground_I0_1775_0_3083: {
    width: 1,
    height: 8.490005493164062,
    top: 84.5146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217.736328125
  },
  ImageBackground_I0_1775_0_3084: {
    width: 2.5518798828125,
    height: 2.5527267456054688,
    top: 91.2843017578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 208.205078125
  },
  ImageBackground_I0_1775_0_3085: {
    width: 2.93994140625,
    height: 2.939971923828125,
    top: 91.711669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225.8984375
  },
  ImageBackground_I0_1775_0_3086: {
    width: 5.7117919921875,
    height: 1.8646087646484375,
    top: 100.5262451171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198.0029296875
  },
  ImageBackground_I0_1775_0_3087: {
    width: 5.7216796875,
    height: 1.2978363037109375,
    top: 101.508056640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232.7939453125
  },
  ImageBackground_I0_1775_0_3088: {
    width: 2.8280029296875,
    height: 1,
    top: 109.651611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 233.0654296875
  },
  ImageBackground_I0_1775_0_3089: {
    width: 3.3798828125,
    height: 1,
    top: 109.7921142578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 200.3369140625
  },
  ImageBackground_I0_1775_0_3092: {
    width: 11.0718994140625,
    height: 13.313987731933594,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.0771484375
  },
  ImageBackground_I0_1775_0_3093: {
    width: 8.46539306640625,
    height: 9.771949768066406,
    top: 64.4595947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114.857421875
  },
  ImageBackground_I0_1775_0_3094: {
    width: 1.62591552734375,
    height: 1.6829986572265625,
    top: 50.1585693359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71.017578125
  },
  ImageBackground_I0_1775_0_3095: {
    width: 1.62591552734375,
    height: 1.6829986572265625,
    top: 47.6346435546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72.5283203125
  },
  ImageBackground_I0_1775_0_3096: {
    width: 1.62591552734375,
    height: 1.6829986572265625,
    top: 50.49462890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73.70703125
  },
  ImageBackground_I0_1775_0_3097: {
    width: 1.625732421875,
    height: 1.6829833984375,
    top: 81.65966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313.1318359375
  },
  ImageBackground_I0_1775_0_3098: {
    width: 1.625732421875,
    height: 1.6829986572265625,
    top: 79.131591796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.6494140625
  },
  ImageBackground_I0_1775_0_3099: {
    width: 1.6258544921875,
    height: 1.6829986572265625,
    top: 81.9915771484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.82421875
  },
  View_I0_1775_0_3100: {
    width: 48.029052734375,
    minWidth: 48.029052734375,
    height: 25.042999267578125,
    minHeight: 25.042999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172.609375,
    top: 39.515625
  },
  View_I0_1775_0_3101: {
    width: 48.029052734375,
    minWidth: 48.029052734375,
    height: 25.042999267578125,
    minHeight: 25.042999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1775_0_3102: {
    width: 48.029052734375,
    minWidth: 48.029052734375,
    height: 25.042999267578125,
    minHeight: 25.042999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1775_0_3103: {
    width: 48.02899932861328,
    height: 25.042999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_1775_0_3104: {
    width: 48.02899932861328,
    height: 25.042999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1776: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 264,
    minHeight: 264,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 538.699951171875
  },
  View_0_1777: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1778: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1781: {
    width: 91,
    minWidth: 91,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 45.300048828125
  },
  Text_0_1781: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1782: {
    width: 53,
    minWidth: 53,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 272,
    top: 45.300048828125
  },
  Text_0_1782: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1783: {
    width: 43,
    minWidth: 43,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  Text_0_1783: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1784: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 92
  },
  ImageBackground_0_1785: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1788: {
    width: 91,
    minWidth: 91,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 45.300048828125
  },
  Text_0_1788: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1789: {
    width: 45,
    minWidth: 45,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 281,
    top: 45.300048828125
  },
  Text_0_1789: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1790: {
    width: 110,
    minWidth: 110,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  Text_0_1790: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1791: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 184
  },
  ImageBackground_0_1792: {
    width: 342.85101318359375,
    minWidth: 342.85101318359375,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1795: {
    width: 91,
    minWidth: 91,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 45.300048828125
  },
  Text_0_1795: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1796: {
    width: 47,
    minWidth: 47,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 281,
    top: 45.300048828125
  },
  Text_0_1796: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1797: {
    width: 85,
    minWidth: 85,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 13.300048828125
  },
  Text_0_1797: {
    color: "rgba(58, 58, 58, 1)",
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
