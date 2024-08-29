import React from "react";
import { Text } from "react-native";

interface Route {
    params: {
        name : String | null
    };
}

const ProfilePage = ({ route }: { route: Route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfilePage;