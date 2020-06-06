import React from 'react';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames';
import styles from './waiting.css';
import PropTypes from 'prop-types';

import topBlock from './top-block.svg';
import middleBlock from './middle-block.svg';
import bottomBlock from './bottom-block.svg';

const mainMessages = {
    'gui.waiting.headline': (
        <FormattedMessage
            defaultMessage="Loading Project"
            description="Main loading message"
            id="gui.waiting.headline"
        />
    ),
    'gui.waiting.creating': (
        <FormattedMessage
            defaultMessage="Creating Project"
            description="Main creating message"
            id="gui.waiting.creating"
        />
    )
};

class WaitingComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {}
    componentWillUnmount () {}

    render () {
        return (
            <div
                className={classNames(styles.background, {
                    [styles.fullscreen]: this.props.isFullScreen
                })}
                style={{display: 'none'}}
            >
                <div className={styles.container}>
                    <div className={styles.blockAnimation}>
                        <img
                            className={styles.topBlock}
                            src={topBlock}
                        />
                        <img
                            className={styles.middleBlock}
                            src={middleBlock}
                        />
                        <img
                            className={styles.bottomBlock}
                            src={bottomBlock}
                        />
                    </div>
                    <div className={styles.title}>
                        {mainMessages[this.props.messageId]}
                    </div>
                    <div className={styles.messageContainerOuter}>
                        <div
                            className={styles.messageContainerInner}
                        >
                            <div
                                className={styles.message}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

WaitingComponent.propTypes = {
    isFullScreen: PropTypes.bool,
    messageId: PropTypes.string
};
WaitingComponent.defaultProps = {
    isFullScreen: false,
    messageId: 'gui.waiting.headline'
};

export default WaitingComponent;
