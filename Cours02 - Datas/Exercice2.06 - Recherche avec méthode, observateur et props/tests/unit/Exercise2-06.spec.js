import { shallowMount } from "@vue/test-utils";
import Exercice from "@/components/Exercice2-06.vue";
import { describe, it, expect } from "vitest";

describe("Exercice2-06.vue", () => {
  const wrapper = shallowMount(Exercice, {});
  const expectedList = ["Vue"];
  it("search with method", async () => {
    const textInput = wrapper.find('input[placeholder="Search with method"]');
    await textInput.setValue("v");
    wrapper.vm.searchMethod();

    expect(wrapper.vm.methodFilterList).toEqual(expectedList);
  });
  it("search with computed", async () => {
    const textInput = wrapper.find('input[placeholder="Search with computed"]');
    await textInput.setValue("v");
    wrapper.vm.searchMethod();

    expect(wrapper.vm.computedList).toEqual(expectedList);
  });
  it("search with watch", async () => {
    const textInput = wrapper.find('input[placeholder="Search with watcher"]');
    await textInput.setValue("v");

    expect(wrapper.vm.watchFilterList).toEqual(expectedList);
  });
});
