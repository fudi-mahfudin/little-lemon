import { render, screen, userEvent } from "../../utils/test-utils";
import BookingForm from ".";
import { fetchAPI, initializeTimes, submitAPI, updateTimes } from "../../utils/temp";

const timeList = {times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}

describe("BookingForm", () => {
  it("Renders labels and fields", () => {
    render(
      <BookingForm
        availableTimes={timeList}
        dispatch={vi.fn((action) => action)}
      />
    );
    // Date label and field
    const chooseDateLabel = screen.getByText("Choose date");
    expect(chooseDateLabel).toBeVisible();
    const chooseDateField = screen.getByTestId("res-date");
    expect(chooseDateField).toBeVisible();

    const chooseTimeLabel = screen.getByText("Choose time");
    expect(chooseTimeLabel).toBeVisible();
    const chooseTimeField = screen.getByTestId("res-time");
    expect(chooseTimeField).toBeVisible();

    const numberGuestLabel = screen.getByText("Number of guests");
    expect(numberGuestLabel).toBeVisible();
    const numberGuestField = screen.getByTestId("guests");
    expect(numberGuestField).toBeVisible();

    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeVisible();
    const occasionField = screen.getByTestId("occasion");
    expect(occasionField).toBeVisible();

    const submitButton = screen.getByDisplayValue("Make Your Reservation");
    expect(submitButton).toBeVisible();
  });

  it("Validation fields", async() => {
    render(
      <BookingForm
        availableTimes={timeList}
        dispatch={vi.fn((action) => action)}
      />
    );

    const user = userEvent.setup();
    const numberGuestField = screen.getByTestId("guests");
    const submitButton = screen.getByDisplayValue("Make Your Reservation");

    await user.type(numberGuestField, "2");
    expect(numberGuestField).toHaveValue(12);
    await user.click(submitButton);

    const numberGuestFieldError = screen.getByTestId("guests-error");
    expect(numberGuestFieldError).toHaveTextContent("Must be at most 10");
  });

  test("initializeTimes returns the correct expected value", () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = { times: fetchAPI(today) };
    expect(initialState).toEqual(expectedResult);
  });

  test("updateTimes returns the same state", () => {
    const state = timeList;
    const action = { type: "SOME_ACTION" };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });

  test("submitAPI returns true", () => {
    const formData = {
      date: "2022-10-12",
      time: "20:00",
      guests: 5,
      occasion: "Birthday"
    };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  })

});