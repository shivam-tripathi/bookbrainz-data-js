/*
 * Copyright (C) 2016  Sean Burke
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

import {camelToSnake, snakeToCamel} from '../util';


export default function releaseEventSet(bookshelf) {
	const ReleaseEventSet = bookshelf.Model.extend({
		format: camelToSnake,
		idAttribute: 'id',
		items() {
			return this.belongsToMany(
				'ReleaseEvent', 'bookbrainz.release_event_set__release_event',
				'set_id', 'release_event_id'
			);
		},
		parse: snakeToCamel,
		releaseEvents() {
			return this.belongsToMany(
				'ReleaseEvent', 'bookbrainz.release_event_set__release_event',
				'set_id', 'release_event_id'
			);
		},
		tableName: 'bookbrainz.release_event_set'
	});

	return bookshelf.model('ReleaseEventSet', ReleaseEventSet);
}
