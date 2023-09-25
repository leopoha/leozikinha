import React from "react";
import { View, Text } from "react-native";
import styles from "./Style";

export default function ResultMedia(props){
return(
    <View style={styles.resultMedia}>
        <Text style={styles.numberMedia}>{props.messageResultMedia}</Text>
        <Text style={styles.information}>{props.resultMedia}</Text>
        <Text style={styles.information}>{props.medialuno}</Text>


        
    </View>
);

}