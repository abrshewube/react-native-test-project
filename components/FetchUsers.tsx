import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions'; // Import the fetchUsers action

const UserListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);

  useEffect(() => {
    // Dispatch the FETCH_USERS action when the component mounts
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderItem = ({ item }: any) => {
    const formattedDate = new Date(item.createdAt).toLocaleDateString();
  
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View>
          <Text>{item.name}</Text>
          <Text>Date Joined: {formattedDate}</Text>
        </View>
      </View>
    );
  };
  

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
});

export default UserListScreen;
