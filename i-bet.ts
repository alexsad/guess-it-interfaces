import {IPlayer} from "./i-player";
import {ICard} from "./i-card";

export interface IBet{
	player:IPlayer;
	card:ICard;
	voters:IPlayer[]
}
