export enum ChainId {
  TESTNET = 3889,
  KALYCHAIN = 3888,
  WAGMI = 11111,
  COSTON = 16
}

interface StakingContract {
  address: string;
  active: boolean;
  reward_token: string;
}

export interface Chain {
  id: string;
  name: string;
  chain_id?: number;
  mainnet: boolean;
  evm: boolean;
  kalyswap_is_live: boolean;
  tracked_by_debank: boolean;
  supported_by_gelato: boolean;
  rpc_uri: string;
  subgraph?: {
    exchange: string;
  }
  symbol: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  }
  blockExplorerUrls?: string[]
  kswap_symbol?: string;
  logo?: string;
  coingecko_id?: string;
  debank_kalyswap_id?: string;
  contracts?: {
    kswap: string;
    factory: string;
    router: string;
    wrapped_native_token: string;
    local_multisig?: string;
    community_treasury?: string;
    treasury_vester?: string;
    mini_chef?: string;
    timelock?: string;
    migrator?: string;
    airdrop?: string;
    foundation_multisig?: string;
    joint_multisig?: string;
    revenue_distributor?: string;
    governor?: string;
    fee_collector?: string;
    staking?: StakingContract[];
  }
}

export const ETHEREUM_MAINNET: Chain = {
  id: 'ethereum_mainnet',
  chain_id: 1,
  name: 'Ethereum',
  symbol: 'ETH',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/eth.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  coingecko_id: 'ethereum',
  nativeCurrency:{
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://etherscan.io'],
}

export const ARBITRUM_MAINNET: Chain = {
  id: 'arbitrum_mainnet',
  chain_id: 42161,
  name: 'Arbitrum',
  symbol: 'ARB',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/arb.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://arb1.arbitrum.io/rpc',
  coingecko_id: 'arbitrum-one',
  nativeCurrency:{
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://arbiscan.io'],
}

export const ARBITRUM_RINKEBY: Chain = {
  id: 'arbitrum_rinkeby',
  chain_id: 421611,
  name: 'Arbitrum Rinkbey',
  symbol: 'ARB',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/arb.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: true,
  rpc_uri: 'https://rinkeby.arbitrum.io/rpc',
  nativeCurrency:{
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://rinkeby-explorer.arbitrum.io'],
}

export const AURORA_MAINNET: Chain = {
  id: 'aurora_mainnet',
  chain_id: 1313161554,
  name: 'Aurora',
  symbol: 'AURORA',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/aurora.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://mainnet.aurora.dev',
  coingecko_id: 'aurora',
  nativeCurrency:{
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://aurorascan.dev'],
}

export const AURORA_TESTNET: Chain = {
  id: 'aurora_testnet',
  chain_id: 1313161555,
  name: 'Aurora Testnet',
  symbol: 'AURORA',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/aurora.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://testnet.aurora.dev',
  nativeCurrency:{
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://testnet.aurorascan.dev'],
}

export const KALYCHAIN_MAINNET: Chain = {
  id: 'kalychain_mainnet',
  chain_id: 3888,
  name: 'Kalychain',
  symbol: 'KLC',
  kswap_symbol: 'KSWAP',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/kaly.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: true,
  rpc_uri: 'https://rpc.kalychain.io/rpc',
  contracts: {
    kswap: '0x60781C2586D68229fde47564546784ab3fACA982',
    factory: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
    router: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
    wrapped_native_token: '0x069255299Bb729399f3CECaBdc73d15d3D10a2A3',
    local_multisig: '0xCa4a8fC696ADAE8edC042cB9E32Cd7F0A28EBdf0',
    community_treasury: '0x650f5865541f6D68BdDFE977dB933C293EA72358',
    treasury_vester: '0x6747AC215dAFfeE03a42F49FebB6ab448E12acEe',
    mini_chef: '0x1f806f7C8dED893fd3caE279191ad7Aa3798E928',
    airdrop: '0x0C58C2041da4CfCcF5818Bbe3b66DBC23B3902d9',
    timelock: '0xEB5c91bE6Dbfd30cf616127C2EA823C64e4b1ff8',
    governor: '0xb0Ff2b1047d9E8d294c2eD798faE3fA817F43Ee1',
    migrator: '0x4b23Aa72A1214d0E4fd3f2c8Da7C6ba660F7483C',
    staking: [
      {
        address: '0x88afdaE1a9F58Da3E68584421937E5F564A0135b',
        active: true,
        reward_token: '0x60781C2586D68229fde47564546784ab3fACA982',
      }
    ]
  },
  nativeCurrency:{
    name: 'KalyCoin',
    symbol: 'KLC',
    decimals: 18,
  },
  blockExplorerUrls: ['https://kalyscan.io'],
}

export const KALYCHAIN_TESTNET: Chain = {
  id: 'kalychain_testnet',
  chain_id: 3889,
  name: 'Kalychain TESTNET',
  symbol: 'KLC',
  kswap_symbol: 'testnetKSWAP',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/kaly.png',
  kalyswap_is_live: true,
  tracked_by_debank: false,
  supported_by_gelato: true,
  rpc_uri: 'https://testnetrpc.kalychain.io/rpc',
  contracts: {
    kswap: '0xaE6Ed167e3995f23C83aF4B33ca36f0cFA548Ec8',
    factory: '0x775329A510c0b45D66F2358d44B929d41A253064',
    router: '0x6318EcDbae6B469D39C38949eDC671f4bA8A6172',
    wrapped_native_token: '0x069255299Bb729399f3CECaBdc73d15d3D10a2A3',
    timelock: "0xf90F0Bd56558Ac12F7FC285571D38181d2feD69b",
    governor: '0xf00A4b733093C21b0892eae0578F0a926f9370b3',
    mini_chef: "0xe6828eF9923943899199dc4464B791499025d5aC",
    local_multisig: '0xCa4a8fC696ADAE8edC042cB9E32Cd7F0A28EBdf0',
    community_treasury: "0x6196E2Cd450e2747f94F24311D17eE1bEC8e8D8b",
    airdrop: "0xB2e110C568C73176B8910fa8D0A969B9c0Bfd66a",
    treasury_vester: "0x92AAFDE783461a80bF5dcE4b8C4644C2eb86CEde",
    staking: [
      {
        address: "0xeDaad0c01F58318Baf474e16e68EAD83B60F9e59",
        active: true,
        reward_token: "0xaE6Ed167e3995f23C83aF4B33ca36f0cFA548Ec8"
      }
    ]
  },
  nativeCurrency:{
    name: 'KalyCoin',
    symbol: 'KLC',
    decimals: 18,
  },
  blockExplorerUrls: ['https://testnet.kalyscan.io'],
}

export const BOBA_MAINNET: Chain = {
  id: 'boba_mainnet',
  chain_id: 288,
  name: 'Boba',
  symbol: 'BOBA',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/boba.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://mainnet.boba.network',
  coingecko_id: 'boba',
  nativeCurrency:{
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://blockexplorer.boba.network'],
}

export const BITTORRENT_MAINNET: Chain = {
  id: 'bittorrent_mainnet',
  chain_id: 199,
  name: 'BitTorrent',
  symbol: 'BTT',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/btt.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.bt.io',
  nativeCurrency:{
    name: 'BitTorrent',
    symbol: 'BTT',
    decimals: 18,
  },
  blockExplorerUrls: ['https://scan.bt.io'],
}

export const BITTORRENT_TESTNET: Chain = {
  id: 'bittorrent_testnet',
  chain_id: 1028,
  name: 'BitTorrent Testnet',
  symbol: 'BTT',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/btt.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://test-rpc.bittorrentchain.io',
  nativeCurrency:{
    name: 'BitTorrent',
    symbol: 'BTT',
    decimals: 18,
  },
  blockExplorerUrls: ['https://scan.bittorrentchain.io'],
}

export const BSC_MAINNET: Chain = {
  id: 'bsc_mainnet',
  chain_id: 56,
  name: 'Binance',
  symbol: 'BSC',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/bsc.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://bsc-dataseed.binance.org',
  coingecko_id: 'binance-smart-chain',
  nativeCurrency:{
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
  blockExplorerUrls: ['https://bscscan.com'],

}

export const BSC_TESTNET: Chain = {
  id: 'bsc_testnet',
  chain_id: 97,
  name: 'Binance Testnet',
  symbol: 'BSC',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/bsc.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: true,
  rpc_uri: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  nativeCurrency:{
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
  blockExplorerUrls: ['https://testnet.bscscan.com'],
}

export const CELO_MAINNET: Chain = {
  id: 'celo_mainnet',
  chain_id: 42220,
  name: 'Celo',
  symbol: 'CELO',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/celo.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://forno.celo.org',
  coingecko_id: 'celo',
  nativeCurrency:{
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
  },
  blockExplorerUrls: ['https://explorer.celo.org'],
}

export const CELO_ALFAJORES_TESTNET: Chain = {
  id: 'celo_alfadores_testnet',
  chain_id: 44787,
  name: 'Celo Alfajores',
  symbol: 'CELO',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/celo.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://alfajores-forno.celo-testnet.org',
  nativeCurrency:{
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
  },
  blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org'],
}

export const CELO_BAKLAVA_TESTNET: Chain = {
  id: 'celo_baklava_testnet',
  chain_id: 62320,
  name: 'Celo Baklava',
  symbol: 'CELO',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/celo.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://baklava-forno.celo-testnet.org',
  nativeCurrency:{
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
  },
  blockExplorerUrls: ['https://baklava-blockscout.celo-testnet.org'],
}

export const CRONOS_MAINNET: Chain = {
  id: 'cronos_mainnet',
  chain_id: 25,
  name: 'Cronos',
  symbol: 'CRO',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/cro.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://evm-cronos.crypto.org',
  coingecko_id: 'cronos',
  nativeCurrency:{
    name: 'Cronos',
    symbol: 'CRO',
    decimals: 18,
  },
  blockExplorerUrls: ['https://cronos.org/explorer'],
}

export const CRONOS_TESTNET: Chain = {
  id: 'cronos_testnet',
  chain_id: 338,
  name: 'Cronos',
  symbol: 'CRO',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/cro.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://cronos-testnet-3.crypto.org:8545',
  nativeCurrency:{
    name: 'Cronos',
    symbol: 'CRO',
    decimals: 18,
  },
  blockExplorerUrls: ['https://cronos.org/explorer/testnet3'],

}

export const COSTON_TESTNET: Chain = {
  id: 'coston_testnet',
  chain_id: 16,
  name: 'Coston',
  symbol: 'cFLR',
  kswap_symbol: 'costonKSWAP',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/flare.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://coston-api.flare.network/ext/bc/C/rpc',
  nativeCurrency:{
    name: 'CostonFlare',
    symbol: 'CFLR',
    decimals: 18,
  },
  blockExplorerUrls: ['https://coston-explorer.flare.network']
}

export const EVMOS_TESTNET: Chain = {
  id: 'evmos_testnet',
  chain_id: 9000,
  name: 'EVMOS Testnet',
  symbol: 'tEVMOS',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/evmos.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://eth.bd.evmos.dev:8545',
  nativeCurrency:{
    name: 'EVMOS',
    symbol: 'EVMOS',
    decimals: 18,
  },
  blockExplorerUrls: ['https://evm.evmos.dev'],
}

export const EVMOS_MAINNET: Chain = {
  id: 'evmos_mainnet',
  chain_id: 9001,
  name: 'EVMOS',
  symbol: 'EVMOS',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/evmos.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://eth.bd.evmos.org:8545',
  nativeCurrency:{
    name: 'EVMOS',
    symbol: 'EVMOS',
    decimals: 18,
  },
  blockExplorerUrls: ['https://evm.evmos.org'],
}

export const FANTOM_MAINNET: Chain = {
  id: 'fantom_mainnet',
  chain_id: 250,
  name: 'Fantom',
  symbol: 'FTM',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/ftm.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://rpc.ftm.tools',
  coingecko_id: 'fantom',
  nativeCurrency:{
    name: 'Fantom',
    symbol: 'FTM',
    decimals: 18,
  },
  blockExplorerUrls: ['https://ftmscan.com'],
}

export const FANTOM_TESTNET: Chain = {
  id: 'fantom_testnet',
  chain_id: 4002,
  name: 'Fantom',
  symbol: 'FTM',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/ftm.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: true,
  rpc_uri: 'https://rpc.testnet.fantom.network',
  nativeCurrency:{
    name: 'Fantom',
    symbol: 'FTM',
    decimals: 18,
  },
  blockExplorerUrls: ['https://testnet.ftmscan.com'],
}

export const FUSE_MAINNET: Chain = {
  id: 'fuse_mainnet',
  chain_id: 122,
  name: 'Fuse',
  symbol: 'FUSE',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/fuse.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.fuse.io',
  coingecko_id: 'fuse',
  nativeCurrency:{
    name: 'Fuse',
    symbol: 'FUSE',
    decimals: 18,
  },
  blockExplorerUrls: ['http://explorer.fuse.io'],
}

export const FUSE_TESTNET: Chain = {
  id: 'fuse_testnet',
  chain_id: 123,
  name: 'Fuse',
  symbol: 'FUSE',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/fuse.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.fusespark.io',
  nativeCurrency:{
    name: 'Fuse',
    symbol: 'FUSE',
    decimals: 18,
  },
  blockExplorerUrls: ['https://explorer.fusespark.io'],
}

export const HARMONY_MAINNET: Chain = {
  id: 'harmony_mainnet',
  chain_id: 1666600000,
  name: 'Harmony',
  symbol: 'ONE',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/one.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://api.harmony.one',
  coingecko_id: 'harmony-shard-0',
  nativeCurrency:{
    name: 'Harmony',
    symbol: 'ONE',
    decimals: 18,
  },
  blockExplorerUrls: ['https://explorer.harmony.one'],
}

export const HARMONY_TESTNET: Chain = {
  id: 'harmony_testnet',
  chain_id: 1666700000,
  name: 'Harmony Testnet',
  symbol: 'ONE',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/one.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://api.s0.b.hmny.io',
  nativeCurrency:{
    name: 'Harmony',
    symbol: 'ONE',
    decimals: 18,
  },
  blockExplorerUrls: ['https://explorer.pops.one'],
}

export const HECO_MAINNET: Chain = {
  id: 'heco_mainnet',
  chain_id: 128,
  name: 'Heco',
  symbol: 'HECO',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/heco.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://http-mainnet.hecochain.com',
  coingecko_id: 'huobi-token',
  nativeCurrency:{
    name: 'Heco',
    symbol: 'HECO',
    decimals: 18,
  },
  blockExplorerUrls: ['https://hecoinfo.com'],
}

export const HECO_TESTNET: Chain = {
  id: 'heco_testnet',
  chain_id: 256,
  name: 'Heco',
  symbol: 'HECO',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/heco.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://http-testnet.hecochain.com',
  nativeCurrency:{
    name: 'Heco',
    symbol: 'HECO',
    decimals: 18,
  },
  blockExplorerUrls: ['https://scan-testnet.hecochain.com'],
}

export const KLAYTN_MAINNET: Chain = {
  id: 'klaytn_mainnet',
  chain_id: 8217,
  name: 'Klaytn',
  symbol: 'KLAY',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/klay.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://kaikas.cypress.klaytn.net:8651',
  coingecko_id: 'klay-token',
  nativeCurrency:{
    name: 'Klaytn',
    symbol: 'KLAY',
    decimals: 18,
  },
  blockExplorerUrls: ['https://scope.klaytn.com'],
}

export const KLAYTN_BAOBAB: Chain = {
  id: 'klaytn_baobab',
  chain_id: 1001,
  name: 'Klaytn Baobab',
  symbol: 'KLAY',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/klay.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://api.baobab.klaytn.net:8651',
  nativeCurrency:{
    name: 'Klaytn',
    symbol: 'KLAY',
    decimals: 18,
  },
  blockExplorerUrls: ['https://baobab.scope.klaytn.com'],
}

export const METIS_MAINNET: Chain = {
  id: 'metis_mainnet',
  chain_id: 1088,
  name: 'Metis',
  symbol: 'METIS',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/metis.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://andromeda.metis.io/?owner=1088',
  coingecko_id: 'metis-andromeda',
  nativeCurrency:{
    name: 'Metis',
    symbol: 'METIS',
    decimals: 18,
  },
  blockExplorerUrls: ['https://andromeda-explorer.metis.io'],
}

export const METIS_RINKEBY: Chain = {
  id: 'metis_rinkeby',
  chain_id: 588,
  name: 'Metis Rinkeby',
  symbol: 'METIS',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/metis.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://stardust.metis.io/?owner=588',
  nativeCurrency:{
    name: 'Metis',
    symbol: 'tMETIS',
    decimals: 18,
  },
  blockExplorerUrls: ['https://stardust-explorer.metis.io'],
}

export const MOONRIVER_MAINNET: Chain = {
  id: 'moonriver_mainnet',
  chain_id: 1285,
  name: 'Moonriver',
  symbol: 'MOVR',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/movr.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.moonriver.moonbeam.network',
  coingecko_id: 'moonriver',
  nativeCurrency:{
    name: 'Moonriver',
    symbol: 'MOVR',
    decimals: 18,
  },
  blockExplorerUrls: ['https://moonriver.moonscan.io'],
}

export const MOONBEAM_MAINNET: Chain = {
  id: 'moonbeam_mainnet',
  chain_id: 1284,
  name: 'Moonbeam',
  symbol: 'MOBM',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/mobm.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.api.moonbeam.network',
  coingecko_id: 'moonbeam',
  nativeCurrency:{
    name: 'Moonbeam',
    symbol: 'GLMR',
    decimals: 18,
  },
  blockExplorerUrls: ['https://moonscan.io'],
}

export const MOONBEAM_MOONBASE: Chain = {
  id: 'moonbeam_moonbase',
  chain_id: 1287,
  name: 'Moonbase',
  symbol: 'MOONBASE',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/mobm.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.api.moonbase.moonbeam.network',
  nativeCurrency:{
    name: 'Moonbase',
    symbol: 'DEV',
    decimals: 18,
  },
  blockExplorerUrls: ['https://moonbase.moonscan.io'],
}

export const NEAR_MAINNET: Chain = {
  id: 'near_mainnet',
  chain_id: 329847900, // NEAR acutally doesn't have this concept. So this is our naming convention for non EVM chains without Chain IDs
  name: 'Near',
  symbol: `NEAR`, 
  mainnet: true,
  evm: false,
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.mainnet.near.org',
  nativeCurrency: {
    name: 'Near',
    symbol: "NEAR",
    decimals: 18,
  }
}

export const NEAR_TESTNET: Chain = {
  id: 'near_testnet',
  chain_id: 329847901, // NEAR acutally doesn't have this concept. So this is our naming convention for non EVM chains without Chain IDs
  name: 'Near',
  symbol: `NEAR`, 
  mainnet: false,
  evm: false,
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.testnet.near.org',
  nativeCurrency: {
    name: 'Near',
    symbol: "NEAR",
    decimals: 18,
  }
}

export const OEC_MAINNET: Chain = {
  id: 'oec_mainnet',
  chain_id: 66,
  name: 'OEC',
  symbol: 'OKT',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/okt.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://exchainrpc.okex.org',
  coingecko_id: 'okex-chain',
  nativeCurrency:{
    name: 'OEC',
    symbol: 'OKT',
    decimals: 18,
  },
  blockExplorerUrls: ['https://www.oklink.com/okexchain'],
}

export const OEC_TESTNET: Chain = {
  id: 'oec_testnet',
  chain_id: 65,
  name: 'OEC Testnet',
  symbol: 'OKT',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/okt.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://exchaintestrpc.okex.org',
  nativeCurrency:{
    name: 'OEC',
    symbol: 'OKT',
    decimals: 18,
  },
  blockExplorerUrls: ['https://www.oklink.com/oec-test'],
}

export const OP_MAINNET: Chain = {
  id: 'op_mainnet',
  chain_id: 10,
  name: 'Optimism',
  symbol: 'OP',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/op.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://mainnet.optimism.io',
  coingecko_id: 'optimistic-ethereum',
  nativeCurrency:{
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://optimistic.etherscan.io'],
}

export const OP_KOVAN: Chain = {
  id: 'op_kovan',
  chain_id: 69,
  name: 'Optimism Kovan',
  symbol: 'OP',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/op.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://kovan.optimism.io',
  nativeCurrency:{
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://kovan-optimistic.etherscan.io'],
}

export const POLYGON_MAINNET: Chain = {
  id: 'polygon_mainnet',
  chain_id: 137,
  name: 'Polygon',
  symbol: 'MATIC',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/matic.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://polygon-rpc.com',
  coingecko_id: 'polygon-pos',
  nativeCurrency:{
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18,
  },
  blockExplorerUrls: ['https://polygonscan.com'],
}

export const POLYGON_MUMBAI: Chain = {
  id: 'polygon_mumbai',
  chain_id: 80001,
  name: 'Polygon Mumbai',
  symbol: 'MATIC',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/matic.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: true,
  rpc_uri: 'https://matic-mumbai.chainstacklabs.com',
  nativeCurrency:{
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18,
  },
  blockExplorerUrls: ['https://mumbai.polygonscan.com'],
}

export const SONGBIRD_MAINNET: Chain = {
  id: 'songbird_mainnet',
  chain_id: 19,
  name: 'Songbird',
  symbol: 'SGB',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/sgb.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://sgb.ftso.com.au/ext/bc/C/rpc',
  nativeCurrency:{
    name: 'Songbird',
    symbol: 'SGB',
    decimals: 18,
  },
  blockExplorerUrls: ['https://songbird-explorer.flare.network'],
}

export const WAGMI_TESTNET_SUBNET: Chain = {
  id: 'wagmi_testnet_subnet',
  chain_id: 11111,
  name: 'Wagmi',
  symbol: 'WGMI',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/wgmi.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://subnets.avax.network/wagmi/wagmi-chain-testnet/rpc',
  nativeCurrency:{
    name: 'Wagmi',
    symbol: 'WGMI',
    decimals: 18,
  },
  blockExplorerUrls: ['https://subnets.avax.network/wagmi/wagmi-chain-testnet/explorer'],
}

export const XDAI_MAINNET: Chain = {
  id: 'xdai_mainnet',
  chain_id: 100,
  name: 'Gnosis',
  symbol: 'XDAI',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/xdai.png',
  kalyswap_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.xdaichain.com',
  coingecko_id: 'xdai',
  nativeCurrency:{
    name: 'Gnosis',
    symbol: 'xDAI',
    decimals: 18,
  },
  blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
}

export const EWC_MAINNET: Chain = {
  id: 'ewc_mainnet',
  chain_id: 246,
  name: 'Energy Web Chain',
  symbol: 'EWT',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/ewc.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.energyweb.org',
  nativeCurrency:{
    name: 'Energy Web Token',
    symbol: 'EWT',
    decimals: 18,
  },
  blockExplorerUrls: ['http://explorer.energyweb.org'],
}

export const EWC_TESTNET: Chain = {
  id: 'ewc_testnet',
  chain_id: 73799,
  name: 'Volta',
  symbol: 'VT',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/ewc.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://volta-rpc.energyweb.org',
  nativeCurrency:{
    name: 'Volta',
    symbol: 'VT',
    decimals: 18,
  },
  blockExplorerUrls: ['http://volta-aexplorer.energyweb.org'],
}

export const IOTEX_MAINNET: Chain = {
  id: 'iotex_mainnet',
  chain_id: 4689,
  name: 'IoTex Mainnet',
  symbol: 'IOTX',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/iotx.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://babel-api.mainnet.iotex.io',
  coingecko_id: 'iotex',
  nativeCurrency:{
    name: 'IoTex',
    symbol: 'IOTX',
    decimals: 18,
  },
  blockExplorerUrls: ['https://iotexscan.io'],
}

export const IOTEX_TESTNET: Chain = {
  id: 'iotex_testnet',
  chain_id: 4690,
  name: 'IoTex Testnet',
  symbol: 'IOTX',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/iotx.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://babel-api.testnet.iotex.io',
  nativeCurrency:{
    name: 'IoTex',
    symbol: 'IOTX',
    decimals: 18,
  },
  blockExplorerUrls: ['https://testnet.iotexscan.io'],
}

export const ASTAR_MAINNET: Chain = {
  id: 'astar_mainnet',
  chain_id: 592,
  name: 'Astar Network',
  symbol: 'ASTR',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/astr.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://astar.api.onfinality.io/public',
  nativeCurrency:{
    name: 'Astar',
    symbol: 'ASTL',
    decimals: 18,
  },
  blockExplorerUrls: ['https://blockscout.com/astar'],
}

export const SHIDEN_MAINNET: Chain = {
  id: 'astar_shiden_testnet',
  chain_id: 336,
  name: 'Shiden Network',
  symbol: 'SDN',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/astr.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://shiden.api.onfinality.io/public',
  nativeCurrency:{
    name: 'Shiden',
    symbol: 'SDN',
    decimals: 18,
  },
  blockExplorerUrls: ['https://blockscout.com/shiden'],
}

export const SHIBUYA_TESTNET: Chain = {
  id: 'astar_shibuya_testnet',
  chain_id: 81,
  name: 'Shibuya Network',
  symbol: 'SBY',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/astr.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://rpc.shibuya.astar.network:8545',
  nativeCurrency:{
    name: 'Shibuya',
    symbol: 'SBY',
    decimals: 18,
  },
  blockExplorerUrls: ['https://blockscout.com/shibuya'],
}

export const TELOS_MAINNET: Chain = {
  id: 'telos_mainnet',
  chain_id: 40,
  name: 'Telos',
  symbol: 'TLOS',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/telos.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://mainnet.telos.net/evm',
  coingecko_id: 'telos',
  nativeCurrency:{
    name: 'TELOS',
    symbol: 'TLOS',
    decimals: 18,
  },
  blockExplorerUrls: ['https://www.teloscan.io'],
}

export const TELOS_TESTNET: Chain = {
  id: 'telos_testnet',
  chain_id: 41,
  name: 'Telos Testnet',
  symbol: 'TLOS',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/telos.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://testnet.telos.net/evm',
  nativeCurrency:{
    name: 'TELOS',
    symbol: 'TLOS',
    decimals: 18,
  },
  blockExplorerUrls: ['https://testnet.telos.net/v2/explore'],
}

export const OASIS_MAINNET: Chain = {
  id: 'oasis_mainnet',
  chain_id: 42262,
  name: 'Oasis Emerald',
  symbol: 'ROSE',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/oasis.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://emerald.oasis.dev',
  coingecko_id: 'oasis',
  nativeCurrency:{
    name: 'Oasis Network',
    symbol: 'ROSE',
    decimals: 18,
  },
  blockExplorerUrls: ['https://explorer.emerald.oasis.dev'],
}

export const OASIS_TESTNET: Chain = {
  id: 'oasis_testnet',
  chain_id: 42261,
  name: 'Oasis Emerald Testnet',
  symbol: 'ROSE',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/oasis.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://testnet.emerald.oasis.dev',
  nativeCurrency:{
    name: 'Oasis Network',
    symbol: 'ROSE',
    decimals: 18,
  },
  blockExplorerUrls: ['https://testnet.explorer.emerald.oasis.dev'],
}

export const GODWOKEN_MAINNET: Chain = {
  id: 'godwoken_mainnet',
  chain_id: 71394,
  name: 'Godwoken Testnet',
  symbol: 'CKB',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/godwoken.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://mainnet.godwoken.io/rpc/eth-wallet',
  nativeCurrency:{
    name: 'Nervos Network',
    symbol: 'CKB',
    decimals: 18,
  },
  blockExplorerUrls: ['https://gwscan.com'],
}

export const GODWOKEN_TESTNET: Chain = {
  id: 'godwoken_mainnet',
  chain_id: 71393,
  name: 'Godwoken Testnet',
  symbol: 'CKB',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/kalycoinproject/sdk/master/src/images/chains/godwoken.png',
  kalyswap_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://godwoken-testnet-web3-v1-rpc.ckbapp.dev/',
  nativeCurrency:{
    name: 'Nervos Network',
    symbol: 'CKB',
    decimals: 18,
  },
  blockExplorerUrls: ['https://aggron.gwscan.com/en-US'],
}

export const CHAINS: { [chainId in ChainId ]: Chain } = {
  [ChainId.TESTNET]: KALYCHAIN_TESTNET,
  [ChainId.KALYCHAIN]: KALYCHAIN_MAINNET,
  [ChainId.WAGMI]: WAGMI_TESTNET_SUBNET,
  [ChainId.COSTON]: COSTON_TESTNET,
}

export const ALL_CHAINS: Chain[] = [
  ETHEREUM_MAINNET,
  ARBITRUM_MAINNET,
  ARBITRUM_RINKEBY,
  AURORA_MAINNET,
  AURORA_TESTNET,
  KALYCHAIN_MAINNET,
  KALYCHAIN_TESTNET,
  BOBA_MAINNET,
  BITTORRENT_MAINNET,
  BSC_MAINNET,
  BSC_TESTNET,
  CELO_MAINNET,
  CELO_ALFAJORES_TESTNET,
  CELO_BAKLAVA_TESTNET,
  COSTON_TESTNET,
  CRONOS_MAINNET,
  CRONOS_TESTNET,
  EVMOS_MAINNET,
  EVMOS_TESTNET,
  FANTOM_MAINNET,
  FANTOM_TESTNET,
  FUSE_MAINNET,
  FUSE_TESTNET,
  HARMONY_MAINNET,
  HARMONY_TESTNET,
  HECO_MAINNET,
  HECO_TESTNET,
  KLAYTN_MAINNET,
  KLAYTN_BAOBAB,
  METIS_MAINNET,
  METIS_RINKEBY,
  MOONRIVER_MAINNET,
  MOONBEAM_MAINNET,
  MOONBEAM_MOONBASE,
  OEC_MAINNET,
  OEC_TESTNET,
  OP_MAINNET,
  OP_KOVAN,
  POLYGON_MAINNET,
  POLYGON_MUMBAI,
  SONGBIRD_MAINNET,
  WAGMI_TESTNET_SUBNET,
  XDAI_MAINNET,
  EWC_MAINNET,
  EWC_TESTNET,
  IOTEX_MAINNET,
  IOTEX_TESTNET,
  ASTAR_MAINNET,
  SHIDEN_MAINNET,
  SHIBUYA_TESTNET,
  TELOS_MAINNET,
  TELOS_TESTNET,
  OASIS_MAINNET,
  OASIS_TESTNET,
  GODWOKEN_MAINNET,
  GODWOKEN_TESTNET
]
