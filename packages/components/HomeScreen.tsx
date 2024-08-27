import React from "react";
import { Pressable, Text, View, Platform } from "react-native";
import { styles } from "./HomeScreen.css";
import Link from 'next/link';

interface Navigation {
    navigate: (route: string, params?: object) => void;
}

const HomeScreen: React.FC<{navigation?: Navigation}> = ({ navigation }) => {
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

            {Platform.OS === 'web' ? (
                <Link
                    style={styles.link}
                    href={{
                        pathname: '/profiles',
                        query: { name: 'jane' }
                    }}
                >
                    Go to Jane's profile
                </Link>
                        ) : (

                <Text
                    style={styles.link}
                    onPress={() => navigation?.navigate('Profiles', { name: 'Jane' })}
                >
                    Go to Jane's profile
                </Text>
            )}
        </View>
    );
};

export default HomeScreen;
