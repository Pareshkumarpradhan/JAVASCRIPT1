let myjokes = [
    {
        "category": "Programming",
        "type": "single",
        "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 0,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Today I learned that changing random stuff until your program works is \"hacky\" and a \"bad coding practice\" but if you do it fast enough it's \"Machine Learning\" and pays 4x your current salary.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 1,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 2,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 3,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 4,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 5,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "I'd tell you a joke about NAT but I would have to translate.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 6,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 7,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 8,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 9,
        "safe": true,
        "lang": "en"
    },

    {
        "category": "Programming",
        "type": "single",
        "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 10,
        "safe": true,
        "lang": "en"
    }
   
]

let index = Math.floor(Math.random() * (myjokes.length -1) )
console.log(index)
joke.innerHTML = myjokes[index].joke
