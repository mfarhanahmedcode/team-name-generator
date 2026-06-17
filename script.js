const names={

Gaming:[
"Shadow Titans",
"Dark Phoenix",
"Night Raiders",
"Venom Squad",
"Iron Wolves",
"Nova Hunters",
"Cyber Legends",
"Ghost Warriors",
"Silent Killers",
"Rogue Ninjas",
"Steel Assassins",
"Chaos Empire",
"Alpha Predators",
"Inferno Force",
"Phantom Elite",
"Blood Ravens",
"Rapid Strikers",
"Deadly Horizon",
"Thunder Vipers",
"Savage Unit",
"Neon Knights",
"Zero Gravity",
"Storm Breakers",
"Quantum Force",
"Venom Strike",
"Fire Hawks",
"Frozen Reapers",
"Shadow Syndicate",
"Omega Squad",
"Crimson Hunters"
],

Sports:[
"Thunder Hawks",
"Blue Falcons",
"Victory Kings",
"Power Strikers",
"Golden Eagles",
"Wild Panthers",
"Royal Lions",
"Storm Riders",
"Rapid Tigers",
"Red Dragons",
"Champion Crew",
"Dynamic Force",
"Elite Warriors",
"Flying Falcons",
"United Stars",
"Iron Giants",
"Mighty Bulls",
"Victory Vortex",
"Speed Demons",
"Super Strikers"
],

Business:[
"InnovateX",
"Growth Hub",
"Future Works",
"Vision Makers",
"Alpha Minds",
"Bright Solutions",
"Core Creators",
"NextGen Labs",
"Elevate Tech",
"Prime Ventures",
"Smart Hive",
"Digital Spark",
"Fusion Group",
"Blue Horizon",
"Success Syndicate",
"Momentum Labs",
"Pioneer Studio",
"Quantum Ventures",
"Peak Innovations",
"Vision Forge"
],

Esports:[
"Pixel Warriors",
"Aim Gods",
"Kill Switch",
"Zero Ping",
"Headshot Heroes",
"Rapid Reload",
"Clutch Kings",
"Elite Fraggers",
"Game Changers",
"Power Spawn",
"Critical Hit",
"Next Level",
"Victory Pulse",
"Cyber Storm",
"Digital Titans",
"Phantom FPS",
"Pro League",
"Rank Masters",
"Ace Squad",
"Ultimate XP"
],

Fantasy:[
"Dragon Souls",
"Phoenix Order",
"Crystal Empire",
"Storm Wizards",
"Moon Guardians",
"Mystic Knights",
"Ancient Titans",
"Celestial Force",
"Dark Kingdom",
"Golden Griffins",
"Shadow Mages",
"Ice Guardians",
"Arcane Legends",
"Royal Phoenix",
"Magic Masters",
"Thunder Dragons",
"Silver Kingdom",
"Crimson Crown",
"Eternal Heroes",
"Sacred Alliance"
]

};

function generateName(){

const category=document.getElementById("category").value;

const arr=names[category];

const random=Math.floor(Math.random()*arr.length);

document.getElementById("result").innerHTML=arr[random];

}

function copyName(){

navigator.clipboard.writeText(

document.getElementById("result").innerHTML

);

alert("Copied!");

}