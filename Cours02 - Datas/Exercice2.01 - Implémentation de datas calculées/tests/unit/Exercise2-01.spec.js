import { shallowMount } from '@vue/test-utils'
import Exercice from '@/components/Exercice2-01.vue'
import { describe, it, expect } from 'vitest'

describe('Exercice2-01.vue', () => {
  const wrapper = shallowMount(Exercice, {})

  it('comput fullname correctly', () => {
    const firstName = 'John'
    const lastName = 'Doe'

    wrapper.setData({
      firstName: firstName,
      lastName: lastName,
    })
    expect(wrapper.vm.fullName).toEqual(`${firstName} ${lastName}`)
  })
})
