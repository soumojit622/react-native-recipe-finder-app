import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { favoritesStyles } from "@/assets/styles/favorites.styles";

function NoFavoritesFound() {
  const router = useRouter();

  return (
    <View style={favoritesStyles.emptyState}>
      {/* Heart Icon */}
      <View style={favoritesStyles.emptyIconContainer}>
        <Ionicons name="heart-dislike-outline" size={90} color={COLORS.border} />
      </View>

      {/* Title */}
      <Text style={favoritesStyles.emptyTitle}>Your favorite list is empty</Text>

      {/* Subtitle */}
      <Text style={favoritesStyles.emptyDescription}>
        Discover amazing recipes and save them for later.
      </Text>

      {/* Explore Button */}
      <TouchableOpacity
        style={favoritesStyles.exploreButton}
        onPress={() => router.push("/")}
        activeOpacity={0.8}
      >
        <Ionicons name="compass-outline" size={18} color={COLORS.white} />
        <Text style={favoritesStyles.exploreButtonText}>Explore Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NoFavoritesFound;
