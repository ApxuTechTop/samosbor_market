namespace $.$$ {
	export type $apxutechtop_samosbor_market_trade_data = {
		user: string,
		item: {id: string},
		count: number,
		cost: {
			count: number,
			talons: number,
		},
		delivery: string,
		negotiable?: boolean,
	}
	export class $apxutechtop_samosbor_market_trade extends $.$apxutechtop_samosbor_market_trade {
		@ $mol_mem
		static all_data() {
			return $mol_fetch.json( 'apxutechtop/samosbor/market/trade/trades_data.json' ) as { [ id : string ] : $apxutechtop_samosbor_market_trade_data }
		}
		@ $mol_mem_key
		static data(id: string) {
			return this.all_data()[id];
		}
		@ $mol_mem_key
		static item(id: string) {
			const trade = new $apxutechtop_samosbor_market_trade();
			const data = this.data(id);
			trade.id(id);
			trade.user(data.user);
			const item = $apxutechtop_samosbor_market_item.item(data.item.id);
			trade.item(item);
			trade.count(data.count);
			trade.cost(data.cost);
			trade.negotiable(data.negotiable);
			return trade
		}
		@ $mol_mem
		data(next?: $apxutechtop_samosbor_market_trade_data) {
			return next ?? $apxutechtop_samosbor_market_trade.data(this.id());
		}
		@ $mol_mem
		id(next?: string) {
			return next ?? "";
		}
		@ $mol_mem
		count(next?: number) {
			return next ?? 1;
		}
		@ $mol_mem
		user(next?: string) {
			return next ?? "";
		}
		@ $mol_mem
		item(next?: $apxutechtop_samosbor_market_item) {
			return next ?? new $apxutechtop_samosbor_market_item();
		}
		@ $mol_mem
		cost(next?: {count: number, talons: number}) {
			return next ?? {count: 1, talons: 1};
		}
		@ $mol_mem
		negotiable(next?: boolean) {
			return next ?? false;
		}
		@ $mol_mem
		item_name() {
			return this.item().name();
		}
		@ $mol_mem
		item_uri() {
			return `/apxutechtop/samosbor/market/item/thumbs/${this.item().id()}.webp`;
		}
		@ $mol_mem
		user_name() {
			return this.user();
		}

		@ $mol_mem
		cost_count() {
			return this.cost().count;
		}
		@ $mol_mem
		cost_talons() {
			return this.cost().talons;
		}
	}
}

