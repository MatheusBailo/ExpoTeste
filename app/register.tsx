import { router } from "expo-router"
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen(){
    
 
     const onPress = () => {
         router.push("/(tabs)")
     }
 
     return(
         <SafeAreaView>
            <Text>Login</Text>
            <Text>Coloque seu Email</Text>
            <TextInput style={styles.buttonEmail}  placeholder=" e-mail" />
            <Text>Coloque sua senha</Text>
            <TextInput style={styles.buttonSenha}  placeholder="senha" />
            <Text>Confime sua senha</Text>
            <TextInput style={styles.buttonSenha}  placeholder="senha" />
            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.btnText}>ENTRAR</Text>
                </TouchableOpacity>

            </View>
         </SafeAreaView>
     )
 }
 const styles = StyleSheet.create({
    buttonEmail: {

    },
    buttonSenha: {

    },
    btnText: {

    },
    button: {

    }

 })