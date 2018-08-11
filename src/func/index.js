import * as alias from './alias';
import * as identifier from './identifier';
import * as imports from './import';
import * as relationship from './relationship';
import * as set from './set';


export default function init() {
	return {
		alias,
		identifier,
		imports,
		relationship,
		set
	};
}
