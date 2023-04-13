import JSBI from 'jsbi'
import { ChainId, CHAINS } from './chains'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.TESTNET]: CHAINS[ChainId.TESTNET].contracts!.factory,
  [ChainId.KALYCHAIN]: CHAINS[ChainId.KALYCHAIN].contracts!.factory,
  [ChainId.WAGMI]: CHAINS[ChainId.WAGMI].contracts!.factory,
  [ChainId.COSTON]: CHAINS[ChainId.COSTON].contracts!.factory
}

export const INIT_CODE_HASH = '0xb4477c0822b078ccc6726f90d090b7198664538df74d6ef696bd61c4a5843b95'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
