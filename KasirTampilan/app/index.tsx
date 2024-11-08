import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

export default function Index() {
  return (
    <View style={{ backgroundColor: 'white', width: '100%', height: '100%'}}>
      <View style={{ justifyContent:"center" }}>
        <View style={{ backgroundColor:'blue', height:48}}>
          <Text style={{ color: "white" , alignItems:"center", textAlign: "center", fontSize: 28 , fontWeight:'bold',}}>TOKO INDRA</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight:'bold',marginLeft: 40, fontSize:25, marginTop: 10,marginBottom: 10 }}>Kasir</Text>
      </View>
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        shadowColor: 'black'
      }}>
        <View style={{ width: 250,height: 250,borderWidth:1, borderColor:'cornflowerblue', backgroundColor:'white', borderRadius: 10, marginLeft: 10, marginTop: 10,  elevation: 20, alignItems: "center",
       }}>
        <View style={{justifyContent:'center' }}>
          <Image source={require("../screens/Image/Chitato.png")} style={{ borderRadius: 10, width: 100, height: 120, marginTop: 20 }}></Image>
        </View>
        <View style={{ marginTop: 10,}}>
          <Text style={{ fontWeight:'bold', fontSize:20 }}>Chitato(250g)</Text>
        </View>
        <View style={{  }}>
          <Text style={{ fontSize:20 }}>Rp. 10.000</Text>
        </View>
       </View>
      </View>
    
    </View>
   
  )
}


