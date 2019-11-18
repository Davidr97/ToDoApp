import { connect } from "react-redux";
import { fetchCountries } from '../../redux3/actions';
import CountriesList from '../presentational/countriesList';

const mapStateToProps = state => {
    const {isFetching, items} = state.countries;
    return {
        isFetching,
        items
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCountries: () => dispatch(fetchCountries())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountriesList)
