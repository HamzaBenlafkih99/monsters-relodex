import { Search_Field_Type } from '../action.types';

export const setSearchField = search => ({
    type: Search_Field_Type,
    payload: search
});