import React, { useState} from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration } from "react-native";
import ResultMedia from "./ResultMedia";
import styles from "./Style";


export default function Form(){
    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2]= useState(null);  
    const [nota3, setNota3] = useState(null);
    const [nota4, setNota4]= useState(null);
    const [messageMedia, setMessageMedia] =useState ("Preencha suas notas");
    const [media, setMedia] =useState (null);
    const [textButton, setTextButton]=useState ("Calcular");
    const [errorMessage, setErrorMessage]= useState(null);
    const [situacaoAluno, setSituacaoAluno]= useState('');
function mediaCalculator(){
    return (parseFloat (nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))/4

}

/*---------------------------------------------------------------------------*/ 
function verificationMedia(){
    if(media == null){
        setErrorMessage("*Campo Obrigatório")
        Vibration.vibrate()
    
    }

}












function validationMedia(){
    if (nota1!= null && nota2!= null && nota3!= null && nota4!= null ){
        const medias = mediaCalculator()
        if (medias < 5){
            setSituacaoAluno( "Burro pkrai KKKKKKKKKkk" )
        }
        if (medias > 5){
            setSituacaoAluno( "deus abencoou" )
        }
        setMedia(mediaCalculator())
        setNota1(null)
        setNota2(null)
        setNota3(null)
        setNota4(null)
        setMessageMedia(" sua media é ")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)



return
}
    setMedia(null)
    setTextButton("Calcular")
    setMessageMedia("Poe as nota krai!")
    verificationMedia()
}

return(
<View style={styles.formContext}>
    <View style={styles.form}>

        <Text style={styles.label}>Nota B1</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.input}  onChangeText={setNota1} value={nota1} placeholder="Ex: 5" keyboardType="numeric"/>

        <Text style={styles.label}>Nota B2</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.input} onChangeText={setNota2} value={nota2} placeholder="Ex:7" keyboardType="numeric"/>

        <Text style={styles.label}>Nota B3</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.input}  onChangeText={setNota3} value={nota3} placeholder="Ex: 6" keyboardType="numeric"/>

        <Text style={styles.label}>Nota B4</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.input}  onChangeText={setNota4} value={nota4} placeholder="Ex: 8" keyboardType="numeric"/>


        <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationMedia()}>
        <Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>


    </View>
    <ResultMedia messageResultMedia={messageMedia} resultMedia={media} medialuno={situacaoAluno}/>
</View>
);
}