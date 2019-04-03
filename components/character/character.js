import { CharacterTemplate } from "../../templates/character/character-template.js";
import { Progress } from "./progress.js";
import { GetCharacter } from "../../state/getCharacter.js";

const Character = {
    template: CharacterTemplate,
    mounted: function () {
        this.$root.$on('showWizard', choice => {
            this.startWizard(choice)
        })
        this.$root.$on('stopWizard', () => {
            this.stopWizard()
        })
        this.$root.$on('returnToWizard', () => {
            this.showWizard = true
            window.location.href = `#/character/${this.steps[this.currentStep.count].url}`
        })
        this.$root.$on('retrieveCharacter', async id => {
            this.isLoading = true
            const response = await GetCharacter(id)

            console.info("the response", response)

            if (response.length > 0) {
                const character = response[0]
                this.characterLoaded = true
                this.currentStep.count = 0
                this.currentStep.progress = 0
                this.currentStep.description = "Not started"
                this.showMenuButton = true
                this.showWizard = false
                this.$root.$emit('toast', "Character loaded! Use the menu to view.")
                this.character = character
                this.isLoading = false
            }
            else {
                this.isLoading = false
                this.$root.$emit('toast', "Couldn't find a character with that id.")
            }
        })
    },
    methods: {
        startWizard(choice) {
            if (choice) {
                this.showWizard = true
                this.characterLoaded = false
                this.showMenuButton = false
                this.currentStep.count = 1
                this.currentStep.progress = 10
                this.currentStep.description = "Basic Information"
                window.location.href = '#/character/charactermain'
            }
            else {
                this.showWizard = false
                this.showMenuButton = true
                window.location.href = '#/character/creatormenu'
            }
        },
        stopWizard() {
            this.showWizard = false
            this.showMenuButton = false
            this.currentStep.count = 0
            this.currentStep.progress = 0
            this.currentStep.description = "Not started"
        },
        advanceWizard() {
            this.currentStep.count = this.currentStep.count + 1
            this.currentStep.progress = this.currentStep.progress + 15

            const nextStep = this.steps[this.currentStep.count]

            this.currentStep.description = nextStep.description
            window.location.href = `#/character/${nextStep.url}`
        },
        reverseWizard() {
            const nextStep = this.steps[this.currentStep.count - 1]

            this.currentStep.progress = this.currentStep.progress - 15

            this.currentStep.description = nextStep.description
            window.location.href = `#/character/${nextStep.url}`
            this.currentStep.count = this.currentStep.count - 1
        },
        returnToCreatorMenu() {
            window.location.href = '#/character/creatormenu'
        }
    },
    components: {
        'progress-bar': Progress
    },
    data: function () {
        return {
            steps: [
                { description: "Not started", url: 'none' },
                { description: "Basic Information", url: 'charactermain' },
                { description: "Game State", url: 'gamestate'},
                { description: "Player Stats", url: 'statspage' },
                { description: "Player Attacks", url: 'attacks' },
                { description: "Personality", url: 'personality' },
                { description: "Features", url: 'features' },
                { description: "Equipment", url: 'equipment' }
            ],
            showWizard: false,
            isLoading: false,
            characterLoaded: false,
            currentStep: { count: 0, description: "Not creating a character.", progress: 10 },
            showMenu: false,
            showMenuButton: false,
            character: {
                charBio: {
                    class: "",
                    level: 1,
                    background: "",
                    playerName: "",
                    faction: "",
                    race: "",
                    alignment: "",
                    experiencePoints: 0,
                    DCINumber: 0,
                    characterName: ""
                },
                uuid: "",
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
                    acrobatics: { proficient: false, plus: 0, augmentedBy: "dexterity" },
                    animalHandling: { proficient: false, plus: 0, augmentedBy: "wisdom" },
                    arcana: { proficient: false, plus: 0, augmentedBy: "int" },
                    athletics: { proficient: false, plus: 0, augmentedBy: "strength" },
                    deception: { proficient: false, plus: 0, augmentedBy: "charisma" },
                    history: { proficient: false, plus: 0, augmentedBy: "intelligence" },
                    insight: { proficient: false, plus: 0, augmentedBy: "wisdom" },
                    intimidation: { proficient: false, plus: 0, augmentedBy: "charisma" },
                    investigation: { proficient: false, plus: 0, augmentedBy: "intelligence" },
                    medicine: { proficient: false, plus: 0, augmentedBy: "wisdom" },
                    nature: { proficient: false, plus: 0, augmentedBy: "intelligence" },
                    perception: { proficient: false, plus: 0, augmentedBy: "wisdom" },
                    performance: { proficient: false, plus: 0, augmentedBy: "charisma" },
                    persuasion: { proficient: false, plus: 0, augmentedBy: "charisma" },
                    religion: { proficient: false, plus: 0, augmentedBy: "intelligence" },
                    sleightOfHand: { proficient: false, plus: 0, augmentedBy: "dexterity" },
                    stealth: { proficient: false, plus: 0, augmentedBy: "dexterity" },
                    survival: { proficient: false, plus: 0, augmentedBy: "wisdom" }
                },
                baseStats: {
                    strength: { base: 0, modifier: 0, label: "Strength" },
                    dexterity: { base: 0, modifier: 0, label: "Dexterity" },
                    constitution: { base: 0, modifier: 0, label: "Constitution" },
                    intelligence: { base: 0, modifier: 0, label: "Intelligence" },
                    wisdom: { base: 0, modifier: 0, label: "Wisdom" },
                    charisma: { base: 0, modifier: 0, label: "Charisma" }
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
                            name: "Fireball",
                            attackBonus: 4,
                            damageType: "Fire"
                        },
                        {
                            name: "Frostbolt",
                            attackBonus: 4,
                            damageType: "Frost"
                        }
                    ],
                    list: [
                        "Spell1",
                        "Spell2",
                        "Spell3"
                    ]
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
}

export { Character }
