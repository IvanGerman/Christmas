import { FilterValue } from '../../types/types';
import {
shapeFilters, colorFilters, sizeFilters, favoriteFilters,
} from './filters';

export function modifyFilter(filter: string, filterValue: FilterValue) {
  switch (filter) {
    case 'shape':
      if (typeof (filterValue) === 'string') {
        if (!shapeFilters.includes(filterValue)) {
          shapeFilters.push(filterValue);
        } else {
          const index = shapeFilters.indexOf(filterValue);
            if (index > -1) {
              shapeFilters.splice(index, 1);
            }
          }
      }
      break;

    case 'color':

      if (typeof (filterValue) === 'string') {
        if (!colorFilters.includes(filterValue)) {
          colorFilters.push(filterValue);
        } else {
          const index = colorFilters.indexOf(filterValue);
            if (index > -1) {
              colorFilters.splice(index, 1);
            }
          }
      }
      break;

    case 'size':

      if (typeof (filterValue) === 'string') {
        if (!sizeFilters.includes(filterValue)) {
          sizeFilters.push(filterValue);
        } else {
          const index = sizeFilters.indexOf(filterValue);
            if (index > -1) {
              sizeFilters.splice(index, 1);
            }
        }
      }
      break;

    case 'fav-input':

      if (filterValue === true) {
        favoriteFilters[0] = filterValue;
      } else {
        // @ts-ignore
        favoriteFilters = [];
      }
      break;
    default:
      alert('Нет таких значений');
  }
}
