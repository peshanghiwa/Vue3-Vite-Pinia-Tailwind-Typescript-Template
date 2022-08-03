/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import pSpinner from "../src/components/utility/p-spinner.vue";

describe("P-Spinner Component", () => {
  it("should render the correct size", () => {
    const wrapper = mount(pSpinner, {
      propsData: {
        size: "md",
      },
    });
    expect(wrapper.find(".spinner-md").exists()).toBeTruthy();
  });
  it("should render the correct type", () => {
    const wrapper = mount(pSpinner, {
      propsData: {
        type: "primary",
      },
    });
    expect(wrapper.find(".spinner-primary").exists()).toBeTruthy();
  });
});
