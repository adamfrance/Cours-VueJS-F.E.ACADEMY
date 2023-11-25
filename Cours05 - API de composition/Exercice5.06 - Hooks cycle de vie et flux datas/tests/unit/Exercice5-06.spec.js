import { mount } from "@vue/test-utils";
import Exercice from "@/components/Exercice5-06.vue";
import { describe, it, expect, vi } from "vitest";

// Suppress window.alert errors
vi.spyOn(window, "alert").mockReturnValue();

describe("Exercice5-06.vue", () => {
  const wrapper = mount(Exercice);

  it("anonymous loop outputs correctly", () => {
    expect(wrapper.findAll("li").length).toEqual(8);
  });
  
  it("deleted item is removed from array", () => {
    wrapper.setData({
      list: [1, 2, 3],
    });

    wrapper.vm.deleteItem(1);

    expect(wrapper.vm.list.length).toEqual(2);
  });
});
