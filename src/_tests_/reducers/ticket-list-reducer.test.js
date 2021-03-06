import ticketListReducer from '../../reducers/ticket-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import "@testing-library/jest-dom/extend-expect";


describe('ticketListReducer', () => {
  let action;
  const currentState = {
    1: {names: "Ryan & Aimen",
    location: '4b',
    issue: 'Redux action is not working correctly',
    id: 1},
    2:{ names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
  id: 2}
  }

  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };


  test('Should successfuly add new ticket data to masterTicketList', () =>{
    const {names, location, issue, id} = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue : issue,
      id : id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location:location,
        issue: issue,
        id: id
      }
    })
  })

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    });
  });

});


describe('ticketListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
});

describe("formVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });
});