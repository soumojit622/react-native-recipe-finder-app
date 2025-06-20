import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { useEffect, useRef } from "react";
import { COLORS } from "../constants/colors";

export default function LoadingSpinner({
  message = "Loading...",
  size = "large",
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animated.View style={[styles.spinnerWrapper, { transform: [{ scale: scaleAnim }] }]}>
          <ActivityIndicator size={size} color={COLORS.primary} />
        </Animated.View>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 28,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    minWidth: 200,
  },
  spinnerWrapper: {
    marginBottom: 16,
  },
  message: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.primary,
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 20,
  },
});
