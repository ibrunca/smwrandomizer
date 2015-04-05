// thanks to MrCheese for helping with rewriting the stage name lookup table

var TEXT_MAPPING =
{
	"A": 0x00,
	"B": 0x01,
	"C": 0x02,
	"D": 0x03,
	"E": 0x04,
	"F": 0x05,
	"G": 0x06,
	"H": 0x07,
	"I": 0x08,
	"J": 0x09,
	"K": 0x0a,
	"L": 0x0b,
	"M": 0x0c,
	"N": 0x0d,
	"O": 0x0e,
	"P": 0x0f,
	"Q": 0x10,
	"R": 0x11,
	"S": 0x12,
	"T": 0x13,
	"U": 0x14,
	"V": 0x15,
	"W": 0x16,
	"X": 0x17,
	"Y": 0x18,
	"Z": 0x19,
	"!": 0x1a,
	".": 0x1b,
	"-": 0x1c,
	",": 0x1d,
	"?": 0x1e,
	" ": 0x1f,
	"a": 0x40,
	"b": 0x41,
	"c": 0x42,
	"d": 0x43,
	"e": 0x44,
	"f": 0x45,
	"g": 0x46,
	"h": 0x47,
	"i": 0x48,
	"j": 0x49,
	"k": 0x4a,
	"l": 0x4b,
	"m": 0x4c,
	"n": 0x4d,
	"o": 0x4e,
	"p": 0x4f,
	"q": 0x50,
	"r": 0x51,
	"s": 0x52,
	"t": 0x53,
	"u": 0x54,
	"v": 0x55,
	"w": 0x56,
	"x": 0x57,
	"y": 0x58,
	"z": 0x59,
	"#": 0x5a,
	"(": 0x5b,
	")": 0x5c,
	"'": 0x5d,
	"·": 0x5e,
	"1": 0x64,
	"2": 0x65,
	"3": 0x66,
	"4": 0x67,
	"5": 0x68,
	"6": 0x69,
	"7": 0x6a,
	"0": 0x6b,

	"\uE032": 0x32,
	"\uE033": 0x33,
	"\uE034": 0x34,
	"\uE035": 0x35,
	"\uE036": 0x36,
	"\uE037": 0x37,

	"\uE038": 0x38,
	"\uE039": 0x39,
	"\uE03A": 0x3a,
	"\uE03B": 0x3b,
	"\uE03C": 0x3c,
};
 
var TITLE_STRINGS =
[
	["YOSHI'S ", "MARIO'S ", "LUIGI'S ", "DEATHLY ", "LEMMY'S ", "LARRY'S ", "WENDY'S ", "KOOPA'S "],
	["STAR ", "HYPE ", "MOON "],
	"#1 IGGY'S ",
	"#2 MORTON'S ",
	"#3 LEMMY'S ",
	"#4 LUDWIG'S ",
	"#5 ROY'S ",
	"#6 WENDY'S ",
	"#7 LARRY'S ",
	["DONUT ", "PIZZA ", "DEATH ", "KOOPA ", "FUDGE ", "PLUTO ", "KAIZO ", "SKULL ", "MARIO ", "SUSHI ", "BAGEL ", "BREAD "],
	"GREEN ",
	["TOP SECRET AREA ", "TAKE A BREAK ", "WHY THE RUSH? ", "LEVEL OF SHAME ", "KEEP YOUR CAPES "],
	["VANILLA ", "DIAMOND ", "CALZONE ", "EMERALD ", "BUTTERY ", "DOLPHIN "],
	"\uE038\uE039\uE03A\uE03B\uE03C ", // YELLOW
	"RED ",
	"BLUE ",
	["BUTTER BRIDGE ", "CHEESE BRIDGE ", "APPLE ISTHMUS ", "ASIAGO CHEESE "],
	["CHEESE BRIDGE ", "BUTTER BRIDGE ", "PASTA PLATEAU ", "BOUNCING SAWS "],
	["SODA LAKE ", "POP OCEAN ", "INK SWAMP "],
	["COOKIE MOUNTAIN ", "GREEN HILL ZONE ", "WALUIGI LAND ", "PRINCESS VALLEY ", "DINO-RHINO LAND "],
	["FOREST ", "CANOPY ", "JUNGLE "],
	["CHOCOLATE ", "CHEEZCAKE ", "PEPPERONI "],
	["CHOCO-GHOST HOUSE ", "HAUNTED MANSION ", "HOUSE OF HORROR ", "HOUSE OF TERROR "],
	["SUNKEN GHOST SHIP ", "GHOSTS OF YOSHI ", "SMB3 AIRSHIP "],
	["VALLEY ", "SUMMIT ", "RIVERS ", "THREAT ", "WOUNDS ", "GALAXY "],
	["BACK DOOR ", "NO ENTRY ", "GO AWAY ", "LEAVE NOW ", "PISS OFF! ", "BEWARE! "],
	["FRONT DOOR ", "GET READY ", "FINAL BOSS "],
	["GNARLY ", "WACKY ", "CRAZY ", "KOOKY ", "NUTTY "],
	["TUBULAR ", "FUCKYOU ", "(-.-) ", "GETREKT "],
	["WAY COOL ", "GLORIOUS ", "STYLISH ", "SUAVE "],
	["HOUSE ", "ABODE ", "CONDO ", "TOWER "],
	["ISLAND ", "MIRAGE ", "TUNNEL ", "CAVERN ", "BRIDGE ", "GALAXY "],
	"SWITCH PALACE ",
	["CASTLE ", "TEMPLE ", "DOMAIN "],
	["PLAINS ", "TUNDRA ", "MEADOW ", "CAVERN ", "BRIDGE "],
	["GHOST HOUSE ", "BOO'S HAUNT ", "GRAVEYARD "],
	["SECRET ", "TEMPLE "],
	["DOME ", "ZONE ", "HELL "],
	["FORTRESS ", "DUNGEON ", "DUNGEONS ", "PANTHEON ", "CAPITAL ", "CENTRE ", "CENTER "],
	["OF\uE032\uE033\uE034\uE035\uE036\uE037ON ", "OF DISDAIN ", "OF VISIONS ", "HAPPY TIME "], // OF ILLUSION
	["OF BOWSER ", "OF KOOPAS ", "OF SORROW ", "OF CLOUDS ", "OF SPIKES "],
	["ROAD ", "WARP ", "PATH ", "ZONE ", "LINE "],
	"WORLD ",
	["AWESOME ", "SPOOKY ", "STRANGE ", "AMAZING ", "MYSTERY ", "ENGLAND ", "TWITCHY ", "RADICAL "],
	["1", "0"],
	["2", "?"],
	["3", "X"],
	["4", "6"],
	["5", "7"],
	["PALACE", "TEMPLE", "SHRINE"],
	["AREA", "ZONE", "SPOT", "HILL"],
	["GROOVY", "CRAZY", "DEATH!", "CANADA"],
	["MONDO", "KINKY", "Kappa", "GG!", "????", "OMG!"],
	["OUTRAGEOUS", "UNNATURAL", "MENTAL", "MADNESS", "TRY NOCAPE", "BibleThump", "FABULOUS"],
	["FUNKY", "GREAT", "WEIRD", "BINGO"],
	["HOUSE", "ABODE", "CONDO", "TOWER"],
	" ",
];

function randomizeLevelNames(random, rom)
{
	var ndx = 0x21AC5;
	for (var i = 0; i < TITLE_STRINGS.length; ++i)
	{
		var str = TITLE_STRINGS[i];
		if (str instanceof Array)
		{
			str = random.from(TITLE_STRINGS[i]);
			while (str.length < TITLE_STRINGS[i][0].length) str += ' ';
		}
		
		for (var j = 0; j < str.length; ++j, ++ndx)
			rom[ndx] = TEXT_MAPPING[str[j]];
		rom[ndx-1] |= 0x80;
	}
}

function charToTitleNum(chr)
{
	var chars =
	{
		'@': 0x76, // clock
		'$': 0x2E, // coin
		"'": 0x85,
		'"': 0x86,
		':': 0x78,
		' ': 0xFC,
	};
	
	var basechars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ.,*-!".split('');
	for (var i = 0; i < basechars.length; ++i) chars[basechars[i]] = i;
	
	if (chr in chars) return chars[chr];
	return 0xFC;
}

function centerPad(str, len)
{
	while (str.length < len)
		str = ((str.length & 1) ? (" " + str) : (str + " "));
	return str;
}

function leftPad(str, len)
{
	while (str.length < len) str = str + " ";
	return str;
}

function writeToTitle(title, color, rom)
{
	title = centerPad(title.toUpperCase(), 19).split('');
	for (var i = 0; i < 19; ++i)
	{
		var num = charToTitleNum(title[i]);
		
		rom[0x2B6D7 + i * 2 + 0]  = num & 0xFF;
		rom[0x2B6D7 + i * 2 + 1] &= 0xE0;
		rom[0x2B6D7 + i * 2 + 1] |= (color << 2) | ((num >> 8) & 0x3);
	}
}

function updateIntroText(vseed, rom)
{
	var lines = 
	[
		centerPad("SMW Randomizer", 18),
		centerPad(VERSION_STRING, 18),
		leftPad("", 18),
		leftPad("Seed    " + vseed, 18),
		leftPad("Preset  " + getPresetName(), 18),
		"               ", // exactly 15 characters
		centerPad("Good Luck", 18),
		centerPad("and Enjoy!", 18),
	];
	
	var ndx = 0x2A5D9, off = 0;
	for (var i = 0; i < 8; ++i)
	{
		var line = i < lines.length ? lines[i] : "";
		for (var j = 0; j < line.length; ++j, ++off)
			rom[ndx+off] = TEXT_MAPPING[line[j]];
		rom[ndx+off-1] |= 0x80;
	}
	
	if (off != 141) throw new Error('Invalid length for intro text cutscene: ' + off);
}
