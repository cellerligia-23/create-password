import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#fff',
    borderWidth:2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#4d4d4d'
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
  }
});

export default styles;
