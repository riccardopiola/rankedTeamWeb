import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Summoner from '../components/Summoner';
import * as SummonerActions from '../actions/SummonerActions';

function mapStateToProps(state) {
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SummonerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
