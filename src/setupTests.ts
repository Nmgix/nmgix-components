import "@testing-library/jest-dom/extend-expect";

import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;

import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
