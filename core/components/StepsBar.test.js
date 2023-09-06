import React from "react";
import StepsBar from "./StepsBar";

describe("<StepsBar />", () => {
  const steps = [
    { name: "Step 1", active: false },
    { name: "Step 2", active: false },
    { name: "Step 3", active: false },
  ];

  it("should render the correct number of steps", () => {
    const { getAllByTestId } = global.render(
      <StepsBar steps={steps} space={10} />
    );
    const stepElements = getAllByTestId("step");
    expect(stepElements.length).toBe(steps.length);
  });

  it("should render the step names", () => {
    const { getByText } = global.render(<StepsBar steps={steps} space={10} />);
    steps.forEach((step) => {
      const stepNameElement = getByText(step.name);
      expect(stepNameElement).toBeDefined();
    });
  });

  it("should render the active step with a white background", () => {
    const { getByTestId } = global.render(
      <StepsBar
        steps={[
          ...steps,
          {
            name: "Step 4",
            active: true,
          },
        ]}
        space={10}
      />
    );
    const activeStepElement = getByTestId("active-step");
    expect(activeStepElement.props.style.backgroundColor).toBe("#FFFFFF");
  });

  it("should render the inactive steps with a transparent background", () => {
    const { getAllByTestId } = global.render(
      <StepsBar steps={steps} space={10} />
    );
    const inactiveStepElements = getAllByTestId("step");
    inactiveStepElements.forEach((stepElement) => {
      expect(stepElement.props.style.backgroundColor).toBe("transparent");
    });
  });
});
