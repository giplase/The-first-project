export class RandomNumbers{
  
    generateRandomNumbers(): number {
        return Math.floor(Math.random() * 100) + 1;
      }
}