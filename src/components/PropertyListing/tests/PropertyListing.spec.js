import React, { useState as useStateMock } from 'react'
import {shallow, mount} from 'enzyme';
import PropertyListing from '../PropertyListing';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

describe('PropertyListing', () => {
    const setState = jest.fn()

    beforeEach(() => {
        useStateMock.mockImplementation(init => [
            [{id:1},{id:2}],
            setState
        ])
    })

    it('should render without crashing', () => {
        const wrapper = shallow(<PropertyListing/>);
        expect(wrapper.find('.PropertyListing')).toHaveLength(1);
    });

    it('should render five property cards', () => {
        const wrapper = mount(<PropertyListing/>);
        expect(wrapper.find('PropertyCard')).toHaveLength(2);
    });
});
