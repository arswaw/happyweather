import { CharacterTemplate } from "../../templates/character/character-template.js";

const Character = {
    template: CharacterTemplate,
    data: function() {
        return {
            showMenu: false,
            charBio: {
                class: "Sorcerer",
                level: 1,
                background: "None",
                playerName: "Alex",
                faction: "Alliance",
                race: "Human (Alternate)",
                alignment: "Chaotic Good",
                experiencePoints: 10000,
                DCINumber: 0,
                characterName: "Arswaw"
            },
            inspiration: "",
            proficiencyBonus: 0,
            savingThrows: {
                strength: { proficient: false, plus: 0 },
                dexterity: { proficient: false, plus: 0 },
                constitution: { proficient: false, plus: 0 },
                intelligence: { proficient: false, plus: 0 },
                wisdom: { proficient: false, plus: 0 },
                charisma: { proficient: false, plus: 0 }
            },
            skills: {
                acrobatics: { proficient: false, plus: 0, augmentedBy: "dexterity"},
                animalHandling: { proficient: false, plus: 0, augmentedBy: "wisdom"},
                arcana: { proficient: false, plus: 0, augmentedBy: "int"},
                athletics: { proficient: false, plus: 0, augmentedBy: "strength"},
                deception: { proficient: false, plus: 0, augmentedBy: "charisma"},
                history: { proficient: false, plus: 0, augmentedBy: "intelligence"},
                insight: { proficient: false, plus: 0, augmentedBy: "wisdom"},
                intimidation: { proficient: false, plus: 0, augmentedBy: "charisma"},
                investigation: { proficient: false, plus: 0, augmentedBy: "intelligence"},
                medicine: { proficient: false, plus: 0, augmentedBy: "wisdom"},
                nature: { proficient: false, plus: 0, augmentedBy: "intelligence"},
                perception: { proficient: false, plus: 0, augmentedBy: "wisdom"},
                performance: { proficient: false, plus: 0, augmentedBy: "charisma"},
                persuasion: { proficient: false, plus: 0, augmentedBy: "charisma"},
                religion: { proficient: false, plus: 0, augmentedBy: "intelligence"},
                sleightOfHand: { proficient: false, plus: 0, augmentedBy: "dexterity"},
                stealth: { proficient: false, plus: 0, augmentedBy: "dexterity"},
                survival: { proficient: false, plus: 0, augmentedBy: "wisdom"}
            },
            baseStats: {
                strength: { base: 0, modifier: 0 },
                dexterity: { base: 0, modifier: 0 },
                constitution: { base: 0, modifier: 0 },
                intelligence: { base: 0, modifier: 0 },
                wisdom: { base: 0, modifier: 0 },
                charisma: { base: 0, modifier: 0 }
            },
            gameState: {
                armorClass: 0,
                initiative: 0,
                speed: 0,
                hitPointMaximum: 0,
                currentHitPoints: 0,
                temporaryHitPoints: 0,
                hitDice: 0,
                deathSaves: {
                    successes: 0,
                    failures: 0
                }
            },
            personalityTraits: [],
            ideals: [],
            bonds: [],
            flaws: [],
            attacksAndSpellcasting: {
                spells: [
                    {
                        name: "",
                        attackBonus: 0,
                        damageType: ""
                    }
                ],
                list: []
            },
            passiveWisdomPerception: 0,
            otherProficienciesAndLanguages: [],
            equipment: {
                money: {
                    cp: 0,
                    sp: 0,
                    ep: 0,
                    gp: 0,
                    pp: 0
                },
                list: []
            },
            featuresAndTraits: [],
            charCharacteristics: {
                age: 0,
                height: "",
                weight: 0,
                eyes: "",
                skin: "",
                hair: ""
            },
            characterAppearanceURI: "",
            alliesAndOrganizations: {
                factionRank: "",
                faction: "",
                list: []
            },
            characterBackstory: [],
            additionalFeaturesAndTraits: [],
            treasure: {
                totalNonConsumableMagicItems: 0,
                list: []
            }
        }
    }
}

export { Character }
