import React from "react";
import { View, Text, Button } from "react-native";

class CountriesList extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props.items);
        return (
            <View style={{flex:1}}>
                <Text>
                    asd
                </Text>
                <Button title={'Fetch countries'} onPress={() => this.props.fetchCountries()}/>
            </View>
        );
    }
}

export default CountriesList;
