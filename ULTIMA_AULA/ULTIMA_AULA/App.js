import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxv2Dm1ruDWGCzW4ZTXwfavJOpC-pB-oc",
  authDomain: "meuprimeirofirestore-3c694.firebaseapp.com",
  projectId: "meuprimeirofirestore-3c694",
  storageBucket: "meuprimeirofirestore-3c694.appspot.com",
  messagingSenderId: "3945646457",
  appId: "1:3945646457:web:0de9e169198af4f76187a8"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pessoasCollection = firebase.firestore().collection('Pessoas');
      const snapshot = await pessoasCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
