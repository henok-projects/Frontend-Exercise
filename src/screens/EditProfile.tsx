import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from '../store/slices/userSlice';

const EditProfileScreen = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(currentUser?.firstName);
  const [email, setEmail] = useState(currentUser?.email);
  const { _id: userId } = currentUser; // Assuming currentUser is defined
  const updateData = { firstName, email }; // Assuming firstName and email are defined

  const handleUpdate = () => {
    if (!firstName || !email) {
      Alert.alert('Validation Error', 'Fields cannot be empty.');
      return;
    }
    dispatch(updateProfileRequest());
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <Button title="Update Profile" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default EditProfileScreen;
