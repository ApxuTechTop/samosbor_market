namespace $.$$ {
	export class $apxutechtop_samosbor_market extends $.$apxutechtop_samosbor_market {
		@ $mol_mem
		trades_map(next?: {[id: string]: $apxutechtop_samosbor_market_trade}) {
			const all_data = $apxutechtop_samosbor_market_trade.all_data();
			const trades: {[id: string]: $apxutechtop_samosbor_market_trade_data} = {};
			for (const [id, data] of Object.entries(all_data)) {
				const trade = $apxutechtop_samosbor_market_trade.item(id);
				trades[id] = data;
				//trades.push()
			}
			return next ?? trades;
		}
		@ $mol_mem
		trades_list(next?: $apxutechtop_samosbor_market_trade[]) {
			const all_data = $apxutechtop_samosbor_market_trade.all_data();
			const trades: $apxutechtop_samosbor_market_trade[] = [];
			for (const [id, data] of Object.entries(all_data)) {
				console.log(id, data);
				const trade = $apxutechtop_samosbor_market_trade.item(id);
				trades.push(trade)
			}
			return next ?? trades;
		}
	}
}
