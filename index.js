import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import PropTypes from 'prop-types'

export default class FieldSet extends Component {

    render() {
        let alignItems = this.props.labelPosition == 'center' ? 'center' : 'flex-' + this.props.labelPosition
        if (this.props.twoLabel) {
            alignItems = 'space-between'
        }
        return (
            <View style={[styles.container, { borderColor: this.props.borderColor }]}>
                <View style={[styles.labelView, { alignItems }, this.props.twoLabel ? { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } : {}]}>
                    <Text style={[styles.label, { backgroundColor: this.props.labelBackgroundColor, color: this.props.labelColor, fontSize: this.props.labelFontSize }, this.props.labelStyle]}> {this.props.label} </Text>
                    {this.props.twoLabel && <Text style={[styles.label, { backgroundColor: this.props.labelBackgroundColor, color: this.props.labelColor, fontSize: this.props.labelFontSize }, this.props.labelStyle, this.props.labelStyle2]}> {this.props.label2} </Text>}
                </View>
                <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 10 }}>
                    <View style={styles.mainTextView}>{this.props.children}</View>
                </View>
            </View>
        );
    }
}

FieldSet.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    labelBackgroundColor: PropTypes.string,
    labelColor: PropTypes.string,
    borderColor: PropTypes.string,
    labelFontSize: PropTypes.number,
    labelStyle: PropTypes.object,
    labelPosition: PropTypes.oneOf(['start', 'center', 'end']),
    twoLabel: PropTypes.bool,
    label2: PropTypes.string,
    labelStyle2: PropTypes.object,
}

FieldSet.defaultProps = {
    labelBackgroundColor: '#fff',
    labelColor: '#000',
    label: 'FieldSet-label',
    children: <Text>FieldSet-Body</Text>,
    borderColor: '#777',
    labelFontSize: 11.4,
    labelStyle: {},
    labelPosition: 'start',
    twoLabel: false,
    label2: 'FieldSet 2nd label',
    labelStyle2: {}
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.1,
        borderRadius: 5,
        marginTop: 10,
    },
    labelView: {
        height: 0,
        justifyContent: 'center',
        paddingHorizontal: 7
    },
    label: {
        elevation: 1000,
    },
    mainTextView: {
        paddingHorizontal: 14,
        margin: 0,
        zIndex: 1,
        paddingTop: 0,
        paddingBottom: 0,
    }
});