import '@polymer/polymer/polymer-legacy.js';
import '../../components/d2l-search-facets/d2l-search-facets.js';
import '../../components/d2l-search-facets/d2l-search-facets-grouping.js';
import '../../components/d2l-search-facets/d2l-search-facets-option.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-demo-templated-search-facets">
	<template strip-whitespace="">
		<d2l-search-facets>
			<template items="[[searchFacets]]" is="dom-repeat">
				<d2l-search-facets-grouping value="[[item.value]]" text="[[item.name]]">
					<template items="[[item.options]]" is="dom-repeat" as="searchFacet">
						<d2l-search-facets-option value$="[[searchFacet.value]]" text$="[[searchFacet.name]]" count="[[searchFacet.count]]" checked="[[searchFacet.checked]]"></d2l-search-facets-option>
					</template>
				</d2l-search-facets-grouping>
			</template>
		</d2l-search-facets>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
/**
 * An example of templated search facets. The data can potentially be retrieved from an
 * external source, and given to the search-facets to handle.
**/
class TemplatedSearchFacetsDemo extends PolymerElement {
	static get is() { return 'd2l-demo-templated-search-facets'; }
	static get properties() {
		return {
			searchFacets: {
				type: Array,
				value: function() { return []; }
			}
		};
	}

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();
		this.searchFacets = [
			{
				name: 'My Status',
				value: 'status',
				options: [
					{ name: 'My Courses', value: 'my-courses', count: 21 },
					{ name: 'On My List', value: 'my-list', count: 1 },
					{ name: 'In Progress', value: 'in-progress', count: 1 },
					{ name: 'Complete', value: 'complete', count: 10 },
				],
			},
			{
				name: 'Rating',
				value: 'rating',
				options: [
					{ name: 'Excellent', value: 'excellent', count: 1000, checked: true },
					{ name: 'Good', value: 'good', count: 100 },
					{ name: 'Poor', value: 'poor', count: 10 },
				],
			},
			{
				name: 'Format',
				value: 'format',
				options: [
					{ name: 'Online', value: 'online', count: 1000 },
					{ name: 'In-Class', value: 'in-class', count: 1 },
				]
			},
		];
	}
}
customElements.define(TemplatedSearchFacetsDemo.is, TemplatedSearchFacetsDemo);
