//Displays the tilemap on the generatorScreen canvas

const canvas = document.getElementById("generatorScreen");
const context = canvas.getContext("2d");
const downloadButton = document.getElementById("downloadButton");

var mapArray = genMap();

let tiles = new Image();

tiles.src = "Assets/tileSet/tileset.png";

function TestFunction()
{
    context.drawImage(tiles, 0, 0);
}

function DisplayMap()
{
    mapArray = genMap();

    console.log(mapArray);

    for (let y = 0; y < mapArray.length; y++)
    {
        for (let x = 0; x < mapArray.length; x++)
        {
            context.drawImage(tiles, 16 * CalculateTile(x, y), 0, 16, 16, 16 * x, 16 * y, 16, 16);
            /*if (grassArray[x][y] == 0) {
                context.drawImage(tiles, 16 * CalculateTile(x, y), 0, 16, 16, 16 * x, 16 * y, 16, 16);
            } else {
                context.drawImage(tiles, 16 * CalculateTile(x, y), 0 , 16, 16, 16 * x, 16 * y, 16, 16);
            }*/
        }
    }
}

function CalculateTile(x,y)
{
    let v = [
        GetTerrainType(x - 1, y - 1), GetTerrainType(x, y - 1), GetTerrainType(x + 1, y - 1),
        GetTerrainType(x - 1, y), GetTerrainType(x, y), GetTerrainType(x + 1, y),
        GetTerrainType(x - 1, y + 1), GetTerrainType(x, y + 1), GetTerrainType(x + 1, y + 1)];

    //v:
    //0  1  2
    //3  4  5
    //6  7  8

    //Love me some binary trees
    switch (v[4])
    {
        case 1:
            if (v[0] == 4 && v[1] == 4 && v[2] == 4 && v[3] == 4 && v[5] == 4 && v[6] == 4 && v[7] == 4 && v[8] == 4) {
                return 92;
            }else {
                return 1;
            }
        case 2:
            if (v[1] == 2 || v[1] == 5) {
                if (v[7] == 2 || v[7] == 5) {
                    if (v[3] == 2 || v[3] == 5) {
                        if (v[5] == 2 || v[5] == 5) {
                            return 2;
                        } else {
                            if (v[0] == 2 || v[6] == 2) {
                                return 112;
                            } else {
                                return 131;
                            }
                        }
                    } else {
                        if (v[5] == 2 || v[5] == 5) {
                            if (v[2] == 2 || v[8] == 2) {
                                return 111;
                            } else {
                                return 130;
                            }
                        } else {
                            return 116;
                        }
                    }
                } else {
                    if (v[3] == 2 || v[3] == 5) {
                        if (v[5] == 2 || v[5] == 5) {
                            if (v[0] == 2 || v[2] == 2) {
                                return 114;
                            } else {
                                return 129;
                            }                            
                        } else {
                            if (v[0] == 2) {
                                return 115;
                            } else {
                                return 123;
                            }
                        }
                    } else {
                        if (v[5] == 2 || v[5] == 5) {
                            if (v[2] == 2) {
                                return 113;
                            } else {
                                return 122;
                            }
                        } else {
                            return 125;
                        }
                    }
                }
            } else {
                if (v[7] == 2 || v[7] == 5) {
                    if (v[3] == 2 || v[3] == 5) {
                        if (v[5] == 2 || v[5] == 5) {
                            if (v[6] == 2 || v[8] == 2) {
                                return 109;
                            } else {
                                return 128;
                            }
                        } else {
                            if (v[6] == 2) {
                                return 110;
                            } else {
                                return 121;
                            }
                        }
                    } else {
                        if (v[5] == 2 || v[5] == 5) {
                            if (v[8] == 2) {
                                return 108;
                            } else {
                                return 120;
                            }                            
                        } else {
                            return 124;
                        }
                    }
                } else {
                    if (v[3] == 2 || v[3] == 5) {
                        if (v[5] == 2 || v[5] == 5) {
                            return 117;
                        } else {
                            return 127;
                        }
                    } else {
                        if (v[5] == 2 || v[5] == 5) {
                            return 126;
                        } else {
                            return 1;
                        }
                    }
                }
            }


            return 2;
        case 3:
            return 132;      
        case 4:         //paths
            //v[0] != 4 && v[1] != 4 && v[2] != 4 && v[3] == 4 && v[5] == 4 && v[6] != 4 && v[7] != 4 && v[8] != 4
            if (v[1] == 4 || v[1] == 5) {
                if (v[7] == 4 || v[7] == 5) {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            //Corners
                            if (v[0] == 4) {
                                if (v[2] == 4) {
                                    if (v[6] == 4) {
                                        if (v[8] == 4) {
                                            return 70;
                                        } else {
                                            return 88;
                                        }
                                    } else {
                                        if (v[8] == 4) {
                                            return 89;
                                        } else {
                                            return 84;
                                        }
                                    }
                                } else {
                                    if (v[6] == 4) {
                                        if (v[8] == 4) {
                                            return 90;
                                        } else {
                                            return 86;
                                        }
                                    } else {
                                        if (v[8] == 4) {
                                            return 98;
                                        } else {
                                            return 93;
                                        }
                                    }
                                }
                            } else {
                                if (v[2] == 4) {
                                    if (v[6] == 4) {
                                        if (v[8] == 4) {
                                            return 91;
                                        } else {
                                            return 97;
                                        }
                                    } else {
                                        if (v[8] == 4) {
                                            return 87;
                                        } else {
                                            return 94;
                                        }
                                    }
                                } else {
                                    if (v[6] == 4) {
                                        if (v[8] == 4) {
                                            return 85;
                                        } else {
                                            return 95;
                                        }
                                    } else {
                                        if (v[8] == 4) {
                                            return 96;
                                        } else {
                                            return 79;
                                        }
                                    }
                                }
                            }

                        } else {
                            if (v[0] != 4) {
                                if (v[6] != 4) {
                                    return 80;
                                } else {
                                    return 105;
                                }                                
                            } else {
                                if (v[6] != 4) {
                                    return 106;
                                } else {
                                    return 71;
                                }      
                            }                            
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[2] != 4) {
                                if (v[8] != 4) {
                                    return 78;
                                } else {
                                    return 103;
                                }                                
                            } else {
                                if (v[8] != 4) {
                                    return 104;
                                } else {
                                    return 69;
                                }                                
                            }                            
                        } else {
                            return 64;
                        }
                    }
                } else {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[0] != 4) {
                                if (v[2] != 4) {
                                    return 82;
                                } else {
                                    return 101;
                                }                                
                            } else {
                                if (v[2] != 4) {
                                    return 102;
                                } else {
                                    return 73;
                                }                                
                            }                            
                        } else {
                            if (v[0] != 4) {
                                return 83;
                            } else {
                                return 74;
                            }                            
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[2] != 4) {
                                return 81;
                            } else {
                                return 72;
                            }                            
                        } else {
                            return 65;
                        }
                    }
                }
            } else {
                if (v[7] == 4 || v[7] == 5) {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[6] != 4) {
                                if (v[8] != 4) {
                                    return 76;
                                } else {
                                    return 99;
                                }                                
                            } else {
                                if (v[8] != 4) {
                                    return 100;
                                } else {
                                    return 67;
                                }                                
                            }                            
                        } else {
                            if (v[6] != 4) {
                                return 77;
                            } else {
                                return 68;
                            }                            
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            if (v[8] != 4) {
                                return 75;
                            } else {
                                return 66;
                            }                            
                        } else {
                            return 63;
                        }
                    }
                } else {
                    if (v[3] == 4 || v[3] == 5) {
                        if (v[5] == 4 || v[5] == 5) {
                            return 61;
                        } else {
                            return 62;
                        }
                    } else {
                        if (v[5] == 4 || v[5] == 5) {
                            return 60;
                        } else {
                            return 107;
                        }
                    }
                }
            }     
        case 5:
            if (v[3] == 2) {
                return 119;
            } else {
                return 118;
            }
        case 6:
            return Math.floor(Math.random() * 6) + 3;
            return 3;
        case 7: //Trees
            if (v[1] == 7) {
                if (v[7] == 7) {
                    if (v[3] == 7) {
                        if (v[5] == 7) {
                            //Corners
                            if (v[0] == 7) {
                                if (v[2] == 7) {
                                    if (v[6] == 7) {
                                        if (v[8] == 7) {
                                            return 22;
                                        } else {
                                            return 40;
                                        }
                                    } else {
                                        if (v[8] == 7) {
                                            return 41;
                                        } else {
                                            return 36;
                                        }
                                    }
                                } else {
                                    if (v[6] == 7) {
                                        if (v[8] == 7) {
                                            return 42;
                                        } else {
                                            return 38;
                                        }
                                    } else {
                                        if (v[8] == 7) {
                                            return 50;
                                        } else {
                                            return 45;
                                        }
                                    }
                                }
                            } else {
                                if (v[2] == 7) {
                                    if (v[6] == 7) {
                                        if (v[8] == 7) {
                                            return 45;
                                        } else {
                                            return 49;
                                        }
                                    } else {
                                        if (v[8] == 7) {
                                            return 39;
                                        } else {
                                            return 46;
                                        }
                                    }
                                } else {
                                    if (v[6] == 7) {
                                        if (v[8] == 7) {
                                            return 37;
                                        } else {
                                            return 47;
                                        }
                                    } else {
                                        if (v[8] == 7) {
                                            return 48;
                                        } else {
                                            return 31;
                                        }
                                    }
                                }
                            }

                        } else {
                            if (v[0] != 7) {
                                if (v[6] != 7) {
                                    return 32;
                                } else {
                                    return 57;
                                }
                            } else {
                                if (v[6] != 7) {
                                    return 58;
                                } else {
                                    return 23;
                                }
                            }
                        }
                    } else {
                        if (v[5] == 7) {
                            if (v[2] != 7) {
                                if (v[8] != 7) {
                                    return 32;
                                } else {
                                    return 55;
                                }
                            } else {
                                if (v[8] != 7) {
                                    return 56;
                                } else {
                                    return 21;
                                }
                            }
                        } else {
                            return 16;
                        }
                    }
                } else {
                    if (v[3] == 7) {
                        if (v[5] == 7) {
                            if (v[0] != 7) {
                                if (v[2] != 7) {
                                    return 34;
                                } else {
                                    return 53;
                                }
                            } else {
                                if (v[2] != 7) {
                                    return 54;
                                } else {
                                    return 25;
                                }
                            }
                        } else {
                            if (v[0] != 7) {
                                return 35;
                            } else {
                                return 26;
                            }
                        }
                    } else {
                        if (v[5] == 7) {
                            if (v[2] != 7) {
                                return 33;
                            } else {
                                return 24;
                            }
                        } else {
                            return 17;
                        }
                    }
                }
            } else {
                if (v[7] == 7) {
                    if (v[3] == 7) {
                        if (v[5] == 7) {
                            if (v[6] != 7) {
                                if (v[8] != 7) {
                                    return 28;
                                } else {
                                    return 51;
                                }
                            } else {
                                if (v[8] != 7) {
                                    return 52;
                                } else {
                                    return 19;
                                }
                            }
                        } else {
                            if (v[6] != 7) {
                                return 29;
                            } else {
                                return 20;
                            }
                        }
                    } else {
                        if (v[5] == 7) {
                            if (v[8] != 7) {
                                return 27;
                            } else {
                                return 18;
                            }
                        } else {
                            return 15;
                        }
                    }
                } else {
                    if (v[3] == 7) {
                        if (v[5] == 7) {
                            return 13;
                        } else {
                            return 14;
                        }
                    } else {
                        if (v[5] == 7) {
                            return 12;
                        } else {
                            return 59;
                        }
                    }
                }
            }
    }
}

//This is nasty
function GetTerrainType(x, y)
{
    let output = 2;
    try {
        output = mapArray[x][y];
    } catch(err){
        output = 2;
    }
    if (output == undefined) {
        output = 2;
    }
    return output;
}

function Surroundings(x, y)
{
    return 
}

//Doesn't work due to security error
function Download(canvas, filename) {
    let lnk = document.createElement('a'), e;
    lnk.download = filename;
    lnk.href = canvas.toDataURL("image/png;base64");

    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
            0, 0, 0, 0, 0, false, false, false,
            false, 0, null);

        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}