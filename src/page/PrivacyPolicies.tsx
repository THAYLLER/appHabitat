import React from 'react';
import { StyleSheet, Text, View , Dimensions, ScrollView } from 'react-native';

const PrivacyPolicies: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Política de Privacidade</Text>
        <View style={styles.box}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
              maximus erat at malesuada placerat. Cras massa tellus, semper eu 
              volutpat et, facilisis quis nisi. Aenean in augue arcu. Vestibulum 
              accumsan vel ante nec placerat. Morbi pulvinar sem ultrices 
              fringilla gravida. Sed dapibus ligula in fringilla blandit. 
              Nunc cursus elit ut ante auctor malesuada. Pellentesque vel mi in 
              libero tristique porta. Aliquam erat volutpat. Curabitur luctus 
              pharetra sem sed lacinia. Vestibulum at turpis ornare quam molestie 
              semper in in risus.
              Praesent vitae convallis nisl, quis tempus sapien. Duis eleifend, 
              metus in tristique tempus, orci velit iaculis justo, ut elementum 
              nisi sapien sed arcu. Morbi metus lorem, pulvinar eu erat non, 
              porta dictum eros. Vestibulum accumsan massa leo, ut malesuada 
              eros ornare vel. Donec ultricies elementum quam. Nunc vitae enim 
              libero. Pellentesque at eleifend tortor, a tempus quam. 
              Suspendisse elementum eget urna nec pretium. Vivamus a fermentum 
              neque. Curabitur quis magna justo. Cras pulvinar pellentesque 
              neque, eu facilisis est.
              Donec a tempor sapien. Integer interdum risus ultrices, cursus 
              felis ut, scelerisque augue. Donec vel metus libero. Cras ac 
              commodo tellus. Quisque non vestibulum enim. Nulla tincidunt 
              pellentesque turpis a sagittis. Sed eu nisi eros.
              In interdum est non imperdiet vehicula. Donec id rutrum urna. Ut 
              scelerisque felis eu diam tempor, id pretium lorem cursus. Vivamus 
              ac ex sagittis metus consequat maximus. Pellentesque quis eros 
              lectus. Ut ullamcorper pulvinar arcu, nec feugiat nunc mattis sit 
              amet. Morbi gravida justo eu nulla posuere efficitur. Aliquam 
              tempor eros augue, ut placerat nulla imperdiet non. Integer sem 
              mauris, cursus luctus finibus ac, tempus id orci. Maecenas sit 
              amet elit nec elit accumsan vehicula eu ac orci. 
            </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    height: Dimensions.get("window").height,
    paddingTop: 10,
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 26,
    textAlign: 'center'
  },
  box: {
    padding: 10,
    width: '100%',
  },
  text: {
    fontFamily: 'roboto-regular',
    fontSize: 16,
    paddingBottom: 20,
  },
});

export default PrivacyPolicies;