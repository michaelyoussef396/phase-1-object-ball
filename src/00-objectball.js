function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slammDunks: 1,
                },

                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slammDunks: 7,
                },

                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slammDunks: 15,
                },

                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slammDunks: 5,
                },

                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slammDunks: 1,
                },
            }
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slammDunks: 2,
                },

                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slammDunks: 10,
                },

                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slammDunks: 5,
                },

                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slammDunks: 0,
                },

                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slammDunks: 12,
                },
            }
        }
    };
}


function numPointsScored(playerName) {
    let game = gameObject();
    return game.away.players[playerName].points;
}


function shoeSize(playerName) {
    let size = gameObject();
    return size.home.players[playerName].shoe;
}


function teamColors() {
    let colors = gameObject();
    return colors.home.colors
}


function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}



function playerNumbers(teamName) {
    let playersN = gameObject();

    for (const teamKey in playersN) {
        if (playersN[teamKey].teamName === teamName) {
            const team = playersN[teamKey];
            return Object.values(team.players).map(player => player.number);
        }
    }

    return [];
}


function playerStats(playerName) {
    let stats = gameObject();
    return stats.home.players[playerName]
}


function bigShoeRebounds() {
    const gameData = gameObject();

    let maxShoeSize = -1;
    let rebounds = null; 

    for (const team in gameData) {
        for (const player in gameData[team].players) {
            const playerData = gameData[team].players[player];
            if (playerData.shoe > maxShoeSize) {
                maxShoeSize = playerData.shoe;
                rebounds = playerData.rebounds;
            }
        }
    }

    return rebounds;
}

function mostPointsScored() {
    const gameData = gameObject();
    let mostPoints = -1; 
    let playerWithMostPoints = null;

    for (const team in gameData) {
        for (const player in gameData[team].players) {
            const playerData = gameData[team].players[player];
            if (playerData.points > mostPoints) {
                mostPoints = playerData.points;
                playerWithMostPoints = player;
            }
        }
    }

    return playerWithMostPoints;
}



function winningTeam() {
    const gameData = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (const team in gameData) {
        for (const player in gameData[team].players) {
            const playerData = gameData[team].players[player];
            if (team === 'home') {
                homePoints += playerData.points;
            } else if (team === 'away') {
                awayPoints += playerData.points;
            }
        }
    }

    if (homePoints > awayPoints) {
        return gameData.home.teamName;
    } else {
        return gameData.away.teamName;
    }
}

function playerWithLongestName() {
    const gameData = gameObject();
    let longestName = '';
    let playerWithLongestName = null;

    for (const team in gameData) {
        for (const player in gameData[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
                playerWithLongestName = player;
            }
        }
    }

    return playerWithLongestName;
}

function doesLongNameStealATon() {
    const gameData = gameObject();
    let longestName = '';
    let playerWithLongestName = null;
    let mostSteals = -1;
    let playerWithMostSteals = null;

    for (const team in gameData) {
        for (const player in gameData[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
                playerWithLongestName = player;
            }

            const playerData = gameData[team].players[player];
            if (playerData.steals > mostSteals) {
                mostSteals = playerData.steals;
                playerWithMostSteals = player;
            }
        }
    }

    return playerWithLongestName === playerWithMostSteals;
}
