namespace $ {
	
	export type $apxutechtop_samosbor_market_item_data = {
		tags: [TagT],
		description?: string,
		name: {[lang: string]: string},
	}
	export class $apxutechtop_samosbor_market_item extends $mol_object {
		@ $mol_mem
		static data() {
			return $mol_fetch.json( 'apxutechtop/samosbor/market/item/item_data.json' ) as { [ id : string ] : $apxutechtop_samosbor_market_item_data }
		}
		@ $mol_mem
		static all() {
			return Object.keys( this.data() ).map( id => this.item( id ) )
		}
		@ $mol_mem_key
		static item( id : string ) {
			const next = new this
			next.id = $mol_const( id )
			return next
		}
		id() {
			return 'smth';
		}
		@ $mol_mem
		name() {
			return this.data().name[$mol_locale.lang()];
		}
		@ $mol_mem
		data(next?: $apxutechtop_samosbor_market_item_data) {
			return next ?? $apxutechtop_samosbor_market_item.data()[ this.id() ]
		}
		tags() {
			return new Set(this.data().tags);
		}
		description() {
			return this.data().description ?? (this.id() + "_description");
		}
		// create({id, tags, description}: {id: string, tags: Set<Tag>, description?: string}) {
		// 	this.items.set(id, new Item(id, tags, description ?? (id + "_description")));
		// }
	}
	export namespace $apxutechtop_samosbor_market_item {
		export enum Tag {
			Blueprint = "blueprint",
			Manual = "manual",
		}
	}
	type ItemT = $apxutechtop_samosbor_market_item;
	type TagT = $apxutechtop_samosbor_market_item.Tag;
	const Tag = $apxutechtop_samosbor_market_item.Tag
}
