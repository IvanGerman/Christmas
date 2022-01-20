/* eslint-disable  import/no-cycle */
import addListenersToElements from './addListeners';
import { addListenersToCards } from './listenersToCards';
import { addListenersToSelector } from './listenerToSorting';
import { addListenersToResetFiltersButton } from './listenerToResetFilters';

export function addAllListeners() {
  addListenersToElements();
  addListenersToCards();
  addListenersToSelector();
  addListenersToResetFiltersButton();
}
