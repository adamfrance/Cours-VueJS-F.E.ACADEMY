import Exercice from "@/components/Exercice1-07.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("Exercice1-07.vue", () => {
  it("data returns correctly in list element", () => {
    const name = "John Doe";
    const language = "Javascript";

    const wrapper = mount(Exercice, {
      propsData: {
        name,
        language,
      },
    });

    expect(wrapper.html()).toContain(name);
    expect(wrapper.html()).toContain(language);
  });
});
