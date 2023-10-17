import type { Address } from 'viem'
import { ARB_ONE_CHAIN_ID, ETH_CHAIN_ID, OPTIMISM_CHAIN_ID } from './chain-ids'

export const OPTIMISM_SEPSP1_ADDRESS = '0x8C934b7dBc782568d14ceaBbEAeDF37cB6348615'

export const OPTIMISM_SEPSP2_ADDRESS = '0x26ee65874f5dbefa629eb103e7bbb2deaf4fb2c8'

export const MAINNET_SEPSP1_ADDRESS = '0x716fbc68e0c761684d9280484243ff094cc5ffab'

export const MAINNET_SEPSP2_ADDRESS = '0x593F39A4Ba26A9c8ed2128ac95D109E8e403C485'

export const ETH_TOKEN_ADDRESS = '0x0000000000000000000000000000000000000000'


export const DEFAULT_SWAP_TOKEN_LIST: { [chainId: number]: readonly Address[] } =
  {
    [ETH_CHAIN_ID]: [
      '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      '0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c',
    ],
    [ARB_ONE_CHAIN_ID]: [
      '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
      '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
      '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
      '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    ],
  } as const



  export const DEFAULT_STAKE_TOKEN_LIST: { [chainId: number]: readonly Address[] } =
  {
    [ETH_CHAIN_ID]: [
      '0xcafe001067cdef266afb7eb5a286dcfd277f3de5', //PSP
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', //WETH
      ETH_TOKEN_ADDRESS
    ],
    [OPTIMISM_CHAIN_ID]: [
      '0xd3594E879B358F430E20F82bea61e83562d49D48', //PSP
      '0x4200000000000000000000000000000000000006', //WETH
      ETH_TOKEN_ADDRESS
    ],
  } as const
