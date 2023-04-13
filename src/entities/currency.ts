import JSBI from 'jsbi'
import { ChainId } from '..'
import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'
import { CHAINS } from '../chains'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */

  //$ public static readonly KLC: Currency = new Currency(18, 'KLC', 'KalyCoin')

  public static readonly CURRENCY = {
    [ChainId.TESTNET]: new Currency(18, CHAINS[ChainId.TESTNET].symbol, CHAINS[ChainId.TESTNET].name),
    [ChainId.KALYCHAIN]: new Currency(18, CHAINS[ChainId.KALYCHAIN].symbol, CHAINS[ChainId.KALYCHAIN].name),
    [ChainId.WAGMI]: new Currency(18, CHAINS[ChainId.WAGMI].symbol, CHAINS[ChainId.WAGMI].name),
    [ChainId.COSTON]: new Currency(18, CHAINS[ChainId.COSTON].symbol, CHAINS[ChainId.COSTON].name),
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

//$ const KLC = Currency.KLC
const KLC = Currency.CURRENCY
export { KLC }
