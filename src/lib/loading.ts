const loading_messages = [
    'The Funnies',
    'Reticulating splines...',
    'Generating witty dialog...',
    'Swapping time and space...',
    'Spinning violently around the y-axis...',
    'Tokenizing real life...',
    'Bending the spoon...',
    'Filtering morale...',
    "Don't think of purple hippos...",
    'We need a new fuse...',
    'Have a good day.',
    'Upgrading Windows, your PC will restart several times. Sit back and relax.',
    '640K ought to be enough for anybody',
    'The architects are still drafting',
    'The bits are breeding',
    "We're building the buildings as fast as we can",
    'Would you prefer chicken, steak, or tofu?',
    '(Pay no attention to the man behind the curtain)',
    '...and enjoy the elevator music...',
    'Please wait while the little elves draw your map',
    "Don't worry - a few bits tried to escape, but we caught them",
    'Would you like fries with that?',
    'Checking the gravitational constant in your locale...',
    'Go ahead -- hold your breath!',
    "...at least you're not on hold...",
    'Hum something loud while others stare',
    "You're not in Kansas any more",
    'The server is powered by a lemon and two electrodes.',
    'Please wait while a larger software vendor in Seattle takes over the world',
    "We're testing your patience",
    'As if you had any other choice',
    'Follow the white rabbit',
    "Why don't you order a sandwich?",
    'While the satellite moves into position',
    'keep calm and npm install',
    'The bits are flowing slowly today',
    "Dig on the 'X' for buried treasure... ARRR!",
    "It's still faster than you could draw it",
    "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
    'I should have had a V8 this morning.',
    'My other loading screen is much faster.',
    "Testing on Timmy... We're going to need another Timmy.",
    'Reconfoobling energymotron...',
    '(Insert quarter)',
    'Are we there yet?',
    'Have you lost weight?',
    'Just count to 10',
    'Why so serious?',
    "It's not you. It's me.",
    'Counting backwards from Infinity',
    "Don't panic...",
    'Embiggening Prototypes',
    'Do not run! We are your friends!',
    'Do you come here often?',
    "Warning: Don't set yourself on fire.",
    "We're making you a cookie.",
    'Creating time-loop inversion field',
    'Spinning the wheel of fortune...',
    'Loading the enchanted bunny...',
    'Computing chance of success',
    "I'm sorry Dave, I can't do that.",
    'Looking for exact change',
    'All your web browser are belong to us',
    'All I really need is a kilobit.',
    'I feel like im supposed to be loading something. . .',
    'What do you call 8 Hobbits? A Hobbyte.',
    'Should have used a compiled language...',
    'Is this Windows?',
    'Adjusting flux capacitor...',
    'Please wait until the sloth starts moving.',
    "Don't break your screen yet!",
    "I swear it's almost done.",
    "Let's take a mindfulness minute...",
    'Unicorns are at the end of this road, I promise.',
    'Listening for the sound of one hand clapping...',
    "Keeping all the 1's and removing all the 0's...",
    'Putting the icing on the cake. The cake is not a lie...',
    'Cleaning off the cobwebs...',
    "Making sure all the i's have dots...",
    'We are not liable for any broken screens as a result of waiting.',
    'We need more dilithium crystals',
    'Where did all the internets go',
    'Connecting Neurotoxin Storage Tank...',
    'Granting wishes...',
    "Time flies when you're having fun.",
    'Get some coffee and come back in ten minutes..',
    'Spinning the hamster…',
    '99 bottles of beer on the wall..',
    'Stay awhile and listen..',
    'Be careful not to step in the git-gui',
    'You shall not pass! yet..',
    'Load it and they will come',
    'Convincing AI not to turn evil..',
    'There is no spoon. Because we are not done loading it',
    'Your left thumb points to the right and your right thumb points to the left.',
    'How did you get here?',
    'Wait, do you smell something burning?',
    'Computing the secret to life, the universe, and everything.',
    'When nothing is going right, go left!!...',
    "I love my job only when I'm on vacation...",
    "i'm not lazy, I'm just relaxed!!",
    'Never steal. The government hates competition....',
    'Why are they called apartments if they are all stuck together?',
    'Life is Short - Talk Fast!!!!',
    'Optimism - is a lack of information.....',
    'Save water and shower together',
    'Whenever I find the key to success, someone changes the lock.',
    "Sometimes I think war is God's way of teaching us geography.",
    "I've got problem for your solution…..",
    "Where there's a will, there's a relative.",
    'User: the word computer professionals use when they mean !!idiot!!',
    'Adults are just kids with money.',
    'I think I am, therefore, I am. I think.',
    'A kiss is like a fight, with mouths.',
    "You don't pay taxes—they take taxes.",
    'Coffee, Chocolate, Men. The richer the better!',
    'I am free of all prejudices. I hate everyone equally.',
    'git happens',
    'May the forks be with you',
    'A commit a day keeps the mobs away',
    "This is not a joke, it's a commit.",
    'Constructing additional pylons...',
    'We are not liable for any broken screens as a result of waiting.',
    'Hello IT, have you tried turning it off and on again?',
    'If you type Google into Google you can break the internet',
    'Well, this is embarrassing.',
    'What is the airspeed velocity of an unladen swallow?',
    'Hello, IT... Have you tried forcing an unexpected reboot?',
    'Space is invisible mind dust, and stars are but wishes.',
    "Didn't know paint dried so quickly.",
    'Everything sounds the same',
    "I'm going to walk the dog",
    "I didn't choose the engineering life. The engineering life chose me.",
    'Dividing by zero...',
    'Spawn more Overlord!',
    "If I'm not back in five minutes, just wait longer.",
    "Some days, you just can't get rid of a bug!",
    "We're going to need a bigger boat.",
    'Chuck Norris never git push. The repo pulls before.',
    'Web developers do it with &lt;style&gt;.',
    'I need to git pull --my-life-together',
    'Java developers never RIP. They just get Garbage Collected.',
    'Simulating traveling salesman...',
    'Proving P=NP...',
    'Entangling superstrings...',
    'Twiddling thumbs...',
    'Searching for plot device...',
    'Trying to sort in O(n)...',
    'Laughing at your pictures-i mean, loading...',
    'Sending data to NS-i mean, our servers.',
    'Looking for sense of humour, please hold on.',
    'Please wait while the intern refills his coffee.',
    'A different error message? Finally, some progress!',
    'Hold on while we wrap up our git together...sorry',
    'Please hold on as we reheat our coffee',
    'Kindly hold on as we convert this bug to a feature...',
    'Kindly hold on as our intern quits vim...',
    'Winter is coming...',
    'Installing dependencies',
    'Switching to the latest JS framework...',
    'Distracted by cat gifs',
    'Finding someone to hold my beer',
    'BRB, working on my side project',
    '@todo Insert witty loading message',
    "Let's hope it's worth the wait",
    'Aw, snap! Not..',
    'Ordering 1s and 0s...',
    'Updating dependencies...',
    "Whatever you do, don't look behind you...",
    'Please wait... Consulting the manual...',
    'Loading funny message...',
    'Feel free to spin in your chair',
    'What the what?',
    "What's under there?",
    'Go ahead, hold your breath and do an ironman plank till loading complete',
    'Bored of slow loading spinner, buy more RAM!',
    "Help, I'm trapped in a loader!",
    'What is the difference between a hippo and a zippo? One is really heavy, the other is a little lighter',
    "Chuck Norris doesn't wear a watch. HE decides what time it is.",
    'Downloading more RAM..',
    "Hiding all ;'s in your code",
    'Alt-F4 speeds things up.',
    'Initializing the initializer...',
    'When was the last time you dusted around here?',
    'Optimizing the optimizer...',
    'Last call for the data bus! All aboard!',
    'Running swag sticker detection...',
    'When nothing is going right, go left!',
    "Never let a computer know you're in a hurry.",
    'A computer will do what you tell it to do, but that may be much different from what you had in mind.',
    "Some things man was never meant to know. For everything else, there's Google.",
    "Linux is user-friendly. It's just very selective about who its friends are.",
    'Shovelling coal into the server',
    'Pushing pixels...',
    'How about this weather, eh?',
    'Building a wall...',
    'Everything in this universe is either a potato or not a potato',
    'The severity of your issue is always lower than you expected.',
    'Updating Updater...',
    'Downloading Downloader...',
    'Debugging Debugger...',
    'Reading Terms and Conditions for you.',
    'Digested cookies being baked again.',
    'Live long and prosper.',
    "There is no cow level, but there's a goat one!",
    'Running with scissors...',
    'Definitely not a virus...',
    'You may call me Alice.',
    'All you had to do is to commit the damn funnies, CJ!',
    'You seem like a nice person...',
    'Work, work...',
    'Patience! This is difficult, you know...',
    'Discovering new ways of making you wait...',
    'Your time is very important to us. Please wait while we ignore you...',
    'Time flies like an arrow; fruit flies like a banana',
    'Two men walked into a bar; the third ducked...',
    'Sooooo... Have you seen my vacation photos yet?',
    "Sorry we are busy catching em' all, we're done soon",
    'TODO: Insert elevator music',
    'Still faster than Windows update',
    'Composer hack: Waiting for reqs to be fetched is less frustrating if you add -vvv to your command.',
    'Obfuscating quantum entanglement',
    "Knock, Knock! Who's there? Ken Ken who? Ken I come in? It's cold out here.",
    "If at first you don't succeed, call it version 1.0.",
    "I love pressing F5. It's so refreshing.",
    'CAPS LOCK - Preventing Login Since 1980.',
    "Chuck Norris doesn't scroll with a mouse. He uses a lion.",
    'Chuck Norris can delete the Recycling Bin.',
    "Chuck Norris didn't survive the first night in Minecraft, the first night survived Chuck Norris.",
    'Chuck Norris could play cd-based games on his Nintendo 64.',
    'Why did the computer get cold? Because it forgot to close windows.',
    "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris.",
    'Preventing robot uprising ...',
    'Loading Error...',
    'PC LOAD LETTER...',
    'Waiting for something to load sucks...',
    "- What are you working? - I'm a programmer. - More precisely? - At home, I change TV programs.",
    'Oh, are you waiting for me?',
    'Do you smell carrots? -a snowman',
    'That job was a piece of cake',
    'Oh you are an eager beaver',
    'He makes a monkey business',
    'The Game - you just lost it.',
    'Still Faster than Windows update',
    'When nothing is going right, Go left!!...',
    "I love my job only when I'm on vacation...",
    "i'm not lazy, I'm just relaxed!!",
    'Never steal. The government hates competition....',
    'Why are they called apartments if they are all stuck together?',
    'Life is Short - Talk Fast!!!!',
    'Optimism - is a lack of information.....',
    'Save water and shower together',
    'Whenever I find the key to success, someone changes the lock.',
    "Sometimes I think war is God's way of teaching us geography.",
    "I've got problem for your solution…..",
    "Where there's a will, there's a relative.",
    'Adults are just kids with money.',
    'I think I am, therefore, I am. I think.',
    "You don't pay taxes—they take taxes.",
    'Coffee, Chocolate, Men. The richer the better!',
    'I am free of all prejudices. I hate everyone equally.',
    'git happens',
    'May the forks be with you',
    'A commit a day keeps the mobs away',
    "This is not a joke, it's a commit.",
    "Didn't know paint dried so quickly.",
    'Everything sounds the same',
    "I'm going to walk the dog",
    "I didn't choose the engineering life. The engineering life chose me.",
    'Spinning up more hamster wheels.',
];

export function get_random_loading_message(): string {
    return loading_messages[Math.floor(Math.random() * loading_messages.length)];
}
