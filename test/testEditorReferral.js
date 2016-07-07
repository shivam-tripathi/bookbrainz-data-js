/*
 * Copyright (C) 2016  Max Prettyjohns
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const util = require('../util');
const Bookshelf = require('./bookshelf');
const EditorType= require('../index').EditorType;
const Editor = require('../index').Editor;
const EditorReferral = require('../index').EditorReferral;


const editorTypeAttribs = {
	id: 1,
	label: 'test_type'
};

const recruiterAttribs = {
	id: 1,
	name: 'alice',
	email: 'alice@test.org',
	password: 'test',
	typeId: 1
};

const editorAttribs = {
	id: 2,
	name: 'bob',
	email: 'bob@test.org',
	password: 'test',
	typeId: 1
};

describe('EditorReferral model', () => {
	beforeEach(() => {
		return new EditorType(editorTypeAttribs)
			.save(null, {method: 'insert'})
			.then(() =>
				new Editor(recruiterAttribs)
				.save(null, {method: 'insert'})
			)
			.then(() =>
				new Editor(editorAttribs)
				.save(null, {method: 'insert'})
			);
	})

	afterEach(() => {
		return util.truncateTables(Bookshelf, [
			'bookbrainz._editor_referral',
			'bookbrainz.editor_type',
			'bookbrainz.editor'
		]);
	});

	it('should return a JSON object with correct keys when saved', () => {
		const EditorReferralPromise = new EditorReferral({
			recruiterId: recruiterAttribs.id,
			editorId: editorAttribs.id
		})
			.save(null, {method: 'insert'})
			.then((model) => model.refresh())
			.then((referral) => referral.toJSON());

		return expect(EditorReferralPromise).to.eventually.have.all.keys([
			'id', 'recruiterId', 'editorId'
		]);
	});
});
