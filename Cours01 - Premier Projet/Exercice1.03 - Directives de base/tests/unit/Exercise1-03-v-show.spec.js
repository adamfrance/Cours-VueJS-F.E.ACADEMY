import { shallowMount } from "@vue/test-utils";
import Exercice from "@/components/Exercice1-03-v-show.vue";
import { describe, it, expect } from "vitest";

describe("Exercice1-03-v-show.vue", () => {
  const wrapper = shallowMount(Exercice, {});

  it("hidden elements to not be rendered", () => {
    expect(wrapper.find("h1").text()).toEqual("Directive text");
    expect(wrapper.find("h2").isVisible()).toBe(false);
  });

  it("renders anchor tag with data", () => {
    const link = {
      url: "https://google.com",
      target: "_blank",
      tabindex: "0",
      title: "Go to Google",
    };

    wrapper.setData({
      link: link,
    });

    expect(wrapper.find("a").text()).toMatch(link.title);
  });
});
