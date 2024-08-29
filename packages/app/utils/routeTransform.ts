import { Platform } from "react-native";

export const slugify = (text: string): string => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-');
};

export const transformRoute = (route: string): string => {
    if (Platform.OS === 'web') {
        return `/${slugify(route)}`;
    }
    return route;
};