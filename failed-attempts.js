// *** TWITCH PLAYS CONNECT FOUR *** //

    /*
    
    function c4CreateBoardString () {
        c4BoardState.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 0) {
                    c4BoardString += "⚫";
                }
            });
            c4BoardString += "\n";
        });
        msg.channel.send(c4BoardString);
    }

    if (command === 'tpc4start') {
        if (c4InProgress === false) {
            c4InProgress = true;
            c4CreateBoardString ();
        }
    } else if (c4InProgress === true) {
        if (msg.content === 'r1' || msg.content === '1r') {
            
        }
    }

    */

    /*

    if (command === 'tpc4start') {
        if (c4InProgress === false) {
            c4InProgress = true;
            // for (let x = 0; x < 7; x++) {
            //     for (let y = 0; y < 6; y++) {
            //         // c4BoardState = c4BoardState[x,y];
            //         c4BoardState[x][y] = 0;
            //     }
            // }
            sendc4board(c4BoardState);
        }
    } else if (c4InProgress === true) {
        if (msg.content.toLowerCase() === 'r1' || msg.content.toLowerCase() === '1r') {
            let temp = scanc4column(0);
            c4BoardState[0][temp] = 1;
            console.log(`Set a Red piece in the first column at ${temp}! (5 = bottom, 0 = top)`);
            // sendc4board (c4BoardState);
        }
    }

    // Scan a column for empty space, starting from the bottom.
    function scanc4column (columntoscan) {
        for (let c = 5; c >= 0; c--) {
            if (c4BoardState[columntoscan][c] === 0) {
                return c;
            }
        }
    }

    // Send a message with the board's current state.
    function sendc4board (boardstate) {
        let boardmsg = "\n1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣\n";
        for (let y = 0; y < 6; y++) {
            for (let x = 0; x < 7; x++) {
                if (boardstate[x][y] === 0) {
                    boardmsg = boardmsg + "⚫";
                } else if (boardstate[x][y] === 1) {
                    boardmsg = boardmsg + "🔴";
                } else if (boardstate[x][y] === 2) {
                    boardmsg = boardmsg + "🔵";
                }
            }
            boardmsg = boardmsg + "\n";
        }
        //boardmsg.slice(0,8);
        console.log('Sending Connect Four Board...');
        msg.channel.send(boardmsg);
        console.log('Sent Connect Four Board!');
    }

    */