import * as React from 'react';
import { View, PanResponder } from 'react-native';

export const swipeDirections = {
    SWIPE_UP: 'SWIPE_UP',
    SWIPE_DOWN: 'SWIPE_DOWN',
    SWIPE_LEFT: 'SWIPE_LEFT',
    SWIPE_RIGHT: 'SWIPE_RIGHT'
};

const swipeConfig = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
};

const isValidSwipe = (velocity: any, velocityThreshold: any, directionalOffset: any, directionalOffsetThreshold: any) => {
    return Math.abs(velocity) > velocityThreshold && Math.abs(directionalOffset) < directionalOffsetThreshold;
}

export interface Props {
    config: any,
    onSwipe?: (swipeDirection: any, gestureState: any) => void,
    onSwipeDown?: (gestureState: any) => void,
    onSwipeLeft?: (gestureState: any) => void,
    onSwipeRight?: (gestureState: any) => void,
    onSwipeUp?: (gestureState: any) => void,
    style: any
}

interface State {

}
export default class GestureRecognizer extends React.Component<Props, State> {
    swipeConfig: any;
    _panResponder: any;

    constructor(props: Props, context: any) {
        super(props, context);
        this.swipeConfig = Object.assign(swipeConfig, props.config);
    }

    componentWillReceiveProps(props: Props) {
        this.swipeConfig = Object.assign(swipeConfig, props.config);
    }

    componentWillMount() {
        const responderEnd = this._handlePanResponderEnd.bind(this);
        const shouldSetResponder = this._handleShouldSetPanResponder.bind(this);
        this._panResponder = PanResponder.create({ //stop JS beautify collapse
            onStartShouldSetPanResponder: shouldSetResponder,
            onMoveShouldSetPanResponder: shouldSetResponder,
            onPanResponderRelease: responderEnd,
            onPanResponderTerminate: responderEnd
        });
    }

    _handleShouldSetPanResponder(evt: any, gestureState: any) {
        return evt.nativeEvent.touches.length === 1 && !this._gestureIsClick(gestureState);
    }

    _gestureIsClick(gestureState: any) {
        return Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5;
    }

    _handlePanResponderEnd(evt: any, gestureState: any) {
        const swipeDirection = this._getSwipeDirection(gestureState);
        this._triggerSwipeHandlers(swipeDirection, gestureState);
    }

    _triggerSwipeHandlers(swipeDirection: any, gestureState: any) {
        const { onSwipe, onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight } = this.props;
        const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN } = swipeDirections;
        onSwipe && onSwipe(swipeDirection, gestureState);
        switch (swipeDirection) {
            case SWIPE_LEFT:
                onSwipeLeft && onSwipeLeft(gestureState);
                break;
            case SWIPE_RIGHT:
                onSwipeRight && onSwipeRight(gestureState);
                break;
            case SWIPE_UP:
                onSwipeUp && onSwipeUp(gestureState);
                break;
            case SWIPE_DOWN:
                onSwipeDown && onSwipeDown(gestureState);
                break;
        }
    }

    _getSwipeDirection(gestureState: any) {
        const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN } = swipeDirections;
        const { dx, dy } = gestureState;
        if (this._isValidHorizontalSwipe(gestureState)) {
            return (dx > 0)
                ? SWIPE_RIGHT
                : SWIPE_LEFT;
        } else if (this._isValidVerticalSwipe(gestureState)) {
            return (dy > 0)
                ? SWIPE_DOWN
                : SWIPE_UP;
        }
        return null;
    }

    _isValidHorizontalSwipe(gestureState: any) {
        const { vx, dy } = gestureState;
        const { velocityThreshold, directionalOffsetThreshold } = this.swipeConfig;
        return isValidSwipe(vx, velocityThreshold, dy, directionalOffsetThreshold);
    }

    _isValidVerticalSwipe(gestureState: any) {
        const { vy, dx } = gestureState;
        const { velocityThreshold, directionalOffsetThreshold } = this.swipeConfig;
        return isValidSwipe(vy, velocityThreshold, dx, directionalOffsetThreshold);
    }

    render() {
        return (<View {...this.props} {...this._panResponder.panHandlers} />);
    }
};

