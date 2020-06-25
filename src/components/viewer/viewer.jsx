import React from 'react';
import classNames from 'classnames';
import styles from './viewer.css';

class ViewerComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {}
    componentWillUnmount () {}

    render () {
        return (
            <div
                className={classNames(styles.background)}
                style={{display: 'none'}}
            >
                <div className={styles.container}>
                    <div className={styles.closeBox} onClick={(e) => e.target.parentElement.parentElement.style.display = 'none'}>
                      &#10006;
                    </div>
                    <div className={styles.view}>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewerComponent;
