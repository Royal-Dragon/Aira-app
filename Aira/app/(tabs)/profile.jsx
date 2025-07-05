import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { useAuthStore } from '../../utils/authStore';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';



const Profile = () => {
  const { LogOut ,username,email} = useAuthStore();
  const router = useRouter();

  // Example user details (replace with actual auth data)
  const user = {
    name: username,
    email: email,
    profilePic: 'https://shorturl.at/bgX5u', // Replace with actual image URL
  };

  // Example streak data
  const streakData = [
    { day: 'Mon', active: true },
    { day: 'Tue', active: true },
    { day: 'Wed', active: false },
    { day: 'Thu', active: true },
    { day: 'Fri', active: false },
    { day: 'Sat', active: true },
    { day: 'Sun', active: false },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
     <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
            <View/> 
          </View>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.profilePic }} style={styles.profileImage} />
        <View style={{ marginLeft: 20 }}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.separator} />
      {/* Streak Bar */}
      <View style={styles.streakSection}>
        <Text style={styles.sectionTitle}>Weekly Streak</Text>
        <View style={styles.streakBar}>
          {streakData.map((item, index) => (
            <View
              key={index}
              style={[
                styles.streakDay,
                { backgroundColor: item.active ? '#4F46E5' : '#ddd' },
              ]}
            >
              <Text style={styles.streakDayText}>{item.day}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.separator} />
      {/* Navigation Buttons */}
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/mentalScore')}>
          <Text style={styles.buttonText}>Mental Growth</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/remainder')}>
          <Text style={styles.buttonText}>Remainder</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/vision')}>
          <Text style={styles.buttonText}>Vision Board</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/story')}>
          <Text style={styles.buttonText}>Your Story</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={LogOut}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    height: 60,
    backgroundColor: '#4F46E5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  profileSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  headerTitle: { 
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20, 
    fontWeight: 'semibold' ,
    paddingLeft: 10},
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
  streakSection: {

  paddingHorizontal: 20,
},
sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 15,
},
streakBar: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#E5E7EB',
  padding: 10,
  borderRadius: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 3,
},
streakDay: {
  width: 35,
  height: 40,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ddd',
  marginHorizontal: 5,
  transitionDuration: '300ms', // Optional for React Native Web
},
streakDayText: {
  color: '#fff',
  fontWeight: 'bold',
},

  buttonSection: {
    width: '100%',
  },
  navButton: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#ff5252',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
