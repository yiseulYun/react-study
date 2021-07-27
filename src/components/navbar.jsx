import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <div>
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navber-count">{this.props.totalCount}</span>
            </div>
        );
    }
}

export default Navbar;