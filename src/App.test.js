import { render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './Components/Main.js'

test('Renders the BookingForm heading', () => {
    const state = [];
    const action = {type: 'UPDATE_TIMES', playload: '2024-01-01'}


    const result = updateTimes(state, action);

    expect(result).toEqual(initializeTimes());
})