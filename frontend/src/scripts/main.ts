import Plant from "./realisticbiomes/Plant.js";
import Items from "./minecraft/Items.js";
import Blocks from "./minecraft/Blocks.js";
import Yield from "./realisticbiomes/Yield.js";
import Flexbox from "./html/Flexbox.js";

let output = document.getElementById('plants') as HTMLElement



let wheat = new Plant(
        Items.WHEAT_SEEDS,
        Blocks.WHEAT,
        [
            new Yield(0, 6, Items.WHEAT_SEEDS, 1),
            new Yield(7, 7, Items.WHEAT_SEEDS, 2.535),//todo find real average https://minecraft.fandom.com/wiki/Wheat_Seeds#Breaking
            new Yield(7, 7, Items.WHEAT, 1),
        ],
        3
    )
let potatoes = new Plant(
    Items.WHEAT_SEEDS,
    Blocks.WHEAT,
    [
        new Yield(0, 0, Items.WHEAT_SEEDS, 1)
    ],
    3
)

output.append(
    new Flexbox()
        .append(wheat.getElement())
        .append(potatoes.getElement())
    .getElement())