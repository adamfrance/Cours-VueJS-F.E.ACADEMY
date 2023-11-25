import { shallowMount } from "@vue/test-utils";
import Exercice from "@/components/Exercice1-01.vue";
import { describe, it, expect } from "vitest";

describe("Exercice1-01.vue", () => {
  it("renders props.title when passed", () => {
    const wrapper = shallowMount(Exercice);
    expect(wrapper.text()).toMatch("My first component!");
  });
});
