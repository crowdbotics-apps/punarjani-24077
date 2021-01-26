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
      <View style={styles.View_0_407}>
        <View style={styles.View_0_408} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d30/8ff7/a7342c4421926721846ce225bcb4d922"
          }}
          style={styles.ImageBackground_0_409}
        />
      </View>
      <View style={styles.View_0_410}>
        <View style={styles.View_0_411}>
          <Text style={styles.Text_0_411}>Sign in to continue</Text>
        </View>
        <View style={styles.View_0_412}>
          <Text style={styles.Text_0_412}>Hi Student</Text>
        </View>
      </View>
      <View style={styles.View_0_413}>
        <Text style={styles.Text_0_413}>Forgot Password?</Text>
      </View>
      <View style={styles.View_0_414}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef2/8388/0a00112c80a0742d2571b95439b247de"
          }}
          style={styles.ImageBackground_0_415}
        />
        <View style={styles.View_0_424}>
          <Text style={styles.Text_0_424}>Password</Text>
        </View>
        <View style={styles.View_0_425} />
        <View style={styles.View_0_426}>
          <View style={styles.View_I0_426_0_3115}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a8/421c/10641533d0887a2a2579f21db3d25e66"
              }}
              style={styles.ImageBackground_I0_426_0_3118}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_427}>
        <View style={styles.View_0_428}>
          <Text style={styles.Text_0_428}>Syalfreelance@gmail.com</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c787/abd3/8dd3f2c51c221894811d9661415c458e"
          }}
          style={styles.ImageBackground_0_429}
        />
        <View style={styles.View_0_430}>
          <Text style={styles.Text_0_430}>Mobile Number/Email</Text>
        </View>
      </View>
      <View style={styles.View_0_431}>
        <View style={styles.View_0_432}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d24d/9bb9/f783dac0e853baf6dfa66b404bb5171c"
            }}
            style={styles.ImageBackground_0_433}
          />
          <View style={styles.View_0_437}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82cd/8332/b446da852944a3eed5fa9270b95f9053"
              }}
              style={styles.ImageBackground_0_438}
            />
            <View style={styles.View_0_444}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2171/e40c/71ea784502e25317c4021241b9092d7c"
                }}
                style={styles.ImageBackground_0_445}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90bc/706e/f0daed37e7e364470dbf91a58f90ae9d"
                }}
                style={styles.ImageBackground_0_447}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f62d/7137/1e9e323fdac2b1b8683b9102881595f4"
                }}
                style={styles.ImageBackground_0_448}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a1f/5f0f/8d38e987d1da8460fe9ef623b574a5a6"
                }}
                style={styles.ImageBackground_0_449}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b446/abda/d9d776cfabff00ee558f28bce2636c52"
                }}
                style={styles.ImageBackground_0_450}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/558a/870d/73b2d81a954c478ee7fab52f0a4d2975"
                }}
                style={styles.ImageBackground_0_451}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cda1/7748/7fc0ec611fcc7334ecf0ca4cc0ef6f26"
                }}
                style={styles.ImageBackground_0_452}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f47/1997/ceb700c5a3cd797aff59359c99927114"
                }}
                style={styles.ImageBackground_0_453}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba0/eb24/7fac8852f17e0f9edf6db9cd5f551d69"
              }}
              style={styles.ImageBackground_0_454}
            />
            <View style={styles.View_0_463}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3bf/527e/2eb653a0cdeea21277d43264e99cd0d2"
                }}
                style={styles.ImageBackground_0_464}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04fe/eac1/28c707f8900517ef75703127fdbe985e"
                }}
                style={styles.ImageBackground_0_465}
              />
              <View style={styles.View_0_466}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f3c/a069/2de612fd2599ad11e197727319227751"
                  }}
                  style={styles.ImageBackground_0_467}
                />
              </View>
            </View>
            <View style={styles.View_0_469}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b50/7121/dd053e32e7dea71b56eedf81a1399f9b"
                }}
                style={styles.ImageBackground_0_470}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7891/e82a/02b53aa78c08dc254149c2168623a2fd"
                }}
                style={styles.ImageBackground_0_476}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d7d/7f19/c73ce4117b016a32b4452d9177a022c4"
            }}
            style={styles.ImageBackground_0_482}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1309/f413/3f2d46509947d12256b4b78d13a764ef"
            }}
            style={styles.ImageBackground_0_483}
          />
          <View style={styles.View_0_493}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce27/254e/edc1dde093f0d20fe86fad162d66b85d"
              }}
              style={styles.ImageBackground_0_494}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc0c/4ba4/cb31ff232b1f8120ad30595cf1f54d0a"
              }}
              style={styles.ImageBackground_0_496}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c07/61f7/bdba55a2e558d2f8d4af3dd95473e870"
              }}
              style={styles.ImageBackground_0_497}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d73/e7b7/9d03f434389d9841e08c49f7ca017e29"
              }}
              style={styles.ImageBackground_0_502}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a9/5125/75048e865586acc1cbf63eb6e28acef8"
              }}
              style={styles.ImageBackground_0_503}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92dd/2c3c/e858f76cbfb106f15d7c134289c6d4ef"
              }}
              style={styles.ImageBackground_0_504}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2b5/6123/aeaf0202db8fa95234326f7d7d6cd992"
              }}
              style={styles.ImageBackground_0_505}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab9c/41fe/7be5b3b33a6658116b4c28c8790153e1"
              }}
              style={styles.ImageBackground_0_506}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd48/407c/45eb45d18a46b6cd2a933c62a483e3da"
              }}
              style={styles.ImageBackground_0_507}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d4d/6894/5bc5a43264905e647c26505661a2d394"
              }}
              style={styles.ImageBackground_0_508}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b07a/3afb/1713fda1e706f06413b39f2a74932df6"
              }}
              style={styles.ImageBackground_0_509}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/3e25/7e79ebb7b74ae996ab708343860e9482"
              }}
              style={styles.ImageBackground_0_510}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e27/616c/bab4ac7648af5e03fbb4da9fec3277be"
              }}
              style={styles.ImageBackground_0_511}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb8/db52/91bd4610bff2a4e043449ff3ec9d2fdf"
              }}
              style={styles.ImageBackground_0_512}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e65/dc45/61804dfa2845c8e4e7647816c663bcab"
              }}
              style={styles.ImageBackground_0_513}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3681/a1af/de9ce70975eae5fdfc744faffdc598cb"
              }}
              style={styles.ImageBackground_0_518}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a1/eda9/6c26a8cba24a57567df0898fc9b6e713"
              }}
              style={styles.ImageBackground_0_523}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1205/4468/87178e21a85698b06f2d53579ac669d7"
              }}
              style={styles.ImageBackground_0_527}
            />
            <View style={styles.View_0_531}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be29/fe07/e4a84e17446a0f837cea5ea72750b0e1"
                }}
                style={styles.ImageBackground_0_532}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5082/0c04/849ca69702b2483eeb9cbdfbac6be828"
                }}
                style={styles.ImageBackground_0_533}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0801/88ce/fe9fd6e32b8450a0d2398f3ac82882f3"
                }}
                style={styles.ImageBackground_0_540}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29c5/7bc6/9e8669cc1fc951c7bee92408a48b5479"
                }}
                style={styles.ImageBackground_0_542}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8794/84e3/79062f29a26ec3cea009dcc10c7d6e5e"
                }}
                style={styles.ImageBackground_0_545}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9dd/433c/9d3ae510a05f3079e38be30959787743"
                }}
                style={styles.ImageBackground_0_546}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9482/aea3/698c487942846ca6ebe900d584d679a9"
                }}
                style={styles.ImageBackground_0_547}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4b4/f5c2/70abf38b227e30d01e329b2a3be948de"
                }}
                style={styles.ImageBackground_0_548}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca4/e549/7c574751935c8a398547b4aeb8da61b6"
              }}
              style={styles.ImageBackground_0_549}
            />
          </View>
          <View style={styles.View_0_553}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e59/c566/ed97be8ee3acf24d034674f98aee6f48"
              }}
              style={styles.ImageBackground_0_554}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c1f/e904/20df5b63581ab7898b70d13ac6e4d1e4"
              }}
              style={styles.ImageBackground_0_557}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2aaf/c416/5b467ce8184e964836c692d406eeab9b"
              }}
              style={styles.ImageBackground_0_558}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9552/d310/ae38fce74465e8378a7e93ccfe547016"
              }}
              style={styles.ImageBackground_0_559}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1a7/ff3a/b8eeed8e28b49f77adbc1e6d25b7a3fb"
              }}
              style={styles.ImageBackground_0_560}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8337/ef41/0603125dc81270712b71731815fadfed"
              }}
              style={styles.ImageBackground_0_561}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87ed/9fa2/be56fe84537dcc1ed81e9cba5c8deddb"
              }}
              style={styles.ImageBackground_0_562}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/093a/6dab/382598aa8d0c72b6f0d4150006c02fe5"
              }}
              style={styles.ImageBackground_0_563}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05a7/52de/79d2130833c6a4581249f153121f53b0"
              }}
              style={styles.ImageBackground_0_564}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a3/ac0d/f2012f3983eb876900faa1bbf54099fe"
              }}
              style={styles.ImageBackground_0_565}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe5e/97af/7afc164c3c9b98548fd6e82298de0b3f"
              }}
              style={styles.ImageBackground_0_566}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d79/dd2f/0791fe753cc598fcb4badb9bd7901a4b"
              }}
              style={styles.ImageBackground_0_567}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b729/af89/0d53e5094815e7c92e83384ef150ad68"
              }}
              style={styles.ImageBackground_0_568}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8377/f527/cb6cd26ecc31d35178d9ea168f150883"
              }}
              style={styles.ImageBackground_0_569}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5a0/9fce/0362ce37c73e6d33637f0dbd073b5017"
              }}
              style={styles.ImageBackground_0_588}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e73/b1e8/df89778834943c48771d0eae0e4217dd"
              }}
              style={styles.ImageBackground_0_589}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5814/97a4/e244be1b7325ec4e0fb2ce49c1e6fb86"
              }}
              style={styles.ImageBackground_0_590}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/334f/bc6a/cbb43dfd6a2c0bb3dfa359d16b7dc9a2"
              }}
              style={styles.ImageBackground_0_593}
            />
            <View style={styles.View_0_596}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc6/c66d/aaec02c9e6bcb40f92a1719a280817a8"
                }}
                style={styles.ImageBackground_0_599}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2d5/c5f3/eee8bb638624c93a1ec9a0df48cd87ae"
              }}
              style={styles.ImageBackground_0_600}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c2/4f82/729736e7f217186b6ee6605e09194d2b"
              }}
              style={styles.ImageBackground_0_607}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/401f/e04a/7b054a3eee7e576a0f4a9cde2036e4b6"
              }}
              style={styles.ImageBackground_0_610}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d0e/b4ca/5b84c7e75eb947defb728872550e1b94"
              }}
              style={styles.ImageBackground_0_613}
            />
            <View style={styles.View_0_617}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788f/f214/f3e9a90c208074a0df46600e23d27ba0"
                }}
                style={styles.ImageBackground_0_620}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/297a/eb7c/cf149511100b4c99203ca2db7cb93065"
              }}
              style={styles.ImageBackground_0_621}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3554/689d/10dec3a13a5e8dbeee07da5605f37b87"
              }}
              style={styles.ImageBackground_0_630}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b094/ef1d/f958e74de142df9d035731d43166b865"
              }}
              style={styles.ImageBackground_0_637}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78cd/6508/a78d951da4e06e06a5d5ea5a8be671f9"
              }}
              style={styles.ImageBackground_0_643}
            />
          </View>
          <View style={styles.View_0_644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d73f/04f9/5efb69a291b9b758e8214aaf13c4ac61"
              }}
              style={styles.ImageBackground_0_645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b424/847e/1705b7254684e53245567823fa74ce0b"
              }}
              style={styles.ImageBackground_0_646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7418/a93f/5e5c59563f9aaf999c9f7194e9d55dd5"
              }}
              style={styles.ImageBackground_0_647}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7965/afbd/f22ea48f0ef6878e16a082e1ef78cdb2"
              }}
              style={styles.ImageBackground_0_648}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/693b/80ea/3a4af95da462a3c301cc3e3e1c1cd7a3"
              }}
              style={styles.ImageBackground_0_649}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4ab/c5a5/fedbc69b0b38525c45f07632f9876863"
              }}
              style={styles.ImageBackground_0_657}
            />
            <View style={styles.View_0_661}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fb2/7291/6349f1d7e816834e1a32ad886b9317f3"
                }}
                style={styles.ImageBackground_0_662}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28b4/042f/bde348d53ba1c9f8f329b4893b435d31"
                }}
                style={styles.ImageBackground_0_663}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ca8/7e33/15b17fadf774253015fcd91db83ccb6a"
                }}
                style={styles.ImageBackground_0_664}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2372/3ade/ff19480d26dd618e51d24f459b0d5ea8"
                }}
                style={styles.ImageBackground_0_665}
              />
              <View style={styles.View_0_666}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eee/affd/0d47efb71d629632bda9af9f91f2ce2d"
                  }}
                  style={styles.ImageBackground_0_667}
                />
                <View style={styles.View_0_668}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1346/0abd/4d7f601e11b0d1569e0d8345c6e1669e"
                    }}
                    style={styles.ImageBackground_0_669}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12ac/05ab/c8b35a386ec11f78d5371572ad343240"
                    }}
                    style={styles.ImageBackground_0_670}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f4c/edf0/abd2973217c5558b70979a57d5f97d72"
                }}
                style={styles.ImageBackground_0_672}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e118/f8cd/402053ad531aee93cc5e563db3b367a7"
                }}
                style={styles.ImageBackground_0_673}
              />
              <View style={styles.View_0_674}>
                <View style={styles.View_0_675}>
                  <View style={styles.View_0_676}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5725/fff0/3e11b7558c55ed77dd4ba19eb2f520ba"
                      }}
                      style={styles.ImageBackground_0_677}
                    />
                    <View style={styles.View_0_678}>
                      <View style={styles.View_0_679}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef48/8156/c3b62af75d9da4ceab1e59378f6012be"
                          }}
                          style={styles.ImageBackground_0_680}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd4b/dd41/7c00c8217f84191e320cfd6aa7f9a6c7"
                          }}
                          style={styles.ImageBackground_0_682}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7df8/cb7a/0db19a94612c494a05cac1bb7fece712"
                          }}
                          style={styles.ImageBackground_0_684}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd4b/dd41/7c00c8217f84191e320cfd6aa7f9a6c7"
                          }}
                          style={styles.ImageBackground_0_686}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7df8/cb7a/0db19a94612c494a05cac1bb7fece712"
                          }}
                          style={styles.ImageBackground_0_688}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ceb/59cc/9e6a332da241f17a48f7062dc41346f1"
                          }}
                          style={styles.ImageBackground_0_690}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef48/8156/c3b62af75d9da4ceab1e59378f6012be"
                          }}
                          style={styles.ImageBackground_0_692}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef48/8156/c3b62af75d9da4ceab1e59378f6012be"
                          }}
                          style={styles.ImageBackground_0_694}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/799d/2a32/3ebd9925ea56f7b372066a8c9ba7fd21"
                          }}
                          style={styles.ImageBackground_0_696}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a1/0d4e/1dbdc51d791f88c26ad734756c95de61"
                          }}
                          style={styles.ImageBackground_0_698}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65b/b29a/db6d1b33f376d5cd3a9fdf73d85e5dbd"
                          }}
                          style={styles.ImageBackground_0_700}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c960/df98/7b602027d33310873a17799e6205297f"
                          }}
                          style={styles.ImageBackground_0_702}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9442/c068/5ee27a28f65f964e1f6a0a1b96312a77"
                          }}
                          style={styles.ImageBackground_0_704}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/d774/8985b28a8a4b7e4000c87141642b0497"
                          }}
                          style={styles.ImageBackground_0_706}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9442/c068/5ee27a28f65f964e1f6a0a1b96312a77"
                          }}
                          style={styles.ImageBackground_0_708}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9626/d774/8985b28a8a4b7e4000c87141642b0497"
                          }}
                          style={styles.ImageBackground_0_710}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ba2/edbc/3959f0bbbe243126febcb5f2762ee023"
                          }}
                          style={styles.ImageBackground_0_712}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/397c/e822/968ff233648dba60dc912b2c20904a4e"
                          }}
                          style={styles.ImageBackground_0_714}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/811d/2785/4b8043616a4aa1f8a8b0f22c59bc03c4"
                  }}
                  style={styles.ImageBackground_0_716}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e21a/a277/a3a3e549b6e1a4ce761935c8c97c2e85"
                  }}
                  style={styles.ImageBackground_0_717}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7de/44f9/d6a20c1d6e3876d9ca8c2731ffbc6ae1"
          }}
          style={styles.ImageBackground_0_736}
        />
        <View style={styles.View_0_754}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bc4/b26b/c2a265774629f7c893cdd5920a168369"
            }}
            style={styles.ImageBackground_0_755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc28/75d3/7b65da2bd138f1772bcbe9bb404f0069"
            }}
            style={styles.ImageBackground_0_762}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbd0/3f91/1c632bb746357290a21728216ba05c36"
            }}
            style={styles.ImageBackground_0_763}
          />
        </View>
        <View style={styles.View_0_764}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f3e/790d/0279e2b5ca5a9e6692ca24f26ac871db"
            }}
            style={styles.ImageBackground_0_765}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/705f/62cc/093f6da501f737e257916d35acf5a9c6"
            }}
            style={styles.ImageBackground_0_772}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efdc/e897/bf655e6e8ed0b28ad3015fe3885f7e01"
            }}
            style={styles.ImageBackground_0_773}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a02/b3f5/0d7c04c2852d4b9c472a9d502a616660"
          }}
          style={styles.ImageBackground_0_774}
        />
        <View style={styles.View_0_775}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a50/1179/04412fede9304cf79286c82a20fa4d09"
            }}
            style={styles.ImageBackground_0_776}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f098/712e/b982c62e19c593c59fb992e81347b3ce"
            }}
            style={styles.ImageBackground_0_777}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e875/ee33/e5be619a7f9fd5c9739da74a74ea2108"
            }}
            style={styles.ImageBackground_0_784}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b61/6931/4561aa5bbb2462b91bb246c8ce453698"
            }}
            style={styles.ImageBackground_0_785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd7d/a808/1e11d159cdf469c507bf23eb210539b9"
            }}
            style={styles.ImageBackground_0_786}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d61/6f64/7054fbafd102481d66d17e266ee3b7f4"
            }}
            style={styles.ImageBackground_0_787}
          />
        </View>
        <View style={styles.View_0_788}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a41/7157/e14e140e52b2c952d211dc37b2983199"
            }}
            style={styles.ImageBackground_0_789}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a41/7157/e14e140e52b2c952d211dc37b2983199"
            }}
            style={styles.ImageBackground_0_795}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b00/331c/e02d83aa80c0cbf8299c6561ef174bd0"
          }}
          style={styles.ImageBackground_0_801}
        />
      </View>
      <View style={styles.View_0_810}>
        <View style={styles.View_I0_810_0_3110}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8370/bd5f/c99a7c0210f55cad1cde7c5f2f6d8c98"
            }}
            style={styles.ImageBackground_I0_810_0_3111}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a44/e1fb/1abb0f5a9b92091d17c5a03634cedf80"
            }}
            style={styles.ImageBackground_I0_810_0_3112}
          />
          <View style={styles.View_I0_810_0_3113}>
            <Text style={styles.Text_I0_810_0_3113}>SIGN IN</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_811}>
        <View style={styles.View_I0_811_0_2874}>
          <View style={styles.View_I0_811_0_2875} />
          <View style={styles.View_I0_811_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3041/59fb/52574a34f5c461073140e8936d569702"
              }}
              style={styles.ImageBackground_I0_811_0_2877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I0_811_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cead/e5f1/0f27157fbd7c6e674184f1bfeb9779dd"
              }}
              style={styles.ImageBackground_I0_811_0_2881}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4862/ce43/0208d258bdb4e6a89d4737692eb51a62"
            }}
            style={styles.ImageBackground_I0_811_0_2884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I0_811_0_2888}
          />
          <View style={styles.View_I0_811_0_2891}>
            <View style={styles.View_I0_811_0_2892}>
              <Text style={styles.Text_I0_811_0_2892}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_812}>
        <View style={styles.View_I0_812_0_2894}>
          <View style={styles.View_I0_812_0_2895}>
            <View style={styles.View_I0_812_0_2896} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/a432/9a6ec752a58705bdaaa4af054ea7fbc0"
              }}
              style={styles.ImageBackground_I0_812_0_2897}
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
  View_0_407: {
    width: 375,
    minWidth: 375,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_408: {
    width: 375,
    minWidth: 375,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_409: {
    width: 375,
    minWidth: 375,
    height: 483,
    minHeight: 483,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 329
  },
  View_0_410: {
    width: 156,
    minWidth: 156,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 222
  },
  View_0_411: {
    width: 156,
    minWidth: 156,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 52
  },
  Text_0_411: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_412: {
    width: 155,
    minWidth: 155,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_412: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_413: {
    width: 118,
    minWidth: 118,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 226,
    top: 646
  },
  Text_0_413: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_414: {
    width: 314.99969482421875,
    minWidth: 314.99969482421875,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 476
  },
  ImageBackground_0_415: {
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
  View_0_424: {
    width: 49,
    minWidth: 49,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_424: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_425: {
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
  View_0_426: {
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
  View_I0_426_0_3115: {
    flexGrow: 1,
    width: 18.32000732421875,
    height: 12.500717163085938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_426_0_3118: {
    width: 18.32000732421875,
    height: 12.500717163085938,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_427: {
    width: 315,
    minWidth: 315,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 379
  },
  View_0_428: {
    width: 174,
    minWidth: 174,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_0_428: {
    color: "rgba(50, 54, 67, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_429: {
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
  View_0_430: {
    width: 110,
    minWidth: 110,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_430: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_431: {
    width: 294.5924987792969,
    minWidth: 294.5924987792969,
    height: 131.36541748046875,
    minHeight: 131.36541748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64.1328125,
    top: 67.4010009765625
  },
  View_0_432: {
    width: 133.21006774902344,
    minWidth: 133.21006774902344,
    height: 89.44976043701172,
    minHeight: 89.44976043701172,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128.5,
    top: 41.9156494140625
  },
  ImageBackground_0_433: {
    width: 12.736679077148438,
    minWidth: 12.736679077148438,
    height: 9.320785522460938,
    minHeight: 9.320785522460938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59.1708984375,
    top: 50.0755615234375
  },
  View_0_437: {
    width: 133.21006774902344,
    minWidth: 133.21006774902344,
    height: 40.853271484375,
    minHeight: 40.853271484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 48.596435546875
  },
  ImageBackground_0_438: {
    width: 21.545211791992188,
    minWidth: 21.545211791992188,
    height: 26.5791015625,
    minHeight: 26.5791015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3.99169921875
  },
  View_0_444: {
    width: 20.051300048828125,
    minWidth: 20.051300048828125,
    height: 27.448837280273438,
    minHeight: 27.448837280273438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.65625,
    top: 7.551513671875
  },
  ImageBackground_0_445: {
    width: 20.045623779296875,
    minWidth: 20.045623779296875,
    height: 27.448837280273438,
    minHeight: 27.448837280273438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.005859375,
    top: 0
  },
  ImageBackground_0_447: {
    width: 13.403076171875,
    minWidth: 13.403076171875,
    height: 4.4749603271484375,
    minHeight: 4.4749603271484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.240234375,
    top: 0.2403564453125
  },
  ImageBackground_0_448: {
    width: 15.969161987304688,
    minWidth: 15.969161987304688,
    height: 17.943450927734375,
    minHeight: 17.943450927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9.50439453125
  },
  ImageBackground_0_449: {
    width: 15.958251953125,
    minWidth: 15.958251953125,
    height: 12.005462646484375,
    minHeight: 12.005462646484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625,
    top: 15.4423828125
  },
  ImageBackground_0_450: {
    width: 12.864517211914062,
    minWidth: 12.864517211914062,
    height: 25.090988159179688,
    minHeight: 25.090988159179688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.005859375,
    top: 0.6864013671875
  },
  ImageBackground_0_451: {
    width: 5.8809814453125,
    minWidth: 5.8809814453125,
    height: 2.61700439453125,
    minHeight: 2.61700439453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.11328125,
    top: 1.232421875
  },
  ImageBackground_0_452: {
    width: 6.8453521728515625,
    minWidth: 6.8453521728515625,
    height: 15.126007080078125,
    minHeight: 15.126007080078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.994140625,
    top: 10.65234375
  },
  ImageBackground_0_453: {
    width: 6.7110595703125,
    minWidth: 6.7110595703125,
    height: 9.048995971679688,
    minHeight: 9.048995971679688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.126953125,
    top: 16.7274169921875
  },
  ImageBackground_0_454: {
    width: 89.05010986328125,
    minWidth: 89.05010986328125,
    height: 40.853271484375,
    minHeight: 40.853271484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.453125,
    top: 0
  },
  View_0_463: {
    width: 11.706298828125,
    minWidth: 11.706298828125,
    height: 6.2765960693359375,
    minHeight: 6.2765960693359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.416015625,
    top: 20.495849609375
  },
  ImageBackground_0_464: {
    width: 11.706298828125,
    minWidth: 11.706298828125,
    height: 6.2725982666015625,
    minHeight: 6.2725982666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_465: {
    width: 11.526077270507812,
    minWidth: 11.526077270507812,
    height: 4.8456573486328125,
    minHeight: 4.8456573486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00390625,
    top: 1.430908203125
  },
  View_0_466: {
    width: 6.73956298828125,
    minWidth: 6.73956298828125,
    height: 4.2371368408203125,
    minHeight: 4.2371368408203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.0703125,
    top: 1.143798828125
  },
  ImageBackground_0_467: {
    width: 6.73956298828125,
    minWidth: 6.73956298828125,
    height: 4.2371368408203125,
    minHeight: 4.2371368408203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_469: {
    width: 44.76092529296875,
    minWidth: 44.76092529296875,
    height: 34.551116943359375,
    minHeight: 34.551116943359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.44921875,
    top: 0.0054931640625
  },
  ImageBackground_0_470: {
    width: 44.76092529296875,
    minWidth: 44.76092529296875,
    height: 34.551116943359375,
    minHeight: 34.551116943359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_476: {
    width: 18.53515625,
    minWidth: 18.53515625,
    height: 17.41796875,
    minHeight: 17.41796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.21484375,
    top: 2.7484130859375
  },
  ImageBackground_0_482: {
    width: 28.382308959960938,
    minWidth: 28.382308959960938,
    height: 24.225265502929688,
    minHeight: 24.225265502929688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.0283203125,
    top: 59.3963623046875
  },
  ImageBackground_0_483: {
    width: 29.323074340820312,
    minWidth: 29.323074340820312,
    height: 31.182525634765625,
    minHeight: 31.182525634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.7138671875,
    top: 24.8052978515625
  },
  View_0_493: {
    width: 49.5360107421875,
    minWidth: 49.5360107421875,
    height: 32.67002868652344,
    minHeight: 32.67002868652344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.7421875,
    top: 25.2021484375
  },
  ImageBackground_0_494: {
    width: 3.5662994384765625,
    minWidth: 3.5662994384765625,
    height: 10.105453491210938,
    minHeight: 10.105453491210938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.28515625,
    top: 7.4661865234375
  },
  ImageBackground_0_496: {
    width: 2.4113616943359375,
    minWidth: 2.4113616943359375,
    height: 9.9639892578125,
    minHeight: 9.9639892578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.287109375,
    top: 7.59326171875
  },
  ImageBackground_0_497: {
    width: 6.6700439453125,
    minWidth: 6.6700439453125,
    height: 11.469985961914062,
    minHeight: 11.469985961914062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.8662109375,
    top: 11.979248046875
  },
  ImageBackground_0_502: {
    width: 25.596694946289062,
    minWidth: 25.596694946289062,
    height: 25.879959106445312,
    minHeight: 25.879959106445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.3505859375,
    top: 2.76220703125
  },
  ImageBackground_0_503: {
    width: 16.2999267578125,
    minWidth: 16.2999267578125,
    height: 10.916976928710938,
    minHeight: 10.916976928710938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.3515625,
    top: 17.7052001953125
  },
  ImageBackground_0_504: {
    width: 5.511962890625,
    minWidth: 5.511962890625,
    height: 1.953582763671875,
    minHeight: 1.953582763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.294921875,
    top: 14.9266357421875
  },
  ImageBackground_0_505: {
    width: 19.7451171875,
    minWidth: 19.7451171875,
    height: 10.68603515625,
    minHeight: 10.68603515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.64453125,
    top: 13.667236328125
  },
  ImageBackground_0_506: {
    width: 3.895233154296875,
    minWidth: 3.895233154296875,
    height: 4.0966796875,
    minHeight: 4.0966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37.3779296875,
    top: 10.134521484375
  },
  ImageBackground_0_507: {
    width: 2.972808837890625,
    minWidth: 2.972808837890625,
    height: 3.7275238037109375,
    minHeight: 3.7275238037109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.294921875,
    top: 6.7564697265625
  },
  ImageBackground_0_508: {
    width: 3.8216400146484375,
    minWidth: 3.8216400146484375,
    height: 4.88958740234375,
    minHeight: 4.88958740234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.08203125,
    top: 4.5382080078125
  },
  ImageBackground_0_509: {
    width: 1.968017578125,
    minWidth: 1.968017578125,
    height: 3.8445281982421875,
    minHeight: 3.8445281982421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.103515625,
    top: 5.34423828125
  },
  ImageBackground_0_510: {
    width: 7.685150146484375,
    minWidth: 7.685150146484375,
    height: 11.400497436523438,
    minHeight: 11.400497436523438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.26953125,
    top: 3.3902587890625
  },
  ImageBackground_0_511: {
    width: 7.684783935546875,
    minWidth: 7.684783935546875,
    height: 11.399490356445312,
    minHeight: 11.399490356445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.6298828125,
    top: 2.8311767578125
  },
  ImageBackground_0_512: {
    width: 6.1782989501953125,
    minWidth: 6.1782989501953125,
    height: 11.284866333007812,
    minHeight: 11.284866333007812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.6298828125,
    top: 2.9442138671875
  },
  ImageBackground_0_513: {
    width: 27.1529541015625,
    minWidth: 27.1529541015625,
    height: 22.6378173828125,
    minHeight: 22.6378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 10.0322265625
  },
  ImageBackground_0_518: {
    width: 14.82647705078125,
    minWidth: 14.82647705078125,
    height: 14.253250122070312,
    minHeight: 14.253250122070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.83203125,
    top: 2.21826171875
  },
  ImageBackground_0_523: {
    width: 3.885284423828125,
    minWidth: 3.885284423828125,
    height: 6.25628662109375,
    minHeight: 6.25628662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.1015625,
    top: 3.00830078125
  },
  ImageBackground_0_527: {
    width: 7.708251953125,
    minWidth: 7.708251953125,
    height: 6.776214599609375,
    minHeight: 6.776214599609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.7607421875,
    top: 0
  },
  View_0_531: {
    width: 30.1837158203125,
    minWidth: 30.1837158203125,
    height: 15.445358276367188,
    minHeight: 15.445358276367188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.478515625,
    top: 5.228515625
  },
  ImageBackground_0_532: {
    width: 29.386138916015625,
    minWidth: 29.386138916015625,
    height: 14.6663818359375,
    minHeight: 14.6663818359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.001953125,
    top: 0.7769775390625
  },
  ImageBackground_0_533: {
    width: 27.6300048828125,
    minWidth: 27.6300048828125,
    height: 13.713470458984375,
    minHeight: 13.713470458984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.6142578125,
    top: 1.7286376953125
  },
  ImageBackground_0_540: {
    width: 4.977264404296875,
    minWidth: 4.977264404296875,
    height: 5.535003662109375,
    minHeight: 5.535003662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.2060546875,
    top: 0
  },
  ImageBackground_0_542: {
    width: 4.89410400390625,
    minWidth: 4.89410400390625,
    height: 5.376983642578125,
    minHeight: 5.376983642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.2587890625,
    top: 0.1046142578125
  },
  ImageBackground_0_545: {
    width: 2.805908203125,
    minWidth: 2.805908203125,
    height: 5.472991943359375,
    minHeight: 5.472991943359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.2060546875,
    top: 0.0537109375
  },
  ImageBackground_0_546: {
    width: 27.672454833984375,
    minWidth: 27.672454833984375,
    height: 13.20770263671875,
    minHeight: 13.20770263671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.2376708984375
  },
  ImageBackground_0_547: {
    width: 16.8726806640625,
    minWidth: 16.8726806640625,
    height: 7.9010467529296875,
    minHeight: 7.9010467529296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.1484375,
    top: 1.3065185546875
  },
  ImageBackground_0_548: {
    width: 1.589447021484375,
    minWidth: 1.589447021484375,
    height: 4.47552490234375,
    minHeight: 4.47552490234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.30078125,
    top: 0.536865234375
  },
  ImageBackground_0_549: {
    width: 8.193801879882812,
    minWidth: 8.193801879882812,
    height: 9.011322021484375,
    minHeight: 9.011322021484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.107421875,
    top: 0.4969482421875
  },
  View_0_553: {
    width: 33.45536804199219,
    minWidth: 33.45536804199219,
    height: 29.159629821777344,
    minHeight: 29.159629821777344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.9599609375,
    top: 0
  },
  ImageBackground_0_554: {
    width: 6.5331268310546875,
    minWidth: 6.5331268310546875,
    height: 4.881866455078125,
    minHeight: 4.881866455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.931640625,
    top: 20.558349609375
  },
  ImageBackground_0_557: {
    width: 22.454803466796875,
    minWidth: 22.454803466796875,
    height: 22.563072204589844,
    minHeight: 22.563072204589844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.8212890625,
    top: 6.5936279296875
  },
  ImageBackground_0_558: {
    width: 5.1658935546875,
    minWidth: 5.1658935546875,
    height: 7.266975402832031,
    minHeight: 7.266975402832031,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.181640625,
    top: 11.1343994140625
  },
  ImageBackground_0_559: {
    width: 14.215087890625,
    minWidth: 14.215087890625,
    height: 7.848236083984375,
    minHeight: 7.848236083984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.57421875,
    top: 6.5863037109375
  },
  ImageBackground_0_560: {
    width: 6.989999771118164,
    minWidth: 6.989999771118164,
    height: 6.989999771118164,
    minHeight: 6.989999771118164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.345703125,
    top: 17.577392578125
  },
  ImageBackground_0_561: {
    width: 3.48846435546875,
    minWidth: 3.48846435546875,
    height: 6.9199981689453125,
    minHeight: 6.9199981689453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.7822265625,
    top: 17.726318359375
  },
  ImageBackground_0_562: {
    width: 21.8389892578125,
    minWidth: 21.8389892578125,
    height: 5.762336730957031,
    minHeight: 5.762336730957031,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.09765625,
    top: 15.7353515625
  },
  ImageBackground_0_563: {
    width: 3.1279296875,
    minWidth: 3.1279296875,
    height: 1.0260009765625,
    minHeight: 1.0260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.8125,
    top: 19.932373046875
  },
  ImageBackground_0_564: {
    width: 10.7720947265625,
    minWidth: 10.7720947265625,
    height: 11.000274658203125,
    minHeight: 11.000274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.5078125,
    top: 18.1593017578125
  },
  ImageBackground_0_565: {
    width: 4.3309326171875,
    minWidth: 4.3309326171875,
    height: 3.8979949951171875,
    minHeight: 3.8979949951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.0009765625,
    top: 17.6134033203125
  },
  ImageBackground_0_566: {
    width: 2.261962890625,
    minWidth: 2.261962890625,
    height: 1.4360122680664062,
    minHeight: 1.4360122680664062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.1572265625,
    top: 17.3782958984375
  },
  ImageBackground_0_567: {
    width: 7.462860107421875,
    minWidth: 7.462860107421875,
    height: 8.078994750976562,
    minHeight: 8.078994750976562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.5732421875,
    top: 12.160400390625
  },
  ImageBackground_0_568: {
    width: 5.55133056640625,
    minWidth: 5.55133056640625,
    height: 7.4122314453125,
    minHeight: 7.4122314453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.19921875,
    top: 12.1630859375
  },
  ImageBackground_0_569: {
    width: 33.45536804199219,
    minWidth: 33.45536804199219,
    height: 18.09424591064453,
    minHeight: 18.09424591064453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_588: {
    width: 4.44854736328125,
    minWidth: 4.44854736328125,
    height: 3.0803604125976562,
    minHeight: 3.0803604125976562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.115234375,
    top: 11.3480224609375
  },
  ImageBackground_0_589: {
    width: 3.540191650390625,
    minWidth: 3.540191650390625,
    height: 2.887908935546875,
    minHeight: 2.887908935546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.837890625,
    top: 11.6663818359375
  },
  ImageBackground_0_590: {
    width: 4.622283935546875,
    minWidth: 4.622283935546875,
    height: 3.131744384765625,
    minHeight: 3.131744384765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.1083984375,
    top: 10.7666015625
  },
  ImageBackground_0_593: {
    width: 3.702972412109375,
    minWidth: 3.702972412109375,
    height: 2.9115371704101562,
    minHeight: 2.9115371704101562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.8369140625,
    top: 11.1280517578125
  },
  View_0_596: {
    width: 7.9002685546875,
    minWidth: 7.9002685546875,
    height: 7.8982086181640625,
    minHeight: 7.8982086181640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.763671875,
    top: 12.7193603515625
  },
  ImageBackground_0_599: {
    width: 7.9002685546875,
    minWidth: 7.9002685546875,
    height: 7.8982086181640625,
    minHeight: 7.8982086181640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_600: {
    width: 5.7395172119140625,
    minWidth: 5.7395172119140625,
    height: 5.8629913330078125,
    minHeight: 5.8629913330078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.275390625,
    top: 14.3782958984375
  },
  ImageBackground_0_607: {
    width: 2.1959228515625,
    minWidth: 2.1959228515625,
    height: 1.1369094848632812,
    minHeight: 1.1369094848632812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.5556640625,
    top: 16.66748046875
  },
  ImageBackground_0_610: {
    width: 6.14404296875,
    minWidth: 6.14404296875,
    height: 1.83099365234375,
    minHeight: 1.83099365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.099609375,
    top: 15.3883056640625
  },
  ImageBackground_0_613: {
    width: 2.739044189453125,
    minWidth: 2.739044189453125,
    height: 3.16253662109375,
    minHeight: 3.16253662109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.0166015625,
    top: 18.268798828125
  },
  View_0_617: {
    width: 9,
    minWidth: 9,
    height: 9.000007629394531,
    minHeight: 9.000007629394531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.9453125,
    top: 12.1673583984375
  },
  ImageBackground_0_620: {
    width: 9,
    minWidth: 9,
    height: 9.000007629394531,
    minHeight: 9.000007629394531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_621: {
    width: 10.074798583984375,
    minWidth: 10.074798583984375,
    height: 5.3019561767578125,
    minHeight: 5.3019561767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.1796875,
    top: 22.4415283203125
  },
  ImageBackground_0_630: {
    width: 4.85015869140625,
    minWidth: 4.85015869140625,
    height: 5.171989440917969,
    minHeight: 5.171989440917969,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.9404296875,
    top: 14.3831787109375
  },
  ImageBackground_0_637: {
    width: 14.93060302734375,
    minWidth: 14.93060302734375,
    height: 13.942710876464844,
    minHeight: 13.942710876464844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.4677734375,
    top: 14.9755859375
  },
  ImageBackground_0_643: {
    width: 4.0379638671875,
    minWidth: 4.0379638671875,
    height: 1.221893310546875,
    minHeight: 1.221893310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.05078125,
    top: 26.96240234375
  },
  View_0_644: {
    width: 34.760040283203125,
    minWidth: 34.760040283203125,
    height: 36.271942138671875,
    minHeight: 36.271942138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32.04296875,
    top: 48.6396484375
  },
  ImageBackground_0_645: {
    width: 20.3009033203125,
    minWidth: 20.3009033203125,
    height: 15.064910888671875,
    minHeight: 15.064910888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_646: {
    width: 4.7724151611328125,
    minWidth: 4.7724151611328125,
    height: 5.4651641845703125,
    minHeight: 5.4651641845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.4140625,
    top: 0.5225830078125
  },
  ImageBackground_0_647: {
    width: 18.1070556640625,
    minWidth: 18.1070556640625,
    height: 12.846160888671875,
    minHeight: 12.846160888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0029296875,
    top: 2.2177734375
  },
  ImageBackground_0_648: {
    width: 3.612060546875,
    minWidth: 3.612060546875,
    height: 1.097564697265625,
    minHeight: 1.097564697265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.0498046875,
    top: 0.92919921875
  },
  ImageBackground_0_649: {
    width: 17.563858032226562,
    minWidth: 17.563858032226562,
    height: 28.3525390625,
    minHeight: 28.3525390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.330078125,
    top: 1.021240234375
  },
  ImageBackground_0_657: {
    width: 11.250137329101562,
    minWidth: 11.250137329101562,
    height: 7.1945953369140625,
    minHeight: 7.1945953369140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.1123046875,
    top: 22.18212890625
  },
  View_0_661: {
    width: 19.072845458984375,
    minWidth: 19.072845458984375,
    height: 11.7152099609375,
    minHeight: 11.7152099609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.6875,
    top: 24.5567626953125
  },
  ImageBackground_0_662: {
    width: 18.221725463867188,
    minWidth: 18.221725463867188,
    height: 7.1905670166015625,
    minHeight: 7.1905670166015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.07421875,
    top: 0.6754150390625
  },
  ImageBackground_0_663: {
    width: 12.403732299804688,
    minWidth: 12.403732299804688,
    height: 7.1090240478515625,
    minHeight: 7.1090240478515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.080078125,
    top: 0.7559814453125
  },
  ImageBackground_0_664: {
    width: 8.016952514648438,
    minWidth: 8.016952514648438,
    height: 3.73101806640625,
    minHeight: 3.73101806640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.2783203125,
    top: 0
  },
  ImageBackground_0_665: {
    width: 8.00592041015625,
    minWidth: 8.00592041015625,
    height: 2.93408203125,
    minHeight: 2.93408203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.2890625,
    top: 0.7989501953125
  },
  View_0_666: {
    width: 19.072845458984375,
    minWidth: 19.072845458984375,
    height: 10.43536376953125,
    minHeight: 10.43536376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.2799072265625
  },
  ImageBackground_0_667: {
    width: 19.072845458984375,
    minWidth: 19.072845458984375,
    height: 10.43536376953125,
    minHeight: 10.43536376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_668: {
    width: 19.072845458984375,
    minWidth: 19.072845458984375,
    height: 10.43536376953125,
    minHeight: 10.43536376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_669: {
    width: 19.072845458984375,
    minWidth: 19.072845458984375,
    height: 10.43536376953125,
    minHeight: 10.43536376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_670: {
    width: 19.072845458984375,
    minWidth: 19.072845458984375,
    height: 10.43536376953125,
    minHeight: 10.43536376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_672: {
    width: 18.894546508789062,
    minWidth: 18.894546508789062,
    height: 9.18719482421875,
    minHeight: 9.18719482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.171875,
    top: 2.52294921875
  },
  ImageBackground_0_673: {
    width: 17.749267578125,
    minWidth: 17.749267578125,
    height: 8.05224609375,
    minHeight: 8.05224609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.7412109375,
    top: 3.094970703125
  },
  View_0_674: {
    width: 18.4110107421875,
    minWidth: 18.4110107421875,
    height: 8.697998046875,
    minHeight: 8.697998046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5908203125,
    top: 2.7669677734375
  },
  View_0_675: {
    width: 17.749267578125,
    minWidth: 17.749267578125,
    height: 8.05224609375,
    minHeight: 8.05224609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.150390625,
    top: 0.3280029296875
  },
  View_0_676: {
    width: 17.749267578125,
    minWidth: 17.749267578125,
    height: 8.05224609375,
    minHeight: 8.05224609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_677: {
    width: 17.749267578125,
    minWidth: 17.749267578125,
    height: 8.05224609375,
    minHeight: 8.05224609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_678: {
    width: 17.749267578125,
    minWidth: 17.749267578125,
    height: 8.05224609375,
    minHeight: 8.05224609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_679: {
    width: 18.266448974609375,
    minWidth: 18.266448974609375,
    height: 8.747711181640625,
    minHeight: 8.747711181640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_680: {
    width: 1.00750732421875,
    minWidth: 1.00750732421875,
    height: 4.8196563720703125,
    minHeight: 4.8196563720703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.2939453125,
    top: 0.3260498046875
  },
  ImageBackground_0_682: {
    width: 1.174407958984375,
    minWidth: 1.174407958984375,
    height: 6.0857086181640625,
    minHeight: 6.0857086181640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.6728515625,
    top: 0
  },
  ImageBackground_0_684: {
    width: 1.189666748046875,
    minWidth: 1.189666748046875,
    height: 6.2907562255859375,
    minHeight: 6.2907562255859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.111328125,
    top: 0.3372802734375
  },
  ImageBackground_0_686: {
    width: 1.264251708984375,
    minWidth: 1.264251708984375,
    height: 6.5653076171875,
    minHeight: 6.5653076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.5400390625,
    top: 0.534912109375
  },
  ImageBackground_0_688: {
    width: 1.168365478515625,
    minWidth: 1.168365478515625,
    height: 6.21478271484375,
    minHeight: 6.21478271484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.9853515625,
    top: 1.382568359375
  },
  ImageBackground_0_690: {
    width: 1.0938262939453125,
    minWidth: 1.0938262939453125,
    height: 5.470001220703125,
    minHeight: 5.470001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.4521484375,
    top: 2.3497314453125
  },
  ImageBackground_0_692: {
    width: 1.00738525390625,
    minWidth: 1.00738525390625,
    height: 4.81866455078125,
    minHeight: 4.81866455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.9052734375,
    top: 3.43310546875
  },
  ImageBackground_0_694: {
    width: 1.0075225830078125,
    minWidth: 1.0075225830078125,
    height: 4.8196563720703125,
    minHeight: 4.8196563720703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.330078125,
    top: 3.882080078125
  },
  ImageBackground_0_696: {
    width: 0.9368133544921875,
    minWidth: 0.9368133544921875,
    height: 4.283294677734375,
    minHeight: 4.283294677734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.83984375,
    top: 4.46435546875
  },
  ImageBackground_0_698: {
    width: 0.8755035400390625,
    minWidth: 0.8755035400390625,
    height: 3.818328857421875,
    minHeight: 3.818328857421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3447265625,
    top: 4.8543701171875
  },
  ImageBackground_0_700: {
    width: 0.7783203125,
    minWidth: 0.7783203125,
    height: 3.0787200927734375,
    minHeight: 3.0787200927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.884765625,
    top: 5.2220458984375
  },
  ImageBackground_0_702: {
    width: 6.2209930419921875,
    minWidth: 6.2209930419921875,
    height: 2.923858642578125,
    minHeight: 2.923858642578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 5.8070068359375
  },
  ImageBackground_0_704: {
    width: 6.8803558349609375,
    minWidth: 6.8803558349609375,
    height: 3.16754150390625,
    minHeight: 3.16754150390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.1962890625,
    top: 4.8660888671875
  },
  ImageBackground_0_706: {
    width: 6.589569091796875,
    minWidth: 6.589569091796875,
    height: 3.151641845703125,
    minHeight: 3.151641845703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.216796875,
    top: 4.0994873046875
  },
  ImageBackground_0_708: {
    width: 6.95513916015625,
    minWidth: 6.95513916015625,
    height: 3.2431488037109375,
    minHeight: 3.2431488037109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.408203125,
    top: 3.1533203125
  },
  ImageBackground_0_710: {
    width: 6.946624755859375,
    minWidth: 6.946624755859375,
    height: 3.324249267578125,
    minHeight: 3.324249267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.4013671875,
    top: 1.9708251953125
  },
  ImageBackground_0_712: {
    width: 6.56597900390625,
    minWidth: 6.56597900390625,
    height: 3.0615386962890625,
    minHeight: 3.0615386962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.20703125,
    top: 0.932861328125
  },
  ImageBackground_0_714: {
    width: 4.5104522705078125,
    minWidth: 4.5104522705078125,
    height: 2.194122314453125,
    minHeight: 2.194122314453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.755859375,
    top: 0.0589599609375
  },
  ImageBackground_0_716: {
    width: 17.756256103515625,
    minWidth: 17.756256103515625,
    height: 7.24517822265625,
    minHeight: 7.24517822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.14453125,
    top: 1.1419677734375
  },
  ImageBackground_0_717: {
    width: 18.4110107421875,
    minWidth: 18.4110107421875,
    height: 8.697998046875,
    minHeight: 8.697998046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_736: {
    width: 48.666717529296875,
    minWidth: 48.666717529296875,
    height: 28.03009033203125,
    minHeight: 28.03009033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245.92578125,
    top: 17.387451171875
  },
  View_0_754: {
    width: 42.26396179199219,
    minWidth: 42.26396179199219,
    height: 26.131309509277344,
    minHeight: 26.131309509277344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100.166015625,
    top: 21.5103759765625
  },
  ImageBackground_0_755: {
    width: 42.26396179199219,
    minWidth: 42.26396179199219,
    height: 26.131309509277344,
    minHeight: 26.131309509277344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_762: {
    width: 32.4573974609375,
    minWidth: 32.4573974609375,
    height: 14.852996826171875,
    minHeight: 14.852996826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.41796875,
    top: 9.544677734375
  },
  ImageBackground_0_763: {
    width: 18.508056640625,
    minWidth: 18.508056640625,
    height: 22.080001831054688,
    minHeight: 22.080001831054688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.130859375,
    top: 1.797607421875
  },
  View_0_764: {
    width: 36.04296875,
    minWidth: 36.04296875,
    height: 20.763153076171875,
    minHeight: 20.763153076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219.9208984375,
    top: 52.595703125
  },
  ImageBackground_0_765: {
    width: 36.04296875,
    minWidth: 36.04296875,
    height: 20.763153076171875,
    minHeight: 20.763153076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_772: {
    width: 27.94488525390625,
    minWidth: 27.94488525390625,
    height: 7.39337158203125,
    minHeight: 7.39337158203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.1201171875,
    top: 10.873291015625
  },
  ImageBackground_0_773: {
    width: 17.8489990234375,
    minWidth: 17.8489990234375,
    height: 14.475013732910156,
    minHeight: 14.475013732910156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.802734375,
    top: 1.71630859375
  },
  ImageBackground_0_774: {
    width: 48.22998046875,
    minWidth: 48.22998046875,
    height: 21.826011657714844,
    minHeight: 21.826011657714844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61.0205078125,
    top: 51.8509521484375
  },
  View_0_775: {
    width: 30.136001586914062,
    minWidth: 30.136001586914062,
    height: 30.138534545898438,
    minHeight: 30.138534545898438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.224609375,
    top: 0
  },
  ImageBackground_0_776: {
    width: 30.13599967956543,
    minWidth: 30.13599967956543,
    height: 30.13599967956543,
    minHeight: 30.13599967956543,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_777: {
    width: 29.9608154296875,
    minWidth: 29.9608154296875,
    height: 30.017539978027344,
    minHeight: 30.017539978027344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0830078125,
    top: 0.1209716796875
  },
  ImageBackground_0_784: {
    width: 24.274810791015625,
    minWidth: 24.274810791015625,
    height: 29.060836791992188,
    minHeight: 29.060836791992188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.859375,
    top: 1.073974609375
  },
  ImageBackground_0_785: {
    width: 20.522216796875,
    minWidth: 20.522216796875,
    height: 24.87579345703125,
    minHeight: 24.87579345703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.3896484375,
    top: 3.9759521484375
  },
  ImageBackground_0_786: {
    width: 14.590171813964844,
    minWidth: 14.590171813964844,
    height: 22.606895446777344,
    minHeight: 22.606895446777344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3935546875,
    top: 1.8450927734375
  },
  ImageBackground_0_787: {
    width: 14.946403503417969,
    minWidth: 14.946403503417969,
    height: 22.663162231445312,
    minHeight: 22.663162231445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.0380859375,
    top: 1.788818359375
  },
  View_0_788: {
    width: 188.63690185546875,
    minWidth: 188.63690185546875,
    height: 37.54901123046875,
    minHeight: 37.54901123046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.5771484375,
    top: 4.636962890625
  },
  ImageBackground_0_789: {
    width: 9.251953125,
    minWidth: 9.251953125,
    height: 9.251998901367188,
    minHeight: 9.251998901367188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 179.384765625,
    top: 0
  },
  ImageBackground_0_795: {
    width: 9.25201416015625,
    minWidth: 9.25201416015625,
    height: 9.252006530761719,
    minHeight: 9.252006530761719,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28.2969970703125
  },
  ImageBackground_0_801: {
    width: 234.625,
    minWidth: 234.625,
    height: 43.948020935058594,
    minHeight: 43.948020935058594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.33203125
  },
  View_0_810: {
    width: 315,
    minWidth: 315,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 572.0001220703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_810_0_3110: {
    flexGrow: 1,
    width: 315,
    height: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_810_0_3111: {
    width: 315,
    height: 54,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_810_0_3112: {
    width: 25.57080078125,
    height: 17.958892822265625,
    top: 17.9569091796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 261.01171875
  },
  View_I0_810_0_3113: {
    width: 52,
    top: 15.9139404296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131.9677734375
  },
  Text_I0_810_0_3113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_811: {
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
  View_I0_811_0_2874: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_811_0_2875: {
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
  View_I0_811_0_2876: {
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
  ImageBackground_I0_811_0_2877: {
    width: 22,
    height: 11.333000183105469,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_811_0_2880: {
    width: 1.3280029296875,
    height: 4.000007629394531,
    top: 3.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  ImageBackground_I0_811_0_2881: {
    width: 18,
    height: 7.333000183105469,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_I0_811_0_2884: {
    width: 15.330413818359375,
    height: 10.996383666992188,
    top: 15.3345947265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316.4990234375
  },
  ImageBackground_I0_811_0_2888: {
    width: 17,
    height: 10.666999816894531,
    top: 15.6669921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294.5
  },
  View_I0_811_0_2891: {
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
  View_I0_811_0_2892: {
    width: 29,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_811_0_2892: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_812: {
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
  View_I0_812_0_2894: {
    flexGrow: 1,
    width: 375,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_812_0_2895: {
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
  View_I0_812_0_2896: {
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
  ImageBackground_I0_812_0_2897: {
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
