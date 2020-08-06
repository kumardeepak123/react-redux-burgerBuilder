import React, { Component } from "react";
import Modal from "../../components/UI/modal/modal";
import Auxiliary from "../../hoc/Auxiliary";

const withErrorHandler = ( Wrappedcomponent ,axios) => {
  return class extends Component {
      state={
          error: null
      }


 componentWillMount(){

      this.reqInterceptor =axios.interceptors.request.use(req=>{
         this.setState({error:null}) ;
         return req ;
     })
     this.resInterceptor=axios.interceptors.response.use(res=>res,error=>{
        this.setState({error:error}) 
     })
 }

 componentWillUnmount(){ 
    
     axios.interceptors.request.eject(this.reqInterceptor) ;
     axios.interceptors.response.eject(this.resInterceptor) ;
 }
  errorConfirmHandler=()=>{
      this.setState({error:null})
  }

    render() {


      return (
        <Auxiliary>
          <Modal  
          removeB={this.errorConfirmHandler}
          show={this.state.error} >
              {this.state.error ?this.state.error.message :null}
          </Modal>
          <Wrappedcomponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErrorHandler;
