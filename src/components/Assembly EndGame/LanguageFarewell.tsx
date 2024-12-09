

function DeadLanguageFarewell(language: string) {
    const options: string[] = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`,
        `You just murdered ${language}`,
        `You obviously killed ${language} intentionally 😢`
    ]

    const random: number = Math.floor(Math.random() * options.length);
    return options[random]
}

export function Words() {
    const words: string[] = ["about", "above", "alive", "alter", "among", "angel", "anger", "apple", "apply", "array", "aside", "asset", "audio", "avoid", "aware", "award", "bases", "basic", "basis", "batch", "beach", "beans", "beast", "beats", "begin", "being", "below", "bends", "berry", "bests", "better", "bides", "bikes", "binds", "birth", "bites", "blade", "blame", "blank", "blast", "bleak", "blend", "bless", "blind", "blink", "block", "blood", "blows", "board", "boast", "boats", "bodies", "bolds", "bolts", "bones", "books", "boost", "boots", "border", "bored", "borne", "boron", "bossy", "botch", "boxes", "brain", "brake", "brand", "brash", "brave", "bread", "break", "breed", "bribe", "brick", "bride", "brief", "brill", "brine", "bring", "brink", "broad", "broil", "broke", "broken", "broker", "bronze", "brood", "brook", "broom", "broth", "brought", "brown", "browse", "bruise", "brush", "brute", "buddy", "budget", "built", "bulge", "bully", "bump", "bumps", "bunch", "bundle", "bunge", "bunk", "bunny", "burden", "bureau", "burns", "burst", "busier", "busts", "busy", "butch", "butler", "butter", "button", "buyers", "buying", "buys", "buzzed", "bylaw", "byline", "bypass", "byproduct"];
    const random: number = Math.floor(Math.random() * words.length);
    return words[random]
}

export default DeadLanguageFarewell