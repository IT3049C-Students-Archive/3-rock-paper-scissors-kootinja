class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    Math.random(0, 1, 2); 
      return acceptedValues;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    //Having a tie
    if (userSelection === cpuSelection){
      return "It's a tie!";
    }
    //If the user types in scissors
  else if(userSelection === "scissors"){
    if(cpuSelection === "rock"){
      return "Computer wins! Rock kills scissors.";
    }
    else if(cpuSelection ==="paper"){
      return "User wins! Scissors kill paper.";
    }
  }
    //If the user types in paper
  else if(userSelection === "paper"){
    if(cpuSelection === "rock"){
      return "User wins! Paper kills rock.";
    }
    else if(cpuSelection === "scissors"){
      return "Computer wins! Scissors kill paper.";
    }
  }
    //If the user types in rock
  else if(userSelection === "rock"){
    if(cpuSelection === "paper"){
      return "Computer wins! Paper kills rock.";
    }
    else if(cpuSelection === "scissors"){
      return "User wins! Rock kills scissors."
    };
  }

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    // if the user won the round
    this.score.user ++;
    // if the user cpu the round
    this.score.cpu ++;
    this.gameHistoryLog.push(`Jeanette selected Scissors, CPU selected Paper: Jeanette wins wins`);

  }

}