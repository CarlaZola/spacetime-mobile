import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-5xl font-bold text-gray-50">Hello World!</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}

// react-native não possuí herança de estilos
// unidade de medida no mobile é dp
// por padrão todos elementos react-native tem display: flex;
