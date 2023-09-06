import { NativeBaseProvider } from "native-base";
import { render } from "@testing-library/react-native";
import theme from "./core/theme";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};
const Wrapper = ({ children }) => (
  <NavigationContainer>
    <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
      {children}
    </NativeBaseProvider>
  </NavigationContainer>
);
export function customRender(component, options) {
  return render(component, { wrapper: Wrapper, ...options });
}

// re-export everything
export * from "@testing-library/react-native";

global.render = customRender;
