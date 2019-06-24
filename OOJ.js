//oop Abstractoin : hiding stuff
class NinjaGod{
	constructor(name, ability, style, move){
	this.nameInsideNinjaGod = name;
	this.ability			= ability;
	this.style				= style;
	this.move				=move;
	}
	name(){
		return "Hi, my name is " + this.nameInsideNinjaGod + ".";
    }
    sharingan(){
        return "Using" + this.ability+ "Sharingan.";
    }
    jutsu(){
        return "Using" + this.style + "style jutsu"
    }
    move(){
        return "Using my" + this.move + "attack"
    }
}

let sasuke = new NinjaGod("itachi", "Mangekyou", "Fire", "Upside Down Knife Throw" )
//display(itachi.jutsu());
//display(itachi.name());
//display(itachi.melee())
//display(itachi.sharingan());
//let sasuke = new NinjaGod("")


// OOP Polymorpism override shared behaviors from parent. 
class UchihaGod extends NinjaGod {
    constructor(name, ability, style, move){
        super(name, ability, style, move)
        this.village = "Hidden Leaf";
    }

    combo(){
        return "Activate: " + super.sharingan() + "Combo with" + super.move()
    }
}
let itachi = new UchihaGod("itachi", "Mangekyou", "Fire", "Upside Down Knife Throw")
