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
      <View style={styles.View_0_814} />
      <View style={styles.View_0_815}>
        <View style={styles.View_0_816} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ff2/7286/db025cec2048b0b2fc3f8260fb7b8749"
          }}
          style={styles.ImageBackground_0_817}
        />
      </View>
      <View style={styles.View_0_818}>
        <View style={styles.View_I0_818_0_2874}>
          <View style={styles.View_I0_818_0_2875} />
          <View style={styles.View_I0_818_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_818_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_818_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_818_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_818_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_818_0_2888}
          />
          <View style={styles.View_I0_818_0_2891}>
            <View style={styles.View_I0_818_0_2892}>
              <Text style={styles.Text_I0_818_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_819}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef2/8388/0a00112c80a0742d2571b95439b247de"
          }}
          style={styles.ImageBackground_0_820}
        />
        <View style={styles.View_0_829}>
          <Text style={styles.Text_0_829}>Password</Text>
        </View>
        <View style={styles.View_0_830}>
          <View style={styles.View_I0_830_0_3115}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a8/421c/10641533d0887a2a2579f21db3d25e66"
              }}
              style={styles.ImageBackground_I0_830_0_3118}
            />
          </View>
        </View>
        <View style={styles.View_0_831} />
      </View>
      <View style={styles.View_0_832}>
        <View style={styles.View_I0_832_0_3110}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8370/bd5f/c99a7c0210f55cad1cde7c5f2f6d8c98"
            }}
            style={styles.ImageBackground_I0_832_0_3111}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a44/e1fb/1abb0f5a9b92091d17c5a03634cedf80"
            }}
            style={styles.ImageBackground_I0_832_0_3112}
          />
          <View style={styles.View_I0_832_0_3113}>
            <Text style={styles.Text_I0_832_0_3113}>SIGN IN</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_833}>
        <View style={styles.View_0_834}>
          <Text style={styles.Text_0_834}>Syalfreelance@gmail.com</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c787/abd3/8dd3f2c51c221894811d9661415c458e"
          }}
          style={styles.ImageBackground_0_835}
        />
        <View style={styles.View_0_836}>
          <Text style={styles.Text_0_836}>Mobile Number/Email</Text>
        </View>
      </View>
      <View style={styles.View_0_837}>
        <View style={styles.View_0_838}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b56/c580/83463b5df2d30f094322693163789071"
            }}
            style={styles.ImageBackground_0_839}
          />
          <View style={styles.View_0_843}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b79e/7074/012bf54f459915b07ca3ca1a59818984"
              }}
              style={styles.ImageBackground_0_844}
            />
            <View style={styles.View_0_850}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f132/6c54/7f4f6d558fa98f9c4a9cbfb6ab6552e5"
                }}
                style={styles.ImageBackground_0_851}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f02/b2b0/ec7412f387e56708dcb3df765b770079"
                }}
                style={styles.ImageBackground_0_853}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f60/6661/858882aac4a1c47f7463a3f2ba25e351"
                }}
                style={styles.ImageBackground_0_854}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ddb/ac09/50f1a4621fa14e2fddcf5eb232e1a01e"
                }}
                style={styles.ImageBackground_0_855}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a5/43ad/4e277963eed454edc00b36df80d1cced"
                }}
                style={styles.ImageBackground_0_856}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/9aeb/0c9763e05055146aa63f118882c7fbb7"
                }}
                style={styles.ImageBackground_0_857}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3aa/b293/275825dde9328e1ebf82f00f79602aa8"
                }}
                style={styles.ImageBackground_0_858}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6881/9dfd/f28f380962aff0d8cf2064400f38a581"
                }}
                style={styles.ImageBackground_0_859}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/065a/b7f6248daa5705e534235bb26b272b28"
              }}
              style={styles.ImageBackground_0_860}
            />
            <View style={styles.View_0_869}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6158/bb0e/e033200e1a71ef49d0f477162c4ba86f"
                }}
                style={styles.ImageBackground_0_870}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2114/6ec4/73d23487c76e11d236b401993afd8621"
                }}
                style={styles.ImageBackground_0_871}
              />
              <View style={styles.View_0_872}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/822b/f8c5/10f6938bafbb9b57a1c2d551e9c806d2"
                  }}
                  style={styles.ImageBackground_0_873}
                />
              </View>
            </View>
            <View style={styles.View_0_875}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c68/abb9/52327b2d3df021611984ef179c2780b4"
                }}
                style={styles.ImageBackground_0_876}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83ad/afc9/ad189e056abcd4b26817a1e7ba56fd9a"
                }}
                style={styles.ImageBackground_0_882}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaa4/6158/05d5d8a3ec63151b782f00bd3396fb9c"
            }}
            style={styles.ImageBackground_0_888}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f664/6b23/b9af4f2cb5445b333f196c4b8e49ca94"
            }}
            style={styles.ImageBackground_0_889}
          />
          <View style={styles.View_0_899}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e57/a3a2/c68ab526c5200ceffed8e7ffbcf08872"
              }}
              style={styles.ImageBackground_0_900}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/725f/da1c/def70e21c7f97b72f976d2ff00600fed"
              }}
              style={styles.ImageBackground_0_902}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61a6/b62c/c6ce4b3477750cfba1f3e5e1444747d9"
              }}
              style={styles.ImageBackground_0_903}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7e/1264/d5f2354c964b21e5695fe1b20fcf38d5"
              }}
              style={styles.ImageBackground_0_908}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bed5/611d/18d0256c79b19149ecca3320bf455df7"
              }}
              style={styles.ImageBackground_0_909}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/724e/88b1/cd2ce9d861d45a35103ce0646fd2a981"
              }}
              style={styles.ImageBackground_0_910}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71c6/861a/6925a8140e29c9402ba3d237c28b6b40"
              }}
              style={styles.ImageBackground_0_911}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d66f/274e/e31ff28a93b983b2adb64a594d8b292f"
              }}
              style={styles.ImageBackground_0_912}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d9e/b58b/73db343f21b00a956f6dced4674fc140"
              }}
              style={styles.ImageBackground_0_913}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e579/0643/f6faf11c14145a17576d53afdf62a46c"
              }}
              style={styles.ImageBackground_0_914}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f33/ec21/ca060cbf2ab62d123f5c1ba412d40f21"
              }}
              style={styles.ImageBackground_0_915}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa21/5043/89feaf05facbdd49995638a0cb52ddb3"
              }}
              style={styles.ImageBackground_0_916}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4de/bb66/2ed99f0b7146db008bb64c490d014096"
              }}
              style={styles.ImageBackground_0_917}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49b7/b713/ed79f45899af1ef7050c8029ed8df91a"
              }}
              style={styles.ImageBackground_0_918}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26a8/d822/dea68e14e8377e75aa6b916fecec1e09"
              }}
              style={styles.ImageBackground_0_919}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90d7/d16d/f6a18dce118ff06dfe141b53ae9f412f"
              }}
              style={styles.ImageBackground_0_924}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc28/a3e9/41d3ab5a72209448778a97dc4f0db7d3"
              }}
              style={styles.ImageBackground_0_929}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0396/4291/cd8d76a6ae7a9cc335b52471e9828b07"
              }}
              style={styles.ImageBackground_0_933}
            />
            <View style={styles.View_0_937}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff0f/60af/73386ddf19d2287543cd37f7ea669dbc"
                }}
                style={styles.ImageBackground_0_938}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27bd/c30c/73d33b1b9804012c235b94c0433651fa"
                }}
                style={styles.ImageBackground_0_939}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db04/967b/5f7c5f2ef429ba539dcc82c60ffa4be0"
                }}
                style={styles.ImageBackground_0_946}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47d0/09d9/c5cec9a717652c422efa39b172cb31ac"
                }}
                style={styles.ImageBackground_0_948}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a87b/3b66/e09793f21a6c3679685ea1dee2ef92f5"
                }}
                style={styles.ImageBackground_0_951}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66c7/32a6/5b53017b7918a96984ace2489ca5a55b"
                }}
                style={styles.ImageBackground_0_952}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7b5/7367/79e6cc28f57568d71812cbd21aac1f9d"
                }}
                style={styles.ImageBackground_0_953}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58eb/7494/3c6df9bce7ef343ba5a351dc80dcb4af"
                }}
                style={styles.ImageBackground_0_954}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef9/8987/e2aedc9e99234dd5c69ba69ac43128b7"
              }}
              style={styles.ImageBackground_0_955}
            />
          </View>
          <View style={styles.View_0_959}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/542a/6cd2/26161268b54d079c7b4eaff2a275c296"
              }}
              style={styles.ImageBackground_0_960}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0714/cf9d/9bfc3b0c4f4c7ab011a0ff2352c8748a"
              }}
              style={styles.ImageBackground_0_963}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fb5/7dac/6a33b5c6aa0797b9ffa3ed24dee19e86"
              }}
              style={styles.ImageBackground_0_964}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e0a/727b/c1cb6016f10c684f37e234eb92701513"
              }}
              style={styles.ImageBackground_0_965}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf91/70d3/254b4f05b433e539c1185a0d6f9a787a"
              }}
              style={styles.ImageBackground_0_966}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8ca/cb07/bb93d464848ec1a8bc09a3f5cbee0f2d"
              }}
              style={styles.ImageBackground_0_967}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6051/57aa/2669a3ec65a7be0c5acf37e90af952bb"
              }}
              style={styles.ImageBackground_0_968}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22f7/3e2c/6388a038f2cc595fc82f3954ce9777d5"
              }}
              style={styles.ImageBackground_0_969}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f849/0085/1c616d0b5489e9dfd63bc6b9d29183c6"
              }}
              style={styles.ImageBackground_0_970}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfd6/35c8/778fcab8106487d50506ddb813b2711d"
              }}
              style={styles.ImageBackground_0_971}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe5e/97af/7afc164c3c9b98548fd6e82298de0b3f"
              }}
              style={styles.ImageBackground_0_972}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd3/b1cb/d7dc44433c5e818910cc8f893a3ca276"
              }}
              style={styles.ImageBackground_0_973}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c939/d810/1ede060568754a43e0e1abeba53c2dc3"
              }}
              style={styles.ImageBackground_0_974}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce9c/bc2c/b6b07d985a989ba8fddf20a332eeecab"
              }}
              style={styles.ImageBackground_0_975}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95f5/4e2b/446c664df6e13610b6e9778e46c104bd"
              }}
              style={styles.ImageBackground_0_994}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e2a/9cd0/28ceae4375f0a76ca27897aa0347ab0f"
              }}
              style={styles.ImageBackground_0_995}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/462c/8740/845cf3d29a2532ae185ccfb1e1b6a774"
              }}
              style={styles.ImageBackground_0_996}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9619/1a59/dd00121419dc71f6cbbcb3091adf0562"
              }}
              style={styles.ImageBackground_0_999}
            />
            <View style={styles.View_0_1002}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0594/75bd/6d3be9fecbeb1aac28e68b489665f6b3"
                }}
                style={styles.ImageBackground_0_1005}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff92/5d3f/15218eac733f67d3cdd5f4359abf8937"
              }}
              style={styles.ImageBackground_0_1006}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c2/4f82/729736e7f217186b6ee6605e09194d2b"
              }}
              style={styles.ImageBackground_0_1013}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ef0/d3fd/3a6b7f8f831d56f65cfdafdf517dfaaf"
              }}
              style={styles.ImageBackground_0_1016}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b2/2720/d14f31ed21df9b24321cc946d07899ad"
              }}
              style={styles.ImageBackground_0_1019}
            />
            <View style={styles.View_0_1023}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b69/5a9c/2c3fc145eff6a1cee6727264bfb17403"
                }}
                style={styles.ImageBackground_0_1026}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40e9/621a/9ed2522a925bcc657f356d3925ebf365"
              }}
              style={styles.ImageBackground_0_1027}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/229a/9fd9/8399272edfd86803a56c31ea42da2d87"
              }}
              style={styles.ImageBackground_0_1036}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe6/944b/74f60a488da91362bceafb0674dba2ce"
              }}
              style={styles.ImageBackground_0_1043}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3532/95c6/0235f72a1b6774bdba1077816cd2a493"
              }}
              style={styles.ImageBackground_0_1049}
            />
          </View>
          <View style={styles.View_0_1050}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91da/044a/3fc9042c62cd92cde4a2a580bcb21de5"
              }}
              style={styles.ImageBackground_0_1051}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd1e/7921/8c358bab0e73861a48fa849203ba22f5"
              }}
              style={styles.ImageBackground_0_1052}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/823c/2ffe/fc04812b7c4e2855701a729f66cfeb0b"
              }}
              style={styles.ImageBackground_0_1053}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/817d/c41e/0a5556c81ea9df1e9dc658f482a38892"
              }}
              style={styles.ImageBackground_0_1054}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e1e/2750/41b595f1001769924201720f43673a7c"
              }}
              style={styles.ImageBackground_0_1055}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a31e/86fd/b6d9c588961695cc0552ff7df72b1fd5"
              }}
              style={styles.ImageBackground_0_1063}
            />
            <View style={styles.View_0_1067}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bac1/dc91/0fbdf14c3ebe346c674f25e133784d00"
                }}
                style={styles.ImageBackground_0_1068}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843e/2b4c/353b949c28e687a9132990a3bdf325ea"
                }}
                style={styles.ImageBackground_0_1069}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c32/f1c9/997d97c8b8d17b7128444169c44f0805"
                }}
                style={styles.ImageBackground_0_1070}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9de5/3b39/a9a57512889f1ec2fb6143363e408716"
                }}
                style={styles.ImageBackground_0_1071}
              />
              <View style={styles.View_0_1072}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8730/beed/5c412faa10fe9b8e94d4267d36b9a575"
                  }}
                  style={styles.ImageBackground_0_1073}
                />
                <View style={styles.View_0_1074}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d646/eefb/35f5e4da5ba14da7ec1ee6e10fcf7ebc"
                    }}
                    style={styles.ImageBackground_0_1075}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90fb/98c9/101ae632622aec188b91451600a18124"
                    }}
                    style={styles.ImageBackground_0_1076}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/824c/8749/f1505d3f4600c0e05085a4aca366cb76"
                }}
                style={styles.ImageBackground_0_1078}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b0/5975/0e4e6d7710b3e12252171670704760b7"
                }}
                style={styles.ImageBackground_0_1079}
              />
              <View style={styles.View_0_1080}>
                <View style={styles.View_0_1081}>
                  <View style={styles.View_0_1082}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6be/0e0d/592696c720eedc3e5daccfd33c28382d"
                      }}
                      style={styles.ImageBackground_0_1083}
                    />
                    <View style={styles.View_0_1084}>
                      <View style={styles.View_0_1085}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9768/72d3/22310228fdade41bd3996c93125cbb3c"
                          }}
                          style={styles.ImageBackground_0_1086}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e361/7e5f/e91ce658342ca93edd8bbf3bf5a56e14"
                          }}
                          style={styles.ImageBackground_0_1088}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8c/063b/f8efccb4364806ca04f74dae71e17a95"
                          }}
                          style={styles.ImageBackground_0_1090}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/396a/e718/ecb1f38329abb0f224626d6cdabc70f9"
                          }}
                          style={styles.ImageBackground_0_1092}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8c/063b/f8efccb4364806ca04f74dae71e17a95"
                          }}
                          style={styles.ImageBackground_0_1094}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f10/ca8e/50136e6557bc68a72b6ef7f374cf6fcb"
                          }}
                          style={styles.ImageBackground_0_1096}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9768/72d3/22310228fdade41bd3996c93125cbb3c"
                          }}
                          style={styles.ImageBackground_0_1098}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9768/72d3/22310228fdade41bd3996c93125cbb3c"
                          }}
                          style={styles.ImageBackground_0_1100}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c05/ea1b/d108decff3d5a7cd169d721b85790b05"
                          }}
                          style={styles.ImageBackground_0_1102}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b6b/ef83/26165a11193a40c1ac6e769b07aa24f9"
                          }}
                          style={styles.ImageBackground_0_1104}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65b/b29a/db6d1b33f376d5cd3a9fdf73d85e5dbd"
                          }}
                          style={styles.ImageBackground_0_1106}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf73/5cbf/0a9118b997b973e08b8652919053771c"
                          }}
                          style={styles.ImageBackground_0_1108}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6968/9733/376de1a701a3bb0466b218477609a8d0"
                          }}
                          style={styles.ImageBackground_0_1110}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dc7/b2d4/2fcab27f075b01ca5da7377fa4bc37d5"
                          }}
                          style={styles.ImageBackground_0_1112}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d793/4212/7cbb3f438c5128e4f2910fb734a9e87f"
                          }}
                          style={styles.ImageBackground_0_1114}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02ca/200f/15e8eb12e53f31e83e2fb761da68b6a4"
                          }}
                          style={styles.ImageBackground_0_1116}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb5d/0cac/fa0936e917cab404579123124e11d20a"
                          }}
                          style={styles.ImageBackground_0_1118}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b544/c884/0cf53cf8657636cc36212858ca7caf31"
                          }}
                          style={styles.ImageBackground_0_1120}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bed/d2e1/3ff7e43deb28d4995d9a04884b83a20a"
                  }}
                  style={styles.ImageBackground_0_1122}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8c1/e2ac/65ea03d63ea0bdc74d87ef06bc398efa"
                  }}
                  style={styles.ImageBackground_0_1123}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f802/52a0/f513ea60d5978ee6309717576565fb9b"
          }}
          style={styles.ImageBackground_0_1142}
        />
        <View style={styles.View_0_1160}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/094f/a287/d0365cc45c71bd74aecf5139030e6842"
            }}
            style={styles.ImageBackground_0_1161}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebbc/f3dd/6acbee7e51d9dcae8ff57a150a72760a"
            }}
            style={styles.ImageBackground_0_1168}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8d7/22a3/e1e67a5c4b33c92dcd6ca6f6518ec25c"
            }}
            style={styles.ImageBackground_0_1169}
          />
        </View>
        <View style={styles.View_0_1170}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b48/2ec0/54455e2806c5b0a86259e590dae3fc76"
            }}
            style={styles.ImageBackground_0_1171}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c132/c070/54aa58437df9c48ff14ede8008e670c1"
            }}
            style={styles.ImageBackground_0_1178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02f6/0f93/a1886e8456841a044e49818839da39a2"
            }}
            style={styles.ImageBackground_0_1179}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d26/b55a/ea7713cb330562556a12cca55c1bda7f"
          }}
          style={styles.ImageBackground_0_1180}
        />
        <View style={styles.View_0_1181}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e84/3cdd/90e731105795be236b8bce250a1b18cd"
            }}
            style={styles.ImageBackground_0_1182}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2908/8ced/ca078355a2e2d6d76c42e43477801a2c"
            }}
            style={styles.ImageBackground_0_1183}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a4/e802/a7e51bb60fa9f7ddbafe31731b937344"
            }}
            style={styles.ImageBackground_0_1190}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dbf/6dc0/73586ff20e4b23b7a045854ce57d4999"
            }}
            style={styles.ImageBackground_0_1191}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d522/c021/9f3a79257906910489a57a4124a61235"
            }}
            style={styles.ImageBackground_0_1192}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/247a/99a8/c04bcb9547268d302efa75d533e528e1"
            }}
            style={styles.ImageBackground_0_1193}
          />
        </View>
        <View style={styles.View_0_1194}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0506/d59c/5f7d25433936c2d6975cd2becae020c5"
            }}
            style={styles.ImageBackground_0_1195}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0506/d59c/5f7d25433936c2d6975cd2becae020c5"
            }}
            style={styles.ImageBackground_0_1201}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5f/30f0/016231efb5ee278d51a1961265147d70"
          }}
          style={styles.ImageBackground_0_1207}
        />
      </View>
      <View style={styles.View_0_1216}>
        <View style={styles.View_0_1217}>
          <Text style={styles.Text_0_1217}>Sign in to continue</Text>
        </View>
        <View style={styles.View_0_1218}>
          <Text style={styles.Text_0_1218}>Hi Student</Text>
        </View>
      </View>
      <View style={styles.View_0_1219}>
        <Text style={styles.Text_0_1219}>Forgot Password?</Text>
      </View>
      <View style={styles.View_0_1220}>
        <View style={styles.View_I0_1220_0_2894}>
          <View style={styles.View_I0_1220_0_2895}>
            <View style={styles.View_I0_1220_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_1220_0_2897}
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
  View_0_814: {
    width: 375,
    minWidth: 375,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0009765625,
    top: 0.0001220703125,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_815: {
    width: 375,
    minWidth: 375,
    height: 813,
    minHeight: 813,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0009765625,
    top: 0.0001220703125
  },
  View_0_816: {
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
  ImageBackground_0_817: {
    width: 375,
    minWidth: 375,
    height: 597,
    minHeight: 597,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 215
  },
  View_0_818: {
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
  View_I0_818_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_818_0_2875: {
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
  View_I0_818_0_2876: {
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
  ImageBackground_I0_818_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_818_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_818_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_818_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_818_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_818_0_2891: {
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
  View_I0_818_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_818_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_819: {
    width: 314.99969482421875,
    minWidth: 314.99969482421875,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.0009765625,
    top: 504.0001220703125
  },
  ImageBackground_0_820: {
    width: 90.41799926757812,
    minWidth: 90.41799926757812,
    height: 8.75,
    minHeight: 8.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 29
  },
  View_0_829: {
    width: 49,
    minWidth: 49,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_829: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_830: {
    width: 18.32000732421875,
    minWidth: 18.32000732421875,
    height: 12.500732421875,
    minHeight: 12.500732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 296.6796875,
    top: 25.2496337890625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_830_0_3115: {
    flexGrow: 1,
    width: 18.32000732421875,
    height: 12.500717163085938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_830_0_3118: {
    width: 18.32000732421875,
    height: 12.500717163085938,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_831: {
    width: 314.67999267578125,
    minWidth: 314.67999267578125,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 55,
    backgroundColor: "rgba(225, 227, 232, 1)"
  },
  View_0_832: {
    width: 315,
    minWidth: 315,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 599.9998779296875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_832_0_3110: {
    flexGrow: 1,
    width: 315,
    height: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_832_0_3111: {
    width: 315,
    height: 54,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_832_0_3112: {
    width: 25.57080078125,
    height: 17.958892822265625,
    top: 17.9569091796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 261.01171875
  },
  View_I0_832_0_3113: {
    width: 52,
    top: 15.9139404296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131.9677734375
  },
  Text_I0_832_0_3113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_833: {
    width: 315,
    minWidth: 315,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.0009765625,
    top: 407.0001220703125
  },
  View_0_834: {
    width: 174,
    minWidth: 174,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_834: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_835: {
    width: 315,
    minWidth: 315,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61
  },
  View_0_836: {
    width: 110,
    minWidth: 110,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_836: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_837: {
    width: 321.1949157714844,
    minWidth: 321.1949157714844,
    height: 161.32583618164062,
    minHeight: 161.32583618164062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.0009765625,
    top: 79.5380859375
  },
  View_0_838: {
    width: 166.2262420654297,
    minWidth: 166.2262420654297,
    height: 111.62736511230469,
    minHeight: 111.62736511230469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122.1171875,
    top: 49.698486328125
  },
  ImageBackground_0_839: {
    width: 15.8936767578125,
    minWidth: 15.8936767578125,
    height: 11.630538940429688,
    minHeight: 11.630538940429688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73.833984375,
    top: 62.491943359375
  },
  View_0_843: {
    width: 166.2262420654297,
    minWidth: 166.2262420654297,
    height: 50.981842041015625,
    minHeight: 50.981842041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 60.6455078125
  },
  ImageBackground_0_844: {
    width: 26.884170532226562,
    minWidth: 26.884170532226562,
    height: 33.16754150390625,
    minHeight: 33.16754150390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.9835205078125
  },
  View_0_850: {
    width: 25.015960693359375,
    minWidth: 25.015960693359375,
    height: 34.2486572265625,
    minHeight: 34.2486572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.0458984375,
    top: 9.427490234375
  },
  ImageBackground_0_851: {
    width: 25.014739990234375,
    minWidth: 25.014739990234375,
    height: 34.2486572265625,
    minHeight: 34.2486572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0009765625,
    top: 0
  },
  ImageBackground_0_853: {
    width: 16.72509765625,
    minWidth: 16.72509765625,
    height: 5.588043212890625,
    minHeight: 5.588043212890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.5380859375,
    top: 0.296630859375
  },
  ImageBackground_0_854: {
    width: 19.926483154296875,
    minWidth: 19.926483154296875,
    height: 22.388092041015625,
    minHeight: 22.388092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 11.8565673828125
  },
  ImageBackground_0_855: {
    width: 19.9140625,
    minWidth: 19.9140625,
    height: 14.981094360351562,
    minHeight: 14.981094360351562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.013671875,
    top: 19.267578125
  },
  ImageBackground_0_856: {
    width: 16.053009033203125,
    minWidth: 16.053009033203125,
    height: 31.310989379882812,
    minHeight: 31.310989379882812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.73828125,
    top: 0.8525390625
  },
  ImageBackground_0_857: {
    width: 7.3367919921875,
    minWidth: 7.3367919921875,
    height: 3.2659912109375,
    minHeight: 3.2659912109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.1171875,
    top: 1.5345458984375
  },
  ImageBackground_0_858: {
    width: 8.536895751953125,
    minWidth: 8.536895751953125,
    height: 18.874008178710938,
    minHeight: 18.874008178710938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.7353515625,
    top: 13.29052734375
  },
  ImageBackground_0_859: {
    width: 8.3719482421875,
    minWidth: 8.3719482421875,
    height: 11.291000366210938,
    minHeight: 11.291000366210938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.8994140625,
    top: 20.8746337890625
  },
  ImageBackground_0_860: {
    width: 111.12696838378906,
    minWidth: 111.12696838378906,
    height: 50.981842041015625,
    minHeight: 50.981842041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.01953125,
    top: 0
  },
  View_0_869: {
    width: 14.605361938476562,
    minWidth: 14.605361938476562,
    height: 7.8301544189453125,
    minHeight: 7.8301544189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.9609375,
    top: 25.57568359375
  },
  ImageBackground_0_870: {
    width: 14.605361938476562,
    minWidth: 14.605361938476562,
    height: 7.8271484375,
    minHeight: 7.8271484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_871: {
    width: 14.382720947265625,
    minWidth: 14.382720947265625,
    height: 6.042877197265625,
    minHeight: 6.042877197265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.001953125,
    top: 1.7872314453125
  },
  View_0_872: {
    width: 8.40985107421875,
    minWidth: 8.40985107421875,
    height: 5.291473388671875,
    minHeight: 5.291473388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.576171875,
    top: 1.4249267578125
  },
  ImageBackground_0_873: {
    width: 8.40985107421875,
    minWidth: 8.40985107421875,
    height: 5.291473388671875,
    minHeight: 5.291473388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_875: {
    width: 55.855804443359375,
    minWidth: 55.855804443359375,
    height: 43.111907958984375,
    minHeight: 43.111907958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.3701171875,
    top: 0.0079345703125
  },
  ImageBackground_0_876: {
    width: 55.855804443359375,
    minWidth: 55.855804443359375,
    height: 43.111907958984375,
    minHeight: 43.111907958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_882: {
    width: 23.12359619140625,
    minWidth: 23.12359619140625,
    height: 21.750244140625,
    minHeight: 21.750244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.720703125,
    top: 3.4290771484375
  },
  ImageBackground_0_888: {
    width: 35.40635681152344,
    minWidth: 35.40635681152344,
    height: 30.230987548828125,
    minHeight: 30.230987548828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.2158203125,
    top: 74.12255859375
  },
  ImageBackground_0_889: {
    width: 36.59532165527344,
    minWidth: 36.59532165527344,
    height: 38.90904235839844,
    minHeight: 38.90904235839844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.095703125,
    top: 30.9571533203125
  },
  View_0_899: {
    width: 61.76676940917969,
    minWidth: 61.76676940917969,
    height: 40.76910400390625,
    minHeight: 40.76910400390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.9013671875,
    top: 31.452880859375
  },
  ImageBackground_0_900: {
    width: 4.4503326416015625,
    minWidth: 4.4503326416015625,
    height: 12.615158081054688,
    minHeight: 12.615158081054688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.017578125,
    top: 9.315673828125
  },
  ImageBackground_0_902: {
    width: 3.00799560546875,
    minWidth: 3.00799560546875,
    height: 12.430984497070312,
    minHeight: 12.430984497070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.015625,
    top: 9.474609375
  },
  ImageBackground_0_903: {
    width: 8.274703979492188,
    minWidth: 8.274703979492188,
    height: 14.303390502929688,
    minHeight: 14.303390502929688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.4921875,
    top: 14.9453125
  },
  ImageBackground_0_908: {
    width: 31.9422607421875,
    minWidth: 31.9422607421875,
    height: 32.29341125488281,
    minHeight: 32.29341125488281,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.14453125,
    top: 3.4476318359375
  },
  ImageBackground_0_909: {
    width: 20.342041015625,
    minWidth: 20.342041015625,
    height: 13.620040893554688,
    minHeight: 13.620040893554688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.14453125,
    top: 22.09765625
  },
  ImageBackground_0_910: {
    width: 6.8779296875,
    minWidth: 6.8779296875,
    height: 2.4383392333984375,
    minHeight: 2.4383392333984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47.7861328125,
    top: 18.625244140625
  },
  ImageBackground_0_911: {
    width: 24.634033203125,
    minWidth: 24.634033203125,
    height: 13.335983276367188,
    minHeight: 13.335983276367188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.51171875,
    top: 17.0576171875
  },
  ImageBackground_0_912: {
    width: 4.860748291015625,
    minWidth: 4.860748291015625,
    height: 5.11181640625,
    minHeight: 5.11181640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46.640625,
    top: 12.645751953125
  },
  ImageBackground_0_913: {
    width: 3.7047119140625,
    minWidth: 3.7047119140625,
    height: 4.6510467529296875,
    minHeight: 4.6510467529296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47.7861328125,
    top: 8.4354248046875
  },
  ImageBackground_0_914: {
    width: 4.7731475830078125,
    minWidth: 4.7731475830078125,
    height: 6.1020660400390625,
    minHeight: 6.1020660400390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.021484375,
    top: 5.66064453125
  },
  ImageBackground_0_915: {
    width: 2.4559326171875,
    minWidth: 2.4559326171875,
    height: 4.7932586669921875,
    minHeight: 4.7932586669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.7861328125,
    top: 6.672607421875
  },
  ImageBackground_0_916: {
    width: 9.5902099609375,
    minWidth: 9.5902099609375,
    height: 14.22515869140625,
    minHeight: 14.22515869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.275390625,
    top: 4.233642578125
  },
  ImageBackground_0_917: {
    width: 9.590118408203125,
    minWidth: 9.590118408203125,
    height: 14.225936889648438,
    minHeight: 14.225936889648438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.478515625,
    top: 3.53564453125
  },
  ImageBackground_0_918: {
    width: 7.7103271484375,
    minWidth: 7.7103271484375,
    height: 14.0869140625,
    minHeight: 14.0869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.478515625,
    top: 3.6685791015625
  },
  ImageBackground_0_919: {
    width: 33.8819580078125,
    minWidth: 33.8819580078125,
    height: 28.248458862304688,
    minHeight: 28.248458862304688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 12.5206298828125
  },
  ImageBackground_0_924: {
    width: 18.503189086914062,
    minWidth: 18.503189086914062,
    height: 17.78973388671875,
    minHeight: 17.78973388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.244140625,
    top: 2.7672119140625
  },
  ImageBackground_0_929: {
    width: 4.844024658203125,
    minWidth: 4.844024658203125,
    height: 7.7975006103515625,
    minHeight: 7.7975006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.5380859375,
    top: 3.757080078125
  },
  ImageBackground_0_933: {
    width: 9.6190185546875,
    minWidth: 9.6190185546875,
    height: 8.45562744140625,
    minHeight: 8.45562744140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44.6240234375,
    top: 0
  },
  View_0_937: {
    width: 37.66241455078125,
    minWidth: 37.66241455078125,
    height: 19.276260375976562,
    minHeight: 19.276260375976562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.8193359375,
    top: 6.5220947265625
  },
  ImageBackground_0_938: {
    width: 36.67204284667969,
    minWidth: 36.67204284667969,
    height: 18.303726196289062,
    minHeight: 18.303726196289062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.001953125,
    top: 0.9725341796875
  },
  ImageBackground_0_939: {
    width: 34.47607421875,
    minWidth: 34.47607421875,
    height: 17.116256713867188,
    minHeight: 17.116256713867188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.0126953125,
    top: 2.156494140625
  },
  ImageBackground_0_946: {
    width: 6.2120208740234375,
    minWidth: 6.2120208740234375,
    height: 6.9093475341796875,
    minHeight: 6.9093475341796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.4501953125,
    top: 0
  },
  ImageBackground_0_948: {
    width: 6.1024932861328125,
    minWidth: 6.1024932861328125,
    height: 6.7130126953125,
    minHeight: 6.7130126953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.51953125,
    top: 0.132568359375
  },
  ImageBackground_0_951: {
    width: 3.501953125,
    minWidth: 3.501953125,
    height: 6.829986572265625,
    minHeight: 6.829986572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.451171875,
    top: 0.069580078125
  },
  ImageBackground_0_952: {
    width: 34.53157043457031,
    minWidth: 34.53157043457031,
    height: 16.482711791992188,
    minHeight: 16.482711791992188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.79150390625
  },
  ImageBackground_0_953: {
    width: 21.054275512695312,
    minWidth: 21.054275512695312,
    height: 9.86029052734375,
    minHeight: 9.86029052734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.9267578125,
    top: 1.6319580078125
  },
  ImageBackground_0_954: {
    width: 1.98773193359375,
    minWidth: 1.98773193359375,
    height: 5.584991455078125,
    minHeight: 5.584991455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.3154296875,
    top: 0.6710205078125
  },
  ImageBackground_0_955: {
    width: 10.224822998046875,
    minWidth: 10.224822998046875,
    height: 11.244949340820312,
    minHeight: 11.244949340820312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.0654296875,
    top: 0.618408203125
  },
  View_0_959: {
    width: 41.74298095703125,
    minWidth: 41.74298095703125,
    height: 36.38934326171875,
    minHeight: 36.38934326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.3603515625,
    top: 0
  },
  ImageBackground_0_960: {
    width: 8.152435302734375,
    minWidth: 8.152435302734375,
    height: 6.0862884521484375,
    minHeight: 6.0862884521484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.658203125,
    top: 25.657470703125
  },
  ImageBackground_0_963: {
    width: 28.01898193359375,
    minWidth: 28.01898193359375,
    height: 28.152938842773438,
    minHeight: 28.152938842773438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.267578125,
    top: 8.2303466796875
  },
  ImageBackground_0_964: {
    width: 6.44189453125,
    minWidth: 6.44189453125,
    height: 9.063308715820312,
    minHeight: 9.063308715820312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.9619140625,
    top: 13.9014892578125
  },
  ImageBackground_0_965: {
    width: 17.73779296875,
    minWidth: 17.73779296875,
    height: 9.794204711914062,
    minHeight: 9.794204711914062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.681640625,
    top: 8.2208251953125
  },
  ImageBackground_0_966: {
    width: 8.723999977111816,
    minWidth: 8.723999977111816,
    height: 8.723999977111816,
    minHeight: 8.723999977111816,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.662109375,
    top: 21.9375
  },
  ImageBackground_0_967: {
    width: 4.353607177734375,
    minWidth: 4.353607177734375,
    height: 8.634933471679688,
    minHeight: 8.634933471679688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.9248046875,
    top: 22.12451171875
  },
  ImageBackground_0_968: {
    width: 27.2540283203125,
    minWidth: 27.2540283203125,
    height: 7.21160888671875,
    minHeight: 7.21160888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.609375,
    top: 19.6455078125
  },
  ImageBackground_0_969: {
    width: 3.904052734375,
    minWidth: 3.904052734375,
    height: 1.2769927978515625,
    minHeight: 1.2769927978515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.9619140625,
    top: 24.87646484375
  },
  ImageBackground_0_970: {
    width: 13.44281005859375,
    minWidth: 13.44281005859375,
    height: 13.726821899414062,
    minHeight: 13.726821899414062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.84375,
    top: 22.6624755859375
  },
  ImageBackground_0_971: {
    width: 5.4039306640625,
    minWidth: 5.4039306640625,
    height: 4.864990234375,
    minHeight: 4.864990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.9775390625,
    top: 21.98046875
  },
  ImageBackground_0_972: {
    width: 2.822021484375,
    minWidth: 2.822021484375,
    height: 1.800018310546875,
    minHeight: 1.800018310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.6767578125,
    top: 21.6845703125
  },
  ImageBackground_0_973: {
    width: 9.313247680664062,
    minWidth: 9.313247680664062,
    height: 10.080642700195312,
    minHeight: 10.080642700195312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.6865234375,
    top: 15.179931640625
  },
  ImageBackground_0_974: {
    width: 6.9290618896484375,
    minWidth: 6.9290618896484375,
    height: 9.248779296875,
    minHeight: 9.248779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.701171875,
    top: 15.1807861328125
  },
  ImageBackground_0_975: {
    width: 41.74298095703125,
    minWidth: 41.74298095703125,
    height: 22.581253051757812,
    minHeight: 22.581253051757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_994: {
    width: 5.5680999755859375,
    minWidth: 5.5680999755859375,
    height: 3.8411407470703125,
    minHeight: 3.8411407470703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.34765625,
    top: 14.1597900390625
  },
  ImageBackground_0_995: {
    width: 4.4182891845703125,
    minWidth: 4.4182891845703125,
    height: 3.6011505126953125,
    minHeight: 3.6011505126953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.7451171875,
    top: 14.5604248046875
  },
  ImageBackground_0_996: {
    width: 5.78106689453125,
    minWidth: 5.78106689453125,
    height: 3.90521240234375,
    minHeight: 3.90521240234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.345703125,
    top: 13.438720703125
  },
  ImageBackground_0_999: {
    width: 4.619537353515625,
    minWidth: 4.619537353515625,
    height: 3.63311767578125,
    minHeight: 3.63311767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.7470703125,
    top: 13.88671875
  },
  View_0_1002: {
    width: 9.858810424804688,
    minWidth: 9.858810424804688,
    height: 9.856246948242188,
    minHeight: 9.856246948242188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.15625,
    top: 15.8751220703125
  },
  ImageBackground_0_1005: {
    width: 9.858810424804688,
    minWidth: 9.858810424804688,
    height: 9.856246948242188,
    minHeight: 9.856246948242188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1006: {
    width: 7.1630096435546875,
    minWidth: 7.1630096435546875,
    height: 7.3223724365234375,
    minHeight: 7.3223724365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.564453125,
    top: 17.9385986328125
  },
  ImageBackground_0_1013: {
    width: 2.7430419921875,
    minWidth: 2.7430419921875,
    height: 1.4134063720703125,
    minHeight: 1.4134063720703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.6533203125,
    top: 20.798095703125
  },
  ImageBackground_0_1016: {
    width: 7.6669921875,
    minWidth: 7.6669921875,
    height: 2.2840118408203125,
    minHeight: 2.2840118408203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.611328125,
    top: 19.2044677734375
  },
  ImageBackground_0_1019: {
    width: 3.31268310546875,
    minWidth: 3.31268310546875,
    height: 3.9451751708984375,
    minHeight: 3.9451751708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.23046875,
    top: 22.8016357421875
  },
  View_0_1023: {
    width: 11.230148315429688,
    minWidth: 11.230148315429688,
    height: 11.23016357421875,
    minHeight: 11.23016357421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.90625,
    top: 15.1873779296875
  },
  ImageBackground_0_1026: {
    width: 11.230148315429688,
    minWidth: 11.230148315429688,
    height: 11.23016357421875,
    minHeight: 11.23016357421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1027: {
    width: 12.569717407226562,
    minWidth: 12.569717407226562,
    height: 6.36492919921875,
    minHeight: 6.36492919921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.94140625,
    top: 28.0074462890625
  },
  ImageBackground_0_1036: {
    width: 6.0562744140625,
    minWidth: 6.0562744140625,
    height: 6.4593048095703125,
    minHeight: 6.4593048095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.6259765625,
    top: 17.947265625
  },
  ImageBackground_0_1043: {
    width: 18.625106811523438,
    minWidth: 18.625106811523438,
    height: 17.410598754882812,
    minHeight: 17.410598754882812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.8330078125,
    top: 18.68896484375
  },
  ImageBackground_0_1049: {
    width: 5.0400390625,
    minWidth: 5.0400390625,
    height: 1.5257568359375,
    minHeight: 1.5257568359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.275390625,
    top: 33.6495361328125
  },
  View_0_1050: {
    width: 43.37251281738281,
    minWidth: 43.37251281738281,
    height: 45.26408386230469,
    minHeight: 45.26408386230469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.9892578125,
    top: 60.696044921875
  },
  ImageBackground_0_1051: {
    width: 25.33245849609375,
    minWidth: 25.33245849609375,
    height: 18.801239013671875,
    minHeight: 18.801239013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1052: {
    width: 5.95513916015625,
    minWidth: 5.95513916015625,
    height: 6.8175048828125,
    minHeight: 6.8175048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.4853515625,
    top: 0.656982421875
  },
  ImageBackground_0_1053: {
    width: 22.59442138671875,
    minWidth: 22.59442138671875,
    height: 16.02996826171875,
    minHeight: 16.02996826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.7703857421875
  },
  ImageBackground_0_1054: {
    width: 4.5068359375,
    minWidth: 4.5068359375,
    height: 1.3682403564453125,
    minHeight: 1.3682403564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.0224609375,
    top: 1.1622314453125
  },
  ImageBackground_0_1055: {
    width: 21.85302734375,
    minWidth: 21.85302734375,
    height: 35.382232666015625,
    minHeight: 35.382232666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.630859375,
    top: 1.2772216796875
  },
  ImageBackground_0_1063: {
    width: 14.037628173828125,
    minWidth: 14.037628173828125,
    height: 8.977325439453125,
    minHeight: 8.977325439453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.1025390625,
    top: 27.68310546875
  },
  View_0_1067: {
    width: 23.796096801757812,
    minWidth: 23.796096801757812,
    height: 14.617828369140625,
    minHeight: 14.617828369140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.576171875,
    top: 30.646240234375
  },
  ImageBackground_0_1068: {
    width: 22.738861083984375,
    minWidth: 22.738861083984375,
    height: 8.947555541992188,
    minHeight: 8.947555541992188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.087890625,
    top: 0.859619140625
  },
  ImageBackground_0_1069: {
    width: 15.482025146484375,
    minWidth: 15.482025146484375,
    height: 8.87005615234375,
    minHeight: 8.87005615234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.087890625,
    top: 0.943115234375
  },
  ImageBackground_0_1070: {
    width: 10.004714965820312,
    minWidth: 10.004714965820312,
    height: 4.6561737060546875,
    minHeight: 4.6561737060546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.814453125,
    top: 0
  },
  ImageBackground_0_1071: {
    width: 9.990036010742188,
    minWidth: 9.990036010742188,
    height: 3.6593780517578125,
    minHeight: 3.6593780517578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.828125,
    top: 0.998779296875
  },
  View_0_1072: {
    width: 23.796096801757812,
    minWidth: 23.796096801757812,
    height: 13.0206298828125,
    minHeight: 13.0206298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.59619140625
  },
  ImageBackground_0_1073: {
    width: 23.796096801757812,
    minWidth: 23.796096801757812,
    height: 13.0206298828125,
    minHeight: 13.0206298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1074: {
    width: 23.796096801757812,
    minWidth: 23.796096801757812,
    height: 13.0206298828125,
    minHeight: 13.0206298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1075: {
    width: 23.796096801757812,
    minWidth: 23.796096801757812,
    height: 13.0206298828125,
    minHeight: 13.0206298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1076: {
    width: 23.796096801757812,
    minWidth: 23.796096801757812,
    height: 13.0206298828125,
    minHeight: 13.0206298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1078: {
    width: 23.577041625976562,
    minWidth: 23.577041625976562,
    height: 11.468917846679688,
    minHeight: 11.468917846679688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.205078125,
    top: 3.14892578125
  },
  ImageBackground_0_1079: {
    width: 22.148193359375,
    minWidth: 22.148193359375,
    height: 10.04901123046875,
    minHeight: 10.04901123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.916015625,
    top: 3.8612060546875
  },
  View_0_1080: {
    width: 22.611007690429688,
    minWidth: 22.611007690429688,
    height: 10.855010986328125,
    minHeight: 10.855010986328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.7314453125,
    top: 3.4521484375
  },
  View_0_1081: {
    width: 22.148193359375,
    minWidth: 22.148193359375,
    height: 10.04901123046875,
    minHeight: 10.04901123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.185546875,
    top: 0.4090576171875
  },
  View_0_1082: {
    width: 22.148193359375,
    minWidth: 22.148193359375,
    height: 10.04901123046875,
    minHeight: 10.04901123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1083: {
    width: 22.148193359375,
    minWidth: 22.148193359375,
    height: 10.04901123046875,
    minHeight: 10.04901123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1084: {
    width: 22.148193359375,
    minWidth: 22.148193359375,
    height: 10.04901123046875,
    minHeight: 10.04901123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1085: {
    width: 22.7923583984375,
    minWidth: 22.7923583984375,
    height: 10.916183471679688,
    minHeight: 10.916183471679688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1086: {
    width: 1.25750732421875,
    minWidth: 1.25750732421875,
    height: 6.01385498046875,
    minHeight: 6.01385498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.3330078125,
    top: 0.4073486328125
  },
  ImageBackground_0_1088: {
    width: 1.4658355712890625,
    minWidth: 1.4658355712890625,
    height: 7.59417724609375,
    minHeight: 7.59417724609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.3095703125,
    top: 0
  },
  ImageBackground_0_1090: {
    width: 1.483856201171875,
    minWidth: 1.483856201171875,
    height: 7.8498687744140625,
    minHeight: 7.8498687744140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.3603515625,
    top: 0.4202880859375
  },
  ImageBackground_0_1092: {
    width: 1.5782470703125,
    minWidth: 1.5782470703125,
    height: 8.1932373046875,
    minHeight: 8.1932373046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.4013671875,
    top: 0.6678466796875
  },
  ImageBackground_0_1094: {
    width: 1.45733642578125,
    minWidth: 1.45733642578125,
    height: 7.755401611328125,
    minHeight: 7.755401611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.4599609375,
    top: 1.724853515625
  },
  ImageBackground_0_1096: {
    width: 1.365234375,
    minWidth: 1.365234375,
    height: 6.825775146484375,
    minHeight: 6.825775146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.546875,
    top: 2.9324951171875
  },
  ImageBackground_0_1098: {
    width: 1.25750732421875,
    minWidth: 1.25750732421875,
    height: 6.01385498046875,
    minHeight: 6.01385498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.6162109375,
    top: 4.2833251953125
  },
  ImageBackground_0_1100: {
    width: 1.25750732421875,
    minWidth: 1.25750732421875,
    height: 6.01385498046875,
    minHeight: 6.01385498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.65234375,
    top: 4.8453369140625
  },
  ImageBackground_0_1102: {
    width: 1.169281005859375,
    minWidth: 1.169281005859375,
    height: 5.3446502685546875,
    minHeight: 5.3446502685546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.7919921875,
    top: 5.571533203125
  },
  ImageBackground_0_1104: {
    width: 1.0928192138671875,
    minWidth: 1.0928192138671875,
    height: 4.7646636962890625,
    minHeight: 4.7646636962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.92578125,
    top: 6.0574951171875
  },
  ImageBackground_0_1106: {
    width: 0.971527099609375,
    minWidth: 0.971527099609375,
    height: 3.841644287109375,
    minHeight: 3.841644287109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.10546875,
    top: 6.515625
  },
  ImageBackground_0_1108: {
    width: 7.76348876953125,
    minWidth: 7.76348876953125,
    height: 3.64923095703125,
    minHeight: 3.64923095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 7.24560546875
  },
  ImageBackground_0_1110: {
    width: 8.585800170898438,
    minWidth: 8.585800170898438,
    height: 3.9531097412109375,
    minHeight: 3.9531097412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.740234375,
    top: 6.071533203125
  },
  ImageBackground_0_1112: {
    width: 8.222885131835938,
    minWidth: 8.222885131835938,
    height: 3.933258056640625,
    minHeight: 3.933258056640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.509765625,
    top: 5.1143798828125
  },
  ImageBackground_0_1114: {
    width: 8.679550170898438,
    minWidth: 8.679550170898438,
    height: 4.047637939453125,
    minHeight: 4.047637939453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.2451171875,
    top: 3.9339599609375
  },
  ImageBackground_0_1116: {
    width: 8.668930053710938,
    minWidth: 8.668930053710938,
    height: 4.147918701171875,
    minHeight: 4.147918701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.7314453125,
    top: 2.4608154296875
  },
  ImageBackground_0_1118: {
    width: 8.192626953125,
    minWidth: 8.192626953125,
    height: 3.81951904296875,
    minHeight: 3.81951904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.9853515625,
    top: 1.164306640625
  },
  ImageBackground_0_1120: {
    width: 5.627349853515625,
    minWidth: 5.627349853515625,
    height: 2.73699951171875,
    minHeight: 2.73699951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.1650390625,
    top: 0.073486328125
  },
  ImageBackground_0_1122: {
    width: 22.156692504882812,
    minWidth: 22.156692504882812,
    height: 9.03900146484375,
    minHeight: 9.03900146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.1787109375,
    top: 1.41796875
  },
  ImageBackground_0_1123: {
    width: 22.611007690429688,
    minWidth: 22.611007690429688,
    height: 10.855010986328125,
    minHeight: 10.855010986328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1142: {
    width: 53.060943603515625,
    minWidth: 53.060943603515625,
    height: 30.5633544921875,
    minHeight: 30.5633544921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 268.1337890625,
    top: 18.956787109375
  },
  View_0_1160: {
    width: 46.07807922363281,
    minWidth: 46.07807922363281,
    height: 28.490989685058594,
    minHeight: 28.490989685058594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109.2109375,
    top: 23.453125
  },
  ImageBackground_0_1161: {
    width: 46.07807922363281,
    minWidth: 46.07807922363281,
    height: 28.490989685058594,
    minHeight: 28.490989685058594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1168: {
    width: 35.38850402832031,
    minWidth: 35.38850402832031,
    height: 16.193992614746094,
    minHeight: 16.193992614746094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.63671875,
    top: 10.4049072265625
  },
  ImageBackground_0_1169: {
    width: 20.178955078125,
    minWidth: 20.178955078125,
    height: 24.073997497558594,
    minHeight: 24.073997497558594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.0419921875,
    top: 1.9599609375
  },
  View_0_1170: {
    width: 39.297882080078125,
    minWidth: 39.297882080078125,
    height: 22.636749267578125,
    minHeight: 22.636749267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239.78125,
    top: 57.34814453125
  },
  ImageBackground_0_1171: {
    width: 39.297882080078125,
    minWidth: 39.297882080078125,
    height: 22.636749267578125,
    minHeight: 22.636749267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1178: {
    width: 30.468292236328125,
    minWidth: 30.468292236328125,
    height: 8.059967041015625,
    minHeight: 8.059967041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3125,
    top: 11.851806640625
  },
  ImageBackground_0_1179: {
    width: 19.4610595703125,
    minWidth: 19.4610595703125,
    height: 15.784988403320312,
    minHeight: 15.784988403320312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.2294921875,
    top: 1.8658447265625
  },
  ImageBackground_0_1180: {
    width: 52.585205078125,
    minWidth: 52.585205078125,
    height: 23.7969970703125,
    minHeight: 23.7969970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66.533203125,
    top: 56.531005859375
  },
  View_0_1181: {
    width: 32.858001708984375,
    minWidth: 32.858001708984375,
    height: 32.858001708984375,
    minHeight: 32.858001708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.8583984375,
    top: 0
  },
  ImageBackground_0_1182: {
    width: 32.858001708984375,
    minWidth: 32.858001708984375,
    height: 32.858001708984375,
    minHeight: 32.858001708984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1183: {
    width: 32.6650390625,
    minWidth: 32.6650390625,
    height: 32.728179931640625,
    minHeight: 32.728179931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.08984375,
    top: 0.1279296875
  },
  ImageBackground_0_1190: {
    width: 26.46648406982422,
    minWidth: 26.46648406982422,
    height: 31.683670043945312,
    minHeight: 31.683670043945312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.3857421875,
    top: 1.1710205078125
  },
  ImageBackground_0_1191: {
    width: 22.375526428222656,
    minWidth: 22.375526428222656,
    height: 27.122276306152344,
    minHeight: 27.122276306152344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.1484375,
    top: 4.3349609375
  },
  ImageBackground_0_1192: {
    width: 15.907997131347656,
    minWidth: 15.907997131347656,
    height: 24.648704528808594,
    minHeight: 24.648704528808594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.609375,
    top: 2.0113525390625
  },
  ImageBackground_0_1193: {
    width: 16.296951293945312,
    minWidth: 16.296951293945312,
    height: 24.71257781982422,
    minHeight: 24.71257781982422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.2197265625,
    top: 1.953369140625
  },
  View_0_1194: {
    width: 205.677978515625,
    minWidth: 205.677978515625,
    height: 40.93999481201172,
    minHeight: 40.93999481201172,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.791015625,
    top: 5.0560302734375
  },
  ImageBackground_0_1195: {
    width: 10.088134765625,
    minWidth: 10.088134765625,
    height: 10.088005065917969,
    minHeight: 10.088005065917969,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195.58984375,
    top: 0
  },
  ImageBackground_0_1201: {
    width: 10.093017578125,
    minWidth: 10.093017578125,
    height: 10.087997436523438,
    minHeight: 10.087997436523438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30.85205078125
  },
  ImageBackground_0_1207: {
    width: 255.8118896484375,
    minWidth: 255.8118896484375,
    height: 47.916015625,
    minHeight: 47.916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.4520263671875
  },
  View_0_1216: {
    width: 156,
    minWidth: 156,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.0009765625,
    top: 289.0001220703125
  },
  View_0_1217: {
    width: 156,
    minWidth: 156,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 52
  },
  Text_0_1217: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1218: {
    width: 155,
    minWidth: 155,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_1218: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1219: {
    width: 118,
    minWidth: 118,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 226.0009765625,
    top: 674.0001220703125
  },
  Text_0_1219: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1220: {
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
  View_I0_1220_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1220_0_2895: {
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
  View_I0_1220_0_2896: {
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
  ImageBackground_I0_1220_0_2897: {
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
