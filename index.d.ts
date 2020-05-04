import * as React from "react";
import * as ReactNative from "react-native";

export interface FieldSetProps {
    label?: string;
    children?: Node;
    labelBackgroundColor?: string;
    labelColor?: string;
    borderColor?: string;
    labelFontSize?: number
    labelStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
    labelPosition?: "left" | "right" | "center";
    twoLabel?: boolean
    label2?: boolean
    labelStyle2?: ReactNative.StyleProp<ReactNative.TextStyle>
}

export default class FieldSet extends React.Component<FieldSetProps> { }
