import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    formContext:{
        width:"100%",
        height:"auto",
        bottom:0,
        backgroundColor: "#DC143C",
        alignItems:"center",
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        marginTop: 10,
    },
    form:{
        width:"auto",
        height:"auto",
        marginTop: 20,
        padding:20,
    },
    label:{
        color:"pink",
        fontSize:18,
        paddingLeft: 20,
    },
    input:{
        width:"auto",
        borderRadius:20,
        backgroundColor:"#F08080",
        height: 40,
        margin:12,
        paddingLeft:10,
    },

    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#ff8210",
        paddingTop:14,
        paddingBottom:14,
        marginLeft: 12,
        margin:30,
    },
textButtonCalculator:{
    fontSize:20,
    color: "#fff",
    fontWeight:"#CD5C5C"
},
errorMessage:{
    fontSize: 12,  
    color:"violet",
    fontWeight: "#CD5C5C",
    paddingLeft:10,
}






})
export default styles