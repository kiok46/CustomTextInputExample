import {
  TEXT_CHANGED
} from '../Actions/types';

/* Remember that TEXT_CHANGED should be defined and must have a value otherwise it
will be undefined and no error would popup and in the reducer we will have a
case of undefined

case undefined:
   return ...

which is not what we want.
*/

const INITIAL_STATE = {
  text: ''
};

export default ( state=INITIAL_STATE, action ) => {
  switch (action.type) {
    case TEXT_CHANGED:
       /*
          slice of state (that the reducer last published)  +  action
                         |
                    into the reducer
                         |
              returns a new slice of state

       After our reducer runs, redux looks at the old value of the state and the
       new one. `is newState === oldState?` (matches the object) we must return a
       new object. (have to take care of immutable objects)

       Make a new object, take all the properties from the existing state object
       and throw that into our new object then define the property `text`, give it
       a value of action.payload and put it one top of whatever properties we had
       on the old state object.

       Now, since old state object already has a text property so, it will be
       overwritten with a new value.
       */

       return { ...state, text: action.payload }

    default:
      /*
      We will just return the state. Return the initial state when nothing changes
      hence no re-rendering.
      */
      return state
  }
};
