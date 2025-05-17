import { render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './Components/Main.js'


const mockAvailabelTimes = ['17:00', '18:00'];
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();
describe('Renders the BookingForm heading', () => {
beforeEach(() => {
    render(
    <BookingForm 
    availableTimes={mockAvailabelTimes}
    dispatch={mockDispatch}
    submitForm={mockSubmitForm}
    />
    );
});


test("first name input is required", () => {
    const input = screen.getByLabelText("First Name");
    expect(input).toBeRequired();
})

test("last name input is required", () => {
    const input = screen.getByLabelText("Last Name");
    expect(input).toBeRequired();
})

test("date is required", () => {
    const input = screen.getByLabelText("Choose a date");
    expect(input).toHaveAttribute("type", "date");
    expect(input).toBeRequired();
})


test("time is required", () => {
    const select = screen.getByLabelText("Choose time");
    expect(select).toBeInTheDocument();
    expect(select).toHaveDisplayValue(mockAvailabelTimes[0]);
})

test("number is required", () => {
    const input = screen.getByLabelText("Number of guests");
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("max", "10");
})


test("ocassion is required", () => {
    const select = screen.getByLabelText("Ocassion");
    expect(select).toBeInTheDocument();


    const option = screen.getAllByRole('option');
    const optionLabels = option.map((o) => o.textContent);
    expect(optionLabels).toEqual(expect.arrayContaining(['Birthday', 'Anniversary']));
})

test("submit is valid", () => {
const Button = screen.getByRole('button', {name: "Make Your reservation"});
expect(Button).toBeDisabled();
});


});
