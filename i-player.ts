import {ICard} from "./i-card";
import {EPlayerStatus} from "./e-player";


export interface IPlayer {
	id: string;
	name:string;
	color: string;
	score: number;
	status:EPlayerStatus;
	deck:ICard[];
	pickedCard?:number;
	pickedBet?:number;
}
