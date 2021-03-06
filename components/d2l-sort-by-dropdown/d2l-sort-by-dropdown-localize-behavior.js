import '@polymer/polymer/polymer-legacy.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.SortByDropdown = window.D2L.PolymerBehaviors.SortByDropdown || {};

/**
 * Localizes the sort-by-dropdown component.
 * @polymerBehavior D2L.PolymerBehaviors.SortByDropdown.LocalizeBehavior
 */
D2L.PolymerBehaviors.SortByDropdown.LocalizeBehaviorImpl = {
	properties: {
	/**
	 * Localization resources.
	 */
		resources: {
			value: function() {
				return {
					'ar': {
						sort: 'فرز',
						sortWithOption: 'فرز: {option}'
					},
					'en': {
						sort: 'Sort',
						sortWithOption: 'Sort: {option}'
					},
					'es': {
						sort: 'Orden',
						sortWithOption: 'Orden: {option}'
					},
					'fr': {
						sort: 'Trier',
						sortWithOption: 'Trier: {option}'
					},
					'ja': {
						sort: '並べ替え',
						sortWithOption: '並べ替え: {option}'
					},
					'ko': {
						sort: '정렬',
						sortWithOption: '정렬: {option}'
					},
					'nl': {
						sort: 'Sorteren',
						sortWithOption: 'Sorteren: {option}'
					},
					'pt': {
						sort: 'Classificar',
						sortWithOption: 'Classificar: {option}'
					},
					'sv': {
						sort: 'Sortera',
						sortWithOption: 'Sortera: {option}'
					},
					'tr': {
						sort: 'Sırala',
						sortWithOption: 'Sırala: {option}'
					},
					'zh': {
						sort: '排序',
						sortWithOption: '排序：{option}'
					},
					'zh-tw': {
						sort: '排序',
						sortWithOption: '排序：{option}'
					}
				};
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.SortByDropdown.LocalizeBehavior */
D2L.PolymerBehaviors.SortByDropdown.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.SortByDropdown.LocalizeBehaviorImpl
];
