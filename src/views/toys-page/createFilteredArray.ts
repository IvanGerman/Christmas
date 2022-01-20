import data from '../../data';
import { CreatedFilteredArray } from '../../types/types';
import {
  shapeFilters, colorFilters, sizeFilters, favoriteFilters, countFilters, yearFilters,
} from './filters';
/* eslint-disable import/no-mutable-exports */
export let currentDataForSorting = data;

export function createFilteredArray() {
  let currentData = [...data];
  let result1: CreatedFilteredArray;
  result1 = currentData.filter((val) => {
    if (shapeFilters.length === 0) {
      result1 = currentData;
      return result1;
    }
    for (let i = 0; i < shapeFilters.length; i++) {
      return shapeFilters.includes(val.shape);
    }
  });

  let result2: CreatedFilteredArray;
  result2 = result1.filter((val) => {
    if (colorFilters.length === 0) {
      result2 = result1;
      return result2;
    }
    for (let i = 0; i < colorFilters.length; i++) {
      return colorFilters.includes(val.color);
    }
  });

  let result3: CreatedFilteredArray;
  result3 = result2.filter((val) => {
    if (sizeFilters.length === 0) {
      result3 = result2;
      return result3;
    }
    for (let i = 0; i < sizeFilters.length; i++) {
      return sizeFilters.includes(val.size);
    }
  });

  let result4: CreatedFilteredArray;
  result4 = result3.filter((val) => {
    if (favoriteFilters.length === 0) {
      result4 = result3;
      return result4;
    }
    for (let i = 0; i < favoriteFilters.length; i++) {
      return favoriteFilters.includes(val.favorite);
    }
  });

  let result5: CreatedFilteredArray;
  result5 = result4.filter((val) => {
    if (countFilters.length === 0) {
      result5 = result4;
      return result5;
    }
    for (let i = 0; i < countFilters.length; i++) {
      return countFilters.includes(val.count);
    }
  });

  let result6: CreatedFilteredArray;
  result6 = result5.filter((val) => {
    if (yearFilters.length === 0) {
      result6 = result5;
      return result6;
    }
    for (let i = 0; i < yearFilters.length; i++) {
      return yearFilters.includes(val.year);
    }
  });

  currentData = result6;
  currentDataForSorting = result6;
  return currentDataForSorting;
}
