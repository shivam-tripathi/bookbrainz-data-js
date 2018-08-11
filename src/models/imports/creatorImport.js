/*
 * Copyright (C) 2018 Shivam Tripathi
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

export default function creator(bookshelf) {
	const CreatorData = bookshelf.model('CreatorData');

	const CreatorImport = CreatorData.extend({
		defaultAlias() {
			return this.belongsTo('Alias', 'default_alias_id');
		},
		idAttribute: 'import_id',
		tableName: 'bookbrainz.creator_import'
	});

	return bookshelf.model('CreatorImport', CreatorImport);
}
