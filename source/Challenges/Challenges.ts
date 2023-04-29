/**
 * Temp Notes:
 * - Challenges are unlocked by completing the previous challenge
 * - Challenge number 1 is unlocked by default
 * - Maybe the unlocked property is not needed - need to think more about how I would actually use it
 * 
 * - May want to move the reading and writing JSON from User.ts to something more generic and import it here and in User.ts
 *  - Then I would only need the interfaces and relative file path here & in User.ts
 * 
 */


export interface Challenge {
  id: string;
  name: string;
  unlocked: boolean;
  description: string;
  sections: Section[];
  transition: string;
  nextChallenge: string; // id of next challenge
}

export interface Section {
  id: string;
  intro: string;
  codeFile: string; // path to file
}

// getChallengeById(id='1': string): Challenge
// updateChallenge(challenge: Challenge): void