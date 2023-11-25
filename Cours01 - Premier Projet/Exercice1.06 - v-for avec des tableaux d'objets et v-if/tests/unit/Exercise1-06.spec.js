import { shallowMount } from "@vue/test-utils";
import Exercice from "@/components/Exercice1-06.vue";
import { describe, it, expect } from "vitest";

describe("Exercice1-06.vue", () => {
  it("should render", () => {
    const wrapper = shallowMount(Exercice);

    expect(wrapper.find("h1").text()).toEqual(
      "Looping through array of objects"
    );
  });
});
