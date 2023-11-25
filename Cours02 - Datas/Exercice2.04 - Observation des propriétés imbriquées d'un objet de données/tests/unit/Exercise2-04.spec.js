import { shallowMount } from "@vue/test-utils";
import Exercice from "@/components/Exercice2-04.vue";
import { describe, it, expect } from "vitest";

describe("Exercice2-04.vue", () => {
  const wrapper = shallowMount(Exercice, {});

  it("watcher updates price value", async () => {
    // Check update
    await wrapper.vm.updatePrice();
    expect(wrapper.vm.product.price).toEqual(24);
    expect(wrapper.vm.discount).toEqual(1);

    // Check if statement on line 28
    for (let index = 0; index < 25; index++) {
      await wrapper.vm.updatePrice();
    }
    expect(wrapper.vm.product.price).toEqual(0);
    expect(wrapper.vm.discount).toEqual(25);
  });
});
