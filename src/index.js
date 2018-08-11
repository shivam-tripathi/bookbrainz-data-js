/*
 * Copyright (C) 2015  Ben Ockmore
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

import * as util from './util'; // eslint-disable-line import/no-namespace

import Bookshelf from 'bookshelf';
import achievementType from './models/achievementType';
import achievementUnlock from './models/achievementUnlock';
import alias from './models/alias';
import aliasSet from './models/aliasSet';
import annotation from './models/annotation';
import area from './models/area';
import creator from './models/entities/creator';
import creatorData from './models/data/creatorData';
import creatorHeader from './models/headers/creatorHeader';
import creatorImport from './models/imports/creatorImport';
import creatorRevision from './models/revisions/creatorRevision';
import creatorType from './models/creatorType';
import disambiguation from './models/disambiguation';
import edition from './models/entities/edition';
import editionData from './models/data/editionData';
import editionFormat from './models/editionFormat';
import editionHeader from './models/headers/editionHeader';
import editionImport from './models/imports/editionImport';
import editionRevision from './models/revisions/editionRevision';
import editionStatus from './models/editionStatus';
import editor from './models/editor';
import editorEntityVisits from './models/editorEntityVisits';
import editorType from './models/editorType';
import entity from './models/entity';
import func from './func';
import gender from './models/gender';
import identifier from './models/identifier';
import identifierSet from './models/identifierSet';
import identifierType from './models/identifierType';
import knex from 'knex';
import language from './models/language';
import languageSet from './models/languageSet';
import note from './models/note';
import publication from './models/entities/publication';
import publicationData from './models/data/publicationData';
import publicationHeader from './models/headers/publicationHeader';
import publicationImport from './models/imports/publicationImport';
import publicationRevision from './models/revisions/publicationRevision';
import publicationType from './models/publicationType';
import publisher from './models/entities/publisher';
import publisherData from './models/data/publisherData';
import publisherHeader from './models/headers/publisherHeader';
import publisherImport from './models/imports/publisherImport';
import publisherRevision from './models/revisions/publisherRevision';
import publisherSet from './models/publisherSet';
import publisherType from './models/publisherType';
import relationship from './models/relationship';
import relationshipSet from './models/relationshipSet';
import relationshipType from './models/relationshipType';
import releaseEvent from './models/releaseEvent';
import releaseEventSet from './models/releaseEventSet';
import revision from './models/revision';
import titleType from './models/titleType';
import titleUnlock from './models/titleUnlock';
import work from './models/entities/work';
import workData from './models/data/workData';
import workHeader from './models/headers/workHeader';
import workImport from './models/imports/workImport';
import workRevision from './models/revisions/workRevision';
import workType from './models/workType';

/**
 * Initialize the database connection and models.
 * @param {Object} config - A knex.js configuration object.
 * @returns {Object} All data models.
 */
export default function init(config) {
	const bookshelf = Bookshelf(knex(config));
	bookshelf.plugin('registry');
	bookshelf.plugin('visibility');
	bookshelf.plugin('virtuals');

	// Initialize these here to set up dependencies
	const CreatorData = creatorData(bookshelf);
	const EditionData = editionData(bookshelf);
	const PublicationData = publicationData(bookshelf);
	const PublisherData = publisherData(bookshelf);
	const WorkData = workData(bookshelf);

	return {
		AchievementType: achievementType(bookshelf),
		AchievementUnlock: achievementUnlock(bookshelf),
		Alias: alias(bookshelf),
		AliasSet: aliasSet(bookshelf),
		Annotation: annotation(bookshelf),
		Area: area(bookshelf),
		Creator: creator(bookshelf),
		CreatorData,
		CreatorHeader: creatorHeader(bookshelf),
		CreatorImport: creatorImport(bookshelf),
		CreatorRevision: creatorRevision(bookshelf),
		CreatorType: creatorType(bookshelf),
		Disambiguation: disambiguation(bookshelf),
		Edition: edition(bookshelf),
		EditionData,
		EditionFormat: editionFormat(bookshelf),
		EditionHeader: editionHeader(bookshelf),
		EditionImport: editionImport(bookshelf),
		EditionRevision: editionRevision(bookshelf),
		EditionStatus: editionStatus(bookshelf),
		Editor: editor(bookshelf),
		EditorEntityVisits: editorEntityVisits(bookshelf),
		EditorType: editorType(bookshelf),
		Entity: entity(bookshelf),
		Gender: gender(bookshelf),
		Identifier: identifier(bookshelf),
		IdentifierSet: identifierSet(bookshelf),
		IdentifierType: identifierType(bookshelf),
		Language: language(bookshelf),
		LanguageSet: languageSet(bookshelf),
		Note: note(bookshelf),
		Publication: publication(bookshelf),
		PublicationData,
		PublicationHeader: publicationHeader(bookshelf),
		PublicationImport: publicationImport(bookshelf),
		PublicationRevision: publicationRevision(bookshelf),
		PublicationType: publicationType(bookshelf),
		Publisher: publisher(bookshelf),
		PublisherData,
		PublisherHeader: publisherHeader(bookshelf),
		PublisherImport: publisherImport(bookshelf),
		PublisherRevision: publisherRevision(bookshelf),
		PublisherSet: publisherSet(bookshelf),
		PublisherType: publisherType(bookshelf),
		Relationship: relationship(bookshelf),
		RelationshipSet: relationshipSet(bookshelf),
		RelationshipType: relationshipType(bookshelf),
		ReleaseEvent: releaseEvent(bookshelf),
		ReleaseEventSet: releaseEventSet(bookshelf),
		Revision: revision(bookshelf),
		TitleType: titleType(bookshelf),
		TitleUnlock: titleUnlock(bookshelf),
		Work: work(bookshelf),
		WorkData,
		WorkHeader: workHeader(bookshelf),
		WorkImport: workImport(bookshelf),
		WorkRevision: workRevision(bookshelf),
		WorkType: workType(bookshelf),
		bookshelf,
		func: func(),
		util
	};
}
