import { shallowMount } from "@vue/test-utils";
import Exercice from "@/components/Exercice1-12.vue";
import { describe, it, expect } from "vitest";

describe("Exercice1-12.vue", () => {
  it("renders props.title when passed", () => {
    const title = "CSS module component!";
    const subtitle = "The fourth Exercice";
    const wrapper = shallowMount(Exercice, {});

    wrapper.setData({ subtitle: subtitle, title: title });

    expect(wrapper.find("h1").text()).toMatch(title);
    expect(wrapper.find("h2").text()).toMatch(subtitle);
  });
});
