import { shallowMount } from "@vue/test-utils";
import Exercice from "@/components/Exercice2-03.vue";
import { describe, it, expect } from 'vitest'

describe("Exercice2-03.vue", () => {
  const wrapper = shallowMount(Exercice, {});

  it("watcher updates values", async () => {
    await wrapper.vm.updateDiscount();

    expect(wrapper.vm.oldDiscount).toEqual(5);
    expect(wrapper.vm.discount).toEqual(10);
  });
});
