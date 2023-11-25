import { shallowMount } from '@vue/test-utils'
import Exercice from '@/components/UserInput.vue'
import { describe, it, expect } from 'vitest'

describe('UserInput.vue', () => {
  const wrapper = shallowMount(Exercice, {})

  it('compute fullname correctly', () => {
    const firstName = 'John'
    const lastName = 'Doe'

    wrapper.setData({
      firstName: firstName,
      lastName: lastName,
    })
    expect(wrapper.vm.fullName).toEqual(`${firstName} ${lastName}`)
  })
})
