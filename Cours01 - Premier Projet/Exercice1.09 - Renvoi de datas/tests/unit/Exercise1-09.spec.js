import { mount } from "@vue/test-utils";
import Exercice from "@/components/Exercice1-09.vue";
import { describe, it, expect } from "vitest";

describe("Exercice1-09.vue", () => {
  const wrapper = mount(Exercice);

  it("anonymous loop outputs correctly", () => {
    expect(wrapper.findAll("li").length).toEqual(5);
  });
  it("format currency correctly", () => {
    expect(wrapper.vm.formatCurrency(100)).toEqual("$100.00");
  });
  it("add to cart updates data", () => {
    wrapper.setProps({
      totalItems: 0,
      totalCost: 0,
    });

    wrapper.vm.addToCart(5);

    expect(wrapper.vm.totalItems).toEqual(1);
    expect(wrapper.vm.totalCost).toEqual(5);
  });
});
