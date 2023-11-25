import { shallowMount } from "@vue/test-utils";
import Exercice from "@/components/Exercice1-02.vue";
import { describe, it, expect } from "vitest";

describe("Exercice1-02.vue", () => {
  it("renders props.title when passed", () => {
    const title = "My first component!";
    const wrapper = shallowMount(Exercice, {
      propsData: { title },
    });

    wrapper.setData({ isUppercase: false, title: title });

    expect(wrapper.text()).toMatch(title);
  });
});
