import React, { Component } from 'react';
import { Text, View,StyleSheet,Dimensions,ActivityIndicator,SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebViewScreen extends Component {

  constructor(props)
  {
    super(props)

    this.state={

      isshow:true
    }
  }
  showActivityIndicator=()=>
    {
    this.setState({isshow:true})      

    }
    hideActivityIndicator=()=>
    {
    this.setState({isshow:false})      

    }
  render() {
    return (
      <SafeAreaView 
      style={styles.container}>
  

     <WebView
      style={styles.webViewContainer}

      onLoad={
        this.hideActivityIndicator

      }
       onLoadStart={
        this.showActivityIndicator

       }
      source = {{ uri:'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint'}}/>

     
    
      {this.state.isshow?(
      <ActivityIndicator
      style={styles.Loader}
       size="large" color="#0000ff" />):null} 
     </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  container: {

  height: Dimensions.get('window').height,
  
  },
  webViewContainer:
  {
    
  },
  Loader:
  {
    
    position:"absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
   
  }
})
