/**
 * Basic type
 */
let car = 'Toyoto'
let bike: string
bike = 'Asama'

let isLoading:boolean = false 

// declare without defining it 
let body = undefined 
let footer = null 

let person: any // can be of any type 


/**
 * Object 
 */

// make sure to define the attributes beforehand 
let house: {
    address: string , 
    owner: string, 
    color?: string, // this operators means it can be either string or undefined
} = {
    address: '', 
    owner: ''
}
house.address = 'Saigon'

/**
 * Array
 */
let products: any[] = []

// object array
let people: {
    name: string, 
    age: number
}[] = []
people.push({
    name: 'Khanh',
    age: 18
})

/**
 * Function
 */
const sum = (num1: number, num2: number): number => {
    return num1 + num2
}


/**
 * Enum
 */
enum Sizes {
    S, M, L, XL
}
let size = Sizes.M 


/**
 * Interface 
 */
interface InterfaceState {
    name: string, 
    isLoading: boolean
}
let interfaceState: InterfaceState = {
    name: 'ready', 
    isLoading: false
}
// if we redefine the state, then the existing attributes will be merged.

/**
 * Type
 */
type TypeState = {
    name: string, 
    isLoading: boolean
}

type Age = {
    age: number
}
type Name = {
    name: string
}

// with type, we can do union. 
type Person = Age | Name 
let p:Person = {
    age:18,
    name:'a'
}

// generic type 
const handleClick = <MyType>(value: MyType) => value 
handleClick<string>('100')


/**
 * Class
 */
class User {
    username: string // default is public
    pinCode: number

    constructor(username:string, pinCode:number) {
        this.username = username,
        this.pinCode = pinCode
    }
}


