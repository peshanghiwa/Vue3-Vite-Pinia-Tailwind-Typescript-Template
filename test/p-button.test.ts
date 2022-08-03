/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import pSpinner from "../src/components/utility/p-button.vue";

describe("P-Button Component", () => {
  it("should render the correct type", () => {
    const wrapper = mount(pSpinner, {
      propsData: {
        type: "secondary",
      },
    });
    expect(wrapper.find(".btn-secondary").exists()).toBeTruthy();
  });
  it("should render disbaled state when disbaled prop is true", () => {
    const wrapper = mount(pSpinner, {
      propsData: {
        type: "primary",
        disabled: true,
      },
    });
    expect(wrapper.find(".btn-primary").attributes("disabled")).toBeTruthy();
  });
  it("should render disabled state when loading prop is true", () => {
    const wrapper = mount(pSpinner, {
      propsData: {
        type: "primary",
        loading: true,
      },
    });
    expect(wrapper.find(".btn-primary").attributes("disabled")).toBeTruthy();
  });
  it("should render a spinned when button is loading", () => {
    const wrapper = mount(pSpinner, {
      propsData: {
        type: "primary",
        loading: true,
      },
    });
    expect(wrapper.find(".loading-component").exists()).toBeTruthy();
  });
});
