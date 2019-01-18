import {
  TURN_ON,
  TURN_OFF,
} from './constants';

export function turnOn() {
  return {
    type: TURN_ON,
  };
};

export function turnOff() {
  return {
    type: TURN_OFF,
  };
}
