import React from "react";
import { Text, Platform, TextStyle } from "react-native";
import NextLink from 'next/link';
import { transformRoute } from "app/utils/routeTransform";
import { ParsedUrlQueryInput } from 'querystring';

interface Navigation {
    navigate?: (route: string, query?: object) => void;
}

interface LinkProps {
    pathname: string;
    query?: object;
    navigation?: Navigation;
    children: React.ReactNode;
    style?: TextStyle;
}

const Link: React.FC<LinkProps> = ({ pathname, query, navigation, children, style }) => {
    const href = transformRoute(pathname);

    return (
        <>
            {Platform.OS === 'web' ? (
                <NextLink
                    style={style as React.CSSProperties}
                    href={{ pathname: href, query: query as ParsedUrlQueryInput }}
                >
                    {children}
                </NextLink>
            ) : (
                <Text
                    style={style}
                    onPress={() => {
                        if (navigation?.navigate) {
                            navigation.navigate(pathname, query);
                        }
                    }}
                >
                    {children}
                </Text>
            )}
        </>
    );
};

export default Link;
