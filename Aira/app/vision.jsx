import React, { useState,useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import WordCloud from 'rn-wordcloud';
import { useNavigation } from 'expo-router';
export default function Vision() {
  const [words, setWords] = useState([
    { text: "happy", value: 8 },
    { text: "joyful", value: 6 },
    { text: "exciting", value: 7 },
    { text: "awesome", value: 9 },
    { text: "fantastic", value: 8 },
    { text: "amazing", value: 9 },
    { text: "wonderful", value: 7 },
    { text: "positive", value: 20 },
    { text: "good", value: 8 },
    { text: "excellent", value: 9 },
    { text: "sad", value: 3 },
    { text: "angry", value: 4 },
    { text: "disappointed", value: 5 },
    { text: "horrible", value: 2 },
    { text: "terrible", value: 2 },
    { text: "frustrating", value: 3 },
    { text: "awful", value: 2 },
    { text: "unpleasant", value: 3 },
    { text: "boring", value: 4 },
    { text: "ordinary", value: 5 },
    { text: "satisfied", value: 7 },
    { text: "pleasing", value: 8 },
    { text: "delightful", value: 9 },
    { text: "cheerful", value: 8 },
    { text: "exuberant", value: 9 },
    { text: "grateful", value: 8 },
    { text: "uplifting", value: 7 },
    { text: "hopeful", value: 8 },
    { text: "inspiring", value: 9 },
    { text: "dismal", value: 3 },
    { text: "gloomy", value: 4 },
    { text: "dreary", value: 2 },
    { text: "miserable", value: 2 },
    { text: "unfortunate", value: 3 },
    { text: "blissful", value: 9 },
    { text: "radiant", value: 8 },
    { text: "pleasurable", value: 7 },
    { text: "exhilarating", value: 9 },
    { text: "magnificent", value: 10 },
    { text: "euphoric", value: 9 },
    { text: "jubilant", value: 8 },
    { text: "upbeat", value: 7 },
    { text: "sunny", value: 8 },
    { text: "heartwarming", value: 7 },
    { text: "content", value: 8 },
    { text: "satisfying", value: 9 },
    { text: "fulfilling", value: 8 },
    { text: "amused", value: 7 },
    { text: "jovial", value: 8 },
    { text: "festive", value: 9 },
    { text: "optimistic", value: 8 },
    { text: "vibrant", value: 9 },
    { text: "playful", value: 7 },
    { text: "contented", value: 8 },
    { text: "thrilled", value: 9 },
    { text: "gratified", value: 8 },
    { text: "overjoyed", value: 10 },
    { text: "serene", value: 8 },
    { text: "tranquil", value: 7 },
    { text: "ecstatic", value: 9 },
    { text: "exultant", value: 9 },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newWord, setNewWord] = useState('');
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false
      });
    }, [navigation]);
  

  const handleAddWord = () => {
    if (!newWord.trim()) {
      alert('Please enter a valid word');
      return;
    };

    const wordToAdd = { text: newWord, value: Math.floor(Math.random() * 10) + 5 };
    setWords([...words, wordToAdd]);
    setNewWord('');
    setModalVisible(false);
    console.log('New word added:', words.length);
  };

  const handleWordClick = (word) => {
    console.log('Word clicked:', word);
    // You can navigate to a detail page or perform any action with the clicked word
    // For example, you can navigate to a new screen with the word details
    // navigation.navigate('WordDetail', { word: word.text });
  };
  


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 40}
      
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View style={styles.container} >

          {/* Header with Add Button */}
          <View style={styles.header}>
            <Text style={styles.title}>Vision Board</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.addButtonText}>＋</Text>
            </TouchableOpacity>
          </View>

          {/* Word Cloud */}
          <WordCloud
          key={words.length}
            options={{
              words: words,
              verticalEnabled: true,
              minFont: 10,
              maxFont: 50,
              fontOffset: 1,
              width: 350,
              height: 700,
              fontFamily: 'Arial',
            }}
            onWordPress={handleWordClick}
          />

          {/* Modal for Adding Words */}
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTitle}>Add a New Word</Text>
                  <TextInput
                    style={styles.modalInput}
                    placeholder="Enter word"
                    value={newWord}
                    onChangeText={setNewWord}
                    onSubmitEditing={handleAddWord}
                    returnKeyType="done"
                  />
                  <TouchableOpacity style={styles.modalButton} onPress={handleAddWord}>
                    <Text style={styles.modalButtonText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 10,height: '100%' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
  addButton: { backgroundColor: '#4F46E5', padding: 10, borderRadius: 5 },
  addButtonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },

  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  modalInput: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, paddingHorizontal: 15, marginBottom: 15 },
  modalButton: { backgroundColor: '#4F46E5', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 },
  modalButtonText: { color: 'white', fontWeight: 'bold' },
});
