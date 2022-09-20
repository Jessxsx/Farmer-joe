// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010401010101030106010104010101010301010201050101040101010101030101010101010101010104010201010104010501040301010201010101010101010101010101010101010101010501040201010102010104010103010101010101010401010401030104010102010101030101050101010101010101010101060101010101030101040201010101010101020101010101010101010104030101010401010401010504010101010101010101010401060101010101050101010402010301010101010101010101010101010101010101010301010101010401030101050104010101010104010301010101010103010101020101010101010101`, img`
. . . . . . . . . 2 . . . . . . 
. . . . 2 . 2 . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . 2 . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . 2 . . 
2 . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . 2 . . . . . . . . . . . 2 
. . . . . . . . . 2 . . . . . . 
. 2 . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 . . . . . 2 . . . . 
2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile7,myTiles.tile8,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
