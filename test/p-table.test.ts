/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import pTable from "../src/components/utility/p-table.vue";

const columns = [
  {
    name: "Country",
    id: "country",
  },
  {
    name: "City",
    id: "city",
  },
];

const dataSource = [
  {
    country: "USA",
    city: "New York",
  },
  {
    country: "USA",
    city: "Los Angeles",
  },
  {
    country: "USA",
    city: "Chicago",
  },
  {
    country: "USA",
    city: "Houston",
  },
  {
    country: "USA",
    city: "Philadelphia",
  },
];

describe("P-Button Component", () => {
  it("should render the component with only two props", () => {
    const wrapper = mount(pTable, {
      propsData: {
        columns,
        dataSource,
      },
    });
    expect(wrapper.find(".table-component").exists()).toBeTruthy();
  });
  it("should render spinner when loading prop is true", () => {
    const wrapper = mount(pTable, {
      propsData: {
        columns,
        dataSource,
        loading: true,
      },
    });
    expect(wrapper.find(".table-lodaing").exists()).toBeTruthy();
  });
  it("should render the specified number one itemsPerPage is defined", () => {
    const wrapper = mount(pTable, {
      propsData: {
        columns,
        dataSource,
        itemsPerPage: 2,
      },
    });
    expect(wrapper.find(".data-columns").exists()).toBeTruthy();
    expect(wrapper.findAll(".data-columns").length).toBe(2);
  });
  it("should render the specified number one itemsPerPage is defined", () => {
    const wrapper = mount(pTable, {
      propsData: {
        columns,
        dataSource,
        itemsPerPage: 2,
      },
    });
    expect(wrapper.find(".data-columns").exists()).toBeTruthy();
    expect(wrapper.findAll(".data-columns").length).toBe(2);
  });
});
