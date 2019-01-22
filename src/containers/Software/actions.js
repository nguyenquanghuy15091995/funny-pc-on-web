import {
  CLOSE_SOFTWARE,
  OPEN_SOFTWARE,
} from './constants';

export function openSoftware(id) {
  return {
    type: OPEN_SOFTWARE,
    softwareId: id,
  };
}

export function closeSoftware() {
  return {
    type: CLOSE_SOFTWARE,
  };
}
