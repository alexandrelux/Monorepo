import React from "react";
import { View, Text } from "react-native";
import { styles } from "./HomePage.css";
import Link from "app/components/Link";

interface Navigation {
    navigate: (route: string, params?: object) => void;
}

const HomePage = ({ navigation } : { navigation? : Navigation }) => {
    return (
        <View style={styles.app}>
            <View style={styles.header}>
                <Text style={styles.title}>React Native for Web</Text>
            </View>
            <Text style={styles.text}>
                This is an example of an app built
            </Text>
            <Text style={styles.text}>
                To get started, edit{" "}
            </Text>

            <Link
                pathname="Profiles"
                query={{ name: 'jane' }}
                navigation={navigation}
                style={styles.link}
            >
                Go to Jane's profile
            </Link>
        </View>
    );
};

export default HomePage;
