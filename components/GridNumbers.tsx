import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

const GridScreen = () => {
  const animation = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      // @ts-ignore
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: animation.x,
            dy: animation.y,
          },
        ],
        { useNativeDriver: false }
      ),
    })
  ).current;

  useEffect(() => {
    // Your animation setup here, if needed
  }, []);

  const gridArray = Array.from({ length: 20 }, (_, row) =>
    Array.from({ length: 20 }, (_, col) => [row, col])
  );

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: animation.x }, { translateY: animation.y }],
        }}
        {...panResponder.panHandlers}
      >
        {gridArray.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(([row, col], colIndex) => (
              <View key={colIndex} style={styles.gridCell}>
                <Text>{`${row}, ${col}`}</Text>
              </View>
            ))}
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  gridCell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GridScreen;
