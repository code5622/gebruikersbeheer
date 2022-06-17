import IHistory from './IHistory';

export default interface IData {
  name: string,
  calories: number,
  fat: number,
  carbs: number,  
  protein: number, 
  price: number,      
  history: IHistory[]
}