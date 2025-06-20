import { View, Text, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { COLORS } from "../constants/colors";
import { recipeCardStyles } from "../assets/styles/home.styles";
import { useRef } from "react";

export default function RecipeCard({ recipe }) {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={recipeCardStyles.container}
        onPress={() => router.push(`/recipe/${recipe.id}`)}
        activeOpacity={0.85}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {/* Image Section */}
        <View style={recipeCardStyles.imageContainer}>
          <Image
            source={{ uri: recipe.image }}
            style={recipeCardStyles.image}
            contentFit="cover"
            transition={300}
          />
        </View>

        {/* Content Section */}
        <View style={recipeCardStyles.content}>
          <Text style={recipeCardStyles.title} numberOfLines={2}>
            {recipe.title}
          </Text>

          {recipe.description && (
            <Text style={recipeCardStyles.description} numberOfLines={2}>
              {recipe.description}
            </Text>
          )}

          <View style={recipeCardStyles.footer}>
            {recipe.cookTime && (
              <View style={recipeCardStyles.timeContainer}>
                <Ionicons
                  name="time-outline"
                  size={14}
                  color={COLORS.textLight}
                />
                <Text style={recipeCardStyles.timeText}>{recipe.cookTime}</Text>
              </View>
            )}
            {recipe.servings && (
              <View style={recipeCardStyles.servingsContainer}>
                <Ionicons
                  name="people-outline"
                  size={14}
                  color={COLORS.textLight}
                />
                <Text style={recipeCardStyles.servingsText}>
                  {recipe.servings}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
