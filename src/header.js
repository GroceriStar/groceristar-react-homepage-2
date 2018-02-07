import React, {Component} from 'react';
import './App.css';

class Header extends Component{
	render(){
		return(
             <div className ="row Header">
             <div className="col-md-3 col-md-push-1 name" > GroceriStar </div>
             <div className="col-md-2 col-md-push-6 contact"> Contact </div>
             </div>
			);
	}
}
export default Header;
