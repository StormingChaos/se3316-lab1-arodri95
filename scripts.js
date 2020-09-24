
//class that defines a pokemon
class Pokemon
{
    constructor(image, number, name, type1, type2, ability1, ability2, twotypes, twoabilities, desc)
    {
        this.number = number;
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.ability1 = ability1;
        this.ability2 = ability2;
        this.image = "images\\" + image;
        this.shiny = this.image.slice(0,10) + "s" + this.image.slice(10);
        this.twotypes = twotypes;
        this.twoabilities = twoabilities;
        this.desc = desc;
    }

    //returns the pokemon as a list element in HTML
    printpokemon()
    {
        let text = "<li><img src=\"" + this.image + "\"> <img src=\"" + this.shiny + "\"> #" + 
                this.number + " " + this.name + "  " + 
                "<" + this.type1 + ">" + this.type1 + "</" + this.type1 + ">  ";

        if (this.twotypes)
        {
            text+= "<" + this.type2 + ">" + this.type2 + "</" + this.type2 + ">";
        }

        text+= "<p>Abilities: " + this.ability1;

        if (this.twoabilities)
        {
            text+= ", " + this.ability2;
        }

        text+= "<br>" + this.desc + "</p></li>";
        
        return text;
    }
}

//create pokemon list array
var pokemonList = new Array(32);

//populate array with pokemon
pokemonList[0] = new Pokemon("001.png", "001", "Bulbasaur", "Grass", "Poison", "Overgrow", "", true, false, "Evolves into Ivysaur");
pokemonList[1] = new Pokemon("002.png", "002", "Ivysaur", "Grass", "Poison", "Overgrow", "", true, false, "Evolves into Venusaur, evolves from Bulbasaur");
pokemonList[2] = new Pokemon("003.png", "003", "Venusaur", "Grass", "Poison", "Overgrow", "", true, false, "Can mega evolve and gigantamax, evolves from Ivysaur");
pokemonList[3] = new Pokemon("003_mega.png", "003", "Mega Venusaur", "Grass", "Poison", "Thick Fat", "", true, false, "Mega Evolution of Venusaur");
pokemonList[4] = new Pokemon("003_giga.png", "003", "Gigantamax Venusaur", "Grass", "Poison", "Overgrow", "", true, false, "Gigantamax form of Venusaur");
pokemonList[5] = new Pokemon("004.png", "004", "Charmander", "Fire", "", "Blaze", "", false, false, "Evolves into Charmeleon");
pokemonList[6] = new Pokemon("005.png", "005", "Charmeleon", "Fire", "", "Blaze", "", false, false, "Evolves into Charizard, evolves from Charmander");
pokemonList[7] = new Pokemon("006.png", "006", "Charizard", "Fire", "Flying", "Blaze", "", true, false, "Can mega evolve into two different forms, can gigantamax, evolves from Charmeleon");
pokemonList[8] = new Pokemon("006_mega_x.png", "006", "Mega Charizard X", "Fire", "Dragon", "Tough Claws", "", true, false, "Mega Evolution of Charizard");
pokemonList[9] = new Pokemon("006_mega_y.png", "006", "Mega Charizard Y", "Fire", "Flying", "Drought", "", true, false, "Mega Evolution of Charizard");
pokemonList[10] = new Pokemon("006_giga.png", "006", "Gigantamax Charizard", "Fire", "Flying", "Blaze", "", true, false, "Gigantamax form of Charizard");
pokemonList[11] = new Pokemon("007.png", "007", "Squirtle", "Water", "", "Torrent", "", false, false, "Evolves into Wartortle");
pokemonList[12] = new Pokemon("008.png", "008", "Wartortle", "Water", "", "Torrent", "", false, false, "Evolves into Blastoise, evolves from Squirtle");
pokemonList[13] = new Pokemon("009.png", "009", "Blastoise", "Water", "", "Torrent", "", false, false, "Can mega evolve and gigantamax, evolves from Wartortle");
pokemonList[14] = new Pokemon("009_mega.png", "009", "Mega Blastoise", "Water", "", "Mega Launcher", "", false, false, "Mega Evolution of Blastoise");
pokemonList[15] = new Pokemon("009_giga.png", "009", "Gigantamax Blastoise", "Water", "", "Torrent", "", false, false, "Gigantamax form of Blastoise");
pokemonList[16] = new Pokemon("010.png", "010", "Caterpie", "Bug", "", "Shield Dust", "", false, false, "Evolves into Metapod");
pokemonList[17] = new Pokemon("011.png", "011", "Metapod", "Bug", "", "Shed Skin", "", false, false, "Evolves into Butterfree, evolves from Caterpie");
pokemonList[18] = new Pokemon("012.png", "012", "Butterfree", "Bug", "Flying", "Compound Eyes", "", true, false, "Can gigantamax, evolves from Metapod");
pokemonList[19] = new Pokemon("012_giga.png", "012", "Gigantamax Butterfree", "Bug", "Flying", "CompoundEyes", "", true, false, "Gigantamax form of Butterfree");
pokemonList[20] = new Pokemon("013.png", "013", "Weedle", "Bug", "Poison", "Shield Dust", "", true, false, "Evolves into Kakuna");
pokemonList[21] = new Pokemon("014.png", "014", "Kakuna", "Bug", "Poison", "Shed Skin", "", true, false, "Evolves into Beedrill, evolves from Weedle");
pokemonList[22] = new Pokemon("015.png", "015", "Beedrill", "Bug", "Poison", "Swarm", "", true, false, "Can mega evolve, evolves from Kakuna");
pokemonList[23] = new Pokemon("015_mega.png", "015", "Mega Beedrill", "Bug", "Poison", "Adaptability", "", true, false, "Mega Evolution of Beedrill");
pokemonList[24] = new Pokemon("016.png", "016", "Pidgey", "Normal", "Flying", "Keen Eye", "Tangled Feet", true, true, "Evolves into Pidgeotto");
pokemonList[25] = new Pokemon("017.png", "017", "Pidgeotto", "Normal", "Flying", "Keen Eye", "Tangled Feet", true, true, "Evolves into Pidgeot, evolves from Pidgey");
pokemonList[26] = new Pokemon("018.png", "018", "Pidgeot", "Normal", "Flying", "Keen Eye", "Tangled Feet", true, true, "Can mega evolve, evolves from Pidgeotto");
pokemonList[27] = new Pokemon("018_mega.png", "018", "Mega Pidgeot", "Normal", "Flying", "No Guard", "", true, false, "Mega Evolution of Pidgeot");
pokemonList[28] = new Pokemon("019.png", "019", "Rattata", "Normal", "", "Run Away", "Guts", false, true, "Has an Alolan form, evolves into Raticate");
pokemonList[29] = new Pokemon("019_alola.png", "019", "Alolan Rattata", "Dark", "Normal", "Hustle", "Gluttony", true, true, "Alolan form of Rattata, evolves into ALolan Raticate");
pokemonList[30] = new Pokemon("020.png", "020", "Raticate", "Normal", "", "Run Away", "Guts", false, true, "Has an Alolan form, evolves from Rattata");
pokemonList[31] = new Pokemon("020_alola.png", "020", "Alolan Raticate", "Dark", "Normal", "Hustle", "Gluttony", true, true, "Alolan form of Raticate, evolves from Alolan Rattata");

//array for search results
var list = new Array();

function search_num()
{
    list = [];
    var input = document.getElementById("numSearch").elements.namedItem("numInput").value;
   
    //INSERT SEARCH ALGORITHM
    for (index = 0; index < pokemonList.length && list.length < 5; index++)
    {
        if (pokemonList[index].number.search(input) != -1)
        {
            list.push(pokemonList[index]);
        }
    }

    var search = "<ul>";
    //INSERT LIST
    for(pokemon of list)
    {
        search+= pokemon.printpokemon();
    }
    search+= "</ul>";
    
    document.getElementById("list").innerHTML = search;
}

function search_name()
{
    list = [];
    var input = document.getElementById("nameSearch").elements.namedItem("nameInput").value;

    //INSERT SEARCH ALGORITHM
    for (index = 0; index < pokemonList.length && list.length < 5; index++)
    {
        if (pokemonList[index].name.toLowerCase().search(input.toLowerCase()) != -1)
        {
            list.push(pokemonList[index]);
        }
    }
    
    var search = "<ul>";
    //INSERT LIST
    for(pokemon of list)
    {
        search+= pokemon.printpokemon();
    }
    search+= "</ul>";

    document.getElementById("list").innerHTML = search;
}

window.onload = printlist;
function printlist()
{
    var result ="<ul>";
    
    for(pokemon of pokemonList)
    {
        result+= pokemon.printpokemon();
    }

    result+= "</ul>";
    document.getElementById("list").innerHTML = result;
}
