import { shallowMount } from '@vue/test-utils'
import Exercice from '@/components/BlogGallery.vue'
import { describe, it, expect } from 'vitest'

describe('BlogGallery.vue', () => {
  const wrapper = shallowMount(Exercice, {})

  it('compute filtered list correctly', () => {

    wrapper.setData({
      searchTerm: 'vue',
    })
    expect(wrapper.vm.getFilteredBlogs().length).toEqual(3)
  })
})
