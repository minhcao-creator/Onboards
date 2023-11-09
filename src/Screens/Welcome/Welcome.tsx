import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
import { OnboardFlow } from 'react-native-onboard';
import { LinearGradient } from 'expo-linear-gradient';
export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
      <OnboardFlow
        pages={[
          {
            title: 'WHAT2COOK',
            subtitle: 'Cùng nấu ăn nào!',
            imageUri: 'https://res.cloudinary.com/dazq0jikx/image/upload/v1699535057/Group_3158_n0psqk.png',
          },
          {
            title: 'Bạn có nguyên liệu gì?',
            subtitle: 'Hãy scan nguyên liệu và chúng tôi sẽ giúp bạn tìm kiếm món ăn',
            imageUri: 'https://res.cloudinary.com/dazq0jikx/image/upload/v1699535058/Group_3168_nvbgug.png',
          },
          {
            title: 'Khám phá công thức',
            subtitle: 'Chúng tôi sẽ hướng dẫn bạn những món ăn siêu ngon và đơn giản',
            imageUri: 'https://res.cloudinary.com/dazq0jikx/image/upload/v1699535057/Group_3166_ixidca.png',
          }
        ]}
        style = {styles.background}
      />
    // <View style={styles.container}>
    //   <Text>{i18n.t(LocalizationKey.WELCOME)}</Text>
    //   <StatusBar style="auto" />
    //   <Button onPress={() => props.onNavigate(RootScreens.MAIN)}>
    //     {i18n.t(LocalizationKey.START)}
    //   </Button>
    // </View>
    
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#D0E7D2',
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 80
  },
});
