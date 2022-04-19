import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import FeedbackForm from './components/FeedbackForm';


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.navbar}>
            <Text style={styles.title}> Feedback App</Text>
            <TouchableOpacity>

            <Image source= {{ width: 400, height: 300 ,uri: "https://picsum.photos/400/300"}} />
            </TouchableOpacity>
          </View>
          <FeedbackForm />
          <StatusBar style='auto' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DBC3E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#8AC7E1',
  },
  title: {
    fontSize: 34,
    margin: 15,
  },
});
