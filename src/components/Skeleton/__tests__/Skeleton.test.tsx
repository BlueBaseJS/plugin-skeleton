import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { waitForElement } from 'enzyme-async-helpers';

configure({ adapter: new Adapter() });
describe('test cases for web', () => {
	it('should skeleton in circle', async () => {
		const { Skeletons } = require('../index.tsx');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Skeletons type="Circle" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Skeletons);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.props().children.props.type).toBe('Circle');
	});
	it('should skeleton in rectangle', async () => {
		const { Skeletons } = require('../index.tsx');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Skeletons type="Rect" x={8} y={8} rx={8} ry={8} width={24} height={24} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Skeletons);
		expect(wrapper.props().children.props.type).toBe('Rect');
	});
	it('should skeleton in rectangle', async () => {
		const { Skeletons } = require('../index.tsx');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Skeletons type="Rect" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Skeletons);
		expect(wrapper.props().children.props.type).toBe('Rect');
	});
});

describe('test cases for android', () => {
	it('should skeleton in circle', async () => {
		const { Skeletons } = require('../index.android.tsx');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Skeletons type="Circle" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Skeletons);
		expect(wrapper.props().children.props.type).toBe('Circle');
	});
	it('should skeleton in rectangle', async () => {
		const { Skeletons } = require('../index.android.tsx');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Skeletons type="Rect" x={8} y={8} rx={8} ry={8} width={24} height={24} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Skeletons);
		expect(wrapper.props().children.props.type).toBe('Rect');
	});
	it('should skeleton in rectangle', async () => {
		const { Skeletons } = require('../index.android.tsx');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Skeletons type="Rect" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Skeletons);
		expect(wrapper.props().children.props.type).toBe('Rect');
	});
});

describe('test cases for Ios', () => {
	it('should skeleton in circle', async () => {
		const { Skeletons } = require('../index.ios.tsx');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Skeletons type="Circle" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Skeletons);
		expect(wrapper.props().children.props.type).toBe('Circle');
	});
	it('should skeleton in rectangle', async () => {
		const { Skeletons } = require('../index.ios.tsx');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Skeletons type="Rect" x={8} y={8} rx={8} ry={8} width={24} height={24} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Skeletons);
		expect(wrapper.props().children.props.type).toBe('Rect');
	});
	it('should skeleton in rectangle', async () => {
		const { Skeletons } = require('../index.ios.tsx');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Skeletons type="Rect" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Skeletons);
		expect(wrapper.props().children.props.type).toBe('Rect');
	});
});
