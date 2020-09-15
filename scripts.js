function numsearch()
{
    return 'result of num search';
}

function namesearch()
{
    return 'result of name search';
}

function printlist()
{
    var result ="<ul><li>test</li></ul>";
    return result;
}

//class that defines a pokemon
class Pokemon
{
    Pokemon(image, number, name, type1, type2, ability1, ability2, twoabilities, desc)
    {
        this.number = number;
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.ability1 = ability1;
        this.ability2 = ability2;
        this.image = "images\\" + image;
        this.twoabilities = twoabilities;
        this.desc = desc;
    }

    printpokemon()
    {
        let text = "<li><img src=\"" + image + "\"> #" + number + " " + name + "  " + 
                "<" + type1 + ">" + type1 + "</" + type1 + ">  <" + type2 + ">" + type2 + "</" + type2 + ">" +
                "<p>Abilities: " + ability1;
        if(twoabilities)
        {
            text+= ", " + ability2;
        }

        text+= "<br>" + desc + "</p></li>";
        
        return text;
    }
}

window.onload = printlist;
function printlist()
{
    var result ="<ul><li>insert pokedex list here</li></ul>";
    document.getElementById("list").innerHTML = result;
}

//types
var grass = "Grass";
var poison = "Poison";
var fire = "Fire";
var flying = "Flying";
var dragon = "Dragon";
var water = "Water";
var bug = "Bug";
var normal = "Normal";
var dark = "Dark";

//create pokemon list array
var pokemonList = new Array(32);

//populate array with pokemon
pokemonList[0] = new Pokemon("001.png", "001", "Bulbasaur", grass, poison, "Overgrow", "", false, "Evolves into Ivysaur");
pokemonList[1] = new Pokemon("002.png", "002", "Ivysaur", grass, poison, "Overgrow", "", false, "Evolves into Venusaur, evolves from Bulbasaur");
pokemonList[2] = new Pokemon("003.png", "003", "Venusaur", grass, poison, "Overgrow", "", false, "Can mega evolve and gigantamax, evolves from Ivysaur");
pokemonList[3] = new Pokemon("003_mega.png", "003", "Mega Venusaur", grass, poison, "Thick Fat", "", false, "Mega Evolution of Venusaur");
pokemonList[4] = new Pokemon("003_giga.png", "003", "Gigantamax Venusaur", grass, poison, "Overgrow", "", false, "Gigantamax form of Venusaur");
pokemonList[5] = new Pokemon("004.png", "004", "Charmander", fire, "", "Blaze", "", false, "Evolves into Charmeleon");
pokemonList[6] = new Pokemon("005.png", "005", "Charmeleon", fire, "", "Blaze", "", false, "Evolves into Charizard, evolves from Charmander");
pokemonList[7] = new Pokemon("006.png", "006", "Charizard", fire, flying, "Blaze", "", false, "Can mega evolve into two different forms, can gigantamax, evolves from Charmeleon");
pokemonList[8] = new Pokemon("006_mega_x.png", "006", "Mega Charizard X", fire, dragon, "Tough Claws", "", false, "Mega Evolution of Charizard");
pokemonList[9] = new Pokemon("006_mega_y.png", "006", "Mega Charizard Y", fire, flying, "Drought", "", false, "Mega Evolution of Charizard");
pokemonList[10] = new Pokemon("006_giga.png", "006", "Gigantamax Charizard", fire, flying, "Blaze", "", false, "Gigantamax form of Charizard");
pokemonList[11] = new Pokemon("007.png", "007", "Squirtle", water, "", "Torrent", "", false, "Evolves into Wartortle");
pokemonList[12] = new Pokemon("008.png", "008", "Wartortle", water, "", "Torrent", "", false, "Evolves into Blastoise, evolves from Squirtle");
pokemonList[13] = new Pokemon("009.png", "009", "Blastoise", water, "", "Torrent", "", false, "Can mega evolve and gigantamax, evolves from Wartortle");
pokemonList[14] = new Pokemon("009_mega.png", "009", "Mega Blastoise", water, "", "Mega Launcher", "", false, "Mega Evolution of Blastoise");
pokemonList[15] = new Pokemon("009_giga.png", "009", "Gigantamax Blastoise", water, "", "Torrent", "", false, "Gigantamax form of Blastoise");
pokemonList[16] = new Pokemon("010.png", "010", "Caterpie", bug, "", "Shield Dust", "", false, "Evolves into Metapod");
pokemonList[17] = new Pokemon("011.png", "011", "Metapod", bug, "", "Shed Skin", "", false, "Evolves into Butterfree, evolves from Caterpie");
pokemonList[18] = new Pokemon("012.png", "012", "Butterfree", bug, flying, "Compound Eyes", "", false, "Can gigantamax, evolves from Metapod");
pokemonList[19] = new Pokemon("012_giga.png", "012", "Gigantamax Butterfree", bug, flying, "CompoundEyes", "", false, "Gigantamax form of Butterfree");
pokemonList[20] = new Pokemon("013.png", "013", "Weedle", bug, poison, "Shield Dust", "", false, "Evolves into Kakuna");
pokemonList[21] = new Pokemon("014.png", "014", "Kakuna", bug, poison, "Shed Skin", "", false, "Evolves into Beedrill, evolves from Weedle");
pokemonList[22] = new Pokemon("015.png", "015", "Beedrill", bug, poison, "Swarm", "", false, "Can mega evolve, evolves from Kakuna");
pokemonList[23] = new Pokemon("015_mega.png", "015", "Mega Beedrill", bug, poison, "Adaptability", "", false, "Mega Evolution of Beedrill");
pokemonList[24] = new Pokemon("016.png", "016", "Pidgey", normal, flying, "Keen Eye", "Tangled Feet", true, "Evolves into Pidgeotto");
pokemonList[25] = new Pokemon("017.png", "017", "Pidgeotto", normal, flying, "Keen Eye", "Tangled Feet", true, "Evolves into Pidgeot, evolves from Pidgey");
pokemonList[26] = new Pokemon("018.png", "018", "Pidgeot", normal, flying, "Keen Eye", "Tangled Feet", true, "Can mega evolve, evolves from Pidgeotto");
pokemonList[27] = new Pokemon("018_mega.png", "018", "Mega Pidgeot", normal, flying, "No Guard", "", false, "Mega Evolution of Pidgeot");
pokemonList[28] = new Pokemon("019.png", "019", "Rattata", normal, "", "Run Away", "Guts", true, "Has an Alolan form, evolves into Raticate");
pokemonList[29] = new Pokemon("019_alola.png", "019", "Alolan Rattata", dark, normal, "Hustle", "Gluttony", true, "Alolan form of Rattata, evolves into ALolan Raticate");
pokemonList[30] = new Pokemon("020.png", "020", "Raticate", normal, "", "Run Away", "Guts", true, "Has an Alolan form, evolves from Rattata");
pokemonList[31] = new Pokemon("020_alola.png", "020", "Alolan Raticate", dark, normal, "Hustle", "Gluttony", true, "Alolan form of Raticate, evolves from Alolan Rattata");