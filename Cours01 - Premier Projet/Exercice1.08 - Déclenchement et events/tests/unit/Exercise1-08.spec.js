import { mount } from "@vue/test-utils";
import Exercice from "@/components/Exercice1-08.vue";
import { describe, it, expect, vi } from "vitest";

describe("Exercice1-08.vue", () => {
  const wrapper = mount(Exercice);

  it("anonymous loop outputs correctly", () => {
    expect(wrapper.findAll("li").length).toEqual(5);
  });
  it("trigger alert", () => {
    const triggerSpy = vi.spyOn(wrapper.vm, 'triggerAlert')
    wrapper.findAll("button")[0].trigger("click");
    expect(triggerSpy).toBeCalled();
  });
});
