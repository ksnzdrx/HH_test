import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { Appbar, FAB } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "./store/inventory";
import { RootState } from "./store";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "./App";
import ProductItem from "./ProductItem";

const HomeScreen = (props: StackScreenProps<StackParamList, "Home">) => {
  const fetching = useSelector((state: RootState) => state.inventory.fetching);
  const inventory = useSelector(selectors.selectInventory);
  const dispatch = useDispatch();
  
  // State to track collapsed items
  const [collapsedItems, setCollapsedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    console.log('Current inventory:', inventory);
  }, [inventory]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      dispatch(actions.fetchInventory());
    });
    return unsubscribe;
  }, [props.navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: '#FDFBFC'}}>
      <Appbar.Header>
        <Appbar.Content title="Inventory" titleStyle={styles.title} />
      </Appbar.Header>

      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={fetching}
            onRefresh={() => dispatch(actions.fetchInventory())}
          />
        }
      >
        <SafeAreaView edges={["left", "bottom", "right"]}>
          <View style={styles.productContainer}>
            {inventory.map((record) => (
              <ProductItem
                key={record.id}
                name={record.fields["Product Name"]}
                date={record.fields.Posted}
                categories={record.fields["Product Categories"] || ''}
                image={record.fields["Product Image"]}
              />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>

      <SafeAreaView style={styles.fab}>
        <FAB
          icon={() => (
            <MaterialCommunityIcons name="barcode" size={24} color="#0B5549" />
          )}
          label="Scan Product"
          onPress={() => props.navigation.navigate("Camera")}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 16,
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
  productContainer: {
    padding: 8,
    backgroundColor:'#FDFBFC',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
    backgroundColor: '#FDFBFC'
  },
});

export default HomeScreen;
