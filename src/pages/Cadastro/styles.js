import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#0AA1A1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  text1:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },

  text2:{
    color: 'white',
    fontStyle: 'italic',
    fontSize: 19,
    fontWeight: 'bold'
  },

  ScrollView:{
    width: '100%',
    height: '100%',
    
  },

  containerForm:{
    flex: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
    opacity: 0.9,
  },

  textForm:{
    color: 'black',
    fontSize: 19
  },

  inputForm:{
    borderRadius: 5,
    borderColor: '#0AA1A1',
    backgroundColor: 'white',
    borderWidth: 2,
    width: '80%',
    height: 40,
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16
  },

  btnCadastro:{
    width: '80%',
    backgroundColor: '#0AA1A1',
    borderRadius: 5,
    marginTop: 20,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
   
  textBtnCadastro:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },

  textSlider:{
    fontSize: 20.8,
    height: 40,
    color: 'white',
    backgroundColor: '#0AA1A1',
    borderRadius: 5,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%'
  },  

  formEstudante:{
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  

});

export default styles;